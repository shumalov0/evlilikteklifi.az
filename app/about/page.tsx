import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const teamMembers = [
  {
    name: "Əli Məmmədov",
    role: "Baş Direktor",
    image: "/team/ali.jpg",
    description: "10 illik təcrübə ilə evlilik təklifləri və xüsusi tədbirlərin təşkili sahəsində mütəxəssis."
  },
  {
    name: "Aygün Əliyeva",
    role: "Dekorasiya Mütəxəssisi",
    image: "/team/aygun.jpg",
    description: "Yaradıcı dekorasiya həlləri ilə hər bir tədbiri unikal edən peşəkar."
  },
  {
    name: "Rəşad Hüseynov",
    role: "Fotoqraf",
    image: "/team/rashad.jpg",
    description: "Professional fotoqraf və videoqraf, xüsusi anları əbədiləşdirən sənətkar."
  }
]

const testimonials = [
  {
    name: "Tural və Aygün",
    text: "Evlilik təklifimizi onların köməyi ilə etdik. Hər şey mükəmməl oldu!",
    image: "/testimonials/couple1.jpg"
  },
  {
    name: "Rəşad və Lamiyə",
    text: "Professional yanaşma və yaradıcı həllər. Çox məmnun qaldıq!",
    image: "/testimonials/couple2.jpg"
  },
  {
    name: "Orxan və Nərmin",
    text: "Hər detala diqqət yetirirlər. Təşəkkür edirik!",
    image: "/testimonials/couple3.jpg"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/about-hero.jpg"
          alt="About Us"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Haqqımızda</h1>
          <p className="text-xl md:text-2xl">Xüsusi anlarınızı bizimlə paylaşın</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-stone-800 mb-6">Bizim Hekayəmiz</h2>
            <div className="w-24 h-px bg-gold-400 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 mb-8">
              2015-ci ildən etibarən evlilik təklifləri və xüsusi tədbirlərin təşkili sahəsində fəaliyyət göstəririk. 
              Bizim missiyamız hər bir cütlüyün xüsusi anını unudulmaz etməkdir.
            </p>
            <p className="text-lg text-stone-600">
              Professional komandamız, yaradıcı həllərimiz və keyfiyyətli xidmətimizlə 
              sizin üçün ən yaxşı təklifi hazırlayırıq.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 mb-6">Komandamız</h2>
            <div className="w-24 h-px bg-gold-400 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Professional və təcrübəli komandamız hər bir layihəni mükəmməlliyə çatdırmaq üçün çalışır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-2">{member.name}</h3>
                <p className="text-gold-400 mb-4">{member.role}</p>
                <p className="text-stone-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 mb-6">Niyə Biz?</h2>
            <div className="w-24 h-px bg-gold-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Professional Xidmət</h3>
              <p className="text-stone-600">
                Təcrübəli komandamız hər bir detala diqqət yetirərək mükəmməl nəticə əldə edir.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Vaxtında Çatdırma</h3>
              <p className="text-stone-600">
                Bütün xidmətlərimizi vaxtında və keyfiyyətli şəkildə təqdim edirik.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-4">Müştəri Məmnuniyyəti</h3>
              <p className="text-stone-600">
                Müştərilərimizin məmnuniyyəti bizim üçün ən vacib prioritetdir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-stone-800 mb-6">Müştəri Rəyləri</h2>
            <div className="w-24 h-px bg-gold-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-stone-50 p-6 rounded-lg">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="text-stone-600 mb-4 text-center">{testimonial.text}</p>
                <p className="text-gold-400 text-center font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 