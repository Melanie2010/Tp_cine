document.addEventListener("DOMContentLoaded",()=>{
    console.log("chargé!!!")

let cine = [ 

                {
                    Titre : 'King Kong', 
                    Date : "Date:1933 ",
                    Réal : 'Réal:Menan C.Cooper',
                    Genre : 'Genre:Horreur,fantastique',
                    Sortie : 'Sortie dvd:22 novembre 2005' 
                },
                {
                    Titre : 'Scarface', 
                    Date : "Date:1932 ",
                    Réal : 'Réal:Howard Hawks',
                    Genre : 'Genre:Policier, action',
                    Sortie : 'Sortie dvd:23 décembre 2005'
                },
                {
                    Titre : 'Autant en emporte le vent', 
                    Date : "Date : 1932 ",
                    Réal : 'Réal:Victor Fleming',
                    Genre : 'Genre:Dramatique,guerre',
                    Sortie : 'Sortie dvd:19 mars 2005'
                }
            ]

    console.table(cine)
    console.log(typeof cine)
    console.log(JSON.stringify(cine))

    let printOut = "";
    let el = document.querySelector("ul");

    for(let i = 0; i<cine.length; i++){
        console.log(`
                   ${cine[i].Titre}
                   ${cine[i].Date} 
                   ${cine[i].Réal}
                   ${cine[i].Genre}
                   ${cine[i].Sortie}
                    `)
        printOut+=`<li> ${cine[i].Titre}, ${cine[i].Date}, ${cine[i].Réal}, ${cine[i].Genre}, ${cine[i].Sortie}   
        : <a href="mailto:${cine[i].Titre}">${cine[i].Titre}</a></li>`

    }
    
    el.innerHTML = printOut

})