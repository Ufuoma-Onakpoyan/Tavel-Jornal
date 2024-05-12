import LocationLogo from "../assets/location.png"
export default function Card(props){
    return(
        <div className="Card-Main">
            <img src={props.data.imageUrl} width="125px" height="168px"></img>

            <div className="TextContent">
                <div id="place">
                <img src={LocationLogo} width="6px" height="10px" className="TextContent--logo"></img>
                    <h5 className="country">{props.data.location}</h5>
                    <h5 height="13px" className="googleMaps-Link"> <a href= {props.data.googleMapsUrl} >  <u>View on Google Maps </u>  </a></h5>
                </div>

                <h1 className="myH1">{props.data.title}</h1>
                <h5 className="myH5">{props.data.startDate} - {props.data.endDate}</h5>
                <p className="myP"> {props.data.description} </p>

                </div>
        </div>
    )
}