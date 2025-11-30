import Link from 'next/link';
import type { SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
  </svg>
);


export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TelluNi Fashion Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/p/CyYRizjPIWl/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href="https://www.tiktok.com/@telluni_?_r=1&_t=ZS-91pkWXeKpxo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <TiktokIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}