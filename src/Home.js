import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="banner.png" />

            {/* Product id, title, price, rating ,image */}
            <div className="home__row">
                <Product
                    id={1}
                    title="Title"
                    price={11.96}
                    rating={5}
                    image="product1.png"
                />
                <Product
                    id={1}
                    title="Title 1"
                    price={11.96}
                    rating={5}
                    image="product1.png"
                />
            </div>
            <div className="home__row">
                <Product
                    id={1}
                    title="Title"
                    price={11.96}
                    rating={5}
                    image="product1.png"
                />
                <Product
                    id={1}
                    title="Title 1"
                    price={11.96}
                    rating={5}
                    image="product1.png"
                />
                <Product
                    id={1}
                    title="Title 1"
                    price={11.96}
                    rating={5}
                    image="product1.png"
                />
            </div>
            <div className="home__row">
                <Product
                    id={1}
                    title="Title"
                    price={11.96}
                    rating={5}
                    image="product1.png"
                />
            </div>
        </div>
    )
}

export default Home
