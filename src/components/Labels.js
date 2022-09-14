import React from "react";
import './Labels.css';

function Labels({field, name, type, id, inputValue, setInputValue,fieldclass}) {

    return (
        <>
            <label htmlFor={id} className="rows">
                <span className={fieldclass}> {field} </span>
                {type === "area" &&
                    <textarea value={inputValue} name={name}
                              onChange={(e) => setInputValue(e.target.value)}/>
                }
                {((type === "tekst") || (type === "number"))  &&
                    <input type={type} id={id} value={inputValue} name={name}
                           onChange={(e) => setInputValue(e.target.value)}/>
                }
                {(type === "checkbox")  &&
                    <input className="row-reverse" type={type} id={id} value={inputValue} name={name}
                           onChange={(e) => setInputValue(e.target.value)}/>
                }
                {type === "radio"  &&
                    <input className="row-reverse" type={type} id={id} value={inputValue} name={name}
                           onChange={(e) => setInputValue(inputValue)}/>
                }


            </label>
        </>
    )
}

export default Labels;