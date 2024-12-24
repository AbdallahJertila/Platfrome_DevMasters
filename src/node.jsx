import React ,{Component} from "react";
import Style from "./thecnologies.module.css";

class node extends Component{
    render(){
        return(
            <main>
            <section className={Style.Description}>
                <h2 className="question">Pourquoi apprendre Node.js</h2>
                <p className="reponse">Node.js permet de construire des applications côté serveur en JavaScript.</p>
            </section>
            <section className={Style.contenu}>
                <h2 className="question">Contenu de la formation</h2>
                <ul className="question">
                    <li className="question">Introduction à Node.js</li>
                    <li className="question">Création de serveurs web</li>
                    <li className="question">Utilisation des modules Node.js</li>
                    <li className="question">Exercices pratiques</li>
                </ul>
            </section>
            <section className={Style.durée}>
                <h2 className="question">Durée de la formation</h2>
                <p className="reponse">Durée : 6 mois</p>
            </section>
            <section className={Style.Tarifs}>
                <h2 className="question">Tarifs</h2>
                <p className="reponse">Coût de la formation : 80€/mensuelle</p>
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