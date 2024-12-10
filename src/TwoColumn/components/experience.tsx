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
            <div>   {item.title}        </div>
            <div>   {item.company}      </div>
            <div>   {item.location}     </div>
            <div>   {item.date}         </div>
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