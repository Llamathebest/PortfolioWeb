import { Link } from "react-router-dom";
import { typeProjet} from "../../Data/Data"

const Projets = () => {
    return (
        <div>
            {
                typeProjet.map((t) => (
                    <Link>
                        <h3>{t}</h3>
                    </Link> 
                ))
            }
        </div>
    )
}
export default(Projets);