import { Header, Formulaire } from "../../Data/Paths/Paths";
import "./Contact.scss"

const Contact = () => {
    return (
        <>
            <Header titre={"Contact"} paragraphe={"Information"}/>
            <div className="contact">
                <Formulaire/>
            </div>
        
        </>
    )
}
export default (Contact);