import { useState } from 'react'

// internal imports
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'; //keep as CSS stylesheet so global CSS styling
import CustomerList from './components/CustomerList';
import OrderList from './components/OrderList';

function App(props) {
  // initializing state with hooks for functional components
  const [selectedCustomerId, setCustomerId] = useState(null)
  
  // you don't always need to mount your component if you don't need your component to 
  // do anything when it initially renders
  
  // need to be setup this way when we pass a function/event into a child component
  const handleCustomerSelect = (customerId) => {
    setCustomerId(customerId)
  }

  return (
    <div className='app-container'>
      <h1> {props.title} </h1>
      <CustomerList onCustomerSelect= { handleCustomerSelect } />
      { selectedCustomerId && 
        <div>
          <h2>Selected Customer: {selectedCustomerId}</h2> 
          <OrderList customerId={selectedCustomerId} />
        </div>
      }
    </div>
  )
}

export default App
