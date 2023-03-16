import React from 'react'
import { useId } from 'react'

const Contactus = () => {
    let words = prompt("fill in any word")
    let splitted = words.split("")
    console.log(splitted);
    const colors = (col) => {
        if(col == "a"){
            return "green"
        }else if(col == "a"){
            return "#7FFFD4"
        }else if(col == "b"){
            return "#915C83" 
        }else if(col == "c"){
            return "#665D1E"
        }else if(col == "d"){
            return "#3DDC84"
        }else if(col == "e"){
            return "#9966CC"
        }else if(col == "f"){
            return "#FFBF00"
        }else if(col == "g"){
            return "#3B7A57"
        }else if(col == "h"){
            return "#F19CBB"
        }else if(col == "i"){
            return "#9F2B68"
        }else if(col == "j"){
            return "#EFDECD"
        }else if(col == "k"){
            return "#C46210"
        }else if(col == "l"){
            return "#F0F8FF"
        }else if(col == "m"){
            return "orange"
        }else if(col == "n"){
            return "azure"
        }else if(col == "o"){
            return "burgundy"
        }else if(col == "p"){
            return "maroon"
        }else if(col == "q"){
            return "lime"
        }else if(col == "r"){
            return "purple"
        }else if(col == "s"){
            return "aqua"
        }else if(col == "t"){
            return "black"
        }else if(col == "u"){
            return "yellow"
        }else if(col == "v"){
            return "blue"
        }else if(col == "w"){
            return "pink"
        }else if(col == "x"){
            return "red"
        }else if(col == "y"){
            return "blue"
        }else if(col == "z"){
            
        }

    }
    let colored = splitted.map(item => <span style={{color: colors(item), fontWeight: "bolder", fontSize: 20}} key ={useId()}>{item}</span>)
    return (
    <div>{colored}</div>
  )
}

export default Contactus