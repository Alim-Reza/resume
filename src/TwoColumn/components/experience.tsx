function Experience({value}){
    return <>
    <section>
        <h1>Experience</h1>
        <Exp items={value} />
    </section>
    </>;
}

function Exp({items}) {
    return<>
    {
        items.map(item => (          
          <>
            <h2>   {item.title}        </h2>
            <h3>   {item.company}      </h3>
            <div className="dateAndLocation">
              <div>   {item.date}         </div>
              <div>   {item.location}     </div>
            </div>
            <div>   {item.description}  </div>
            <div>{item.points.map(p => (
                <li>{p}</li>
            ))}
              </div>
          </>
        ))
      }
    
    </>
}

export default Experience;