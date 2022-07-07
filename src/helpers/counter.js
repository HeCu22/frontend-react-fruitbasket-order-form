import React from "react";

function Counter({fruit,blockFruitMin,setBlockFruitMin,telFruit,setTelFruit,counter}) {

    const countUpFruit = () => {
        setTelFruit(telFruit + 1);
        setBlockFruitMin(false);
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
        <li><span className="tekst"> {fruit} </span>
            <button disabled={blockFruitMin} type="button" onClick={countDownFruit}>-</button>
            {telFruit}
            <button disabled={false} type="button" onClick={countUpFruit}>+</button>
        </li>
    </>
);


}

export default Counter;