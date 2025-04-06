import React, { use, useEffect, useState } from 'react';
import ProdDetail from './ProdDetail';
import { addItemLocalStorage, getItemFromLocalStorage,removeFromLocStorage} from '../utilitys/localStore';
import Cart from './Cart';

const Products = ({prodData}) => {
    const smartPhones = use(prodData)
    const [cart,setCart] = useState([]);
    // console.log(cart)


    useEffect(()=>{
        const localStorageData = getItemFromLocalStorage();
        
        const storedCart = []
        for (const id of localStorageData) {
            // console.log(id);
            const prodCompare = smartPhones.find(value => value.id === id)
            storedCart.push(prodCompare)
            setCart(storedCart)
        }
    },[smartPhones])

    const handleCart = (smartPhones)=>{
        const cartDetail = [...cart,smartPhones.id]
        setCart(cartDetail);
        addItemLocalStorage(smartPhones.id);
    }

    const handleCartRemove = (id) => {
        // console.log('remove this id' , id)
        const afterRemoveCart = cart.filter(cart => cart.id !== id)
        setCart(afterRemoveCart);
        removeFromLocStorage(id)
    }
    return (
        <div>
            <div className='p-3 border border-gray-400 rounded-2xl'>
                <h2>Product Cart : {cart.length}</h2>
                <Cart 
                handleCartRemove={handleCartRemove}
                cart={cart}></Cart>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10">
            {
            smartPhones.map(value => <ProdDetail 
                key={value.id} 
                smartPhones={value} 
                handleCart={handleCart}
                ></ProdDetail>)
            }
            </div>
        </div>
    );
};

export default Products;