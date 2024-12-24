import React ,{Component} from "react";
import Style from "./thecnologies.module.css";

class php extends Component{
    render(){
        return(
            <main>
            <section className={Style.Description}>
                <h2>Pourquoi apprendre php</h2>
                <p>PHP est l'un des langages de programmation les plus utilisés pour le développement web côté serveur.</p>
            </section>
            <section className={Style.contenu}>
                <h2>Contenu de la formation</h2>
                <ul>
                    <li>Introduction à php</li>
                    <li>Requêtes de base de données</li>
                    <li>Gestion des relations</li>
                    <li>Exercices pratiques</li>
                </ul>
            </section>
            <section className={Style.durée}>
                <h2>Durée de la formation</h2>
                <p>Durée : 6 mois</p>
            </section>
            <section className={Style.Tarifs}>
                <h2>Tarifs</h2>
                <p>Coût de la formation : 80€/mensuelle</p>
            </section>
            <section className={Style.button} style={{ margin: "5em",display: "flex",flexdirection:"row" ,gap: "7em",height: "max-content",width: "max-content"}}>
                <button> Start free trial </button>
                <button> S'abonner </button>
            </section>
        </main>
        );
    }
}
export default php;