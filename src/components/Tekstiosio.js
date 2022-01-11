import { useContext } from "react";
import { AppContext } from "../app-context";
import Tekstinosa from "./Tekstinosa";

const Tekstiosio = () => {

    const [state, setState] = useContext(AppContext);

    //tehdään return jossa renderöidään map funktiossa
    //uusi komponentti jossa asetetaan paikalleen title ja page
    return(
        <div className="tekstiosio">
            
            <div>
                {state.objects.map(({ title, page}, index) => {
                    return(
                        <Tekstinosa 
                            title = {title}
                            page = {page}
                            key = {index}
                        />
                    )
                })}
            </div>
            
        </div>
    )

}

export default Tekstiosio;