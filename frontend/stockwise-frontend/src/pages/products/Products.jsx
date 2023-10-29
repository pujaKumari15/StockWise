import React, {useEffect, useState} from "react";
import './Products.css';
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";

const Product = () => {
    const[inventory, setInventory] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/inventory/products", {
        }).then((res) =>
        {
            setInventory(res.data);
        }).catch(err => console.log(err));

    }, []);

    return (
        <>
            <Sidebar/>
            <h1>Inventory</h1>
            <button className="add" >Add item</button><br></br>
            <div className="inventoryList">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Expiry Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    inventory.map((inventory,index) => {
                        return <tr key={index}>
                            <td>{inventory.productName}</td>
                            <td>{inventory.brand}</td>
                            <td>{inventory.category}</td>
                            <td>{inventory.quantity}</td>
                            <td>{inventory.expiryDate}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
            </div>
        </>
    )

}

export default Product;