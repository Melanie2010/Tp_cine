document.addEventListener("DOMContentLoaded",()=>{
    console.log("chargé!!!")

let cine = [ 

                {   Image :'./asset/00.jpg',
                    Titre : 'King Kong', 
                    Date : "Date:1933 ",
                    Réal : 'Réal:Menan C.Cooper, Ernest B',
                    Genre : 'Genre:Horreur,fantastique',
                    Sortie : 'Sortie dvd:22 novembre 2005' 
                },
                {
                    Image :'./asset/01.jpg',
                    Titre : 'Scarface', 
                    Date : "Date:1932 ",
                    Réal : 'Réal:Howard Hawks',
                    Genre : 'Genre:Policier, action',
                    Sortie : 'Sortie dvd:23 décembre 2005'
                },
                {
                    Image :'./asset/02.jpg',
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
    //console.log(cine[0].Titre)
    // i = itérateur => boucle
    let printOut = "";
    let el = document.querySelector("ul");

    for(let i = 0; i<cine.length; i++){
        console.log(`
                   ${cine[i].Image}
                   <li> Titre :${cine[i].Titre}</li>
                   </li> Date : ${cine[i].Date} </li>
                   </li> Réal : ${cine[i].Réal}</li>
                   </li> Genre : ${cine[i].Genre}</li>
                   </li> Sortie : ${cine[i].Sortie}</li>
                    `)
        //afficher ceci dans le DOM
        printOut+=` ${cine[i].Image}, ${cine[i].Titre}, ${cine[i].Date}, ${cine[i].Réal}, ${cine[i].Genre}, ${cine[i].Sortie}</li>`
        // : <a href="mailto:${cine[i].Réal}">${cine[i].Réal}</a></li>`      

    }
    
    el.innerHTML = printOut

})