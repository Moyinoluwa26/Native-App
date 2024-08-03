import React from 'react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h1>Page does Not Exist!! </h1>
            <div>Message Page Not Found at all </div>
            <Link href='/'>Go back to Home</Link>
        </div>

    )
}

