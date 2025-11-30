import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const title = 'TelluNi Fashion Store | Sewa Baju Bodo Adat Bugis Makassar';
const description = 'Sewa Baju Bodo murah dan otentik di Bone dan Makassar. TelluNi Fashion Store menyediakan koleksi baju adat Bugis untuk acara spesial Anda di Sulawesi Selatan. Kualitas premium, harga terjangkau.';
const keywords = ['sewa baju bodo bone', 'sewa baju bodo makassar', 'sewa baju bodo sulawesi selatan', 'sewa baju bodo murah', 'sewa baju adat bugis', 'sewa baju bodo murah sulawesi', 'sewa baju bodo bone murah'];
const logoUrl = 'https://res.cloudinary.com/dfvl0vfon/image/upload/v1764516041/IMG_20230619_075534_475-removebg-preview_yofeps.png';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    images: [
      {
        url: logoUrl,
        width: 32,
        height: 32,
        alt: 'TelluNi Fashion Store Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [logoUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
