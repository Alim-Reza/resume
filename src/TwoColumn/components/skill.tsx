function Skill({value}){
    return <>
    <section>
        <h1>Skills</h1>
        <p className="skills">
            {
                value.map( x => <SkillsItem value={x} />)
            }
        </p>
    </section>
    </>;
}

function SkillsItem({value}) {
    return <div className="skillsItem">{value}</div>
}
export default Skill;