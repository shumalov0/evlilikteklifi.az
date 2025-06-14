"use client"

import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Evlilik Təklifi",
    description: "Xüsusi və romantik evlilik təklifi təşkilatı",
    image: "/services/proposal.jpg",
    link: "/proposal"
  },
  {
    id: 2,
    title: "Drone Çəkilişi",
    description: "Professional hava çəkilişləri",
    image: "/services/drone.jpg",
    link: "/services/drone"
  },
  {
    id: 3,
    title: "Dekorasiya",
    description: "Xüsusi tədbirlər üçün dekorasiya xidmətləri",
    image: "/services/decoration.jpg",
    link: "/services/decoration"
  },
  {
    id: 4,
    title: "Musiqi",
    description: "Canlı musiqi və DJ xidmətləri",
    image: "/services/music.jpg",
    link: "/services/music"
  }
]

export function Services() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-4">
            Xidmətlərimiz
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Xüsusi anlarınızı unudulmaz etmək üçün professional xidmətlərimizdən yararlanın
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-stone-600">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
