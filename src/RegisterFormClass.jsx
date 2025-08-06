import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
            semester: '',
            gender: '',
            message: '',
            password: '',
            confirmPassword: '',
            agree: false
        };
    }

    handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {
            name,
            email,
            mobile,
            semester,
            gender,
            message,
            password,
            confirmPassword,
            agree
        } = this.state;

        if (
            name === '' ||
            email === '' ||
            mobile === '' ||
            semester === '' ||
            gender === '' ||
            message === '' ||
            password === '' ||
            confirmPassword === ''
        ) {
            alert('Please fill all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!agree) {
            alert('You must agree to the terms and conditions');
            return;
        }

        const data = {
            name,
            email,
            mobile,
            semester,
            gender,
            message,
            password,
        };

        localStorage.setItem('formData', JSON.stringify(data));
        alert('Form submitted and saved to localStorage!');
    };

    render() {
        const {
            name,
            email,
            mobile,
            semester,
            gender,
            message,
            password,
            confirmPassword,
            agree
        } = this.state;

        return (
            <>
                <div style={{ marginBottom: '20px' }}>
                    <Link to="/functional" style={{
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'inline-block'
                    }}>
                        Switch to Functional Component
                    </Link>
                </div>
                <h2>Register (Class Component)</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input 
                        name="name"
                        value={name} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter Name" 
                    /><br /><br />

                    <label>Email: </label>
                    <input 
                        name="email"
                        value={email} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter Email" 
                    /><br /><br />

                    <label>Mobile: </label>
                    <input 
                        name="mobile"
                        value={mobile} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter Mobile No" 
                    /><br /><br />

                    <label>Semester: </label>
                    <select name="semester" value={semester} onChange={this.handleInputChange}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select><br /><br />

                    <label>Gender: </label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === 'Male'}
                        onChange={this.handleInputChange}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === 'Female'}
                        onChange={this.handleInputChange}
                    /> Female<br /><br />

                    <label>Message: </label><br />
                    <textarea 
                        name="message"
                        value={message} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter Message" 
                    /><br /><br />

                    <label>Password: </label>
                    <input 
                        type="password" 
                        name="password"
                        value={password} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter Password" 
                    /><br /><br />

                    <label>Confirm Password: </label>
                    <input 
                        type="password" 
                        name="confirmPassword"
                        value={confirmPassword} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter Confirm Password" 
                    /><br /><br />

                    <label>
                        <input 
                            type="checkbox" 
                            name="agree"
                            checked={agree} 
                            onChange={this.handleInputChange} 
                        />
                        I Agree Terms & Conditions
                    </label><br /><br />

                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default RegisterFormClass;
