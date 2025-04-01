import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <main className="p-[34] font-light">
      <h1 className="text-3xl">HOME PAGE</h1>
      <br />
      <Link href="/users" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">Users</Link>
      <br />
      <br />
      <ProductCard/>
      <br />
      <Link href="/about" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">About</Link>
      <br />
      <br />
      <Link href="/admin" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">Admin</Link>
      <Link href="/photos" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">Photos</Link>

    </main>
  );
}
