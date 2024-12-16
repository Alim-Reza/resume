import TextWithIcon from "./common/TextWithIcon";

function Header({value}){
    return <>
        <section id="header">
            <h1 className="name">{value.name}</h1>
            <h3>{value.title}</h3>
            <div className="links">
            {
                value.links.map((x,i,row) => 
                    (   
                        <>
                            <TextWithIcon text={x.value} icon={x.icon} coloredIcon={true} />
                            <br />
                            {(i === row.length/2) && <br />}
                        </>
                    )    
                )
            }
            </div>

        </section>
    </>
}
export default Header;