//import Link from "next/link";

'use client';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  console.log(router);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">Welcome to Moyin's Shop</h1>
      { /*<Link href="/products" className="">
        Go TO Products
      </Link>
      <Link href="/AboutMe" className="">
        Go TO About Me
      </Link>*/}
      <button onClick={() => router.push("/products")} className="bg-blue-500 text-white p-4 rounded-lg">Go to Products</button>


      <p className="text-2xl text-center">The best place to find the best products</p>
    </main>
  );
}
