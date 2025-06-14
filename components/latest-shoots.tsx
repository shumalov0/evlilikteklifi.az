"use client";

import Image from "next/image";

const instagramVideos = [
  {
    id: 1,
    title: "Tural və Aygün",
    location: "📍 Dəniz Kənarı - Şıxovda Eladarado restoranı sahilində",
    image: "/shoots/proposal-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DK19-OxCA07/",
  },
  {
    id: 2,
    title: "Tommy və Lamiyə",
    location: "Dam şəhər mənzərəsi",
    image: "/images/dekorphoto.png",
    instagramUrl: "https://www.instagram.com/p/DKfmtWhzWdF/",
  },
  {
    id: 3,
    title: "Ibrahim və Zəhra",
    location: "📍 Elmlər metrosu yaxınlığı",
    image: "/images/dekorphoto2.png",
    instagramUrl: "https://www.instagram.com/p/DK2BttUCRkx/",
  },
];

export function LatestShoots() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-800 mb-4">
          Ən Son Çəkilişlər
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Xüsusi anlarımızı Instagram hesabımızda izləyin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramVideos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-lg bg-stone-50 cursor-pointer"
              onClick={() => window.open(video.instagramUrl, "_blank")}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Instagram play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-stone-600 mb-4">{video.location}</p>
                <div className="inline-flex items-center text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                  Instagram&apos;da İzlə
                  <svg
                    className="w-4 h-4 ml-2 text-pink-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
