import React from 'react';

export const generateMetadata = async ({ params }) => {
  const metaParams = await params;
  return {
    title: ` This is the title of the page : ${metaParams.productId}`,
    description: `This page shows the varios details of each productId simulteanously `
  }
}

export default async function ProductId({ params }) {
  const actualId = await params;

  return (<>
    <div>Product Details</div>
    <h1>
      We would now share details of our {actualId.productId} and not everything
    </h1>
    <h2>
      we would also lie to show details of our {actualId.reviewsId} and not also everything ...
    </h2></>

  )
}
