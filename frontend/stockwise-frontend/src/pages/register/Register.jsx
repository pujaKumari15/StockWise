import React, { useState } from 'react';

 const Register = () => {
    const [storeName, setStoreName] = useState('');
    const [storeAddress, setStoreAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [storeContactNumber, setStoreContactNumber] = useState('');

    const handleRegister = () => {
        // Add your registration logic here
        console.log('Registering with:', storeName, storeAddress, email, password, storeContactNumber);
    };

    return (
        <div>
            <h2>Register</h2>
            <form>
                <label>
                    Store Name:
                    <input
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Store Address:
                    <input
                        type="text"
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Store Contact Number:
                    <input
                        type="tel"
                        value={storeContactNumber}
                        onChange={(e) => setStoreContactNumber(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
