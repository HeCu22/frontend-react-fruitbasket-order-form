import React, {useState} from 'react';

import Button from "./components/Button";
import Counter from "./components/Counter";
import Labels from "./components/Labels";
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

    const [inputValue, setInputValue] = useState("");
    const [naamValue, setNaamValue] = useState("");
    const [ageNumber, setAgeNumber] = useState(0);
    const [zipCode, setZipCode] = useState("");
    const [optionValue, setOptionValue] = useState("Iedere week");
    const [radioOverdag, toggleRadioOverdag] = useState(true);
    const [remarkValue, setRemarkValue] = useState("");
    const [agreed, toggleAgreed] = useState(false);


    const handleReset = () => {
        setTelAardbeien(0);
        setTelBananen(0);
        setTelAppels(0);
        setTelKiwis(0);
        setBlockAardMin(true);
        setBlockBanaanMin(true);
        setBlockAppelMin(true);
        setBlockKiwiMin(true);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log('Het formulier is verstuurd');
        console.log('Naam', inputValue, naamValue, zipCode, ageNumber, remarkValue);
        if (radioOverdag) {
            console.log('Bezorgfrequentie', optionValue, 'overdag');
        } else {
            console.log('Bezorgfrequentie', optionValue, 's Avonds');
        }
        console.log('Bestelling Aardbeien', telAardbeien, 'Bananen', telBananen, 'Appels', telAppels, "Kiwi's", telKiwis);
        toggleAgreed(!agreed);
    }

    return (
        <div>
            <header className="nav">
                <h1>Fruitmand bezorgservice</h1>
            </header>

            <section className="outer-container">
                <ul className="inner-container">
                    <Counter fruit="Aardbeien" telFruit={telAardbeien} setTelFruit={setTelAardbeien}
                             blockFruitMin={blockAardMin} setBlockFruitMin={setBlockAardMin} counter={telAardbeien}/>
                    <Counter fruit="Bananen" telFruit={telBananen} setTelFruit={setTelBananen}
                             blockFruitMin={blockBanaanMin} setBlockFruitMin={setBlockBanaanMin} counter={telBananen}/>
                    <Counter fruit="Appels" telFruit={telAppels} setTelFruit={setTelAppels}
                             blockFruitMin={blockAppelMin} setBlockFruitMin={setBlockAppelMin} counter={telAppels}/>
                    <Counter fruit="Kiwi's" telFruit={telKiwis} setTelFruit={setTelKiwis}
                             blockFruitMin={blockKiwiMin} setBlockFruitMin={setBlockKiwiMin} counter={telKiwis}/>
                    <li>
                        <Button block={false} tekst="Reset" type="button" clickHandler={handleReset}/>
                    </li>
                </ul>
            </section>
            <section className="outer-container">
                <form onSubmit={handleSubmit} className="inner-container">
                    <div className="form-container">
                        <Labels fieldclass="tekstbefore"
                            field="Naam"
                            type="tekst"
                            id="voor-naam"
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                        />

                    <Labels fieldclass="tekstbefore"
                        field="Achternaam"
                        type="tekst"
                        id="achter-naam"
                        inputvalue={naamValue}
                        setInputValue={setNaamValue}
                    />

                    <Labels fieldclass="tekstbefore"
                        field="Leeftijd"
                            type="number"
                            id="age-number"
                            inputvalue={ageNumber}
                            setInputValue={setAgeNumber}
                    />
                    <Labels fieldclass="tekstbefore"
                        field="Postcode"
                            type="tekst"
                            id="zip-code"
                            inputvalue={zipCode}
                            setInputValue={setZipCode}
                    />
                    </div>

                    <label className="rows"><span className="tekstlong">Bezorgfrequentie</span>
                        <select value={optionValue}
                                onChange={(e) => setOptionValue(e.target.value)}>
                            <option value={optionValue}>{optionValue}</option>
                            <option value="dagelijks">dagelijks</option>
                            <option value="om de week">om de week</option>
                            <option value="eenmalig">eenmalig</option>
                            <option value="anders" selected>Anders</option>
                        </select>

                    </label>
                    <div className="rows">
                        <Labels field="Overdag" type="radio" name="keuze" inputValue={radioOverdag}
                                setInputValue={toggleRadioOverdag}/>
                        <Labels field="'s Avonds'" type="radio" name="keuze" inputValue={!radioOverdag}
                                setInputValue={toggleRadioOverdag}/>
                    </div>
                    <Labels fieldclass="tekstbefore" field="Opmerking" type="area" inputValue={remarkValue} setInputValue={setRemarkValue}/>
                    <Labels fieldclass="tekslong" field="Ik ga akkoord met de voorwaarden"   type="checkbox" inputValue={agreed}
                            setInputValue={toggleAgreed}/>


                    <Button block={!agreed} type="submit" tekst="Verzend"/>

                </form>
            </section>
        </div>
    );
}

export default App;
