import React from 'react';
import Products from '../products/Products';
import './shop.css'
const Shop = () => {
    const someProducts = [
        'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3573603/pexels-photo-3573603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/3172571/pexels-photo-3172571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/597667/pexels-photo-597667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
    return (
        <div>

            <div className='boxes'>
                {
                    someProducts.map((product, idx) => <Products
                        key={idx}
                        product={product}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;