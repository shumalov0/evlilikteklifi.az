"use client"

import Image from "next/image"

export function Quote() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative mb-8">
            <svg
              className="w-12 h-12 text-gold-400 mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-2xl sm:text-3xl font-serif text-stone-800 mb-8">
          &ldquo;Unudulmaz evlilik təklifi üçün siz xəyal edin, <br />
           biz gerçəkləşdirək. &rdquo;
          </blockquote>

        </div>
      </div>
    </section>
  )
}
