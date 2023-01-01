import './memesAppMain.css'

import useFetch from '../useFetch'

function MemesAppMain() {

    const { error, loading, apiData, refetch } = useFetch('https://meme-api.com/gimme/memes')


    return (
        <div id='memesApp'>
            {(error ? <h2>{error}</h2> :
                (!loading ?
                    <div className="memeContainer">
                        <img src={apiData.url}/>
                    </div>
                    : <h2 className='Loading'>Loading...</h2>
                )
            )}
            <button onClick={refetch}>Get New Meme</button>
        </div>
    )
}

export default MemesAppMain