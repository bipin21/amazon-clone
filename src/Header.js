import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();
    console.log(basket);

    return (
        <nav className="header">

            {/* logo on left */}
            <Link to="/">
                <img className="header__logo" src="amazon.png" />
            </Link>
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* Links */}
            <div className="header__nav">
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello bipi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link className="header__link " to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>

                </Link>
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">You</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                </Link>
                {/* Basket */}
                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="" />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>

                </Link>
            </div>



        </nav>
    )
}

export default Header
