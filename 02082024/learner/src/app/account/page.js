
import React from 'react';
import { redirect } from "next/navigation";


export default function Accounts() {
    const verification = null;
    if (!verification) {
        redirect('/products?search=account&value=not-verified');
    }

    return (
        <div>
            <h1>Accounts</h1>
        </div>
    )
}
