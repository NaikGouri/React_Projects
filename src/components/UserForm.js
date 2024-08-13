import React, { useState } from "react";

const UserForm = () => {
    const [userName, setUserName] = useState('')
    const [userContact, setUserContact] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!userName) newErrors.userName = 'Name is required';
        if (!userContact) newErrors.contact = 'Contact is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccessMessage('');
        } else {
            setSuccessMessage('Form submitted successfully!');
            setErrors({});
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>User Form</p>
            <div>
                <input type="text" aria-label="username" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                {errors.userName && <p role="alert">{errors.userName}</p>}
            </div>
            <div>
                <input type="number" aria-label="Contact" value={userContact} onChange={(e) => setUserContact(e.target.value)}></input>
                {errors.contact && <p role="alert">{errors.contact}</p>}
            </div>
            <button  type="submit">Submit</button>
            {successMessage && <p role="alert">{successMessage}</p>}
        </form>
    )
}

export default UserForm;