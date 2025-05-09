import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const ProductList = () => {
  const { products, setProducts, currency } = useAppContext();
  console.log(products)
  return (
    <div>
      <h1 className='text-2xl font-medium text-slate-700 mb-2.5'>All Product</h1>
      <div className='border border-gray-400  max-w-4xl overflow-scroll'>
        <table className='w-full table-auto'> 
          <thead>
            <tr>
              <th className='text-start px-4 py-2 font-semibold text-slate-800 truncate'>Product</th>
              <th className='text-start px-4 py-2 font-semibold text-slate-800 truncate'>Category</th>
              <th className='text-start px-4 py-2 font-semibold text-slate-800 truncate'>Selling Price</th>
              <th className='text-start px-4 py-2 font-semibold text-slate-800 truncate'>In Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 && products.map((product, index) => (
              <tr key={index}>
                <td className='text-start px-4 py-2 text-slate-600'>
                  <div className='flex items-center gap-3 truncate'>
                    <img src={product.image[0]} alt='' className='w-18 border border-gray-400 rounded' />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td className='text-start px-4 py-2 text-slate-600 truncate'>{product.category}</td>
                <td className='text-start px-4 py-2 text-slate-600 truncate'>{currency}{product.price}</td>
                <td className='text-start px-4 py-2  text-slate-600 truncate'>
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input type="checkbox" className="sr-only peer" defaultChecked={product.inStock} />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>   
                </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductList