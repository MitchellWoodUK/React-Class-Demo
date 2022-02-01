import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../Components/FormContainer';
import Loader from '../Components/Loader';
import axios from 'axios'

function AddProductScreen() {

    //define values and functions for state
    const [name, SetName] = useState('')
    const [price, SetPrice] = useState(0)
    const [description, SetDescription] = useState('')
    const [image, SetImage] = useState('')
    const [posting, SetPosting] = useState(false)

    const submitHandler = async () => {
        SetPosting(true)
        console.log('CLICKED')
        console.log(name)
        console.log(price)
        console.log(description)
        console.log(image)
        const {response} = await axios.post("https://localhost:7214/api/products",{
            name:name,
            description:description,
            price:price,
            image:image
        })
    }



    return <div>
      <h1 className='py-3 text-center'>Add Product</h1>
      <FormContainer>

        <Form>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Product Name..." onChange={(e)=>SetName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="Product Price (£)..." onChange={(e)=>SetPrice(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Product Description</Form.Label>
                <Form.Control type="text" placeholder="Product Description..." onChange={(e)=>SetDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="text" placeholder="Must be: img/name.JPG" onChange={(e)=>SetImage(e.target.value)}/>
            </Form.Group>

            
            <Button varient="primary" className='w-100 mx-auto'  onClick={submitHandler}>{posting ? <Loader/> : (<div>Add Product</div>)}</Button>


        </Form>
      </FormContainer>
  </div>;
}

export default AddProductScreen;
