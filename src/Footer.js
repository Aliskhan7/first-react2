import FooterMenu from "./FooterMenu"
import FooterLogo from "./FooterLogo"
import Copyright from "./Copyright"

function Footer(){
    return(
        
            <div className='footer'>
            <div className='footer-item'>
            <FooterLogo/>
            <FooterMenu/>
            </div>
            <Copyright/>
            </div>
        
    )
}

export default Footer;