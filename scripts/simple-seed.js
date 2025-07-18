// scripts/simple-seed-with-images.js
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
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

// Updated articles with proper images
const articles = [
  {
    judul: "Pembukaan Pendaftaran Program Bantuan UMKM 2024",
    ringkasan:
      "Kelurahan Kemayoran membuka pendaftaran bantuan UMKM dengan total dana 500 juta rupiah untuk 100 UMKM lokal.",
    konten:
      "Kelurahan Kemayoran dengan bangga mengumumkan pembukaan pendaftaran Program Bantuan UMKM 2024. Total dana bantuan mencapai Rp 500.000.000 untuk 100 UMKM dengan bantuan per UMKM antara Rp 2.000.000 - Rp 10.000.000. Syarat: WNI berdomisili di Kemayoran, usaha berjalan minimal 6 bulan, belum pernah menerima bantuan serupa.",
    kategori: "pengumuman",
    status: "published",
    penulis: "Tim Kelurahan",
    tags: ["umkm", "bantuan", "ekonomi"],
    featured: true,
    gambar:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Program Bantuan UMKM Kelurahan Kemayoran",
    slug: "pembukaan-pendaftaran-program-bantuan-umkm-2024",
    priority: 9,
    view_count: 0,
    kontak:
      "Kantor Kelurahan Kemayoran\nJl. Kemayoran No. 123, Surabaya\nTelp: (031) 123-4567\nEmail: kemayoran@surabaya.go.id",
  },
  {
    judul: "Gotong Royong Bersih Lingkungan Setiap Minggu",
    ringkasan:
      "Kegiatan gotong royong pembersihan lingkungan dilaksanakan setiap hari Minggu pagi di seluruh RT/RW.",
    konten:
      "Dalam rangka mewujudkan lingkungan yang bersih dan sehat, Kelurahan Kemayoran mengadakan gotong royong setiap Minggu pukul 06:00-08:00 WIB. Kegiatan meliputi pembersihan jalan, saluran air, dan penataan taman. Partisipasi aktif warga sangat diharapkan untuk menciptakan lingkungan yang nyaman.",
    kategori: "kegiatan",
    status: "published",
    penulis: "Seksi Kebersihan",
    tags: ["gotong royong", "kebersihan", "lingkungan"],
    featured: false,
    gambar:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Kegiatan gotong royong pembersihan lingkungan",
    slug: "gotong-royong-bersih-lingkungan-setiap-minggu",
    lokasi: "Bergilir per RT/RW",
    pendaftaran: "Koordinasi dengan ketua RT/RW",
    priority: 7,
    view_count: 0,
  },
  {
    judul: "Peluncuran Website UMKM Kemayoran",
    ringkasan:
      "Website resmi UMKM Kemayoran diluncurkan untuk mempromosikan 50+ UMKM lokal dan mendukung digitalisasi.",
    konten:
      "Kelurahan Kemayoran meluncurkan website resmi UMKM yang menampilkan lebih dari 50 UMKM lokal. Website ini bertujuan mempromosikan produk UMKM, memudahkan masyarakat menemukan UMKM terdekat, dan mendukung ekonomi digital lokal. Fitur website meliputi direktori UMKM, galeri produk, dan informasi kontak.",
    kategori: "berita",
    status: "published",
    penulis: "Humas Kelurahan",
    tags: ["umkm", "website", "digitalisasi"],
    featured: true,
    gambar:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Peluncuran website UMKM Kemayoran",
    slug: "peluncuran-website-umkm-kemayoran",
    priority: 8,
    view_count: 0,
  },
  {
    judul: "Perubahan Jam Operasional Layanan Administrasi",
    ringkasan:
      "Mulai 1 Februari 2024, jam operasional layanan administrasi berubah: Senin-Kamis 08:00-15:00, Jumat 08:00-11:00 & 13:00-15:00.",
    konten:
      "Kantor Kelurahan Kemayoran menerapkan jam operasional baru mulai 1 Februari 2024. Senin-Kamis: 08:00-15:00, Jumat: 08:00-11:00 & 13:00-15:00, Sabtu: 08:00-12:00 (darurat). Layanan tersedia: KTP, KK, surat domisili, surat tidak mampu, izin usaha mikro. Perubahan ini untuk meningkatkan kualitas pelayanan.",
    kategori: "layanan",
    status: "published",
    penulis: "Kepala Seksi Pelayanan",
    tags: ["jam operasional", "layanan", "administrasi"],
    featured: false,
    gambar:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Layanan administrasi kelurahan",
    slug: "perubahan-jam-operasional-layanan",
    kontak:
      "Kantor Kelurahan Kemayoran\nJl. Kemayoran No. 123, Surabaya\nTelp: (031) 123-4567",
    priority: 6,
    view_count: 0,
  },
  {
    judul: "Festival Kuliner UMKM Kemayoran 2024",
    ringkasan:
      "Festival kuliner 10-12 Februari 2024 di lapangan Kemayoran, menampilkan 30+ UMKM kuliner dengan berbagai kegiatan menarik.",
    konten:
      "Festival Kuliner UMKM Kemayoran 2024 akan digelar 10-12 Februari 2024 di lapangan Kemayoran. Menampilkan 30+ UMKM kuliner dengan menu khas Surabaya seperti rawon, rujak cingur, lontong balap, dan tahu campur. Kegiatan: pameran kuliner, lomba makan kerupuk, demo masak, live music, dan doorprize. Gratis untuk umum!",
    kategori: "kegiatan",
    status: "published",
    penulis: "Panitia Festival",
    tags: ["festival", "kuliner", "umkm"],
    featured: true,
    gambar:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Festival kuliner UMKM Kemayoran",
    slug: "festival-kuliner-umkm-kemayoran-2024",
    lokasi: "Lapangan Kemayoran, Jl. Kemayoran Raya",
    pendaftaran: "Gratis untuk pengunjung",
    priority: 9,
    view_count: 0,
  },
  {
    judul: "Sosialisasi Program Kartu Surabaya Sehat",
    ringkasan:
      "Sosialisasi Program Kartu Surabaya Sehat untuk memberikan akses kesehatan gratis bagi masyarakat kurang mampu.",
    konten:
      "Dinas Kesehatan Kota Surabaya bekerja sama dengan Kelurahan Kemayoran mengadakan sosialisasi Program Kartu Surabaya Sehat. Program ini memberikan akses kesehatan gratis meliputi pemeriksaan di Puskesmas, obat-obatan, rujukan rumah sakit, dan vaksinasi. Syarat mudah: KTP, KK, dan surat keterangan tidak mampu dari RT/RW.",
    kategori: "kegiatan",
    status: "published",
    penulis: "Dinas Kesehatan Kota Surabaya",
    tags: ["kesehatan", "kartu sehat", "sosialisasi", "gratis"],
    featured: false,
    gambar:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Program Kartu Surabaya Sehat",
    slug: "sosialisasi-program-kartu-surabaya-sehat",
    lokasi: "Aula Kelurahan Kemayoran",
    pendaftaran:
      "Pendaftaran di tempat dengan membawa KTP, KK, dan surat keterangan tidak mampu",
    priority: 7,
    view_count: 0,
  },
  {
    judul: "Perbaikan Infrastruktur Jalan Gang Mawar Selesai",
    ringkasan:
      "Proyek perbaikan jalan dan infrastruktur di Gang Mawar telah selesai dengan anggaran 200 juta rupiah dari APBD Kota Surabaya.",
    konten:
      "Kelurahan Kemayoran mengumumkan penyelesaian proyek perbaikan infrastruktur di Gang Mawar. Perbaikan meliputi pengaspalan jalan 500 meter, perbaikan saluran air, pemasangan lampu LED, pembuatan trotoar, dan penataan area parkir. Total anggaran Rp 200 juta dari APBD Kota Surabaya. Terima kasih atas kesabaran warga selama pembangunan.",
    kategori: "berita",
    status: "published",
    penulis: "Seksi Pembangunan",
    tags: ["infrastruktur", "jalan", "pembangunan", "gang mawar"],
    featured: false,
    gambar:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Perbaikan infrastruktur jalan Gang Mawar",
    slug: "perbaikan-infrastruktur-jalan-gang-mawar-selesai",
    priority: 6,
    view_count: 0,
  },
  {
    judul: "Layanan Vaksinasi COVID-19 Booster Gratis",
    ringkasan:
      "Kelurahan Kemayoran menyediakan layanan vaksinasi booster COVID-19 gratis setiap Senin dan Rabu bekerjasama dengan Puskesmas.",
    konten:
      "Dalam upaya menjaga kesehatan masyarakat, Kelurahan Kemayoran bersama Puskesmas Kemayoran menyelenggarakan vaksinasi booster gratis. Jadwal: Senin & Rabu, 08:00-14:00 WIB, kapasitas 100 orang/hari. Syarat: sudah vaksin dosis 1 & 2, jarak minimal 6 bulan, kondisi sehat, bawa KTP dan kartu vaksin. Jenis vaksin: Pfizer, Moderna, AstraZeneca.",
    kategori: "layanan",
    status: "published",
    penulis: "Tim Kesehatan Kelurahan",
    tags: ["vaksinasi", "covid19", "kesehatan", "gratis"],
    featured: false,
    gambar:
      "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=800&h=600&fit=crop&q=80",
    gambar_alt: "Layanan vaksinasi COVID-19 booster",
    slug: "layanan-vaksinasi-covid19-booster-gratis",
    kontak:
      "Informasi: WhatsApp 081234567890\nBalai Kelurahan Kemayoran\nSenin & Rabu, 08:00-14:00 WIB",
    priority: 7,
    view_count: 0,
  },
];

async function seedData() {
  console.log("🌱 Starting to seed berita data with images...");
  console.log(`📊 Total articles: ${articles.length}`);

  try {
    for (let i = 0; i < articles.length; i++) {
      const article = articles[i];

      // Create clean data object
      const data = {
        judul: article.judul,
        ringkasan: article.ringkasan,
        konten: article.konten,
        kategori: article.kategori,
        status: article.status,
        penulis: article.penulis,
        tags: article.tags,
        featured: article.featured,
        slug: article.slug,
        priority: article.priority,
        view_count: article.view_count,
        gambar: article.gambar,
        gambar_alt: article.gambar_alt,

        // Add timestamps
        tanggal: Timestamp.now(),
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),

        // Optional fields
        ...(article.lokasi && { lokasi: article.lokasi }),
        ...(article.pendaftaran && { pendaftaran: article.pendaftaran }),
        ...(article.kontak && { kontak: article.kontak }),
      };

      console.log(`📰 Adding: ${article.judul}`);

      const docRef = await addDoc(collection(db, "berita"), data);
      console.log(`✅ Successfully added with ID: ${docRef.id}`);

      // Small delay
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log("🎉 All data with images seeded successfully!");
    console.log("🔗 Check your Firebase console to see the data");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    console.error("Error details:", error.message);
  }

  process.exit(0);
}

seedData();
