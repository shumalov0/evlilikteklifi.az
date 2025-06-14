"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const packages = [
  {
    id: 1,
    name: "Evlilik Təklifi Paketi",
    price: "300 AZN",
    description: "Dam şəhər mənzərəsi ",
    features: [
      "Xüsusi dekorasiya",
      "Musiqi müşayiəti",
      "Marry Me işıqlı hərflər",
      "Romantik ab-hava",
      "Love Story Video Montaj",
      "Uzaqdan İdarə Olunan Fişəng",
      "Peşəkar Kamera ilə Video Çəkiliş",
      "Panoramik şəhər mənzərəsi",
      "Tam özəl məkan",
      "LED işıqlar",
    ],
    image: "/images/damdekor.png",
    location: "Elmlər metrosu yaxınlığı"
  },
  {
    id: 2,
    name: "Evlilik Təklifi Paketi",
    price: "300 AZN",
    description: "Dəniz Kənarı ",
    features: [
      "Dəniz mənzərəsi",
      "Fənərlər və şam dekorasiyası",
      "Şəffaf iqlo kabinet",
      "Marry Me işıqlı hərflər",
      "Love Story Video Montaj",
      "Uzaqdan İdarə Olunan Fişəng",
      "Peşəkar Kamera ilə Video Çəkiliş",
      "Masa dekorasiyası",
      "Romantik musiqi",
      "Çay dəsgahı"
    ],
    image: "/images/iqlodekor.png",
    location: "Dəniz Kənarı - Şıxovda Eladarado restoranı sahilində"
  },
  {
    id: 3,
    name: "İldönümü və Ad Günü Sürprizi",
    price: "200 AZN",
    description: "Dəniz Kənarı",
    features: [
      "Ad günü və ya münasibətə uyğun dekor",
      "Şarlar və işıqlandırma",
      "Romantik atmosfer",
      "Şəffaf iqlo kabinet",
      "Masa və stul dekoru",
      "Lalə gülləri",
      "LED işıqlı yol",
      "Şamlar və xüsusi yazı",
      "Foto/video çəkilişi (əlavə sifarişlə)",
    ],
    image: "/images/adgunudeniz.png",
    location: "Dəniz Kənarı - Şıxovda Eladarado restoranı sahilində"
  },
  {
    id: 4,
    name: "İldönümü və Ad Günü Sürprizi",
    price: "230 AZN",
    description: "Dam şəhər mənzərəsi ",
    features: [
      "Şəxsi masa dekorasiyası",
      "Şəhər mənzərəli damda xüsusi gecə",
      "17-ci mərtəbə dam dekoru",
      "Alov Qüllələrinə panoramik görüntü",
      "LED işıqlar",
      "Qırmızı xalça",
      "Şamla bəzədilmiş yol",
      "Tam özəl məkan"
    ],
    image: "/images/adgunudekor.png",
    location: "Elmlər metrosu yaxınlığı"
  }
]

const additionalServices = [
  {
    name: "Peşəkar Videograf",
    description: "Kamil Məmmədov tərəfindən peşəkar çəkiliş və montajlı love story",
    price: "75 AZN",
    icon: "🎥"
  },
  {
    name: "Skripka",
    description: "Canlı skripka musiqisi ilə romantik atmosfer",
    price: "40 AZN",
    icon: "🎻"
  },
  {
    name: "Salyut Fişəng",
    description: "Əlavə fişəng effekti",
    price: "100 AZN",
    icon: "✨"
  }
]
;
export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-stone-800 mb-4">
              Paketlərimiz
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Xüsusi anlarınızı unudulmaz etmək üçün professional xidmətlərimizdən yararlanın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                  <p className="text-gold-500 text-xl font-medium mb-4">{pkg.price}</p>
                  <p className="text-stone-600 mb-4">{pkg.description}</p>
                  <p className="text-sm text-stone-500 mb-4">📍 {pkg.location}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-stone-600">
                        <svg className="w-5 h-5 text-gold-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/proposal"
                    className="block w-full bg-gold-400 text-white text-center py-3 rounded-lg hover:bg-gold-500 transition-colors"
                  >
                    Sifariş Et
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-20">
            <h2 className="text-3xl font-serif text-center mb-12">Əlavə Xidmətlər</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                  <p className="text-stone-600 mb-4">{service.description}</p>
                  <p className="text-gold-500 font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 