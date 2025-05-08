import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddProduct = () => {
  const [formData, setFormData] = useState({
    images: [],
    productName: '',
    productDescription: '',
    productCategory: '',
    productPrice: 0,
    offerPrice: 0,
  });
    
  const productCategories = [
    "Vegetable",
    "Fruits",
    "Drinks",
    "Instant",
    "Dairy",
    "Bakery",
    "Grains"
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const imageUploadHandler = (e) => {
    const images = formData.images;
    images[e.target.name] = e.target.files[0];

    setFormData(prevData => ({
      ...prevData,
      images
    }));
  }

  const inputHandler = (e) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form onSubmit={submitHandler} className='bg-white max-w-lg flex flex-col gap-5'>
      {/* Product Image Section  */}
      <div>
        <p className='font-medium text-slate-800 mb-2.5'>Product Image</p>
        <div className='flex flex-wrap gap-5 justify-between'>
          {Array(4).fill('').map((_, index) => (
            <label htmlFor={`image${index}`}>
              <input key={index} type='file' id={`image${index}`} name={`${index}`}  className='hidden' onChange={imageUploadHandler}/>
              <img src={formData.images[index] ? URL.createObjectURL(formData.images[index]) :  assets.upload_area} alt={`image${index}`} className='max-w-24 max-h-24 rounded'/>  
            </label>
          ))}
        </div>
      </div>

      {/* Product Name Section  */}
      <div className='flex flex-col'>
        <label className='font-medium text-slate-800 mb-2.5' htmlFor='productName'>Product Name</label>
        <input type="text" value={formData.productName} name='productName' onChange={inputHandler} placeholder='Type here' className='outline-none border border-gray-400 rounded p-2 text-slate-800' id='productName' required/>
      </div>

      {/* Product Description Section  */}
      <div className='flex flex-col'>
        <label className='font-medium text-slate-800 mb-2.5' htmlFor='productDescription'>Product Description</label>
        <textarea placeholder='Type here' value={formData.productDescription} name='productDescription' onChange={inputHandler}  className='outline-none border border-gray-400 rounded p-2 h-32 text-slate-800 resize-none' id='productDescription' required></textarea>
      </div>

      {/* Product Category Section  */}
      <div className='flex flex-col'>
        <label className='font-medium text-slate-800 mb-2.5' htmlFor='productCategory'>Product Category</label>
        <select  value={formData.productCategory} name='productCategory' onChange={inputHandler} className='outline-none border border-gray-400 rounded p-2 text-slate-800 resize-none' id='productCategory'>
          <option value="">Select Category</option>
          {
            productCategories.map((category, index) => (
              <option key={index} value={category.toLowerCase()}>{category}</option>
            ))
          }
        </select>
      </div>

      {/* Product Price Section  */}
      <div className="flex justify-between flex-wrap gap-5">
        <div className='flex flex-1 flex-col w-32'>
          <label className='font-medium text-slate-800 mb-2.5' htmlFor='productPrice'>Product Price</label>
          <input type="number" value={formData.productPrice} name='productPrice' onChange={inputHandler} min={0} placeholder='0' className='outline-none border border-gray-400 rounded p-2 text-slate-800' id='productPrice' required/>
        </div>
        <div className='flex flex-1 flex-col w-32'>
          <label className='font-medium text-slate-800 mb-2.5' htmlFor='offerPrice'>Offer Price</label>
          <input type="number" value={formData.offerPrice} name='offerPrice' onChange={inputHandler} min={0} placeholder='0' className='outline-none border border-gray-400 rounded p-2 text-slate-800' id='offerPrice' required/>
        </div>
      </div>

      {/* Submit Button  */}
      <button type='submit' className='mt-5 bg-primary hover:bg-primary-dull text-white font-medium px-3 py-1 rounded text-lg' >Add Product</button>


    </form>
  )
}

export default AddProduct