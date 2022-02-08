import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


function HomeScreen() {
    return (
        <div>
           
            <div className="bg-banner container-flex">
                <div className="banner-content text-center">
                    <h1 className="heading-text text-center">welcome to toy land!</h1>
                    <Button as={Link} to="/products" variant="light" className="px-5 ">see our toys!</Button>
                </div>
            </div>

        </div>
    )
}

export default HomeScreen
