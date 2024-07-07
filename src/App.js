// App.js

import React, { useState } from 'react';
import Card from './components/card'; 
import Form from './components/Form';
import image from './images/theme1.png'
import image2 from './images/theme2.png';
import image3 from './images/theme3.png';
import img from './images/category.png';

const App = () => {
  const [form, setForm] = useState(true);

  
  const [formstep, setFormstep] = useState(0)
  const handleClick = () => {
    setFormstep(1)
  };

  const handleHome = ()=>{
    setFormstep(0)
  }
  const handelNext = ()=>{
    setFormstep(2)
  }
  
  const handleback = ()=>{
    setFormstep(1)
  }

  const [appliedCards, setAppliedCards] = useState(Array(3).fill(false));

  const handleApplyClick = (index) => {
    const newAppliedCards = [...appliedCards];
    newAppliedCards[index] = !newAppliedCards[index];
    setAppliedCards(newAppliedCards);
  };

  return (
    <div>
      {formstep ===0 && (
        <>
          <h1 className='main-heading' >Apply a theme</h1>
          <div className='container'>
          <Card
              title="Bags theme"
              description="This is a simple card component example. You can customize the content as needed."
              imageSrc={image}
              applied={appliedCards[0]}
              handleApplyClick={() => handleApplyClick(0)}
            />
            <Card
              title="Flex theme"
              description="This is a simple card component example. You can customize the content as needed."
              imageSrc={image3}
              applied={appliedCards[2]}
              handleApplyClick={() => handleApplyClick(2)}
            />
            <Card
              title="Chin theme"
              description="This is a simple card component example. You can customize the content as needed."
              imageSrc={image2}
              applied={appliedCards[1]}
              handleApplyClick={() => handleApplyClick(1)}
            />

          </div>

          <div className='btn-next'>
            <button className="next-button" onClick={handleClick}>Next</button>
          </div>
        </>
      )}

      {formstep===1 && <div className='formdiv'>
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
            <button className='form-btn-back' onClick={handleHome} >Back</button>
            <button className='form-btn' onClick={handelNext} >Next</button>
          </div>
        </form>
      </div>

      <div className="image-wrapper three">
        <img src={img} alt="Placeholder" />
      </div>
    </div>    
      }
      { formstep===2 && <div className='formdiv-1'>
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

<div>
<hr ></hr>
          
</div>

          <h2>Pricing Details</h2>
          <label className='label' >
            <input type='checkbox' />
            price inclusive of GST
          </label>

         <div className='price' >
         <label className='label one' >
            Net price of the product
            <input className='inputs-price' placeholder='eg- 80' />
          </label>
          <label className='label' >
            List price of the product
          <input className='inputs-price' placeholder='eg- 80' />
          </label>
         </div>

         <div className='price' >
         <label className='label' >
            Discount percentage
            <input className='inputs-price' placeholder='eg- 40' />
          </label>
          <label className='label' >
            GST rates of the product
            <input className='inputs-price' placeholder='eg- 40' />
          </label>

         </div>

         

         <div className='price' >
         <label className='label' >
            Shipping charges (if any)
            <input className='inputs-price' placeholder='eg- 40' />
          </label>
          <label className='label' >
            Stock level in inventory
            <input className='inputs-price two' placeholder='eg- 40' />
          </label>

         </div>
          
          
          <div className='form-btns'>
            <button className='form-btn-back' onClick={handleback}  >Back</button>
            <button className='form-btn'>Next</button>
          </div>
        </form>
        
      </div>

      <div className="image-wrapper">
        <img src={img}  alt="Placeholder" />
      </div>
    </div>}


    </div>
  );
};

export default App;
