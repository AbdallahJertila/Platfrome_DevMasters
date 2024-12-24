import React, { Component } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars }from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
class Header extends Component {

    handleScroll = (section) =>{
        const element = document.getElementById(section) ;
        if (element){
            element.style.display = 'flex' ;
            element.scrollIntoView({behavior : "smooth"});  
        }
        this.setState({ showMenu: false });

    }
    handleTech = () => {
        const element = document.getElementById('TECH') ;
        if (element){
            element.style.display = 'flex' ;
            element.scrollIntoView({behavior : "smooth"});  
        }
        this.setState({ showMenu: false });
        document.getElementById('p').textContent="";
        const chaine = "Maîtriser l'Art du Développement Web grâce aux Technologies Essentielles avec DevMasters";
        let i = 0
        const interval = setInterval(() => {
            if (i < chaine.length) {
                document.getElementById('p').textContent += chaine[i];
                i++;
            }
        },20);
    };

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({ showMenu: !prevState.showMenu }));
    };

    render() {
        const { showMenu } = this.state;

        return (
            <header>
                <div className="menu">
                    <div className="menu_child">
                        <div onClick={this.toggleMenu} className="bars" >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div  className="informations">
                            <div className="notifictaions"><FontAwesomeIcon icon={faBell} /> <FontAwesomeIcon icon={ faUser } />  </div>
                        </div>
                    </div>
                    <div>
                     {showMenu && (
                        <ul>
                            <li onClick={ () => this.handleScroll('LOGIN')} style={{zIndex:'1'}} >LOGIN</li>
                            <li onClick={ () => this.handleTech()}style={{zIndex:'1'}}>TECHNOLOGY</li>  
                            <li onClick={ () => this.handleScroll('ABOUT')}style={{zIndex:'1'}}>ABOUT</li>
                            <li onClick={ () => this.handleScroll('CONTACT')}style={{zIndex:'1'}}>CONTACT</li>
                            
                            
                        </ul>
                    )}
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

