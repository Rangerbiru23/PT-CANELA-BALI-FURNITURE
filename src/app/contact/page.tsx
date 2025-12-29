'use client';

import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Kami siap membantu Anda menemukan furnitur impian. Hubungi PT CANELA BALI FURNITURE hari ini!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900 mb-2">Alamat Showroom</h3>
                        <p className="text-amber-700">
                          Jalan Raya Basangkasa Gang Badung 89<br />
                          Desa/Kelurahan Seminyak<br />
                          Kec. Kuta, Kab. Badung<br />
                          Provinsi Bali
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900 mb-2">Telepon</h3>
                        <p className="text-amber-700">082382466214</p>
                        <p className="text-amber-600 text-sm mt-1">Available untuk WhatsApp dan panggilan</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900 mb-2">Email</h3>
                        <p className="text-amber-700">info@canelabalifurniture.com</p>
                        <p className="text-amber-600 text-sm mt-1">Kami akan membalas dalam 24 jam</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900 mb-2">Jam Operasional</h3>
                        <p className="text-amber-700">
                          Senin - Sabtu: 09:00 - 18:00<br />
                          Minggu: 10:00 - 16:00<br />
                          <span className="text-amber-600 text-sm">Showroom buka setiap hari</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Kirim Pesan
              </h2>
              
              <Card className="border-amber-200">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                        placeholder="Subjek pesan Anda"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-amber-900"
                        placeholder="Tuliskan pesan Anda di sini..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Kunjungi Showroom Kami
            </h2>
            <p className="text-xl text-amber-700">
              Lihat koleksi furnitur premium kami secara langsung di Seminyak, Bali
            </p>
          </div>
          
          <Card className="border-amber-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-amber-100 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-amber-900 mb-2">
                    PT CANELA BALI FURNITURE
                  </h3>
                  <p className="text-amber-700 mb-4">
                    Jalan Raya Basangkasa Gang Badung 89, Seminyak, Bali
                  </p>
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    Buka di Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}