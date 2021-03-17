import Small from "./Small";
import Large from "./Large";


function ParentBlock(){
    const num = 45;
    if(num < 50){
        return <Small />
    } else{
        return <Large/>
    }
}

export default ParentBlock;