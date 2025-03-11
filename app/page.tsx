import Image from "next/image";
import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl">Hello World!</h1>
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
