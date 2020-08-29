import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout__ad" src="image1.png" />
            {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty!!!</h2>
                        <p>
                            You have no items in your basket.To buy one or more items, click
                            "Add to basket" next to the item.
                        </p>
                    </div>
                ) :
                    (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* list of items in basket */}

                            {
                                basket.map(item => (
                                    <CheckoutProduct
                                        item={item.id}
                                        title={item.title}
                                        price={item.price}
                                        image={item.image}
                                        rating={item.rating}
                                    />
                                ))

                            }
                        </div>
                    )
            }
        </div>
    )
}

export default Checkout
