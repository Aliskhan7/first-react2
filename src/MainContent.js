import Number from "./Number"
import Buttons from "./Buttons"
import {useState} from 'react'

function MainContent(){

    const [counter, setCounter] = useState(0)

    function plus(){
        setCounter(counter + 3)
    }
    function minus(){
        if(counter < 2){
            alert('Error');
            setCounter(0)
        }else{
            setCounter(counter - 2)
        }
    }
    function reset(){
        setCounter(0)
    }

    return(
        <div className='main-content'>
      <div className='content-number'>
           {counter}
       </div>
       <div className='buttons'>
            <button onClick={plus}>Увеличить</button>
            <button onClick={minus}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
        </div>
       </div>
    )
}

export default MainContent;