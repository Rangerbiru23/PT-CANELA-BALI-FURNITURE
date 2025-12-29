'use client';

import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Produk' },
    { id: 'living', name: 'Ruang Tamu' },
    { id: 'bedroom', name: 'Kamar Tidur' },
    { id: 'dining', name: 'Ruang Makan' },
    { id: 'office', name: 'Ruang Kerja' },
    { id: 'outdoor', name: 'Outdoor' }
  ];

  const products = [
    {
      id: 1,
      name: 'Set Meja Makan Mewah',
      category: 'dining',
      price: 'Rp 15.500.000',
      image: '/product-dining.jpg',
      description: 'Set meja makan elegant dengan 6 kursi, terbuat dari kayu jati pilihan'
    },
    {
      id: 2,
      name: 'Set Kamar Tidur Luxury',
      category: 'bedroom',
      price: 'Rp 22.000.000',
      image: '/product-bedroom.jpg',
      description: 'Set kamar tidur lengkap dengan tempat tidur, nakas, dan lemari pakaian'
    },
    {
      id: 3,
      name: 'Set Sofa Ruang Tamu Modern',
      category: 'living',
      price: 'Rp 18.750.000',
      image: '/product-living.jpg',
      description: 'Set sofa 3-2-1 dengan meja kopi, desain modern dan nyaman'
    },
    {
      id: 4,
      name: 'Meja Kerja Executive',
      category: 'office',
      price: 'Rp 8.500.000',
      image: '/product-office.jpg',
      description: 'Meja kerja elegant dengan kursi ergonomis, sempurna untuk home office'
    },
    {
      id: 5,
      name: 'Set Furniture Outdoor',
      category: 'outdoor',
      price: 'Rp 12.000.000',
      image: '/product-outdoor.jpg',
      description: 'Set furniture tahan cuaca untuk patio atau taman Anda'
    },
    {
      id: 6,
      name: 'Lemari Pakaian Minimalis',
      category: 'bedroom',
      price: 'Rp 7.250.000',
      image: '/product-wardrobe.jpg',
      description: 'Lemari pakaian dengan pintu sliding, desain minimalis modern'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Koleksi Furnitur Premium
            </h1>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Temukan furnitur impian Anda dari koleksi eksklusif PT CANELA BALI FURNITURE
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={
                  selectedCategory === category.id
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "border-amber-300 text-amber-700 hover:bg-amber-50"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-white border-amber-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-amber-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-amber-900">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Beli Sekarang
                    </Button>
                    <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-amber-700 text-lg">
                Tidak ada produk dalam kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-amber-50 mb-4">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-xl text-amber-200 mb-8">
            Kami menerima pesanan kustom sesuai dengan kebutuhan dan preferensi Anda
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            Hubungi Kami untuk Pesanan Kustom
          </Button>
        </div>
      </section>
    </Layout>
  );
}