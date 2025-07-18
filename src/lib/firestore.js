// iniwebumkm/src/lib/firestore.js
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  limit,
  startAfter,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase.js";

// Collection reference
const BERITA_COLLECTION = "berita";

/**
 * Get all berita with optional filtering and pagination
 */
export async function getBerita(options = {}) {
  try {
    const {
      kategori = null,
      limit: queryLimit = 50,
      lastDoc = null,
      status = "published",
    } = options;

    let q = collection(db, BERITA_COLLECTION);

    // Build query
    const constraints = [];

    // Filter by status (published/draft)
    if (status) {
      constraints.push(where("status", "==", status));
    }

    // Filter by category
    if (kategori && kategori !== "all") {
      constraints.push(where("kategori", "==", kategori));
    }

    // Order by date (newest first)
    constraints.push(orderBy("tanggal", "desc"));

    // Limit results
    if (queryLimit) {
      constraints.push(limit(queryLimit));
    }

    // Pagination
    if (lastDoc) {
      constraints.push(startAfter(lastDoc));
    }

    q = query(q, ...constraints);

    const querySnapshot = await getDocs(q);
    const berita = [];

    querySnapshot.forEach((doc) => {
      berita.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return berita;
  } catch (error) {
    console.error("Error getting berita:", error);
    throw error;
  }
}

/**
 * Get latest berita for homepage
 */
export async function getLatestBerita(count = 6) {
  return getBerita({ limit: count, status: "published" });
}

/**
 * Get featured berita (for homepage)
 */
export async function getFeaturedBerita(count = 3) {
  try {
    const q = query(
      collection(db, BERITA_COLLECTION),
      where("status", "==", "published"),
      where("featured", "==", true),
      orderBy("tanggal", "desc"),
      limit(count),
    );

    const querySnapshot = await getDocs(q);
    const berita = [];

    querySnapshot.forEach((doc) => {
      berita.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return berita;
  } catch (error) {
    console.error("Error getting featured berita:", error);
    // Fallback to regular latest berita
    return getBerita({ limit: count });
  }
}

// Export other functions we created earlier
export async function createBerita(beritaData) {
  try {
    const data = {
      ...beritaData,
      tanggal: serverTimestamp(),
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
      status: beritaData.status || "published",
    };

    const docRef = await addDoc(collection(db, BERITA_COLLECTION), data);
    return docRef.id;
  } catch (error) {
    console.error("Error creating berita:", error);
    throw error;
  }
}
