
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
    const storedCart = localStorage.getItem('cart');

    if (storedCart) {
        const parseData = JSON.parse(storedCart);
        const filterLocalData =  parseData.filter(localDataId => localDataId !== id)
        
        localStorage.removeItem('cart');
        saveItemToLocalStorage(filterLocalData)
    } else return []
}

export { getItemFromLocalStorage , addItemLocalStorage , removeFromLocStorage}