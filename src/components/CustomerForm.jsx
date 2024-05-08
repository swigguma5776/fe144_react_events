import React, { useState } from 'react';
import axios from 'axios'; 

function CustomerForm() {
    // might want props?
    const [customerData, setCustomerData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    
    // local to this component only
    // inline styling 
    const formStyles = { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'start', 
        justifyContent: 'space-between', 
        height: '250px'
    }
    
    const handleChange = (event) => {
        event.preventDefault();
        let { name, value } = event.target; // grabbing the name attribute & value attribute & setting to these variable names
        // using the spread operator ... to grab the data thats ALREADY in customerData
        const newData = { ...customerData}
        for (let [key, val] of Object.entries(newData)) {
            if (key == name) {
                newData[key] = value
            }
        }
        console.log(newData)
        setCustomerData(newData)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await axios.post(`https://httpbin.org/post`, {
            body: customerData
        })
        console.log(response.data)
    }
    
  return (
    <div>
        <form style={formStyles} onSubmit={handleSubmit}>
            <h3> Add/Edit Customer </h3>
            <label htmlFor='name'>Name:</label>
            <input type='text' name="name" value={customerData.name} onChange={handleChange} />
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name="phone" value={customerData.phone} onChange={handleChange} />
            <label htmlFor='email'>Email:</label>
            <input type='text' name="email" value={customerData.email} onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default CustomerForm
