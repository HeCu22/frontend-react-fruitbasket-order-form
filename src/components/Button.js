import React from "react";

function Button({block,tekst,type,clickHandler}) {
return (
    <>
        <button
            disabled={block}
            type={type}
            onClick={clickHandler}
            > {tekst}
        </button>
    </>
)
}

export default Button;