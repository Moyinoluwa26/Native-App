'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/membership');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1> Next js course 2024 </h1>
        <Link href={'/account'}>Navigate to Account page </Link>
        <Link href={'/membership'}>Navigate to Membership page </Link>


      </div>
      <div className="z-0 pb-24">
        <h1 className=""> Alternative </h1>
        <div onClick={handleClick}>The Alternative way of navigating you get </div>
      </div>
    </main>
  );
}
