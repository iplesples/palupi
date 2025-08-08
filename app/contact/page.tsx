import Head from 'next/head';
import Link from 'next/link';

// Asumsi: Heroicons sudah terinstal
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

const whatsappNumber: string = "6285713556321"; // Ganti dengan nomor WhatsApp Ibu Palupi

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Hubungi Kami - Palupi&apos;s Rental</title>
        <meta name="description" content="Hubungi Ibu Palupi untuk sewa mobil Innova plus sopir." />
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
              <Link href="/gallery" className="text-gray-600 hover:text-[#0070BA] transition-colors font-medium">Galeri Kenangan</Link>
              <Link href="/contact" className="text-[#0070BA] font-bold">Hubungi Kami</Link>
            </nav>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-[#0070BA] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#003087] transition-colors">
              Pesan via WA
            </a>
          </div>
        </header>

        {/* Hero Section Halaman Kontak */}
        <section className="py-20 px-6 bg-[#f0f4f8] text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003087]">Hubungi Kami</h1>
            <p className="text-lg text-gray-600">
              Tertarik untuk menyewa mobil? Hubungi saya langsung via WhatsApp untuk pemesanan dan detail lebih lanjut.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto text-center max-w-2xl">
            <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Ibu Palupi siap membantu!</h2>
              <p className="text-gray-600 mb-6">
                Untuk pertanyaan, negosiasi harga, atau pemesanan, silakan klik tombol di bawah ini.
              </p>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Halo%20Ibu%20Palupi,%20saya%20tertarik%20dengan%20layanan%20rental%20mobilnya.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#128C7E] transition-colors inline-flex items-center justify-center space-x-3"
              >
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
                <span>Chat via WhatsApp</span>
              </a>
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

export default Contact;