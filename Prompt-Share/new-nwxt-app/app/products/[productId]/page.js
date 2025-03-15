import React from 'react'

export default async function ProductId({ params }) {
  const actualId = await params
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
