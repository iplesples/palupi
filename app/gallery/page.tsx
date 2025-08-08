import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const galleryPhotos: { id: number; url: string; alt: string }[] = [
  { id: 1, url: '/images/gallery/photo1.jpg', alt: 'Perjalanan ke Puncak Bersama Tim' },
  { id: 2, url: '/images/gallery/photo2.jpg', alt: 'Makan Siang di Restoran Pinggir Danau' },
  { id: 3, url: '/images/gallery/photo3.jpg', alt: 'Foto Bersama di Depan Candi' },
  { id: 4, url: '/images/gallery/photo4.jpg', alt: 'Tim Merayakan Ulang Tahun Rekan' },
  { id: 5, url: '/images/gallery/photo5.jpg', alt: 'Pemandangan dari Ketinggian' },
  { id: 6, url: '/images/gallery/photo6.jpg', alt: 'Foto bersama di dalam mobil' },
];

const Gallery: React.FC = () => {
  return (
    <>
      <Head>
        <title>Galeri Kenangan - Palupi&apos;s Rental</title>
        <meta name="description" content="Kumpulan foto-foto perjalanan dan kenangan bersama klien kami." />
      </Head>

      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans">
        
        {/* Header (Bisa dibuat komponen terpisah) */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#003087]">
              Palupi&apos;s Rental
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-[#0070BA] transition-colors font-medium">Beranda</Link>
              <Link href="/gallery" className="text-[#0070BA] font-bold">Galeri Kenangan</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#0070BA] transition-colors font-medium">Hubungi Kami</Link>
            </nav>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="bg-[#0070BA] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#003087] transition-colors">
              Pesan via WA
            </a>
          </div>
        </header>

        {/* Hero Section Halaman Galeri */}
        <section className="py-20 px-6 bg-[#f0f4f8] text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003087]">Galeri Kenangan</h1>
            <p className="text-lg text-gray-600">
              Dokumentasi perjalanan seru dan momen tak terlupakan bersama kami.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryPhotos.map((photo) => (
                <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    width={500}
                    height={350}
                    layout="responsive"
                    className="transform transition-transform duration-300 group-hover:scale-110 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold text-center px-4">{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer (Bisa dibuat komponen terpisah) */}
        <footer className="bg-gray-100 text-gray-600 py-8 px-6 mt-auto">
          <div className="container mx-auto text-center border-t border-gray-200 pt-6">
            <p>&copy; 2025 Palupi&apos;s Rental. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Gallery;