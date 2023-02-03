import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="btn btn-ghost gap-2">
      IBM <span className="text-primary">ASB</span>
    </Link>
  );
}
