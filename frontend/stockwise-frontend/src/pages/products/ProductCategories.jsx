import React from "react";
import './Products.css';
import dairy from "../../assets/product_categories/dairy.svg";
import vegetables from "../../assets/product_categories/vegetables.svg";
import fruits from "../../assets/product_categories/fruits.svg";
import meat from "../../assets/product_categories/meat.svg"
import beverages from "../../assets/product_categories/beverages.svg"
import bakery from "../../assets/product_categories/bakery.svg"
import frozen from "../../assets/product_categories/frozen.svg"
import condiments from "../../assets/product_categories/condiments.svg"
import snacks from "../../assets/product_categories/snacks.svg"
import staples from "../../assets/product_categories/staples.svg"
import cleaning from "../../assets/product_categories/cleaning.svg"
import hygiene from "../../assets/product_categories/hygiene.svg"
import cookingEssentials from "../../assets/product_categories/cookingEssentials.svg"
import Sidebar from "../../components/sidebar/Sidebar";

const ProductCategories = () => {
    return (
        <>
            <Sidebar/>
            <h1>Inventory Categories</h1>
            <div className="container">
            <div className="categories">
                <div className="category">
                    <img src={dairy}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={vegetables}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={staples}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={snacks}  alt="logo"/>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <img src={fruits}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={bakery}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={beverages}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={meat}  alt="logo"/>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <img src={frozen}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={condiments}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={cleaning}  alt="logo"/>
                </div>
                <div className="category">
                    <img src={hygiene}  alt="logo"/>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <img src={cookingEssentials}  alt="logo"/>
                </div>
            </div>
            </div>
        </>
    )

}


export default ProductCategories;