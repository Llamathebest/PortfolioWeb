import "./LittleFiche.scss";

const LittleFiche = ({nom, img}) => {
    return(
        <div className="little">
            <div className="img">
                <img src={img+".png"} alt="logo_tech"/>
            </div>
            <p>{nom}</p>
        </div>
    )

}
export default (LittleFiche);