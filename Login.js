import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "./InputControl";
import { auth } from "./firebase";

import styles from "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Please make sure all fields are filled in correctly");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                alert("Logged in Successfully!");

                navigate("/");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    return (
        <div className= "container">
            <div className="innerBox">
                <h1 className={styles.heading}>Login</h1>

                <InputControl
                    label="Email"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, email: event.target.value }))
                    }
                    placeholder="Enter email address"
                />
                <InputControl
                    label="Password"
                    onChange={(event) =>
                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                    }
                    placeholder="Enter Password"
                    type = "password"
                />

                <div className="footer">
                    <b className={styles.error}>{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSubmission}>
                        Login
                    </button>
                    <p>
                        Dont's have an account?{" "}
                        <span>
                            <Link to="/signup">Sign up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;