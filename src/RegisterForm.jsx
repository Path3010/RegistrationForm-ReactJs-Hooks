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
        <>
            <h2>Register (Functional Component)</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br /><br />

                <label>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" /><br /><br />

                <label>Mobile: </label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile No" /><br /><br />

                <label>Semester: </label>
                <select value={semester} onChange={(e) => setSemester(e.target.value)}>
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
                    onChange={(e) => setGender(e.target.value)}
                /> Male
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                /> Female<br /><br />

                <label>Message: </label><br />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message" /><br /><br />

                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" /><br /><br />

                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" /><br /><br />

                <label>
                    <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                    I Agree Terms & Conditions
                </label><br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default RegisterForm;
