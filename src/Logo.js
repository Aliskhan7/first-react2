import ReactDOM from 'react-dom';
import './img/logo.png';

function Logo(){
    return(
       <div>
       <img src={require('./img/logo.png')} alt="logo" className="brand-logo"/>
       </div>
    )
}

export default Logo;