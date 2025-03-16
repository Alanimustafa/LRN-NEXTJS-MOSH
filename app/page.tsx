import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <main className="p-[34] font-light">
      <h1 className="text-3xl">Hello World!</h1>
      <Link href="/users">Users</Link>
      <br />
      <ProductCard/>
    </main>
  );
}
