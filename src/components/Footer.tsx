import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="PT CANELA BALI FURNITURE"
                className="h-12 w-auto"
              />
              <div>
                <span className="text-amber-50 font-bold text-xl">PT CANELA</span>
                <span className="text-amber-200 font-semibold text-xl block -mt-1">BALI FURNITURE</span>
              </div>
            </div>
            <p className="text-amber-200 mb-4 max-w-md">
              Perdagangan eceran furnitur berkualitas tinggi dengan desain elegan dan material terbaik dari Bali.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-amber-200 hover:text-amber-50 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-amber-200 hover:text-amber-50 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-amber-200 hover:text-amber-50 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-50 font-semibold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-50 font-semibold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-amber-200 mt-0.5 flex-shrink-0" />
                <span className="text-amber-200 text-sm">
                  Jalan Raya Basangkasa Gang Badung 89, Desa/Kelurahan Seminyak, Kec. Kuta, Kab. Badung, Provinsi Bali
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <span className="text-amber-200 text-sm">082382466214</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <span className="text-amber-200 text-sm">info@canelabalifurniture.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2024 PT CANELA BALI FURNITURE. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-amber-200 hover:text-amber-50 text-sm transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="text-amber-200 hover:text-amber-50 text-sm transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;