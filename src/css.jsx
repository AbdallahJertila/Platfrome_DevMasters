import React ,{Component} from "react";
import Style from "./thecnologies.module.css";

class node extends Component{
    render(){
        return(
            <main>
            <section className={Style.Description}>
                <h2>Pourquoi apprendre CSS</h2>
                <p>CSS permet de styliser les pages web et de les rendre attrayantes.</p>
            </section>
            <section className={Style.contenu}>
                <h2>Contenu de la formation</h2>
                <ul>
                    <li>Introduction à CSS</li>
                    <li>Les propriétés de mise en forme</li>
                    <li>Création de mises en page</li>
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
export default node;