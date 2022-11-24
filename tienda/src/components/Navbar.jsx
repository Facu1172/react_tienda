import {Component} from "react";
import {Menu} from "./Menu";
import "./Navbarstyle.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
class Navbar extends Component {
    state = {clicked:false};
    handleClick =()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
        <nav className="NavBarItems">
            <h1 className="logo">
            MiTienda <i class="fa-solid fa-crown"></i>
            </h1>
            <div className="menu-icons"
            onClick={this.handleClick}>
                <i className=
                {this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
            </div>
            
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {Menu.map((item,index)=>{
                    return(
                    <li>
                    <a href={item.url}
                    className={item.cName}><i class={item.icon}></i>{item.title}</a>
                    </li>   
                    
                    )
                }
                )}
                
                </ul>
                <li><a className="logo" href="#">
                        <CartWidget/>
                    </a>   
                </li>
        </nav>
        );
    }
}

export default Navbar