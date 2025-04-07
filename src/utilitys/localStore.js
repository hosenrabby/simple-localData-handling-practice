
const getItemFromLocalStorage = ()=>{
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
        const getStoreCart = JSON.parse(storedCart);
        return getStoreCart;
    } else return []
}


const saveItemToLocalStorage = reciveCartData =>{
    const stringfyData = JSON.stringify(reciveCartData);
    localStorage.setItem('cart' , stringfyData)
}

const addItemLocalStorage = id =>{
    const cart = getItemFromLocalStorage();

    const newCart = [...cart,id];
    saveItemToLocalStorage(newCart)
}

const removeFromLocStorage = (id)=>{
    const getCart = getItemFromLocalStorage()
    const delCartData = getCart.filter(cartData => cartData  !== id)
    saveItemToLocalStorage(delCartData)
}

export { getItemFromLocalStorage , addItemLocalStorage , removeFromLocStorage}