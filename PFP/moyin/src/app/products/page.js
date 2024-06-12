'use client';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState(true);

    useEffect(() => {
        if (products === false) {
            redirect('/AboutMe');
        }
    }, [products]);

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center">Products</h1>
            <p className="text-center">We have the best products for you. Check them out!</p>

        </div>
    );
}

export default Products;
