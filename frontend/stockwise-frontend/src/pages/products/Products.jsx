import React, {useEffect, useState} from "react";
import './Products.css';
import { FaEdit } from "react-icons/fa";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Product = () => {
    const[inventory, setInventory] = useState([]);
    const[category, setCategory] = useState("");
    const[productName, setProductName] = useState("");
    const[productId, setProductId] = useState("");
    const[quantity, setQuantity] = useState(0);
    const[modal, setModal] = useState(false);
    const closeModal = () => {
        setModal(!modal);
    }
    useEffect(() => {
        axios.get("http://localhost:8080/inventory/1/products")
            .then((res) =>
        {
            setInventory(res.data);
        }).catch(err => console.log(err));

    }, []);

    async function updateProduct(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/inventory/1/updateProductQuantityInInventory", {
                "id" : productId,
                "name" : productName,
                "quantity": quantity,
                "category":category
            })
                .then(res => {
                    console.log(res);
                    alert("Product Updated Successfully");
                    window.location.reload();
                })
        } catch (e) {
            console.log(e);
            alert(e.response.data);
        }
    }

    return (
        <>
            <Sidebar/>
            <h1>Inventory</h1>
            <div className="inventoryList">
            <table>
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Expiry Date</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {
                    inventory.map((inventory,index) => {
                        return <tr key={index}>
                            <td>{inventory.id}</td>
                            <td>{inventory.name}</td>
                            <td>{inventory.brand}</td>
                            <td>{inventory.category}</td>
                            <td>{inventory.quantity}<span></span></td>
                            <td>{inventory.expiryDate}</td>
                            <td><button className="edit" onClick={() => {
                                setProductId(inventory.id);
                                setProductName(inventory.name);
                                setCategory(inventory.category);
                                setModal(!modal);
                            }}><FaEdit/></button></td>
                        </tr>
                    })
                }
                </tbody>
                {modal && ( <div className="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <h2>Update product Quantity</h2>
                                <p>Product Id: <span>{productId}</span></p>
                                <p>Product Name: <span>{productName}</span></p>
                                <p>Category: <span>{category}</span></p>
                                <label>Quantity: </label>
                                <input type="number" min="1" step="1"  onChange={(event) => {
                                    setQuantity(parseInt(event.target.value));
                                }}/>
                                <button onClick={updateProduct}>Update</button>
                            </div>
                        </div>
                    </div>
                )}
            </table>
            </div>
        </>
    )

}

export default Product;