"use client"

import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

const packages = [
  {
    id: 1,
    name: "Evlilik Təklifi Paketi",
    price: 300,
    description: "Dam şəhər mənzərəsi",
    location: "Elmlər metrosu yaxınlığı"
  },
  {
    id: 2,
    name: "Evlilik Təklifi Paketi",
    price: 300,
    description: "Dəniz Kənarı",
    location: " Dəniz Kənarı - Şıxovda Eladarado restoranı sahilində"
  },
  {
    id: 3,
    name: "İldönümü və Ad Günü Sürprizi",
    price: 200,
    description: "Dəniz Kənarı",
    location: " Dəniz Kənarı - Şıxovda Eladarado restoranı sahilində"
  },
  {
    id: 4,
    name: "İldönümü və Ad Günü Sürprizi",
    price: 230,
    description: "Dam şəhər mənzərəsi",
    location: " Elmlər metrosu yaxınlığı"
  }
]

const additionalServices = [
  {
    id: 1,
    name: "Peşəkar Videograf",
    price: 75,
    description: "Kamil Məmmədov tərəfindən peşəkar çəkiliş və montajlı love story"
  },
  {
    id: 2,
    name: "Skripka",
    price: 40,
    description: "Canlı skripka musiqisi ilə romantik atmosfer"
  },
  {
    id: 3,
    name: "Salyut Fişəng",
    price: 100,
    description: "Səmada parlayan fişənglər"
  }
]

export default function ProposalPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [selectedServices, setSelectedServices] = useState<number[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    const selectedPackageData = packages.find(p => p.id === selectedPackage)
    const selectedServicesData = additionalServices.filter(s => selectedServices.includes(s.id))
    
    const totalPrice = (selectedPackageData?.price || 0) + 
      selectedServicesData.reduce((sum, service) => sum + service.price, 0)

    const emailData = {
      to: "evlilikteklifi.az@gmail.com",
      subject: "Yeni Evlilik Təklifi Müraciəti",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      package: {
        name: selectedPackageData?.name || "Seçilməyib",
        price: selectedPackageData?.price || 0,
        description: selectedPackageData?.description || "",
        location: selectedPackageData?.location || ""
      },
      additionalServices: selectedServicesData.map(service => ({
        name: service.name,
        price: service.price,
        description: service.description
      })),
      totalPrice: totalPrice
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Müraciətiniz uğurla göndərildi!'
        })
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          message: ""
        })
        setSelectedPackage(null)
        setSelectedServices([])
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.'
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceToggle = (serviceId: number) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const calculateTotal = () => {
    const packagePrice = selectedPackage ? packages.find(p => p.id === selectedPackage)?.price || 0 : 0
    const servicesPrice = selectedServices.reduce((sum, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId)
      return sum + (service?.price || 0)
    }, 0)
    return packagePrice + servicesPrice
  }

  return (
    <div className="min-h-screen bg-stone-50">
  
      
      {/* Hero Section */}
      <section className="relative h-[20vh] flex items-center justify-center">
 
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Evlilik Təklifi</h1>
          <p className="text-xl md:text-2xl">Xüsusi anınızı bizimlə paylaşın</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Success/Error Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Package Selection */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif mb-6">Paket Seçimi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedPackage === pkg.id
                          ? 'border-gold-400 bg-gold-50'
                          : 'border-stone-200 hover:border-gold-400'
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <h3 className="font-medium mb-2">{pkg.name}</h3>
                      <p className="text-gold-500 font-medium mb-2">{pkg.price} AZN</p>
                      <p className="text-sm text-stone-600">{pkg.description}</p>
                      <p className="text-sm text-stone-500 mt-2">📍 {pkg.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif mb-6">Əlavə Xidmətlər</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {additionalServices.map((service) => (
                    <div
                      key={service.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedServices.includes(service.id)
                          ? 'border-gold-400 bg-gold-50'
                          : 'border-stone-200 hover:border-gold-400'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <h3 className="font-medium mb-2">{service.name}</h3>
                      <p className="text-gold-500 font-medium mb-2">{service.price} AZN</p>
                      <p className="text-sm text-stone-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Tarix
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Saat
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Əlavə Qeydlər
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  disabled={isSubmitting}
                />
              </div>

              {/* Total Price */}
              <div className="mb-8 p-4 bg-stone-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Ümumi Məbləğ:</span>
                  <span className="text-2xl font-medium text-gold-500">{calculateTotal()} AZN</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gold-400 text-white py-3 rounded-lg transition-colors ${
                  isSubmitting 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:bg-gold-500'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Göndərilir...
                  </div>
                ) : (
                  'Təklif Göndər'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

 
    </div>
  )
} 