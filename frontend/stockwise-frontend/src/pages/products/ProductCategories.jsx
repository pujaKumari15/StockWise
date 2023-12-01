import React, {useState} from "react";
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
import axios from "axios";
import Sidebar from "../dashboard/SideBar";

const ProductCategories = () => {
    const[category, setCategory] = useState("");
    const[productName, setProductName] = useState("");
    const[brand, setBrand] = useState("");
    const[quantity, setQuantity] = useState(0);
    const [doe, setDoe] = useState([]);
    const[modal, setModal] = useState(false);
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    const closeModal = () => {
        setModal(!modal);
    }
    async function addProduct(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/inventory/1/addProductToInventory", {
                "name" : productName,
                "brand":brand,
                "quantity": quantity,
                "category":category,
                "expiryDate":doe
            })
                .then(res => {
                    console.log(res);
                    alert("Product Added Successfully");
                    window.location.reload();
                })
        } catch (e) {
            console.log(e);
            alert(e.response.data);
        }
    }
    return (
        <>
            <div className='grid-container'>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <h1>Inventory Categories</h1>
            <div className="container">
            <div className="categories">
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("DAIRY")
                        setModal(!modal);
                    }}><img src={dairy}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("VEGETABLES")
                        setModal(!modal);
                    }}> <img src={vegetables}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("FLOUR_RICE_CEREALS")
                        setModal(!modal);
                    }}> <img src={staples}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("SNACKS")
                        setModal(!modal);
                    }}> <img src={snacks}  alt="logo"/></a>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("FRUITS")
                        setModal(!modal);
                    }}> <img src={fruits}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("BAKERY")
                        setModal(!modal);
                    }}><img src={bakery}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("BEVERAGES")
                        setModal(!modal);
                    }}> <img src={beverages}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("MEAT_AND_SEAFOOD")
                        setModal(!modal);
                    }}> <img src={meat}  alt="logo"/></a>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("FROZEN_FOOD")
                        setModal(!modal);
                    }}><img src={frozen}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("CONDIMENTS")
                        setModal(!modal);
                    }}>  <img src={condiments}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("CLEANING_AND_HOUSEHOLD")
                        setModal(!modal);
                    }}> <img src={cleaning}  alt="logo"/></a>
                </div>
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("PERSONAL_HYGIENE")
                        setModal(!modal);
                    }}><img src={hygiene}  alt="logo"/></a>
                </div>
            </div>
            <div className="categories">
                <div className="category">
                    <a href="#" onClick={() => {
                        setCategory("COOKING_ESSENTIALS")
                        setModal(!modal);
                    }}> <img src={cookingEssentials}  alt="logo"/></a>
                </div>
            </div>
                {modal && ( <div className="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>Add item</h2>
                                <p>Category: <span>{category}</span></p>
                                <label>Name: </label>
                                <input type="text" onChange={(event) => {
                                    setProductName(event.target.value);
                                }}/>
                                <br/>
                                <label>Brand: </label>
                                <input type="text"  onChange={(event) => {
                                    setBrand(event.target.value);
                                }}/>
                                <br/>
                                <label>Quantity: </label>
                                <input type="number" min="1" step="1"  onChange={(event) => {
                                    setQuantity(parseInt(event.target.value));
                                }}/>
                                <br/>
                                <label>Date of Expiry: </label>
                                <input type="date" onChange={(event) => {
                                    setDoe(event.target.value);
                                }}/>
                                <button onClick={addProduct}>Add Product</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </>
    )

}



export default ProductCategories;