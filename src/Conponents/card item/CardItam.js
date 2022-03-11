import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import "./cardItam.css"

export default function CardItam( { name , imgSrc , price } ) {

    const [qty , setQty ] = useState(1)

    return (
        <div className="card-itam">
            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>

            <div className="item-section">
                <h2 className="item-name">{name}</h2>
                <div className="itrem-quantity">
                    <span>x {qty} </span>
                    <div className="quantity">
                        <RemoveRounded className="item-remove" />
                        <AddRounded className='item-add' />
                    </div>
                </div>
            </div>

            <p className="item-price">
                <span className="dolor-sign">$</span>
                <span className="item-price-value">{price}</span>
            </p>
        </div>
    );
}
