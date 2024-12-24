import React ,{Component} from "react";
import Style from "./thecnologies.module.css";
import { Link } from 'react-router-dom';

class node extends Component{
    render(){
        return(
            <main>
            <section className={Style.Description}>
                <h2>Pourquoi apprendre JavaScript</h2>
                <p>JavaScript rend vos sites web interactifs et dynamiques.</p>
            </section>
            <section className={Style.contenu}>
                <h2>Contenu de la formation</h2>
                <ul>
                    <Link to="/Introduction"><li style={{width:'100%'}}>Introduction à JavaScript</li></Link>
                    <Link to="/Manipulation"><li style={{width:'100%'}}>Manipulation du DOM</li></Link>
                    <Link to="/evenement"><li style={{width:'100%'}}>Fonctions et événements</li></Link>
                    <Link to="/exercices"><li style={{width:'100%'}}>Exercices pratiques</li></Link>
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
