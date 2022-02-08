import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Container} from 'react-bootstrap'
import Loader from '../Components/Loader';


function SingleProductScreen() {
    //looks at the url
    const params = useParams();

    //gets the id from the url and names it a new variable.
    const productId = params.id;



     //what we are trying to fetch
     const [product, SetProduct] = useState({});
     //manage if fetching is done yet
     const [loading, SetLoading] = useState(true);
 
     //run use effect on component/page load
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




  return <div>
        {loading ? <Loader/> : (
            <Container>
                <h1>{product.name}</h1>
                <img src={product.image} alt="Image of Game"></img>
                <p>{product.description}</p>
                <h2>£{product.price}</h2>
            </Container>
        )}
  </div>;
}

export default SingleProductScreen;
