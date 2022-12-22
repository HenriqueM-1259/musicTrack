var varGlobal = {
    item: document.getElementById("container")
}


async function loadMusic(){
    const url = "./bdJson/Musicas.json"
    let response = await fetch(url);
    if(response.ok){
        varGlobal.music = await response.json()
        loadCardMusic(varGlobal.music.musicas)
        console.log(varGlobal)
    }else{
        console.log("Error: "+ response.status)
    }
}

loadMusic();

function loadCardMusic(musicas){
var montaCard = ""
    debugger
   for (let i = 0; i < musicas.length; i++) {
    montaCard += `
    <div class="item" id="item">
    <div class="card" id="card">
    <img src="${musicas[i].UrlImg}" alt="" width="250">
    <h5>${musicas[i].NameMusic}</h5>
    <div class="listaBotao">
    <button><i class="fa-solid fa-forward"></i></button>
    <button onchange="${musicas[i].UrlMusic}"><i class="fa-solid fa-play"></i></button>
    <button><i class="fa-solid fa-forward"></i></button>
    </div>
    <div class="listaBotao">
    <input type="range">
    </div>
    </div>
    </div>`
        console.log(musicas[i])
    
   }
   
    varGlobal.item.innerHTML += montaCard
}