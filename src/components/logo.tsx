import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://res.cloudinary.com/dfvl0vfon/image/upload/v1764516041/IMG_20230619_075534_475-removebg-preview_yofeps.png"
      alt="TelluNi Fashion Store Logo"
      width={32}
      height={32}
      className="h-8 w-8"
    />
  );
}
