import { PageForCounter } from './counter';
import Link from 'next/link';



export const metadata = {
    title: " the title "
}

import React from 'react'

export default function CounterPage() {
    return (
        <>
            <div>CounterPage Largely Active </div>
            <PageForCounter />
            <Link href="/products">Products</Link>
        </>

    )
}
