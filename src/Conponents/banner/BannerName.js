import React from 'react'

export default function BannerName( {name , discount , link} ) {
    return (
        <div className="Banner-content">
            <h3> hellow {name} </h3>

            <p>get free discountv</p>

            <p>
                <span>${discount}</span> purchase
            </p>

            <a href={link}>Lrearn More</a>
        </div>
    );
}
