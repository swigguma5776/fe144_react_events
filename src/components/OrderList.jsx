import React, { useState, useEffect } from 'react'

function OrderList(props) {
    // grab customerId from props
    // const props = {
    //     customerId: 1
    // }
    const { customerId } = props; //variable deconstructing
    const [orders, setOrders] = useState([]); //we want to display the orders based off of that customer
    
    useEffect( () => {
        // make an API call with the customerId to get the orderId info
        const fetchOrderData = async (customerId) => {
            //make api call
            // const response = await fetch(`https://exampleapi/${customerId}`)
            // return await response.json()
            
            // fake data from a fake api call below
            console.log('In the useEffect!')
            let fetchedOrders = []
            console.log(customerId)
            if (customerId == 1){
                fetchedOrders = [
                    {id: 100, date: '2024-05-06'},
                    {id: 101, date: '2024-05-07'},
                    {id: 102, date: '2024-05-08'},
                ]
            } else if (customerId == 2){
                fetchedOrders = [
                    {id: 103, date: '2024-05-03'},
                    {id: 104, date: '2024-05-04'},
                    {id: 105, date: '2024-05-05'},
                ]
            } else if (customerId == 3) {
                fetchedOrders = [
                    {id: 106, date: '2024-04-30'},
                    {id: 107, date: '2024-05-01'},
                    {id: 108, date: '2024-05-02'},
                ]
            }
            console.log(fetchedOrders)
            setOrders(fetchedOrders);
        } 
        
        fetchOrderData(customerId);
        
    }, [customerId]); //listening for changes to my customerId
    
    
  return (
    <div className='order-list'>
        <h2>Your Orders</h2>
        <ul>
            {orders.map( order => (
                <li key={order.id}>
                    Order ID: {order.id} Date: {order.date}
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default OrderList
