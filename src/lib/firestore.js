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

// Collection reference for UMKM
const UMKM_COLLECTION = "umkm";

/**
 * Get all UMKM with optional filtering and pagination
 */
export async function getUMKM(options = {}) {
  try {
    const {
      limit: queryLimit = 50,
      lastDoc = null,
      status = "active",
      featured = null,
      searchTerm = null,
    } = options;

    let q = collection(db, UMKM_COLLECTION);
    const constraints = [];

    // Filter by status
    if (status) {
      constraints.push(where("status", "==", status));
    }

    // Filter by featured
    if (featured !== null) {
      constraints.push(where("featured", "==", featured));
    }

    // Order by name for consistent pagination
    constraints.push(orderBy("nama"));

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
    const umkm = [];

    querySnapshot.forEach((doc) => {
      umkm.push({
        id: doc.id,
        ...doc.data(),
        _doc: doc, // Keep reference for pagination
      });
    });

    // Client-side search if searchTerm is provided
    // (Firestore doesn't have great full-text search built-in)
    if (searchTerm && searchTerm.trim()) {
      const filtered = umkm.filter(
        (item) =>
          item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.pemilik.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.alamat.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      return filtered;
    }

    return umkm;
  } catch (error) {
    console.error("Error getting UMKM:", error);
    throw error;
  }
}

/**
 * Get UMKM by slug/ID
 */
export async function getUMKMBySlug(slug) {
  try {
    const docRef = doc(db, UMKM_COLLECTION, slug);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting UMKM by slug:", error);
    throw error;
  }
}

/**
 * Get featured UMKM for homepage
 */
export async function getFeaturedUMKM(count = 6) {
  try {
    const q = query(
      collection(db, UMKM_COLLECTION),
      where("status", "==", "active"),
      where("featured", "==", true),
      orderBy("nama"),
      limit(count),
    );

    const querySnapshot = await getDocs(q);
    const umkm = [];

    querySnapshot.forEach((doc) => {
      umkm.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return umkm;
  } catch (error) {
    console.error("Error getting featured UMKM:", error);
    // Fallback to regular UMKM
    return getUMKM({ limit: count });
  }
}

/**
 * Search UMKM (client-side filtering for better UX)
 */
export async function searchUMKM(searchTerm) {
  try {
    // Get all active UMKM and filter client-side
    const allUMKM = await getUMKM({ limit: 100 }); // Adjust limit as needed

    if (!searchTerm || !searchTerm.trim()) {
      return allUMKM;
    }

    const term = searchTerm.toLowerCase();
    return allUMKM.filter(
      (umkm) =>
        umkm.nama.toLowerCase().includes(term) ||
        umkm.pemilik.toLowerCase().includes(term) ||
        umkm.deskripsi.toLowerCase().includes(term) ||
        umkm.alamat.toLowerCase().includes(term),
    );
  } catch (error) {
    console.error("Error searching UMKM:", error);
    throw error;
  }
}

/**
 * Get paginated UMKM
 */
export async function getPaginatedUMKM(pageSize = 9, lastDoc = null) {
  try {
    const umkm = await getUMKM({
      limit: pageSize,
      lastDoc: lastDoc,
    });

    return {
      umkm: umkm.map((item) => {
        const { _doc, ...rest } = item;
        return rest;
      }),
      lastDoc: umkm.length > 0 ? umkm[umkm.length - 1]._doc : null,
      hasMore: umkm.length === pageSize,
    };
  } catch (error) {
    console.error("Error getting paginated UMKM:", error);
    throw error;
  }
}

/**
 * Increment UMKM view count
 */
export async function incrementUMKMViews(slug) {
  try {
    const docRef = doc(db, UMKM_COLLECTION, slug);
    await updateDoc(docRef, {
      views: serverTimestamp(), // You might want to use increment instead
      lastViewed: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error incrementing UMKM views:", error);
    // Don't throw error as this is not critical
  }
}

/**
 * Create new UMKM (for admin use)
 */
export async function createUMKM(umkmData) {
  try {
    const data = {
      ...umkmData,
      status: umkmData.status || "active",
      featured: umkmData.featured || false,
      views: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, UMKM_COLLECTION), data);
    return docRef.id;
  } catch (error) {
    console.error("Error creating UMKM:", error);
    throw error;
  }
}

/**
 * Update UMKM
 */
export async function updateUMKM(id, umkmData) {
  try {
    const docRef = doc(db, UMKM_COLLECTION, id);
    await updateDoc(docRef, {
      ...umkmData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating UMKM:", error);
    throw error;
  }
}
