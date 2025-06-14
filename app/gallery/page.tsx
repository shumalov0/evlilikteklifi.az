"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

const galleryItems = [
  {
    id: 1,
    title: "Tural və Aygün",
    location: "Bakı, Deniz Mall",
    image: "/placeholder.jpg",
    type: "photo",
    category: "proposals"
  },
  {
    id: 2,
    title: "Rəşad və Lamiyə",
    location: "Bakı, Şirvanşahlar Sarayı",
    image: "/placeholder.jpg",
    type: "video",
    category: "proposals"
  },
  {
    id: 3,
    title: "Orxan və Nərmin",
    location: "Bakı, Qız Qalası",
    image: "/placeholder.jpg",
    type: "photo",
    category: "proposals"
  },
  {
    id: 4,
    title: "Romantik Dekor",
    location: "Bakı, Four Seasons",
    image: "/placeholder.jpg",
    type: "photo",
    category: "decoration"
  },
  {
    id: 5,
    title: "Dron Görüntüləri",
    location: "Bakı, Yanar Dağ",
    image: "/placeholder.jpg",
    type: "video",
    category: "drone"
  },
  {
    id: 6,
    title: "Xüsusi Anlar",
    location: "Bakı, Qəbələ",
    image: "/placeholder.jpg",
    type: "photo",
    category: "moments"
  }
]

const categories = [
  { id: "all", name: "Hamısı" },
  { id: "proposals", name: "Təkliflər" },
  { id: "decoration", name: "Dekorasiya" },
  { id: "drone", name: "Dron Çəkilişləri" }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/placeholder.jpg"
          alt="Gallery"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Qalereya</h1>
          <p className="text-xl md:text-2xl">Xüsusi anlarımız</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gold-400 text-white"
                    : "bg-white text-stone-600 hover:bg-gold-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                      <p className="text-sm">{item.location}</p>
                      {item.type === "video" && (
                        <div className="mt-2">
                          <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gold-400 text-white px-8 py-3 rounded-lg hover:bg-gold-500 transition-colors">
              Daha Çox
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 