import React from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Home() {
  const data =useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()
  console.log(data);
  return (
    <div style={{marginTop:'100px'}}>
      <Row  className=' mb-5 justify-content-center'>
       { data?.length>0? data.map((product,index)=> (
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
          <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light me-2 '><i className="fa-solid fa-cart-plus fa-2x" style={{color:'black'}}></i></Button>
          <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light ms-2'><i class="fa-solid fa-heart fa-2x" style={{color: '#d60a0a'}}></i></Button>

        </div>
      </Card.Body>
    </Card>
        </Col>
        ))
        : <p className='text-danger fw-bolder'>Nothing to display</p>
        }
       
      </Row>
    </div>
  )
}

export default Home
