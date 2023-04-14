import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Friendzy</h1>
                    <p>Friendzy - the social network that's all about building meaningful connections with people who share your interests, passions, and outlook on life.</p>
                    <span>Don't have any friends? No worries!</span>
                    <Link to="/register">
                        <button>Sign Up</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login