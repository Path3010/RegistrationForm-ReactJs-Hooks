import React from 'react';
function RegisterForm() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [agree, setAgree] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

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

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                </div>
                <div>
                    <label>Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                </div>
                <div>
                    <label>Mobile: </label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile No" />
                </div>
                <div>
                    <label>Semester: </label>
                    <select value={semester} onChange={(e) => setSemester(e.target.value)}>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div>
                    <label>Gender: </label>
                    <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
                </div>
                <div>
                    <label>Message: </label><br />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message" />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                        I Agree Terms & Conditions
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterForm;
