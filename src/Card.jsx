
import { useState } from 'react';

import hearticon from './assets/icons/heart1.png';
import title1 from './assets/animeTitle/1.png';
import title2 from './assets/animeTitle/2.png';
import title3 from './assets/animeTitle/3.png';
import title4 from './assets/animeTitle/4.png';
import title5 from './assets/animeTitle/5.png';
import title6 from './assets/animeTitle/6.png';
import title7 from './assets/animeTitle/7.png';
import title8 from './assets/animeTitle/8.png';

import characters from './characters.jsx';

//Sort Alphabetical Order
characters.sort((a,b)=> a.anime.localeCompare(b.anime)); 

function Card(){  

    const [searchText, setSearchText] = useState("");

    const InfiniteSection =     
        <div className="infiniteSection">
            <div className="infiniteScroll">
                <div className="item" id="item1"><img className="icon1" src={title1} onClick={()=> giveName("Dragon Ball Z")}></img></div>
                <div className="item" id="item2"><img className="icon1" src={title2} onClick={()=> giveName("Naruto")}></img></div>
                <div className="item" id="item3"><img className="icon1" src={title3} onClick={()=> giveName("Fairy Tail")}></img></div>
                <div className="item" id="item4"><img className="icon1" src={title4} onClick={()=> giveName("One Piece")}></img></div>  
                <div className="item" id="item5"><img className="icon1" src={title5} onClick={()=> giveName("Frieren")}></img></div>
                <div className="item" id="item6"><img className="icon1" src={title6} onClick={()=> giveName("Bleach")}></img></div>
                <div className="item" id="item7"><img className="icon1" src={title7} onClick={()=> giveName("Demon Slayer")}></img></div>
                <div className="item" id="item8"><img className="icon1" src={title8} onClick={()=> giveName("My Hero Academia")}></img></div>       
            </div>
        </div>;

    const SearchBox =     
    <div className="searchCardContainer">
        <button id="shufflebtn"
                title="Shuffle and Display All Images"
                onClick={()=> {
                    document.getElementById("searchCard").value = "Shuffle"
                    characters.sort(() => Math.random()-0.5);
                    if(searchText!=="Shuffle") setSearchText("Shuffle")
                    if(searchText==="Shuffle") setSearchText("")}}>Shuffle</button>
                
        <input  type="text"
                id="searchCard"
                placeholder="🔍Search Anime.."
                onChange={e => setSearchText(e.target.value)}></input>

        <button id="clearbtn"
                title="Clear Text in Search Box"
                onClick={()=> {
                    document.getElementById("searchCard").value = "";
                    setSearchText("");}}>Clear</button>   
    </div>;

    
    const CharacterCards = characters.filter((character) =>{
        if (searchText==="" || searchText==="Shuffle") return character;
        else return character.anime === searchText;
        }).map(character => 
        <div className="card" key={character.key}>

            <img    id="img1"
                    title="Click to Display a Larger Image"
                    src= {character.imagec}
                    onClick={() =>
                    {
                        const bigImgContainer = document.getElementById("bigImgContainer");
                        const bigImg = document.getElementById("bigImg");
                        const bigImgBtn = document.getElementById("bigImgBtn");
                        bigImgContainer.style.display = "flex";        
                        bigImg.src = character.image;        
                        bigImgBtn.addEventListener("click", () =>{
                            bigImgContainer.style.display = "none";
                        })
                    }
                    }>
            </img>

            <div id="content">
                <div className="nameheart">
                    <h2 className="h2">{character.name}</h2>
                    <img id="hearticon" src={hearticon}></img> 
                </div>
                <p className="p1">Anime: {character.anime}</p>
            </div>    

        </div>
        );

    function giveName(animeTitle){
        setSearchText(animeTitle);
        document.getElementById("searchCard").value = animeTitle;
    };

    return(
        <>  
            {InfiniteSection}
            {SearchBox}
            {CharacterCards}
        </>
    );

}

export default Card
