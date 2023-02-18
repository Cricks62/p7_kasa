import logo from "../../assets/logoFooter.png"
import './index.css'

function Footer() {
    return (
        <footer className="FooterContainer">
            <div className="ContainerInfo">
                <img className="FooterLogo" src={logo} alt="logo Kasa"/>
                <p className="TextFooter">© { (new Date().getFullYear()) } Kasa. All rights reserved</p>
            </div>
        </footer>  
    )
}

export default Footer