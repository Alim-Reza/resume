import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function Experience({value}){
    return <>
    <section>
        <h1>Experience</h1>
        <Exp items={value} />
    </section>
    </>;
}
function TextWithIcon({text, icon}) {
  return <div className="icon-text">
  {icon}
  <div>{text}</div>
  </div>
}


function Exp({items}) {
    return<>
    {
        items.map((item,i,row) => (          
          <>
            <h2>   {item.title}        </h2>
            <h3>   {item.company}      </h3>
            <div className="dateAndLocation">
              <TextWithIcon text={item.date} icon={<FaCalendarAlt />} />
              <TextWithIcon text={item.location} icon={<FaLocationDot />} />
              {/* <div>   {item.location}     </div> */}
            </div>
            <div>   {item.description}  </div>
            <ul>{item.points.map(p => (
                <li>{p}</li>
            ))}
              </ul>
              {(i + 1 !== row.length) && <hr />}
          </>          
        ))
      }
    
    </>
}

export default Experience;