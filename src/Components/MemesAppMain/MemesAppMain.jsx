import './memesAppMain.css'

import useFetch from '../useFetch'
import { useState } from 'react'

function MemesAppMain() {

    const [error, loading, apiData, refetch] = useFetch('https://meme-api.com/gimme/memes')
    const [modalShow, setModalShow] = useState(true)
    const handleWarningClick = () => {
        setModalShow(false)
    }

    return (
        <div id='memesApp'>
            {modalShow ?
                <div className="modal">
                    <div className="warning">
                        <h2>Warning! The Following Content May Be Inappropriate!</h2>
                        <h2>TRIGGER WARNING!</h2>
                    </div>
                    <button onClick={handleWarningClick}>Accept and Proceed</button>
                </div>
                :
                <>
                    <div className="memeMainCont">
                        {(error ? <h2>{error}</h2> :
                            (!loading ?
                                <img src={apiData.url} />
                                : <h2 className='Loading'>Loading...</h2>
                            ))}
                    </div>
                    <button onClick={refetch}>Get Random Meme</button>
                </>
            }
        </div >
    )
}

export default MemesAppMain