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
    <div class="listaBotao">
    <audio controls>
	<source src="${musicas[i].UrlMusic}" type="audio/mpeg">
	<source src=" type="audio/ogg">
    </audio>
    </div>
    </div>
    </div>`
        console.log(musicas[i])
   }
   
    varGlobal.item.innerHTML += montaCard
}

function unloadScrollBars() {
    document. documentElement. style. overflow = 'hidden';
    document. body. scroll = "no"; // IE.
}
unloadScrollBars();