import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="btn btn-ghost gap-2 text-base md:text-xl">
      IBM <span className="text-primary">ASB</span>
    </Link>
  );
}
