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
                            <IconWithText text={x.value} Icon={x.icon} />
                            {/* <TextWithIcon text={x.value} icon={x.icon} coloredIcon={true} /> */}
                        </>
                    )    
                )
            }
            </div>

        </section>
    </>
}

function IconWithText({text, Icon}){
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <Icon size={24} style={{ marginRight: '8px' }} /> */}
        {Icon}
        <span>{text}</span>
      </div>
    );
  };
export default Header;