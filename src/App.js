import React, {useState} from 'react';

import Button from "./components/Button";
import Counter from "./components/Counter";
import Labels from "./components/Labels";
import logo from "./assets/screenshot-logo.png";
import './App.css';

function App() {
    const [telBananen, setTelBananen] = useState(0);
    const [blockBanaanMin, setBlockBanaanMin] = useState(true);
    const [telAardbeien, setTelAardbeien] = useState(0);
    const [blockAardMin, setBlockAardMin] = useState(true);
    const [telAppels, setTelAppels] = useState(0);
    const [blockAppelMin, setBlockAppelMin] = useState(true);
    const [telKiwis, setTelKiwis] = useState(0);
    const [blockKiwiMin, setBlockKiwiMin] = useState(true);
    const [resetAllowed, toggleResetAllowed] = useState(true);

    const [formState, setFormState] = useState({
            voornaam: "",
            achternaam: "",
            leeftijd: "",
            postcode: "",
            bezorgfrequentie: "dagelijks",
            keuze: "overdag",
            opmerkingen: "",
            akkoord: false
        }
    )


    const handleReset = () => {
        setTelAardbeien(0);
        setTelBananen(0);
        setTelAppels(0);
        setTelKiwis(0);
        setBlockAardMin(true);
        setBlockBanaanMin(true);
        setBlockAppelMin(true);
        setBlockKiwiMin(true);
        toggleResetAllowed(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Het formulier is verstuurd');
        console.log('State', formState);

        console.log('Bestelling Aardbeien', telAardbeien, 'Bananen', telBananen, 'Appels', telAppels, "Kiwi's", telKiwis);

        setFormState(!formState.akkoord);
    }

    function handleChange(evt) {
        const value =
            evt.target.type === "checkbox"? evt.target.checked :  evt.target.value;
             setFormState({...formState, [evt.target.name]: value});

    }
    return (
        <div>
            <header className="nav">
                {/*<h1>Fruitmand bezorgservice</h1>*/}
                <span className="img-container">
                    <img alt="logo" src={logo}/> </span>
            </header>

            <section className="outer-container">
                <ul className="inner-container">
                    <Counter img="🍓" fruit="Aardbeien" telFruit={telAardbeien} setTelFruit={setTelAardbeien}
                             blockFruitMin={blockAardMin} setBlockFruitMin={setBlockAardMin}
                             toggleAllowed={toggleResetAllowed}/>
                    <Counter img="🍌" fruit="Bananen" telFruit={telBananen} setTelFruit={setTelBananen}
                             blockFruitMin={blockBanaanMin} setBlockFruitMin={setBlockBanaanMin}
                             toggleAllowed={toggleResetAllowed}/>
                    <Counter img="🍎" fruit="Appels" telFruit={telAppels} setTelFruit={setTelAppels}
                             blockFruitMin={blockAppelMin} setBlockFruitMin={setBlockAppelMin}
                             toggleAllowed={toggleResetAllowed}/>
                    <Counter img="🥝" fruit="Kiwi's" telFruit={telKiwis} setTelFruit={setTelKiwis}
                             blockFruitMin={blockKiwiMin} setBlockFruitMin={setBlockKiwiMin}
                             toggleAllowed={toggleResetAllowed}/>
                    <div className="reset">
                        <Button block={!resetAllowed} tekst="Reset" type="button" clickHandler={handleReset}/>
                    </div>
                </ul>
            </section>
            <section className="outer-container">
                <form onSubmit={handleSubmit} className="inner-container">

                        <label className="rows" htmlFor="voor-naam">
                            <span className="tekstbefore"> Voornaam: </span>
                            <input type="text"
                            id="voor-naam"
                            name="voornaam"
                            value={formState.voornaam}
                            onChange={handleChange}
                            />
                        </label>
                        <label className="rows"  htmlFor="achter-naam">
                            <span className="tekstbefore"> Achternaam: </span>
                            <input type="text"
                            id="achter-naam"
                            name="achternaam"
                            value={formState.achternaam}
                            onChange={handleChange}
                            />
                        </label>

                        <label className="rows" htmlFor="age-field">
                            <span className="tekstbefore"> Leeftijd: </span>
                            <input type="number"
                                   id="age-field"
                                   name="leeftijd"
                                   value={formState.leeftijd}
                                   onChange={handleChange}
                            />
                        </label>

                        <label className="rows" htmlFor="zip-code">
                            <span className="tekstbefore">Postcode: </span>
                            <input type="tekst"
                                   id="zip-code"
                                   name="postcode"
                                   value={formState.postcode}
                                   onChange={handleChange}
                            />
                        </label>



                    <label htmlFor="bezorg-frequentie" className="rows">
                        <span className="tekstlong">Bezorgfrequentie :</span>
                        <select name="bezorgfrequentie"
                                id="bezorg-frequentie"
                                value={formState.bezorgfrequentie}
                                onChange={handleChange}>
                            <option value="dagelijks">dagelijks</option>
                            <option value="om de week">om de week</option>
                            <option value="eenmalig">eenmalig</option>
                            <option value="anders" selected>Anders</option>
                        </select>
                    </label>

                    <div className="rows">

                        <label> <span className="tekstbefore"> Overdag </span>
                            <input
                                type="radio"
                                name="keuze"
                                value="overdag"
                                checked={formState.keuze === "overdag"}
                                onChange={handleChange}
                            />
                        </label>

                        <label> <span className="tekstbefore"> 's Avonds bezorgen</span>
                            <input
                                type="radio"
                                name="keuze"
                                value="'s avonds"
                                checked={formState.keuze === "'s avonds"}
                                onChange={handleChange}
                            />
                        </label>

                    </div>

                    <label className="rows" htmlFor="remark-field">
                        <span className="tekstbefore"> Opmerkingen: </span>
                        <br/>
                        <textarea
                            id="remark-field"
                            name="opmerkingen"
                            value={formState.opmerkingen}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="subscribe-field">
                        <input type="checkbox"
                               id="subscribe-field"
                               name="akkoord"
                               checked={formState.akkoord}
                               onChange={handleChange}

                        />
                        <span> Ik ga akkoord met de voorwaarden </span>

                    </label>

                    <Button block={!formState.akkoord} type="submit" tekst="Verzend"/>

                </form>
            </section>
        </div>
    );
}

export default App;
