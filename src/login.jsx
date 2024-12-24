import React, { Component } from "react";
import Style from './login.module.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifiant: '',
            password: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Ajoute ici le traitement pour soumettre les données
        this.setState({ identifiant: '', password: '' }); // Exemple de reset
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { identifiant, password } = this.state;
        return (
            <div className={Style.login}>
                <div className={Style.titre}>
                    <h2>Login</h2>
                </div>
                <div className={Style.contentLogin}>
                    <form onSubmit={this.handleSubmit} className={Style.contactForme}>
                        <div className={Style.inputContaine}>
                            <label htmlFor="identifiant"></label>
                            <input
                                type="text"
                                id="identifiant"
                                name="identifiant"
                                value={identifiant}
                                onChange={this.handleChange}
                                placeholder="Entre ton identifiant"
                                required
                            />
                        </div>
                        <div className={Style.inputContaine}>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                                placeholder="Entre ton mot de passe"
                                required
                            />
                        </div>
                        <button type="submit" className={Style.Submit}>Se connecter</button> 
                    </form>
                </div>
                <div className={Style.forget}>
                    <span>Vous avez oublié le mot de passe ?</span>
                </div>
                <div className={Style.nouveau}>
                <Link to="/creer" className={Style.creer}>créer un compte</Link>
                    
                </div>
                
            </div>
        );
    }
}

export default Login;
