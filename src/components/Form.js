// Form.js

import React, { useState } from 'react';
import img from '../images/category.png'

const Form = () => {

  const [formstep, setFormstep] = useState(0)
const handelNext = ()=>{
  setFormstep(1)
}

const handleback = ()=>{
  setFormstep(0)
}

  return (
   <>
     { formstep===0 && <div className='formdiv'>
      <div className="form-wrapper">
        <h1 className='heading' >Lets add a type, Category and Sub-category</h1>
        <form>
          <label className='label' >
            Add a product type
            <input className='inputs' placeholder='eg. books' />
          </label>
          <label className='label'>
            Add a category (optional)
            <input className='inputs' placeholder='eg: Academic book' />
          </label>
          <label className='label' >
            Add a sub-category(optional)
            <input className='inputs' placeholder='eg: medical book' />
          </label>

          <div className='form-btns'>
            <button className='form-btn-back' >Back</button>
            <button className='form-btn' onClick={handelNext} >Next</button>
          </div>
        </form>
      </div>

      <div className="image-wrapper">
        <img src={img} alt="Placeholder" />
      </div>
    </div>

}
   { formstep===1 && <div className='formdiv-1'>
      <div className="scroll-form">
        <h1 className='title' >Lets bulid your first product</h1>
        <h2>Basic detailes</h2>
        <form>
          <label className='label' >
            product name
            <input className='inputs' placeholder='eg. books' />
          </label>
          <label className='label'>
            product discription
            <textarea className='textarea' rows='10' cols='65' placeholder='eg: Academic book' />
          </label>
          <label className='label' >
          Add Image(s)
          <input className='inputs' placeholder='img URL' />
          </label>
          <label className='label' >
            <input type='checkbox' />
            this product has an SKU code
          </label>
          <input className='input-code' placeholder='eg- PROD0001' />
          <label className='label' >
            <input type='checkbox' />
            this product has an HSN/SAC code
          </label>

----------------------------------------------------------------------------------------
          

          <h2>Pricing Details</h2>
          <label className='label' >
            <input type='checkbox' />
            price inclusive of GST
          </label>

         <div className='price' >
         <label className='label' >
            Net price
            <input className='inputs-price' placeholder='eg- 80' />
          </label>
          <label className='label' >
            Net price
            <input className='inputs-price' placeholder='eg- 80' />
          </label>
         </div>

         <div className='price' >
         <label className='label' >
            Discount percentage
            <input className='inputs-price' placeholder='eg- 40' />
          </label>
          <label className='label' >
            GST rates
            <input className='inputs-price' placeholder='eg- 40' />
          </label>

         </div>

         <div className='price' >
         <label className='label' >
            Shipping charges (if any)
            <input className='inputs-price' placeholder='eg- 40' />
          </label>
          <label className='label' >
            Stock level
            <input className='inputs-price' placeholder='eg- 40' />
          </label>

         </div>
          
          
          <div className='form-btns'>
            <button className='form-btn-back' onClick={handleback}  >Back</button>
            <button className='form-btn'>Next</button>
          </div>
        </form>
        
      </div>

      <div className="product-img">
        <img src={img}  alt="Placeholder" />
      </div>
    </div>}
   </>
  );
};

export default Form;
