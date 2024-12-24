import React, { Component } from "react";
import './style.css';
import Login from "./login";
import Php from "./php";
import Node from "./node";
import Sql from "./sql";
import Js from "./js";
import Css from "./css";
import Html from "./html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: null,
        };
    }
    handleScroll = (section) => {
        this.setState({ activeSection: section });
        const element = document.getElementById('formations'); 
        if (element) {
            element.style.display = 'flex';
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    RenderContent = () => {
        const { activeSection } = this.state;
        switch (activeSection) {
            case "HTML":
                return (
                    <Html/>
                );
            case "CSS":
                return (
                    <Css/>
                );
            case "JS":
                return (
                    <Js/>
                );
            case 'Node':
                return (
                    <Node/>
                );
            case 'SQL':
                return (
                    <Sql/>
                );
            case 'PHP':
                return (
                    <Php/>
                );
            default:
                return null;
        }
    };

    render() {
        return (
            <section>
                <div className="parent" id="LOGIN">
                    <div className="logo"><div><b>Bienvenue sur <span style={{color:'#D4AF37'}}>DevMasters</span></b><br /><em>la plateforme d'excellence pour les développeurs web</em></div></div>
                    <div className="login"><Login/></div>           
                </div>
                <div className="TECH" id="TECH">
                    <div className="titre">
                        <p id="p"></p>
                    </div>
                    <div className="TECH_child">
                        <div className="front">
                            <div className="html" onClick={() => this.handleScroll('HTML')}>
                                <div className="tech_logo"></div>
                                <div className="tech_description">
                                  <i className="fa-brands fa-html5"></i>
                                  <div className="html-title">HTML 5</div>
                                  <br />
                                  <div className="html-text">Web vivant, interactif, moderne.</div>
                                </div>
                            </div>
                            <div className="css" onClick={() => this.handleScroll('CSS')}>
                                <div className="tech_logo"></div>
                                <div className="tech_description">
                                  <i className="fa-brands fa-css3-alt"></i>
                                  <div className="css-title">CSS 3</div>
                                  <br />
                                  <div className="css-text">Styles dynamiques, designs élégants.</div>
                                </div>
                            </div>
                            <div className="js" onClick={() => this.handleScroll('JS')}>
                                <div className="tech_logo"></div>
                                <div className="tech_description">
                                  <i className="fa-brands fa-js"></i>
                                  <div className="js-title">JAVASCRIPT</div>
                                  <br />
                                  <div className="js-text">Interactivité, dynamisme, logique web.</div>
                                </div>
                            </div>
                        </div>
                        <div className="back">
                            <div className="php" onClick={() => this.handleScroll('PHP')}>
                                <div className="tech_logo"></div>
                                <div className="tech_description">
                                   <i className="fa-brands fa-php"></i>
                                   <div className="php-title">PHP</div>
                                   <br />
                                   <div className="php-text">Backend flexible, web dynamique.</div>
                                </div>

                            </div>
                            <div className="node" onClick={() => this.handleScroll('Node')}>
                                <div className="tech_logo"></div>
                                <div className="tech_description">
                                  <i className="fa-brands fa-node"></i>
                                  <div className="node-title">NODE JS</div>
                                  <br />
                                  <div className="node-text">Serveur rapide, JavaScript partout.</div>
                                </div>
                            </div>
                            <div className="sql" onClick={() => this.handleScroll('SQL')}>
                                <div className="tech_logo"></div>
                                <div className="tech_description">
                                  <i className="fa-sharp fa-solid fa-database"></i>
                                  <div className="sql-title">SQL</div>
                                  <br />
                                  <div className="sql-text">Gestion structurée, requêtes efficaces.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ABOUT" id="ABOUT">
                        <div className="ident">    
                        </div>
                        <div className="desc">
                            <div className="line-1"></div>
                            <p>l'académie <em style={{color:'blueviolet', fontstyle: 'normal', fontweight: 'bolder'}}>DevMasters</em> en ligne dédiée à la formation des futurs
                                experts du développement web.
                            </p>
                            <em style={{ fontStyle: 'normal', lineHeight: '2' }}>
                            Chez DevMasters, nous adoptons une approche pratique et axée sur des projets réels pour vous enseigner l'art du développement web. 
                            Vous apprendrez à créer des sites web performants et accessibles, tout en développant des compétences recherchées par les entreprises à l'échelle mondiale.
                            Rejoignez-nous dès aujourd'hui et transformez votre passion pour le web en une carrière florissante et pleine d'opportunités.
                            Fondée en 2024, DevMasters est une plateforme d'apprentissage en ligne de référence, dédiée à l'excellence dans le domaine du développement web.
                            Tous les droits réservés © 2024, par <b style={{color:"#1E3A8A" ,fontFamily:"'Montserrat', sans-serif"}}>Abdallah Jertila</b>, créateur et visionnaire de cette initiative.
                            </em>
                            <div className="features">  
                               <FontAwesomeIcon icon={faTwitter}  style={{color: "#74C0FC", fontSize : "30px",cursor:"pointer"}} />
                               <FontAwesomeIcon icon={ faInstagram } style={{color: "#d336b6",fontSize : "30px",cursor:"pointer"}} />
                               <FontAwesomeIcon icon={ faYoutube } style={{color: "#ff0000",fontSize : "30px" ,cursor:"pointer"}} />
                            </div>
                            <div className="line-2"></div>
                        </div>
                    </div>
                <div className="formations" id="formations">
                    {this.RenderContent()}
                </div>
                <div className="CONTACT" id="CONTACT"></div>
            </section>
        );
    }
}

export default Section;












