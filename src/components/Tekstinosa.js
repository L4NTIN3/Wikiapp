import { useContext } from "react"
import { AppContext } from "../app-context"

const Tekstinosa = ({title, page}) => {


    const load = (p) => {

        window.open(p)
    }

    //return jossa sisällä tehdään linkki jota painettaessa
    //siirrytään page atribuutin osoittamalle wikipedia sivulle
    return(
        <div className="linkki" onClick={(e) => load(page)}>
            <h1>{title}</h1>
        </div>

    )

}

export default Tekstinosa;