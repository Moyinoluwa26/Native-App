import React from 'react';

export const metadata = {
    title: "The Product page",
    description: " This is a page that views the Products available for sale ",
    keywords: ["sales", "purchases", " down ", "etc"]
}

export default function Products() {
    return (<>
        <div> Products List</div>
        <ul>
            <li> Product 1</li>
            <li> Product 2</li>
            <li> Product 3</li>
            <li> Product 4</li>
            <li> Product 5</li>
        </ul>
    </>


    )
}
