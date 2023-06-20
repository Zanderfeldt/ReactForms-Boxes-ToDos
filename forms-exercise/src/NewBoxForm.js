import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    color: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({...formData, id: uuid() });
    setFormData({
      height: '',
      width: '',
      color: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input 
        id='color'
        type="text"
        name="color"
        placeholder="Box Color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input 
        id='height'
        type="text"
        name="height"
        placeholder="Box Height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input 
        id='width'
        type="text"
        name="width"
        placeholder="Box Width"
        value={formData.width}
        onChange={handleChange}
      />
      <button>Create Box</button>
    </form>
  )
}

export default NewBoxForm;