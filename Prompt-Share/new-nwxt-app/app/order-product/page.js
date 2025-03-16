"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        setTimeout(() => router.push("/"), 5000)

    }
    return (<>
        <div>These are the available Posts : </div>
        <button onClick={handleClick}>Place Order</button>
    </>

    )
}

