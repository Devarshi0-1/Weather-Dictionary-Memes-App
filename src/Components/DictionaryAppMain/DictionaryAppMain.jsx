import { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import './dictionaryAppMain.css'

function DictionaryAppMain() {

    const [word, setWord] = useState("hello")
    const [searchText, setSearchText] = useState("hello")
    const [apiData, setApiData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const typingSearch = (e) => {
        setWord(e.target.value)
    }

    const fetchData = () => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`

        fetch(url)
            .then((res) => {
                if (!res.ok)
                    throw Error("Could Not Fetch Data From The Resource")
                return res.json()
            })
            .then((data) => {
                setApiData(data)
                setError(null)
                setLoading(false)
                console.log(data);
            }).catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [searchText])

    return (
        <div id='dictionaryApp'>
            <div className="dictionaryHeader">
                <input type="text" placeholder='Enter Word' value={word} onChange={typingSearch} />
                <div className="searchCont"><BsSearch className='searchIcon' onClick={() => setSearchText(word)} /></div>
            </div>
            {(error ? <h2>{error}</h2> :
                (!loading ?
                    <div className="dataCont">
                        <h2 className="word">{apiData[0].word}</h2>
                        <p className="partOfSpeech">Part of Speech: {apiData[0].meanings[0].partOfSpeech}</p>
                        <p className="definition">Definition: {apiData[0].meanings[0].definitions[0].definition}</p>
                        <p className="synonyms">Synonyms: {apiData[0].meanings[0].synonyms[0]}</p>
                        <p className="antonyms">Antonyms: {apiData[0].meanings[0].antonyms[0]}</p>
                    </div> : <h2 className='Loading'>Loading...</h2>
                )
            )}
        </div>
    )
}

export default DictionaryAppMain