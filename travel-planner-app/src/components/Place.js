
const Place = ({props}) =>  {

    console.log("Place :: ", props);
    let containerClass = "card-container";
    
    if(!props.display){
        containerClass = containerClass + " no-card"
    }
    
    return (
    <div className= {containerClass}> 
            <img className="card-img" src={props.image}></img>

        <div className="card-body">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
        </div>
    </div>
    )

}

export default Place;