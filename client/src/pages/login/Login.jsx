import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/")
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Friendzy</h1>
                    <p>
                        Friendzy - the social network that's all about building meaningful connections with people who share your interests, passions, and outlook on life.
                    </p>
                    <span>Don't have any friends? No worries!</span>
                    <Link to="/register">
                        <button>Sign Up</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleLogin}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;