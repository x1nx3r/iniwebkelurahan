// scripts/uploadUMKMData.js
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, "../.env") });

// Validate environment variables
const requiredEnvVars = [
  "NEXT_PUBLIC_FIREBASE_API_KEY",
  "NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN",
  "NEXT_PUBLIC_FIREBASE_PROJECT_ID",
  "NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET",
  "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
  "NEXT_PUBLIC_FIREBASE_APP_ID",
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Missing environment variable: ${envVar}`);
    process.exit(1);
  }
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("🔧 Initializing Firebase...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("✅ Firebase initialized");

// Load UMKM data
const umkmDataPath = path.join(__dirname, "../src/data/umkm.json");
let umkmData;

try {
  const fileContent = readFileSync(umkmDataPath, "utf8");
  umkmData = JSON.parse(fileContent);
  console.log(`📁 Successfully loaded UMKM data from ${umkmDataPath}`);
} catch (error) {
  console.error(
    `❌ Error loading UMKM data from ${umkmDataPath}:`,
    error.message,
  );
  process.exit(1);
}

async function uploadUMKMData() {
  console.log("🌱 Starting to upload UMKM data...");
  console.log(`📊 Total UMKM: ${umkmData.umkm.length}`);

  try {
    for (let i = 0; i < umkmData.umkm.length; i++) {
      const umkm = umkmData.umkm[i];

      // Create clean data object
      const data = {
        id: umkm.id,
        nama: umkm.nama,
        pemilik: umkm.pemilik,
        deskripsi: umkm.deskripsi,
        alamat: umkm.alamat,
        telefon: umkm.telefon,
        sosialMedia: umkm.sosialMedia,
        slug: umkm.slug,

        // Add status and additional fields
        status: "active",
        featured: false,
        views: 0,

        // Add timestamps
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),

        // Optional fields (if they exist in your data)
        ...(umkm.foto && { foto: umkm.foto }),
        ...(umkm.kategori && { kategori: umkm.kategori }),
        ...(umkm.jam_operasional && { jam_operasional: umkm.jam_operasional }),
        ...(umkm.deskripsi_lengkap && {
          deskripsi_lengkap: umkm.deskripsi_lengkap,
        }),
        ...(umkm.produk_layanan && { produk_layanan: umkm.produk_layanan }),
      };

      console.log(`🏪 Adding: ${umkm.nama} (${umkm.slug})`);

      // Use slug as document ID for SEO-friendly URLs
      const docRef = doc(db, "umkm", umkm.slug);
      await setDoc(docRef, data);

      console.log(`✅ Successfully added: ${umkm.nama}`);

      // Small delay to avoid overwhelming Firestore
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    console.log("🎉 All UMKM data uploaded successfully!");
    console.log("🔗 Check your Firebase console to see the data");
    console.log(`📝 Collection: umkm`);
    console.log(`📄 Documents: ${umkmData.umkm.length}`);
    console.log(
      `🔗 Document IDs are based on slug field for SEO-friendly URLs`,
    );
  } catch (error) {
    console.error("❌ Error uploading UMKM data:", error);
    console.error("Error details:", error.message);
  }

  process.exit(0);
}

uploadUMKMData();
