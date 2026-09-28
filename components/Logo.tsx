import Image from "next/image";

export default function Logo({ height = 28 }: { height?: number }) {
  return (
    <Image
      src="/logo.svg"
      alt="Howztrip"
      height={height}
      width={Math.round(height * (190 / 44))}
      priority
    />
  );
}
