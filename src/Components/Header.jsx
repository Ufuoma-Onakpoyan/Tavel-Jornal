import WorldLogo from "../assets/Earth.png"
function Header(){
    return(
        <div className="Header">
            <img src={WorldLogo} alt="World logo" width="27px" height="30px"></img>
            <h4>My Travel Journal.</h4>
        </div>
    )
}
export default Header