import Link from 'next/link';
import type { SVGProps } from 'react';

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.52.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.31 1.72v3.29c-1.56.08-3.15.64-4.24 1.73-1.06 1.06-1.66 2.56-1.72 4.17-.01 1.3-.02 2.6-.02 3.91-.02-1.52-.57-3.07-1.66-4.16-1.12-1.12-2.7-1.66-4.32-1.73V8.81c1.57-.08 3.15-.64 4.24-1.73C11.9 6.01 12.45 4.49 12.52.02Z" />
        <path d="M12.52.02c-3.18.04-6.37.16-9.55.45C1.84.62.77 1.5 1.03 2.68c.26 1.18 1.5 1.8 2.69 1.54 3.17-.7 6.36-.82 9.55-.6" />
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
            <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
              <TiktokIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
