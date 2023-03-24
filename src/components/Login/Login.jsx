import styles from "./Login.module.css";
import logo from "../../assets/rick-and-morty.png";
// Hooks
import { useState } from "react";
import validateLogin from "../../functions/validateLogin";
import { useNavigate } from "react-router-dom";

function Login(props) {
    // State
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const navigate = useNavigate();

    // Functions
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value });
        setErrors(validateLogin({ ...userData, [property]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.login(userData)) {
            navigate("/home");
        } else {
            setErrors({
                emailError: "",
                passwordError: "Invalid credentials, please try again.",
            });
            setUserData({
                email: "",
                password: "",
            });
        }
    };

    const buttonDisabled =
        Object.values(errors).some((error) => error !== "") ||
        Object.values(userData).some((value) => value === "");

    // Render
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <img
                        className={styles.logo}
                        src={logo}
                        alt="Rick And Morty App"
                    />
                    <a href="https://github.com/FranciscoYorlano/rick-and-morty-v2">
                        <h2 className={styles.title}>Rick And Morty App</h2>
                    </a>
                </div>
                <div>
                    <div className={styles.inputContainer}>
                        <div>
                            <input
                                className={styles.input}
                                type="text"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                            />
                            <span className={styles.error}>
                                {errors.emailError}
                            </span>
                        </div>
                        <div>
                            <input
                                className={styles.input}
                                type="password"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                            />
                            <span className={styles.error}>
                                {errors.passwordError}
                            </span>
                        </div>
                    </div>
                    <button
                        className={styles.button}
                        type="submit"
                        disabled={buttonDisabled}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
