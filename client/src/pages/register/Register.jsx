import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
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
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Name" />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
