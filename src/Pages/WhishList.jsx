import React from 'react'
import { Row, Col,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function WhishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  // add to cart
  const ddToCartFromWishlist = (product)=> {
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
       <Row className='mb-5 ms-5'>
        {
         wishlistArray.length>0?
         wishlistArray.map((product,index)=> (
          <Col key={index} className='mb-3 ms-1' sm={12} md={6} lg={4} xl={3}>
          <Card  style={{ width: '18rem',height:'29rem' }} className=' shadow rounded'>
        <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>
            <p>{product?.description.slice(0,50)}....</p>
            <p className='fw-bolder fs-5'>${product?.price}</p>
          </Card.Text>
          <div className='d-flex justify-content-between mb-2'>
            <Button onClick={()=>ddToCartFromWishlist(product)}  className='btn btn-light me-2  '><i className="fa-solid fa-cart-plus fa-2x" style={{color:'black'}}></i></Button>
            <Button onClick={()=>dispatch(deleteFromWishlist(product.id))} className='btn btn-light ms-2  '><i class="fa-solid fa-trash fa-2x" style={{color: '#d60a0a'}}></i></Button>
  
          </div>
        </Card.Body>
      </Card>
          </Col>

         )): <p className='fw-bolder text-danger fs-5'>WishList is Empty</p>
        }

       </Row>
      
    </div>
  )
}

export default WhishList
