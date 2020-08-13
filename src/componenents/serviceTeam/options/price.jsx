import React from 'react';

const Price = (doc) => (
    <>
    <h1 className ='total-price'>TOTAL</h1>
    <p className ='total-price-value'> R$ {doc.doc.price},00</p>
    </>
    )

export default Price;