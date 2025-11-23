import React, { useState } from 'react'
import './FormComponents.css'


const FormComponents = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleFormData = (event) => {
    const name = event.target.name
    const value = event.target.value
     
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handlesubmit = (event) => {
    event.preventDefault()
    console.log(`firstName:${formData.firstName}, LastName:${formData.lastName}, Email:${formData.email}`);
  }
  return (
    <div>
      <form onSubmit={handlesubmit} className="form-container">
        <div className="form-card">
          <label htmlFor="firstName">First Name:</label>
          <input name='firstName' id="firstName" type="text" placeholder="Enter First Name" value={formData.firstName} onChange={handleFormData} />
        </div>

        <div className="form-card">
          <label htmlFor="lastName">Last Name:</label>
          <input name='lastName' id="lastName" type="text" placeholder="Enter Last Name" value={formData.lastName} onChange={handleFormData}/>
        </div>

        <div className="form-card">
          <label htmlFor="email">Email:</label>
          <input name='email' id="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleFormData}/>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default FormComponents