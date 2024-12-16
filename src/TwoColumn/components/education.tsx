import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import TextWithIcon from "./common/TextWithIcon";

function Education({value}){
    return <>
    <section>
        <h1>Education</h1>
        <h2>{value.degree}</h2>
        <h3>{value.uni}</h3>

        <div className="dateAndLocation">
              <TextWithIcon text={value.date} icon={<FaCalendarAlt />} />
              <TextWithIcon text={value.location} icon={<FaLocationDot />} />
        </div>
    </section>
    </>;
}
export default Education;