import "./SmallFiche.scss";

const SmallFiche = ({titre, ligne}) => {

    return(
        <div className="small">
            <span className="contenue">
                <h3>{titre}</h3>
                <p>{ligne}</p>
            </span>
            <p className="initial">SB</p>
        </div>
    )
}
export default (SmallFiche);