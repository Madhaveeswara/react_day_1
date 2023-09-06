import Place from "./Place";

const TravelPlanner = () => {

  
     let propsObj1 = {
        name: "India",
        description: "Beautiful country",
        image: "https://source.unsplash.com/1600x900?india",
        display: 'true'
      }
      let propsObj2 = {
        name: "America",
        description: "Super Power country",
        image: "https://source.unsplash.com/1600x900?america",
        display: true
      }
      let propsObj3 = {
        name: "Africa",
        description: "Green continent",
        image: "https://source.unsplash.com/1600x900?africa",
        display: false
      }
      let propsObj4 = {
        name: "Japan",
        description: "Zen country",
        image: "https://source.unsplash.com/1600x900?japan",
        display: true
      }  
      let propsObj5 = {
        name: "China",
        description: "Communist country",
        image: "https://source.unsplash.com/1600x900?china",
        display: true
      }  


     const createSelectionBar = () => {
        return (<>
             <div className="container">
                <Place props={propsObj1}></Place>
                <Place props={propsObj2}></Place>
                {propsObj3.display &&<Place props={propsObj3}></Place>  }
                {propsObj4.display &&<Place props={propsObj4}></Place>  }
                <Place props={propsObj5}></Place>  
             </div>
        </>)
      }

    return(<>
    {createSelectionBar()}

    </>
    )
}

export default TravelPlanner;