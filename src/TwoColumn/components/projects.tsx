import { FaCalendarAlt } from "react-icons/fa";
import TextWithIcon from "./common/TextWithIcon";

function Projects({value}){
    return <>
    <section>
        <h1>Project</h1>
        <p className="">
            {
                value.map( x => <ProjectItem value={x} />)
            }
        </p>
    </section>
    </>;
}

function ProjectItem({value}) {
    return <div className="">
        <h2>{value.title}</h2>
        <TextWithIcon text={value.date} icon={<FaCalendarAlt />} />
        <p>{value.description}</p>
        <ul>{value.points.map(p => (
                <li>{p}</li>
            ))}
        </ul>
        {/* {(i + 1 !== row.length) && <hr />} */}
    </div>
}
export default Projects;