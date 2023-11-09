import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart, emptyCart, removeFromCart } from '../redux/cartSlice';


function Cart() {
  const cartArray =useSelector()
  // console.log(cartArray);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [total,setTotal]= useState(0)
  // total amount
  const totalAmount = ()=> {
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=> {
    totalAmount()
  },[cartArray])

  const checkOut =()=> {
    alert("Your order is placed")
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{marginTop:'100px'}}>
      {
        cartArray.length>0?
       <>
        <div className='row ms-5 me-5'>
         <div className='col-md-8'>
            <table className='container table mt-5 rounded shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th> Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArray.map((product,index)=> (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{product.title}</td>
                      <td> <img width={'100px'}  height={'100px'} src={product.thumbnail} alt="" /></td>
                      <td>{product.price}</td>
                      <td> <button onClick={()=>dispatch(removeFromCart(product.id))} className='btn'> <div className="fa-solid fa-trash text-danger fa-2x"></div> </button> </td>
    
                    </tr>
    
                  ))
                }
              </tbody>
    
            </table>
         </div>
        <div className='col-md-1'></div>
        <div className='col-md-3 border rounded p-3 mt-5 shadow'>
        <h3 className='text-success fw-bolder'>Cart Summary</h3>
        <h5>Total Products : <span>{cartArray.length}</span> </h5>
        <h4>Total : $ <span className='text-danger fw-bolder fs-3'>{total}</span></h4>
        <button onClick={checkOut} className='btn btn-success mt-3 w-100'>Check Out</button>
        </div>
        </div>
        </>

         : <p className='fw-bolder text-danger'>Cart is Empty</p>
        }
    </div>
  )
}

export default Cart
