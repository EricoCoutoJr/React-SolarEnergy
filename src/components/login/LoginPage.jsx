import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./loginPage.module.css";
import  imagenGrande  from '/src/assets/LoginImagem/imagemeolicasolar.png'
import  logo  from "/src/assets/LoginImagem/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSignInFields, setShowSignInFields] = useState(false); // Estado para controlar a exibição dos campos de SignIn
    const [name, setName] = useState(""); // Estado para o campo de nome
    const navigate = useNavigate();

    const cadastro = () => {
        setShowSignInFields(true); // Quando clicado em "Sign In", exibe os campos de SignIn
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", { email, password, name });
        navigate("/dashboard");
    };

    return (
        <div className={styles.boxContainer}>
            <div className={styles.containerImage}>
                <img src={imagenGrande} alt="imagem de um sistema solar com um sistema eolico" />
            </div>

            <div className={styles.containerInputs}>
                <div className={styles.rightBox}>
                    <div className={`col-md-12 d-flex justify-content-center align-items-center ${styles.logo}`}>
                        <img
                            src={ logo }
                            alt="logo solar energy"
                        />
                    </div>
                    <div className="header-text mb-4 text-center">
                        <p>Seja bem vindo</p>
                    </div>
                    <div className={styles.containerDadosInputs}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                        {showSignInFields && (
                                    <div>
                                        <div className="mb-3">
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                     <FontAwesomeIcon icon={faUser} />
                                                </span>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    placeholder="Nome"
                                                    className="form-control"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="E-mail"
                                        className="form-control"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faLock} />
                                    </span>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Senha"
                                        className="form-control"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                {!showSignInFields ? (
                                    <div className="actions">
                                        <button type="submit" className={styles.btnLogin}>
                                            Login
                                        </button>
                                        <button type="button" className={styles.btnSignIn} onClick={cadastro}>
                                            Sign In
                                        </button>
                                    </div>
                                ) : (
                                    <div className="actions">
                                        <button type="submit" className={styles.btnSignIn}>
                                            Cadastrar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
