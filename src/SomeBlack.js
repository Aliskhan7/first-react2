
import "./styles.css";

function SomeBlack() {
    const dark = false;

    if(dark === true){
        return(
            <div className="dark">
            Hello, ternary operator!
            </div>
        )
    }else{
        return(
            <div className="light">
                Hello, ternary operator!
            </div>
            )
    }
}

export default SomeBlack