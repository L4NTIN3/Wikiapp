import { useContext } from "react"
import { AppContext } from "../app-context"

const Tekstinosa = ({title, page}) => {

    const [state, setState] = useContext(AppContext);


    const load = (p) => {

        window.open(p)
    }

    const deleteSearch = () => {

        let uusi = state.objects.filter((object) => {

            return !(
                title === object.title,
                page === object.page
            );

        });

        setState({...state, objects: uusi})

    }

    //return jossa sisällä tehdään linkki jota painettaessa
    //siirrytään page atribuutin osoittamalle wikipedia sivulle
    return(
        <div className="flex">
            <div className="linkki" onClick={(e) => load(page)}>
                <h1>{title}</h1>
            </div>
            <div className="grid m-2 p-4 rounded-xl place-items-center w-10 bg-red-600"
             onClick={deleteSearch}>
                X
            </div>
        </div>

    )

}

export default Tekstinosa;