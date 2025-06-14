import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Evlilik Təklifi',
  defaultTitle: 'Evlilik Təklifi | Xüsusi Anlarınızı Unudulmaz Edək',
  description: 'Evlilik təklifi, ad günü və xüsusi tədbirlər üçün professional xidmətlər. Bakıda ən yaxşı evlilik təklifi təşkilatçıları. Xüsusi anlarınızı unudulmaz etmək üçün bizimlə əlaqə saxlayın.',
  canonical: 'https://evlilikteklifi.az',
  openGraph: {
    type: 'website',
    locale: 'az_AZ',
    url: 'https://evlilikteklifi.az',
    siteName: 'Evlilik Təklifi',
    images: [
      {
        url: 'https://evlilikteklifi.az/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evlilik Təklifi - Xüsusi Anlarınızı Unudulmaz Edək',
      },
    ],
  },
  twitter: {
    handle: '@evlilikteklifi',
    site: '@evlilikteklifi',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'evlilik təklifi, evlilik təklifi təşkilatçısı, ad günü təşkilatçısı, xüsusi tədbirlər, Bakı evlilik təklifi, romantik təklif, surprise proposal, birthday surprise, marriage proposal, event organizer, Bakı tədbir təşkilatçısı, Khalili Plaza, Əhməd Rəcəbli küçəsi'
    },
    {
      name: 'author',
      content: 'Evlilik Təklifi'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
}

export default config 