import React, {useEffect, useState} from 'react';
import './Register.css';
import { Link, useNavigate} from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [storeName, setStoreName] = useState('');
    const [storeAddress, setStoreAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [storeContactNumber, setStoreContactNumber] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        // Check if all fields are filled
        if (!firstName || !lastName || !storeName || !storeAddress || !email || !password || !storeContactNumber) {
            formIsValid = false;
            errors["form"] = "All fields are mandatory";
        }

        // Check email format
        // if (typeof email !== "undefined") {
        //     if (!email.endsWith('@abc.com')) {
        //         formIsValid = false;
        //         errors["email"] = "Email should be in @abc.com format";
        //     }
        // }

        // Check password length
        if (password.length < 8) {
            formIsValid = false;
            errors["password"] = "Password should be at least 8 characters long";
        }

        setErrors(errors);
        return formIsValid;
    }


    const handleRegister = () => {
        if (validateForm()) {
            console.log('Registering with:', firstName, lastName, email, password, storeName, storeAddress,
                storeContactNumber);

            // Prepare the user data to send
            const userData = {
                username: email, // Assuming the username is the email
                password: password,
                email: email,
                firstname: firstName,
                lastname: lastName,
                storeName: storeName,
                storeAddress: storeAddress,
                storeContactNumber: storeContactNumber
            };

            // Send the POST request to the backend
            fetch('http://localhost:8081/register/manager', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text(); // Or response.json() if your server sends a JSON response
                })
                .then(data => {
                    // Handle the response data
                    console.log('Registration successful', data);
                    alert('Registration successful! Click on ok to continue login');
                    navigate('/');
                })
                .catch(error => {
                    // Handle any errors here
                    console.error('Error during registration:', error);
                });
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form">
                <label className="input-label">
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="input-field"
                    />
                </label>
                <label className="input-label">
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="input-field"
                    />
                </label>
                <label className="input-label">
                    Store Name:
                    <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        className="input-field"
                    />
                </label>
                <label className="input-label">
                    Store Address:
                    <input
                        type="text"
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                        className="input-field"
                    />
                </label>
                <label className="input-label">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                    />
                </label>
                <label className="input-label">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                </label>
                <label className="input-label">
                    Store Contact Number:
                    <input
                        type="tel"
                        value={storeContactNumber}
                        onChange={(e) => setStoreContactNumber(e.target.value)}
                        className="input-field"
                    />
                </label>
                <button type="button" onClick={handleRegister} className="register-button">
                    Register
                </button>
            </form>
            <div className="error-messages">
                {Object.keys(errors).map((key) => (
                    <p key={key} style={{ color: 'red' }}>{errors[key]}</p>
                ))}
            </div>
            <div className="login-link-container">
                <Link to="/Login" className="login-link">Existing user? Log in here</Link>
            </div>

        </div>
    );
};

export default Register;
