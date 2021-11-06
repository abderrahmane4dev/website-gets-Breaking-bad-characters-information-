async function get() {
    const response = await fetch("https://www.breakingbadapi.com/api/characters");
    const data = await response.json();
    document.querySelector("select").innerHTML = `
    <select>
    ${ data.map(actor=> `<option> ${actor.name} </option> `)}
    </select>`
    document.querySelector("select").addEventListener("change",function(){
       // console.log("wsh0");
        
        data.map(function search(actor){
              if(actor.name ==document.querySelector("select").value ){
                document.querySelector("img").src = actor.img;
                document.querySelector("#header").innerHTML=`
                <h1> ${actor.name} </h1>
                <h2> date of birh :  ${actor.birthday} </h2>
                <h2> status :  ${actor.status} </h2>
                <h3> 
                Series that the character is involved with :  ${actor.category} </h3>
                <h3> 
                List of seasons that the character appeared in :  ${actor.appearance} </h3>
                <p> </p>
                `
                console.log("yes");
              }
        })
     
    })

}



get() ;