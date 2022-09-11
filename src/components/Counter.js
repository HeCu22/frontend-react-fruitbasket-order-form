import React from "react";

function Counter({img,fruit,blockFruitMin,setBlockFruitMin,telFruit,setTelFruit,toggleAllowed}) {

    const countUpFruit = () => {
        setTelFruit(telFruit + 1);
        setBlockFruitMin(false);
        toggleAllowed(true);

           }

    const countDownFruit = () => {
        if (telFruit === 0) {
            setBlockFruitMin(true);
        } else {
            setTelFruit(telFruit - 1);
        }
    }
return (
    <>
        <li><span className="tekst"> {img} {fruit} </span>
            <button disabled={blockFruitMin} type="button" onClick={countDownFruit}>-</button>
            {telFruit}
            <button disabled={false} type="button" onClick={countUpFruit}>+</button>
        </li>
    </>
);


}

export default Counter;