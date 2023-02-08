import React from 'react';


export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.13;
    const shippingPrice = itemPrice > 2000 ? 0 : 30;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className='col-2' text-right>
                        {item.qty} x $ {item.price.toFixed(2)}
                    </div>
                </div>
            )
            )
            }
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Items Price</div>
                        <div className='col-1 text-right'>${itemPrice.toFixed(2)}</div>

                    </div>

                    <div className='row'>
                        <div className='col-2'>Tax Price </div>
                        <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>

                    </div>

                    <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>

                    </div>

                    <div className='row'>
                        <div className='col-2'><strong>Toltal Price</strong></div>
                        <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>

                    </div>
                    <hr />
                    <div className='row'>
                        <button onClick={() => alert('Implement checkout')}>
                            Checkout
                        </button>

                    </div>

                </>
            )
            }



        </aside>
    );
}