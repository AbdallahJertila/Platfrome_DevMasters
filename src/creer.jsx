import React, { Component } from "react";
import Style from "./creer.module.css";

class Traiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      date_naissance: '',
      identifiant: '',
      motdepasse: '',
      verifier_motdepasse: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { motdepasse, verifier_motdepasse } = this.state;
    if (motdepasse !== verifier_motdepasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    this.setState({
      nom: '',
      prenom: '',
      identifiant: '',
      motdepasse: '',
      verifier_motdepasse: '',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      nom, prenom,identifiant, motdepasse, verifier_motdepasse
    } = this.state;

    return (
      <div className={Style.container}>
        <div className={Style.formContainer}>
          <h2>"nouveau ou nouvelle"😉</h2>
          <form onSubmit={this.handleSubmit}>
            <div className={Style.inputGroup}>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={nom}
                onChange={this.handleChange}
                placeholder="Votre nom"
                required
              />
            </div>
            <div className={Style.inputGroup}>
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={prenom}
                onChange={this.handleChange}
                placeholder="Votre prénom"
                required
              />
            </div>
            <div className={Style.inputGroup}>
              <label htmlFor="identifiant">Identifiant</label>
              <input
                type="text"
                id="identifiant"
                name="identifiant"
                value={identifiant}
                onChange={this.handleChange}
                placeholder="Votre identifiant"
                required
              />
            </div>

            <div className={Style.inputGroup}>
              <label htmlFor="motdepasse">Mot de Passe</label>
              <input
                type="password"
                id="motdepasse"
                name="motdepasse"
                value={motdepasse}
                onChange={this.handleChange}
                placeholder="Votre mot de passe"
                required
              />
            </div>

            <div className={Style.inputGroup}>
              <label htmlFor="verifier_motdepasse">Vérifiez le mot de passe</label>
              <input
                type="password"
                id="verifier_motdepasse"
                name="verifier_motdepasse"
                value={verifier_motdepasse}
                onChange={this.handleChange}
                placeholder="Vérifiez votre mot de passe"
                required
              />
            </div>
            <div className={Style.submitGroup}>
              <button className={Style.inscrire} type="submit">S'inscrire</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default Traiter;
