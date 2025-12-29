'use client';

import Layout from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Kebijakan Privasi PT CANELA BALI FURNITURE - Perlindungan data pribadi Anda adalah prioritas kami
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-amber max-w-none">
            <div className="space-y-8 text-amber-700">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Kebijakan Privasi PT CANELA BALI FURNITURE
                </h2>
                <p className="text-lg leading-relaxed">
                  Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">1. Pendahuluan</h3>
                <p className="mb-4">
                  Selamat datang di PT CANELA BALI FURNITURE. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan website dan layanan kami.
                </p>
                <p>
                  Dengan menggunakan website PT CANELA BALI FURNITURE, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">2. Informasi yang Kami Kumpulkan</h3>
                <p className="mb-4">Kami dapat mengumpulkan jenis-jenis informasi berikut:</p>
                
                <h4 className="text-xl font-semibold text-amber-800 mb-2">2.1 Informasi Pribadi</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran (diproses oleh pihak ketiga yang terpercaya)</li>
                </ul>

                <h4 className="text-xl font-semibold text-amber-800 mb-2">2.2 Informasi Teknis</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Informasi perangkat</li>
                  <li>Cookies dan data tracking</li>
                  <li>Halaman yang dikunjungi dan waktu kunjungan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">3. Cara Kami Menggunakan Informasi Anda</h3>
                <p className="mb-4">Kami menggunakan informasi yang kami kumpulkan untuk:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memproses dan menyelesaikan pesanan Anda</li>
                  <li>Memberikan layanan pelanggan yang lebih baik</li>
                  <li>Mengirimkan informasi produk dan penawaran khusus</li>
                  <li>Meningkatkan website dan pengalaman pengguna</li>
                  <li>Memproses pembayaran dan transaksi</li>
                  <li>Mengirimkan konfirmasi pesanan dan update pengiriman</li>
                  <li>Merespons pertanyaan dan permintaan Anda</li>
                  <li>Melakukan analisis pasar dan penelitian</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">4. Berbagi Informasi dengan Pihak Ketiga</h3>
                <p className="mb-4">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda dengan pihak ketiga untuk keperluan pemasaran. Namun, kami dapat berbagi informasi dalam kondisi berikut:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dengan penyedia layanan pembayaran yang terpercaya</li>
                  <li>Dengan jasa pengiriman untuk pengiriman produk</li>
                  <li>Dengan mitra bisnis yang membantu kami menyediakan layanan</li>
                  <li>Jika diwajibkan oleh hukum atau peraturan yang berlaku</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan PT CANELA BALI FURNITURE atau pelanggan kami</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">5. Keamanan Data</h3>
                <p className="mb-4">
                  PT CANELA BALI FURNITURE berkomitmen untuk melindungi keamanan data pribadi Anda. Kami telah menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses tidak sah, penggunaan yang tidak tepat, atau perubahan yang tidak diizinkan.
                </p>
                <p>
                  Langkah-langkah keamanan yang kami terapkan meliputi enkripsi data, firewall, sistem deteksi intrusi, dan pembatasan akses hanya untuk personil yang berwenang.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">6. Cookies</h3>
                <p className="mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil yang disimpan di browser Anda. Kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi konten</li>
                  <li>Menyimpan item di keranjang belanja</li>
                </ul>
                <p className="mt-4">
                  Anda dapat mengatur browser untuk menolak cookies, namun ini dapat mempengaruhi fungsionalitas website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">7. Hak Anda sebagai Pengguna</h3>
                <p className="mb-4">Sebagai pengguna, Anda memiliki hak untuk:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Membatasi pemrosesan data pribadi Anda</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">8. Retensi Data</h3>
                <p>
                  Kami akan menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, kecuali diwajibkan oleh hukum untuk menyimpannya lebih lama. Setelah periode retensi berakhir, kami akan menghapus atau menganonimkan data Anda.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">9. Perubahan Kebijakan Privasi</h3>
                <p>
                  PT CANELA BALI FURNITURE dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email. Kami menyarankan Anda untuk secara berkala meninjau kebijakan ini.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">10. Kontak Kami</h3>
                <p className="mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara kami menangani data pribadi Anda, silakan hubungi kami:
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>PT CANELA BALI FURNITURE</strong></p>
                  <p className="mb-2">Jalan Raya Basangkasa Gang Badung 89, Seminyak, Bali</p>
                  <p className="mb-2">Telepon: 082382466214</p>
                  <p>Email: privacy@canelabalifurniture.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">11. Hukum yang Berlaku</h3>
                <p>
                  Kebijakan Privasi ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang timbul dari kebijakan ini akan diselesaikan melalui perundingan baik-baik atau melalui pengadilan yang berwenang di Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}