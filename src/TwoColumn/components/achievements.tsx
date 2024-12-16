import { FaCalendarAlt } from "react-icons/fa";
function Achevements({value}){
    return <>
    <section>
        <h1>Key Achevements</h1>
        <p className="">
            {
                value.map( (x, i, row) => 
                    (
                        <>
                            <AchevementsItems value={x} />
                            {(i + 1 !== row.length) && <hr />}
                        </>
                    )
                )
            }
        </p>
    </section>
    </>;
}
function AchevementsItems({value}) {
    return <div className="achiev-items">
        <div className="a-title">
            {value.icon}
        </div>
        <div>
            <h3>{value.title}</h3>
            {value.description}
        </div>
    </div>
}
export default Achevements;