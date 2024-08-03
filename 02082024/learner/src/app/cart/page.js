'use client';
import React from 'react';
import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
    const pathName = usePathname();
    console.log(pathName);
    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('value'));

    return (
        <div>
            <h1>Words inside</h1>
        </div>
    )
}
