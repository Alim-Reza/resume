import { FaCalendarAlt } from "react-icons/fa";
import TextWithIcon from "./common/TextWithIcon";

function Projects({value}){
    return <>
    <section>
        <h1>Project</h1>
        <p className="">
            {
                value.map( (x, i, row) => 
                (
                    <>
                    <ProjectItem value={x} />

                    {(i + 1 !== row.length) && <hr />}
                    </>
                )
                )
            }
        </p>
    </section>
    </>;
}

function ProjectItem({value}) {
    return <div className="">
        <h2>{value.title}</h2>
        <TextWithIcon text={value.date} icon={<FaCalendarAlt />} />
        <div>{value.description}</div>
        <ul>{value.points.map(p => (
                <li>{p}</li>
            ))}
        </ul>
    </div>
}
export default Projects;