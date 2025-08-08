// app/page.tsx

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Asumsi: Heroicons sudah terinstal
import {
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  MapPinIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/solid';

const whatsappNumber: string = "6285727244126"; // Ganti dengan nomor WhatsApp Ibu Palupi

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Innova Palupi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Sewa mobil Toyota Innova pribadi plus sopir. Khusus untuk perjalanan nyaman dan aman." />
        <meta name="theme-color" content="#000000" />
      </Head>

      <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans">

        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#003087]">
              Innova Palupi
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-[#0070BA] transition-colors font-medium">Beranda</Link>
              <Link href="/gallery" className="text-gray-600 hover:text-[#0070BA] transition-colors font-medium">Galeri</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#0070BA] transition-colors font-medium">Tentang saya</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-[#0070BA] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#003087] transition-colors">
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 inline-block mr-2" /> Pesan via WA
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white text-gray-800 py-24 px-6 md:px-12 flex items-center">
          <div className="container mx-auto text-center md:text-left md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                Ayo bolo jalan jalan bareng Innova Palupi
              </h1>
              <p className="text-lg md:text-xl font-light mb-8">
                Layanan sewa mobil Toyota Innova pribadi, lengkap dengan sopir yang ramah dan berpengalaman.
              </p>
              <a href={`https://wa.me/${whatsappNumber}?text=Halo%20Ibu%20Palupi,%20saya%20tertarik%20untuk%20menyewa%20mobil%20Innova%20plus%20sopir.`} target="_blank" rel="noopener noreferrer" className="bg-[#0070BA] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#003087] transition-all inline-flex items-center space-x-2">
                <span>Pesan Sekarang</span>
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image 
              src="/images/innova.png"
              alt="Toyota Innova"
              width={600} // Sesuaikan dengan lebar gambar
              height={400} // Sesuaikan dengan tinggi gambar
              className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Kenapa pilih Innova Palupi?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <div className="bg-[#e7f5ff] text-[#0070BA] p-4 rounded-full mb-4">
                  <CheckBadgeIcon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sopir Berpengalaman</h3>
                <p className="text-gray-600 max-w-sm">Perjalanan Anda lebih menyenangkan bersama pak sopir yang ramah dan selalu memperhatikan kesehatan kendaraan untuk menjaga kenyamanan dan keamanan perjalanan kita</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#e7f5ff] text-[#0070BA] p-4 rounded-full mb-4">
                  <MapPinIcon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Tepat Waktu</h3>
                <p className="text-gray-600 max-w-sm">Kami berkomitmen untuk mengatur waktu agar perjalanan bisa sesuai dengan jadwal yang disepakati.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-[#e7f5ff] text-[#0070BA] p-4 rounded-full mb-4">
                  <ChatBubbleBottomCenterTextIcon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Komunikasi Personal</h3>
                <p className="text-gray-600 max-w-sm">Karena kita teman, dibikin enak aja. nego harga bisa langsung lewat WA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 py-8 px-6 mt-auto">
          <div className="container mx-auto text-center border-t border-gray-200 pt-6">
            <p>&copy; 2025 Innova Palupi All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;