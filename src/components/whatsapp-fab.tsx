import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { SVGProps } from 'react';

const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    fill="currentColor"
  >
    <path d="M16.003 4.41A11.59 11.59 0 0 0 4.41 16.003A11.59 11.59 0 0 0 16.003 27.59a11.532 11.532 0 0 0 7.893-3.037l3.61 1.038l-1.06-3.533a11.532 11.532 0 0 0 3.037-7.893A11.59 11.59 0 0 0 16.003 4.41zM16.003 25.76a9.76 9.76 0 0 1-5.282-1.537l-.377-.223l-3.923 1.12l1.14-3.834l-.246-.39a9.76 9.76 0 1 1 18.25-4.32a9.734 9.734 0 0 1-2.73 6.55l-1.1 1.25z" />
    <path d="M21.33 18.473a2.44 2.44 0 0 1-1.32.71a4.93 4.93 0 0 1-1.574.24a7.83 7.83 0 0 1-3.37-1.044a10.43 10.43 0 0 1-4.2-4.2a7.83 7.83 0 0 1-1.044-3.37a4.93 4.93 0 0 1 .24-1.574a2.44 2.44 0 0 1 .71-1.32a1.88 1.88 0 0 1 1.24-.48a1.12 1.12 0 0 1 .83.39l.75.92a.664.664 0 0 1 .05.92l-.53.64a.345.345 0 0 0-.05.43c.15.28.32.55.51.81c.69.93 1.5 1.74 2.43 2.43c.26.19.53.36.81.51a.345.345 0 0 0 .43-.05l.64-.53a.664.664 0 0 1 .92.05l.92.75a1.12 1.12 0 0 1 .39.83a1.88 1.88 0 0 1-.48 1.24z" />
  </svg>
);


export default function WhatsAppFAB() {
  const whatsappLink = `https://wa.me/6281234567890?text=${encodeURIComponent("Halo, saya tertarik untuk menyewa Baju Bodo dari TelluNi Fashion Store.")}`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg bg-[#25D366] text-white hover:bg-[#128C7E] focus:bg-[#128C7E] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="h-8 w-8" />
      </Link>
    </Button>
  );
}
