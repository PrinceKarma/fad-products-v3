import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";
import { WishListItem } from "./wishlist-item";


export const WishList = () => {
    const { wishList, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="wishlist-container">
            <div>
                <h1>Wishlist</h1>
            </div>
            {wishList.length != 0 ? (
                <div className="wishlist">
                    {wishList.map((productId) => {
                        let product = PRODUCTS.find(product => product.id === productId)
                        return <WishListItem data={product} />;
                    })}
                </div>) : (
                <h2>Your WishList is Empty</h2>
            )}
        </div>
    );
};
