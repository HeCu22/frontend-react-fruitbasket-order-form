import React, {useState} from 'react';
import './App.css';

function App() {
    const [telBananen, setTelBananen] = useState(0);
    const [blockBanaanMin, setBlockBanaanMin] = useState(true);
    const [telAardbeien, setTelAardbeien] = useState(0);
    const [blockAardMin, setBlockAardMin] = useState(true);
    const [telAppels, setTelAppels] = useState(0);
    const [telKiwis, setTelKiwis] = useState(0);

    const [inputValue, setInputValue] = useState("");
    const [naamValue, setNaamValue] = useState("");
    const [ageNumber, setAgeNumber] = useState(0);
    const [zipCode, setZipCode] = useState("");
    const [optionValue, setOptionValue] = useState("Iedere week");
    const [radioOverdag, toggleRadioOverdag] = useState(true);
    const [remarkValue, setRemarkValue] = useState("");
    const [agreed, toggleAgreed] = useState(false);


    function handleReset() {
        setTelAardbeien(0);
        setTelBananen(0);
        setTelAppels(0);
        setTelKiwis(0);
        setBlockAardMin(true);
        setBlockBanaanMin(true);
    }

    const countUpAardbeien = () => {
        setTelAardbeien(telAardbeien + 1);
        setBlockAardMin(false);
    }
    const countUpBananen = () => {
        setTelBananen(telBananen + 1);
        setBlockBanaanMin(false);
    }

    const countDownAardbeien = () => {
        if (telAardbeien === 0) {
            setBlockAardMin(true);
        } else {
            setTelAardbeien(telAardbeien - 1);
        }
    }

    const countDownBananen = () => {
        if (telBananen === 0) {
            setBlockBanaanMin(true);
        } else {
            setTelBananen(telBananen - 1);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Het formulier is verstuurd');
        console.log('Naam', inputValue, naamValue, zipCode, ageNumber);
        if (radioOverdag) {
            console.log('Bezorgfrequentie', optionValue, 'overdag');
        } else {
            console.log('Bezorgfrequentie', optionValue, 's Avonds');
        }
        console.log('Bestelling Aardbeien', telAardbeien, 'Bananen', telBananen);
        toggleAgreed(!agreed);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <ul>

                <li><span className="tekst"> Aardbeien </span>
                    <button disabled={blockAardMin} type="button" onClick={countDownAardbeien}>-</button>
                    {telAardbeien}
                    <button disabled={false} type="button" onClick={countUpAardbeien}
                    >+
                    </button>
                </li>
                <li><span className="tekst"> Bananen </span>
                    <button disabled={blockBanaanMin} type="button" onClick={countDownBananen}>-</button>
                    {telBananen}
                    <button disabled={false} type="button" onClick={countUpBananen}>+</button>
                </li>
                <li><span className="tekst"> Appels </span>
                    <button disabled={true} type="button">-</button>
                    {telAppels}
                    <button disabled={false} type="button" onClick={() => setTelAppels(telAppels + 1)}>+</button>
                </li>
                <li><span className="tekst"> Kiwi's </span>
                    <button disabled={true} type="button">-</button>
                    {telKiwis}
                    <button disabled={false} type="button" onClick={() => setTelKiwis(telKiwis + 1)}>+</button>
                </li>
                <li>
                    <button disabled={false} type="button" onClick={handleReset}>reset</button>
                </li>
            </ul>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="name-field">
                        <span> Naam </span>
                        <input type="tekst" id="name-field" value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}/>
                    </label>
                    <label>
                        <span> Achternaam  </span>
                        <input type="tekst" value={naamValue} onChange={(e) => setNaamValue(e.target.value)}/>
                    </label>
                    <label>
                        <span> Leeftijd </span>
                        <input type="number" value={ageNumber}
                               onChange={(e) => setAgeNumber((e.target.value))}/></label>
                    <label><span>Postcode </span><input type="text" value={zipCode}
                                                        onChange={(e) => setZipCode((e.target.value))}/></label>

                    <label><p>Bezorgfrequentie</p>
                        <select value={optionValue}
                                onChange={(e) => setOptionValue(e.target.value)}>
                            <option value={optionValue}>{optionValue}</option>
                            <option value="dagelijks">dagelijks</option>
                            <option value="om de week">om de week</option>
                            <option value="eenmalig">eenmalig</option>
                            <option value="anders" selected>Anders</option>
                        </select>

                    </label>

                    <label>
                        <input type="radio" name="keuze" value={!radioOverdag}
                               onChange={(e) => toggleRadioOverdag(radioOverdag)}/>Overdag
                    </label>
                    <label>
                        <input type="radio" name="keuze" value={radioOverdag}
                               onChange={(e) => toggleRadioOverdag(!(radioOverdag))}/>'s Avonds
                    </label>
                    <label><p>Opmerking:</p><textarea value={remarkValue}
                                                      onChange={(e) => setRemarkValue(e.target.value)}/></label>

                    <label><input type="checkbox" value={agreed} onChange={(e) => toggleAgreed(!(agreed))}/>Ik ga
                        akkoord met de voorwaarden </label>
                    <button type="submit" disabled={!agreed}>Verzend</button>
                </div>
            </form>
        </>
    );
}

export default App;
