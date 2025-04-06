import React from 'react';

const ProdDetail = ({smartPhones , handleCart }) => {
    const {name,brand,image,price,releaseYear
     } = smartPhones;
    //  console.log(smartPhones)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img className='w-52'
                    src={image}
                    alt="Phone"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Full Mobile Specification</h2>
                    <p><b>Model : {name}</b></p>
                    <p><b>Brand :</b> {brand}</p>
                    <p><b>Release Year :</b> {releaseYear}</p>
                    <p><b>Price :</b> {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>handleCart(smartPhones)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdDetail;