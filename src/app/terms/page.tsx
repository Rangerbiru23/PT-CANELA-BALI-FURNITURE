'use client';

import Layout from '@/components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Syarat dan Ketentuan Penggunaan Website PT CANELA BALI FURNITURE
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-amber max-w-none">
            <div className="space-y-8 text-amber-700">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-4">
                  Syarat & Ketentuan PT CANELA BALI FURNITURE
                </h2>
                <p className="text-lg leading-relaxed">
                  Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h3>
                <p className="mb-4">
                  Selamat datang di website PT CANELA BALI FURNITURE. Dengan mengakses dan menggunakan website ini, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak boleh menggunakan website kami.
                </p>
                <p>
                  PT CANELA BALI FURNITURE berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan efektif segera setelah diposting di website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">2. Informasi Perusahaan</h3>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Nama Perusahaan:</strong> PT CANELA BALI FURNITURE</p>
                  <p className="mb-2"><strong>Alamat:</strong> Jalan Raya Basangkasa Gang Badung 89, Desa/Kelurahan Seminyak, Kec. Kuta, Kab. Badung, Provinsi Bali</p>
                  <p className="mb-2"><strong>Telepon:</strong> 082382466214</p>
                  <p><strong>Email:</strong> info@canelabalifurniture.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">3. Deskripsi Layanan</h3>
                <p className="mb-4">
                  PT CANELA BALI FURNITURE adalah perusahaan perdagangan eceran furnitur yang menyediakan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Penjualan furnitur berkualitas tinggi</li>
                  <li>Konsultasi desain interior</li>
                  <li>Layanan pengiriman dan instalasi</li>
                  <li>Pesanan kustom furnitur</li>
                  <li>Layanan purnajual dan garansi</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">4. Pemesanan dan Pembayaran</h3>
                
                <h4 className="text-xl font-semibold text-amber-800 mb-2">4.1 Proses Pemesanan</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Pemesanan dapat dilakukan melalui website, telepon, atau langsung di showroom</li>
                  <li>Setiap pemesanan memerlukan informasi yang lengkap dan akurat</li>
                  <li>Kami akan mengirimkan konfirmasi pemesanan melalui email atau WhatsApp</li>
                  <li>Pemesanan dianggap sah setelah pembayaran down payment diterima</li>
                </ul>

                <h4 className="text-xl font-semibold text-amber-800 mb-2">4.2 Metode Pembayaran</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Transfer bank ke rekening PT CANELA BALI FURNITURE</li>
                  <li>Pembayaran tunai di showroom</li>
                  <li>Pembayaran kartu kredit/debit (di showroom)</li>
                  <li>Pembayaran cicilan (syarat dan ketentuan berlaku)</li>
                </ul>

                <h4 className="text-xl font-semibold text-amber-800 mb-2">4.3 Jadwal Pembayaran</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Down Payment minimal 50% dari total harga</li>
                  <li>Pelunasan sebelum atau saat pengiriman</li>
                  <li>Pesanan kustom memerlukan down payment 70%</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">5. Pengiriman dan Instalasi</h3>
                
                <h4 className="text-xl font-semibold text-amber-800 mb-2">5.1 Area Pengiriman</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Pengiriman gratis untuk area Seminyak dan sekitarnya</li>
                  <li>Biaya pengiriman berlaku untuk area di luar jangkauan kami</li>
                  <li>Pengiriman ke luar Bali dapat diatur dengan biaya tambahan</li>
                </ul>

                <h4 className="text-xl font-semibold text-amber-800 mb-2">5.2 Waktu Pengiriman</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Produk ready stock: 3-7 hari kerja</li>
                  <li>Produk pre-order: 2-8 minggu tergantung ketersediaan</li>
                  <li>Pesanan kustom: 4-12 minggu tergantung kompleksitas</li>
                </ul>

                <h4 className="text-xl font-semibold text-amber-800 mb-2">5.3 Instalasi</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Instalasi gratis untuk produk tertentu</li>
                  <li>Tim instalasi profesional akan disediakan</li>
                  <li>Pastikan area instalasi siap dan aman</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">6. Kebijakan Pengembalian dan Garansi</h3>
                
                <h4 className="text-xl font-semibold text-amber-800 mb-2">6.1 Garansi Produk</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Garansi konstruksi 1 tahun untuk semua produk</li>
                  <li>Garansi finishing 6 bulan</li>
                  <li>Garansi tidak berlaku untuk kerusakan akibat penggunaan yang salah</li>
                  <li>Garansi tidak mencakup kerusakan akibat bencana alam</li>
                </ul>

                <h4 className="text-xl font-semibold text-amber-800 mb-2">6.2 Pengembalian Produk</h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Pengembalian hanya berlaku untuk produk cacat pabrik</li>
                  <li>Pengembalian harus dilaporkan dalam waktu 3 hari setelah pengiriman</li>
                  <li>Produk harus dalam kondisi asli dan tidak digunakan</li>
                  <li>Biaya pengembalian ditanggung oleh pembeli (kecuali produk cacat)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">7. Harga dan Ketersediaan</h3>
                <p className="mb-4">
                  Semua harga yang tercantum di website dapat berubah tanpa pemberitahuan sebelumnya. Kami berusaha untuk memastikan akurasi harga, namun kesalahan dapat terjadi. Ketersediaan produk dapat berubah sewaktu-waktu.
                </p>
                <p>
                  Harga sudah termasuk PPN 11% (jika berlaku). Harga belum termasuk biaya pengiriman dan instalasi (kecuali disebutkan lain).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">8. Hak Kekayaan Intelektual</h3>
                <p className="mb-4">
                  Semua konten di website PT CANELA BALI FURNITURE, termasuk namun tidak terbatas pada teks, gambar, logo, desain, dan software, dilindungi oleh hak cipta dan hak kekayaan intelektual lainnya.
                </p>
                <p>
                  Anda tidak diperbolehkan menyalin, mereproduksi, mendistribusikan, atau menggunakan konten kami untuk tujuan komersial tanpa izin tertulis dari PT CANELA BALI FURNITURE.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">9. Batasan Tanggung Jawab</h3>
                <p className="mb-4">
                  PT CANELA BALI FURNITURE tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan website kami, termasuk namun tidak terbatas pada kerugian keuntungan, data, atau penggunaan.
                </p>
                <p>
                  Kami tidak menjamin bahwa website akan selalu tersedia, akurat, atau bebas dari kesalahan. Penggunaan website sepenuhnya merupakan risiko Anda sendiri.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">10. Privasi Data</h3>
                <p>
                  Perlindungan data pribadi Anda sangat penting bagi kami. Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami yang dapat diakses melalui link di footer website.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">11. Force Majeure</h3>
                <p>
                  PT CANELA BALI FURNITURE tidak bertanggung jawab atas keterlambatan atau kegagalan dalam memenuhi kewajiban jika disebabkan oleh keadaan di luar kendali kami, termasuk namun tidak terbatas pada bencana alam, perang, pemogokan, atau gangguan pasokan.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">12. Penyelesaian Sengketa</h3>
                <p className="mb-4">
                  Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan penggunaan website atau pembelian produk akan diselesaikan melalui:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perundingan baik-baik antara kedua belah pihak</li>
                  <li>Mediasi melalui lembaga yang disepakati</li>
                  <li>Jika tidak mencapai kesepakatan, sengketa akan diselesaikan melalui Pengadilan Negeri Badung</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">13. Kontak Kami</h3>
                <p className="mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>PT CANELA BALI FURNITURE</strong></p>
                  <p className="mb-2">Jalan Raya Basangkasa Gang Badung 89, Seminyak, Bali</p>
                  <p className="mb-2">Telepon: 082382466214</p>
                  <p className="mb-2">Email: info@canelabalifurniture.com</p>
                  <p>Website: www.canelabalifurniture.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">14. Pernyataan Akhir</h3>
                <p>
                  Dengan menggunakan website PT CANELA BALI FURNITURE, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Syarat dan Ketentuan ini. Terima kasih telah mempercayai PT CANELA BALI FURNITURE sebagai pilihan furnitur Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}