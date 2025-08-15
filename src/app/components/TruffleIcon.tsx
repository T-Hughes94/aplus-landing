// src/app/components/TruffleIcon.tsx
import Image from "next/image";

type TruffleIconProps = {
  src: string;
  alt?: string; // optional; use empty string if decorative
};

export default function TruffleIcon({ src, alt = "" }: TruffleIconProps) {
  return (
    <div
      className="absolute -top-14 z-10 w-[80px] h-[80px] rounded-full flex items-center justify-center shadow-md"
      aria-hidden="true"
    >
      <div className="relative w-[55px] h-[55px]">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}



