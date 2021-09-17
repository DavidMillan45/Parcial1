
var rowId = 0;
var wd = [];
var ar1 = [];


document.getElementById("translate-button").onclick = function () {
	rowId++
	let translate = {
		translationinput: document.getElementById("translation-input").value	
	}	

	let tr = document.createElement("tr")
    tr.setAttribute("id", "row-" + rowId)

    let tdId = document.createElement("td")
    tdId.innerHTML = rowId
    tr.appendChild(tdId)

    Object.keys(translate).forEach((key) => {
        let td = document.createElement("td")
        td.innerHTML = translate[key]
        tr.appendChild(td)
    });

    let tdActions = document.createElement("td")
    let input = document.createElement("input")
    
   

// Getting Json

    let word = document.getElementById("translation-input").value;
    console.log(word)


    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then(response => response.json())
        .then(data => {
            wd = data;
            console.log(wd)
            let aux = document.getElementById("answer-input"); 
            
            data.forEach((meanings) => {
                //console.log(meanings)
                let aux2 =meanings.meanings;

                //console.log(aux2)

                aux2.forEach((definitions) => {

                    let aux3 = definitions.definitions;
                    //console.log(aux3)

                    aux3.forEach((definition) => {
                        let aux4 = definition.definition;
                        let exmple = definition.example;
                        document.getElementById('ansewer1').innerHTML= aux4;
                        

                        document.getElementById('ansewer3').innerHTML= exmple;

                      console.log(aux4)
                       // console.log(exmple)


                        ar1=aux4;
                   // console.log(aux4)

            aux2.forEach((partOfSpeech) => {

                let ps= partOfSpeech.partOfSpeech;
                document.getElementById('ansewer2').innerHTML= ps;
                console.log(ps)

                console.log(exmple)





                let option = document.createElement("label");
                option.innerHTML = definition.definition;
                //console.log(option2)
              



                
            
                //console.log(Object.values(meanings));

                /*let option = document.createElement("label");
                option.innerHTML = meanings.meanings;
                console.log(option)*/


               

                //document.getElementById("cat-image").setAttribute("src", data[0].url);
        
         
               });
            });
          })
       });          
    });
} 