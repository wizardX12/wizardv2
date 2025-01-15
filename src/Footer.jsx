
import icon1 from "./assets/icons/icon1.png";
import icon2 from "./assets/icons/icon2.png";
import icon3 from "./assets/icons/icon3.png";
import icon4 from "./assets/icons/icon4.png";
import icon from "./assets/icons/0favicon.png";

function Footer(){

    return(
        <>  
            <div id="footercontent">
                <img src={icon}></img>
                <div className="parts">
                    <h1>Wizard</h1>
                    <p>About</p>
                    <p>Tech</p>
                </div>
                <div className="parts">
                <h1>Community</h1>
                    <p>Discussion</p>
                    <p>Report an Issue</p>
                    <p>Send Feedback</p>
                    <p>FAQ</p>
                    <p>Help</p>
                    <p>Chat</p>
                </div>
                <div className="parts">
                    <h1>Social</h1>
                    <p>Youtube</p>
                    <p>Reddit</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className="parts">
                    <br/>
                    <h3>This website is made as a project using HTML, CSS, Javascript<br/>
                        and React JS. <br/><br/>
                        Artworks displayed on this website doesn't belong to the<br/>
                        developer of this website, they are used here for non-commercial<br/>
                        purpose only for displaying the project.</h3>
                </div>

            </div>
            <div className="footer">
                <a href="https://www.youtube.com/" target="blank"><img src={icon1}></img></a>
                <a href="https://www.reddit.com/" target="blank"><img src={icon2}></img></a>
                <a href="https://www.twitter.com/" target="blank"><img src={icon3}></img></a>
                <a href="https://www.instagram.com/" target="blank"><img src={icon4}></img></a>
            </div>
        </>
        
    );
}

export default Footer