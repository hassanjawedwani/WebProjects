import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, currency, cartItems, addToCart, removeToCart, navigate } = useAppContext();
  const [showcaseImageURL, setShowcaseImageURL] = useState("");
  const product = products.find(product => product._id === id);
  const [relatedProducts, setRelatedProducts] = useState(null);

  useEffect(() => {
    setRelatedProducts(products.filter(productTemp => productTemp.category === product.category));
  }, [products]);

  console.log(id, product, relatedProducts);

  return (
    <>
      {product && (
        <div>
        <div className='my-10 max-h-6xl'>
          <p className='my-5'>Products / {product.category} <span className='text-primary-dull'>{product.name}</span></p>
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='max-w-lg flex gap-5'>
              <div className='w-2/12 flex flex-col gap-3'>
                {product.image.map(image => <img src={image} onClick={() => setShowcaseImageURL(image)} alt="product image" className='border border-slate-300 rounded' />)}
              </div>
              <div className='w-10/12  flex items-center h-full'>
                <img src={showcaseImageURL || product?.image[0]} alt="showcase image" className='border border-slate-300 rounded h-full  w-full'/>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              <div>
                <h1 className='text-3xl font-medium text-slate-800'>{product.name}</h1>
                <div className='flex gap-0.5'>
                  <img src={assets.star_icon} alt="star icon" />
                  <img src={assets.star_icon} alt="star icon" />
                  <img src={assets.star_icon} alt="star icon" />
                  <img src={assets.star_icon} alt="star icon" />
                  <img src={assets.star_dull_icon} alt="star icon" />
                  <span className='text-slate-400'>(4)</span>
                </div>
              </div>
              <div>
                <p className='line-through text-sm text-slate-500'>MPR: {currency}{product.price}</p>
                <p className='font-medium text-2xl text-slate-700'>MPR: {currency}{product.offerPrice}</p>
                <p className='text-xs text-slate-500'>(inclusive of all tax)</p>
              </div>
              <div>
                <p className='text-uppercase text-slate-700 font-medium'>About Product</p>
                <ul className='text-xs text-slate-500 list-disc pl-4.5' >
                  {product.description && product.description.map((desc, index) => <li key={index}>{desc}</li>)}
                </ul>
              </div>
              <div className='flex justify-evenly gap-5 '>
                {cartItems[product._id] 
                  ?
                  <div className='text-sm text-primary border border-primary py-1 px-2 flex gap-2 shrink-0 w-20'>
                    <button type='button'className='w-6 ' onClick={() => { removeToCart(product._id) }}>-</button>
                    <span className='w-7 text-center'>{cartItems[product._id]}</span>
                      <button type='button' className='w-6' onClick={() => { addToCart(product._id);  } }>+</button>
                  </div>
                  :
                  (
                    <button className='text-sm text-primary border border-primary gap-2  font-medium h-9 w-30' onClick={() => { addToCart(product._id); }}>
                      Add to Cart
                    </button>
                  )
                  
                } 
                  <button className='bg-primary hover:bg-primary-dull text-white font-medium h-9 w-30' onClick={() => { addToCart(); navigate("/cart"); } }>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='my-15'>
            <h2 className='text-2xl md:text-3xl font-medium text-slate-700 pb-5'>Related Products</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 '>
              {relatedProducts.length > 0
                ? (
                relatedProducts.map((product, index) => (
                  <div key={index} className='group rounded-lg flex flex-col justify-center p-4 border border-gray-200 gap-0.5'>
                    <img src={product.image[0]} alt={product.name} className='w-24 h-24 transition-transform group-hover:scale-125 self-center' onClick={() => navigate(`/products/${product.category}/${product._id}`)}/>
                    <p className='text-sm text-slate-400'>{product.category}</p>
                    <h3 className='text-lg my-1 font-medium text-slate-700'>{product.name}</h3>
                    <div className='flex gap-0.5'>
                      <img src={assets.star_icon} alt="star icon" />
                      <img src={assets.star_icon} alt="star icon" />
                      <img src={assets.star_icon} alt="star icon" />
                      <img src={assets.star_icon} alt="star icon" />
                      <img src={assets.star_dull_icon} alt="star icon" />
                      <span className='text-slate-400'>(4)</span>
                    </div>
                    <div className=' flex flex-row justify-between gap-2 mt-2 flex-wrap '>  {/*onClick={e => e.stopPropagation()}*/}
                      <div className='flex items-end-safe gap-x-1'>
                        <p className='font-medium text-primary'>{currency}{product.offerPrice}</p>
                        <p className='line-through text-xs text-slate-400'>{currency}{product.price}</p>
                      </div>
                      {cartItems[product._id] 
                        ?
                        <div className='text-sm text-primary border border-primary py-1 px-2 flex gap-2 shrink-0 w-20'>
                          <button type='button'className='w-6 ' onClick={() => { removeToCart(product._id) }}>-</button>
                          <span className='w-7 text-center'>{cartItems[product._id]}</span>
                          <button type='button' className='w-6' onClick={() => addToCart(product._id)}>+</button>
                        </div>
                        :
                        (
                          <button className='text-sm text-primary border border-primary py-1 px-2 flex gap-2 shrink-0 w-20 justify-center' onClick={() => { addToCart(product._id); }}>
                            <img src={assets.cart_icon} alt="cart icon" />
                            <span>Add</span>
                          </button>
                        )
                        
                      } 
                      
                      
                    </div>
                  </div>
                )))
                : (
                  <h2>No products</h2>
                )
              }
            </div>
          </div>
        </div>
      )} 
    </>
  )
}

export default ProductDetails