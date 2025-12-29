'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Truck, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Luxury Furniture Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-amber-900 bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="PT CANELA BALI FURNITURE"
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-50 mb-4">
            PT CANELA
          </h1>
          <h2 className="text-4xl md:text-6xl font-semibold text-amber-200 mb-6">
            BALI FURNITURE
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Perdagangan Eceran Furnitur Berkualitas Tinggi dengan Desain Elegan dan Material Terbaik dari Bali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Lihat Koleksi Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-amber-200 text-amber-50 hover:bg-amber-50 hover:text-amber-900 px-8 py-3 text-lg">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">
              Mengapa Memilih PT CANELA BALI FURNITURE?
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Kami berkomitmen menyediakan furnitur berkualitas tinggi dengan desain yang memukau
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Kualitas Premium</h3>
                <p className="text-amber-700">
                  Material terbaik dengan standar kualitas tinggi untuk setiap produk
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Desain Elegan</h3>
                <p className="text-amber-700">
                  Desain modern dan klasik yang memukau dengan sentuhan Bali
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Garansi</h3>
                <p className="text-amber-700">
                  Jaminan kepuasan dengan garansi produk yang comprehensive
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Pengiriman Aman</h3>
                <p className="text-amber-700">
                  Pengiriman profesional dan instalasi gratis untuk area tertentu
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-50 mb-4">
            Temukan Koleksi Furnitur Impian Anda
          </h2>
          <p className="text-xl text-amber-200 mb-8">
            Kunjungi showroom kami di Seminyak, Bali atau hubungi kami untuk konsultasi gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                Jelajahi Produk
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-amber-200 text-amber-50 hover:bg-amber-50 hover:text-amber-900 px-8 py-3 text-lg">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}