'use client';

import Layout from '@/components/Layout';
import { MapPin, Phone, Mail, Award, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Tentang PT CANELA BALI FURNITURE
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Perdagangan eceran furnitur berkualitas tinggi dengan dedikasi untuk keunggulan dan kepuasan pelanggan
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-amber-700">
                <p>
                  PT CANELA BALI FURNITURE didirikan dengan visi untuk menjadi penyedia furnitur terkemuka di Bali yang menggabungkan keahlian tradisional dengan desain modern. Kami berdedikasi untuk menyediakan produk furnitur berkualitas tinggi yang memenuhi kebutuhan dan gaya hidup pelanggan kami.
                </p>
                <p>
                  Berlokasi di jantung Seminyak, showroom kami menampilkan koleksi furnitur yang dipilih dengan hati-hati, mulai dari desain klasik hingga kontemporer, semuanya dibuat dengan material terbaik dan standar kualitas yang tinggi.
                </p>
                <p>
                  Sebagai perusahaan perdagangan eceran furnitur, kami memahami pentingnya detail, kualitas, dan pelayanan pelanggan yang excellent. Setiap produk yang kami tawarkan merupakan cerminan dari komitmen kami terhadap keunggulan.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/about-workshop.jpg"
                alt="Bali Furniture Workshop"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Prinsip yang memandu setiap aspek bisnis kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Kualitas</h3>
                <p className="text-amber-700">
                  Kami tidak pernah berkompromi dengan kualitas. Setiap produk melalui proses quality control yang ketat untuk memastikan kepuasan pelanggan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Passion</h3>
                <p className="text-amber-700">
                  Passion kami terhadap furnitur dan desain tercermin dalam setiap produk yang kami tawarkan. Kami mencintai apa yang kami lakukan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Pelanggan</h3>
                <p className="text-amber-700">
                  Kepuasan pelanggan adalah prioritas utama kami. Kami berkomitmen untuk memberikan pelayanan terbaik dan pengalaman berbelanja yang menyenangkan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Informasi Perusahaan
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Alamat</h3>
                    <p className="text-amber-700">
                      Jalan Raya Basangkasa Gang Badung 89, Desa/Kelurahan Seminyak, Kec. Kuta, Kab. Badung, Provinsi Bali
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Telepon</h3>
                    <p className="text-amber-700">082382466214</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Email</h3>
                    <p className="text-amber-700">info@canelabalifurniture.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Mengapa Memilih Kami?
              </h2>
              <div className="space-y-4 text-amber-700">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Pengalaman bertahun-tahun dalam industri furnitur</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Koleksi furnitur yang selalu update dengan tren terkini</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Harga kompetitif dengan kualitas terbaik</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Pelayanan pelanggan yang ramah dan profesional</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Pengiriman dan instalasi yang aman dan tepat waktu</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Garansi produk untuk kepuasan pelanggan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}