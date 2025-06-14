import Image from "next/image"
import Link from "next/link"

export function Story() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <Image
                src="/images/ringstory.png"
                alt="Bizim Hekayəmiz"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              Bizim Hekayəmiz
            </h2>
            <div className="w-16 h-px bg-gold-400 mb-8" />
            <p className="text-lg text-stone-600 mb-6">
            2021-ci ildən etibarən, biz sevgi dolu anlarınızı unudulmaz xatirəyə çevirmək üçün fəaliyyət göstəririk. Bu illər ərzində 1200-dən çox müştəri bizə etibar edib və onların ən dəyərli anlarında yanlarında olmuşuq.
            </p>
            <p className="text-lg text-stone-600 mb-8">
              Professional komandamız, yaradıcı ideyalarımız və keyfiyyətli
              xidmətimizlə, sizin xüsusi anlarınızı daha da gözəl edirik.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
