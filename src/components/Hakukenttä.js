import { useContext, useEffect, useState } from "react";
import { AppContext } from "../app-context.js";

class Article {
    constructor (x, y){
        this.title = x;
        this.page = y;
    }
}

const Haku = () => {
    
    const [state, setState] = useContext(AppContext);
    const [clicks, setClicks] = useState(0);


    useEffect( async () => {


        if(clicks > 0){

            const url = "https://en.wikipedia.org/api/rest_v1/page/random/summary"

             //odotetaan vastausta API:lta
            let response = await fetch(url);
            let data = await response.json();
            //vastauksessa saadut tietyt tiedot lisätään objectiin jota käytetään 
            //renderöitäessä.
            let tiedot = {
                "title": data.title,
                "page": data.content_urls.desktop.page
            }
            //laitetaan tiedot state objektiin jonka jälkeen ne voidaan asettaa setStatessa
            state.objects.push(tiedot);

            setState({...state, objects: state.objects})
            

        }

        
    }, [clicks])



    //palautetaan tällaiset elementit, nappia painettaessa click 
    //kasvaa joka triggeraa uuden haun.
    return(

        <div className="haku">
            <h1 className="otsikko">Paina tästä hakeaksesi uuden artikkelin</h1>
            <button className="nappi" onClick={(e) => setClicks(clicks + 1)}>Paina</button>

        </div>

    )
}

export default Haku;