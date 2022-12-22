async function  loadMusic(){
    const url = "./bdJson/Musicas.json"
    let response = await fetch(url);
    if(response.ok){
        console.log(await response.json())
    }else{
        console.log("Error: "+ response.status)
    }
}

loadMusic();