import React from 'react';
import './product.css'

const Products = ({ product }) => {
    return (
        <div>

            <div className='card'>
                <h1>this product</h1>
                <img className='img' src={product} alt="" />
                <h3>price: 400$</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt facere deleniti libero, praesentium, cumque at asperiores fuga velit, corporis dicta deserunt architecto provident quia assumenda eligendi neque et doloremque quisquam?</p>
            </div>
        </div>
    );
};

export default Products;