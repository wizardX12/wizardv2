
import menuicon from './assets/icons/0menuicon.png';

function TopMenu(){
    
    function showLogin(){

        if(document.getElementById("AccName").textContent ==="Login"){
            document.getElementById("loginCard").style.display = "flex";
            const showLogin = document.getElementById("loginContainer");
            showLogin.style.display = "flex";
            document.body.style.overflow = "hidden";
        }
    }

    const ddls = [
        {title: "Popular", ol: ["One Piece","Naruto","Dragon Ball Z","Bleach","Attack on Titan"]},
        {title: "Recent", ol: ["Dandadan","Frieren","Blue Lock","Bleach TYBW","Jujutsu Kaisen","Spy X Family","Beyblade X"]},
        {title: "Most Favourite", ol: ["Attack on Titan","Jujutsu Kaisen","Black Clover","Demon Slayer","Chainsaw Man","Bleach","Death Note","Fairy Tail"]}
    ];

    return(<>

    <div className="menu">
        
        <img src={menuicon} id="menuicon"></img>

        <div id="dropDownList0">
            <div className="popular" key={ddls[0].title}>
                <button className="normal">{ddls[0].title}</button> 
                <ol className="ol" key={ddls[0].title}>
                    <li key={ddls[0].ol[0]}>{ddls[0].ol[0]}</li> 
                    <li key={ddls[0].ol[1]}>{ddls[0].ol[1]}</li>
                    <li key={ddls[0].ol[2]}>{ddls[0].ol[2]}</li>
                    <li key={ddls[0].ol[3]}>{ddls[0].ol[3]}</li>
                    <li key={ddls[0].ol[4]}>{ddls[0].ol[4]}</li>         
                </ol>
            </div>
        </div>
        <div id="dropDownList1">
            <div className="popular" key={ddls[1].title}>
                <button className="normal">{ddls[1].title}</button> 
                <ol className="ol" key={ddls[1].title}>
                    <li key={ddls[1].ol[0]}>{ddls[1].ol[0]}</li> 
                    <li key={ddls[1].ol[1]}>{ddls[1].ol[1]}</li>
                    <li key={ddls[1].ol[2]}>{ddls[1].ol[2]}</li>  
                    <li key={ddls[1].ol[3]}>{ddls[1].ol[3]}</li>    
                    <li key={ddls[1].ol[4]}>{ddls[1].ol[4]}</li> 
                    <li key={ddls[1].ol[5]}>{ddls[1].ol[5]}</li>   
                    <li key={ddls[1].ol[6]}>{ddls[1].ol[6]}</li>
                </ol>
            </div>
        </div>
        <div id="dropDownList2">
            <div className="popular" key={ddls[2].title}>
                <button className="normal">{ddls[2].title}</button> 
                <ol className="ol" key={ddls[2].title}>
                    <li key={ddls[2].ol[0]}>{ddls[2].ol[0]}</li> 
                    <li key={ddls[2].ol[1]}>{ddls[2].ol[1]}</li>
                    <li key={ddls[2].ol[2]}>{ddls[2].ol[2]}</li>  
                    <li key={ddls[2].ol[3]}>{ddls[2].ol[3]}</li>
                    <li key={ddls[2].ol[4]}>{ddls[2].ol[4]}</li>
                    <li key={ddls[2].ol[5]}>{ddls[2].ol[5]}</li>   
                    <li key={ddls[2].ol[6]}>{ddls[2].ol[6]}</li>        
                </ol>
            </div>
        </div>
        <button className="white" id="AccName" onClick={showLogin}>Login</button>
    </div>

        </>
    );

}

export default TopMenu