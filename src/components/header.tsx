import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
            <span className="font-headline text-lg font-bold">TelluNi Fashion Store</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
