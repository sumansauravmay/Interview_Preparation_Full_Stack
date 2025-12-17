import React from 'react'

const ProductItem = ({data, loading, error}) => {
if(loading){
    return <h1>Loading...</h1>
}
if(error){
    return <h1>Error...</h1>
}
  return (
    <>
      {
        data?.map((el)=>(
            <div key={el.id}>
                <p>Title: {el.title}</p>
                <p>Price: {el.price}</p>
            </div>
        ))
      }
    </>
  )
}

export default ProductItem
