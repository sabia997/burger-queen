import React from 'react';

const Price = (doc) => (
    <React.Fragment>
        <h1 className='total-price'>TOTAL</h1>
        <p className='total-price-value'> R$ {doc.doc.price},00</p>
    </React.Fragment>
)

export default Price;