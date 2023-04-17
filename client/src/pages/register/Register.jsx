import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
        } catch (err) {
            setErr(err.response.data);
        }
    };

    console.log(err)

    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Friendzy</h1>
                    <p>
                        Friendzy - the social network that's all about building meaningful connections with people who share your interests, passions, and outlook on life.
                    </p>
                    <span>Do you have an account?</span>
                    <Link to="/login">
                        <button>Sign In</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Sign Up</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleClick}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
