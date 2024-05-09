import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// internal imports
import '../App.css'; 
// import CustomerForm from './CustomerForm';
import OrderList from './OrderList';
import NavBar from './NavBar';

export class CustomerList extends Component {
    // Step 1 of Component LifeCycle: Initialization
    // useState hooks take the place of constructors
    constructor(){
        super();
        this.state = {
            customers: [],
            selectedCustomerId: null,
        }
        this.selectCustomer = this.selectCustomer.bind(this); //makes sure we call this method and ONLY this method
    }
    // Step 2 of Component LifeCycle: Mounting
    // class component method name convention
    componentDidMount(){
        // where any API calls want to be made right away when the page is render
        // simulate an API call to fetch customer data 
        const fetchedCustomers = [
            { id: 1, name: 'Edwin'},
            { id: 2, name: 'Alexa'},
            { id: 3, name: 'Mary'}
        ]
        // store this in state management
        // Step 3 of Componnent LifeCycle: Updating
        this.setState({ customers: fetchedCustomers })
    }
    
    
    // method to update State
    // custom method we made
    selectCustomer =  (id) => {
        console.log(id)
        this.setState({ selectedCustomerId: id })
        // we are going to also pass id into our parent component
        
        // this is being impatient not waiting for state to be set
        // this.props.onCustomerSelect( name )
        // console.log('customer selected: ', this.state.selectedCustomerId)
    }
    
    // Step 4 of Component LifeCycle: Unmounting
    // class component method name convention
    // gets called immediately after mounting method is finished
    componentWillUnmount(){
        // this is where you'd put any cleanup for events or api calls
        alert('CustomerList Component is being unmounted')
    }
    
    
  render() {
    
    const myCustomers = this.state.customers
    return (
        <div>
        <NavBar />
            <div className='customer-list'>
                <h1>All the Customers!</h1>
                    <div>
                    {myCustomers.map( customer => (
                        <div>
                            <h3 key={customer.id} className="customer-card" onClick={ () => this.selectCustomer(customer.id) }>
                            Customer Name: {customer.name}
                            </h3>
                            <Link to={`../edit-customer/${customer.id}`}>Edit</Link>
                        </div>
                    ))}
                    </div>  
                    { this.state.selectedCustomerId && 
                    <div>
                        <h2>Selected Customer: {this.state.selectedCustomerId}</h2> 
                        <OrderList customerId={this.state.selectedCustomerId} />
                    </div>
                }
            </div>
      </div>
    )
  }
}


export default CustomerList



// OLD CustomerList Component
// export class CustomerList extends Component {
//     // Step 1 of Component LifeCycle: Initialization
//     constructor(props){
//         super(props);
//         this.state = {
//             customers: [],
//             selectedCustomerId: null
//         }
//     }
//     // Step 2 of Component LifeCycle: Mounting
//     // class component method name convention
//     componentDidMount(){
//         // where any API calls want to be made right away when the page is render
//         // simulate an API call to fetch customer data 
//         const fetchedCustomers = [
//             { id: 1, name: 'Edwin'},
//             { id: 2, name: 'Alexa'},
//             { id: 3, name: 'Mary'}
//         ]
//         // store this in state management
//         // Step 3 of Componnent LifeCycle: Updating
//         this.setState({ customers: fetchedCustomers })
//     }
    
//     // Step 3 of Component LifeCycle: Updating
//     // class component method name convention
//     componentDidUpdate(prevProps, prevState) {
//         // we only call upon props from parent container IF the state changed
//         if (prevState.selectedCustomerId !== this.state.selectedCustomerId){
//             this.props.onCustomerSelect( this.state.selectedCustomerId )
//         }
//     }
    
//     // method to update State
//     // custom method we made
//     selectCustomer =  (id) => {
//         console.log(id)
//         this.setState({ selectedCustomerId: id })
//         // we are going to also pass id into our parent component
        
//         // this is being impatient not waiting for state to be set
//         // this.props.onCustomerSelect( name )
//         // console.log('customer selected: ', this.state.selectedCustomerId)
//     }
    
//     // Step 4 of Component LifeCycle: Unmounting
//     // class component method name convention
//     // gets called immediately after mounting method is finished
//     componentWillUnmount(){
//         // this is where you'd put any cleanup for events or api calls
//         alert('CustomerList Component is being unmounted')
//     }
    
    
//   render() {
    
//     const myCustomers = this.state.customers
//     return (
//       <div className='customer-list'>
//         <CustomerForm />
//         <h1>All the Customers!</h1>
//             <div>
//             {myCustomers.map( customer => (
//                 <h3 className="customer-card" key={customer.id} onClick={ () => this.selectCustomer(customer.id) }>
//                     Customer Name: {customer.name}
//                 </h3>
//             ))}
//             </div>  
//       </div>
//     )
//   }
// }