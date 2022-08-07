import Quote from "./components/Quote";
import {useEffect, useState} from "react";

function App() {
    const [quote, setQuote] = useState({
        anime: null, character: null, quote: null
    })

    const fetchQuote = () => {
        fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(quote => setQuote(quote))
    }
    useEffect(() => {
        fetchQuote()
    }, [])


    return (<div className="App">
        <Quote quote={quote}/>

        <button onClick={fetchQuote}>Generate new quote</button>
    </div>);
}

export default App;
