import React ,{Component} from "react";
import Style from "./thecnologies.module.css";
import { Link } from 'react-router-dom';

class Html extends Component{
    render(){
        return(
            <main>
            <section className={Style.Description}>
                <h2>Pourquoi apprendre HTML</h2>
                <p>HTML est la base de la structure de tout site web.</p>
            </section>
            <section className={Style.contenu}>
                <h2>Contenu de la formation</h2>
                <ul>
                    <Link to="introHTML"><li>Introduction à HTML</li></Link>
                    <Link to="introHTML"><li>Les balises de base</li></Link>
                    <Link to="introHTML"><li>Structuration de pages web</li></Link>
                    <Link to="introHTML"><li>Exercices pratiques</li></Link>
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
export default Html;