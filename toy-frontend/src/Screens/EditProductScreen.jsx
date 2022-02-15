import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../Components/FormContainer';
import Loader from '../Components/Loader';
import {useParams} from 'react-router-dom';
import axios from 'axios'


function EditProductScreen() {
    //looks at the url
    const params = useParams();

    //gets the id from the url and names it a new variable.
    const productId = params.id;

    //what we are trying to edit
    const [product, SetProduct] = useState({});

    //define values and functions for state
    const [name, SetName] = useState('')
    const [price, SetPrice] = useState(0)
    const [description, SetDescription] = useState('')
    const [image, SetImage] = useState('')
    const [loading, SetLoading] = useState(true)
    const [posting, SetPosting] = useState(false)


    useEffect(()=>{
        //create function to call api for products
        const fetchProduct = async() =>{
            //api call
            const {data} = await axios.get(`https://localhost:7214/api/products/${productId}`)
            console.log(data)
            SetProduct(data)
            if (data){
                SetLoading(false)
            }
        }
        //Call the function
        fetchProduct()
    },[]);


    
    const submitHandler = async () => {
        SetPosting(true)
        console.log('CLICKED')
        console.log(name)
        console.log(price)
        console.log(description)
        console.log(image)
        const {response} = await axios.put(`https://localhost:7214/api/products/${productId}`,{
            id:productId,
            name:name,
            description:description,
            price:price,
            image:image
        })
    }



    return <div>
      <h1 className='py-3 text-center'>Edit Product</h1>
      {loading ? <Loader/> : (
        <FormContainer>

            <Form>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder={product.name} onChange={(e)=>SetName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" placeholder={product.price} onChange={(e)=>SetPrice(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" placeholder={product.description} onChange={(e)=>SetDescription(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="text" placeholder="Must be: img/name.JPG" onChange={(e)=>SetImage(e.target.value)}/>
                </Form.Group>

                
                <Button varient="primary" className='w-100 mx-auto'  onClick={submitHandler}>{posting ? <Loader/> : (<div>Save Changes</div>)}</Button>


            </Form>
        </FormContainer>
      )}
  </div>;
}

export default EditProductScreen;
