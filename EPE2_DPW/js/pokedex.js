document.getElementById("buscarPoke").addEventListener("click", function(){
    var numeroPoke = document.getElementById("numeroPoke").value;
        fetch(`https://pokeapi.co/api/v2/pokemon/${numeroPoke}`)
            .then(response => response.json())
            .then(data => {
            
            var pokeInfo = document.getElementById("pokeInfo")
            pokeInfo.innerHTML=
            `
        <div >
        
            <img class="pokefoto" src="${data.sprites.front_default}">
            <img class="pokefoto" src="${data.sprites.back_default}">
            <h1> ${data.name} </h1>    


          <div class= "poke-texto">      
                <p> ID: ${data.id} </p>
                <p> Nombre: ${data.name} </p>
                <p> Experiencia: ${data.base_experience} </p>
                <p> Altura: ${data.height / 10}m </p>
                <p> Peso: ${data.weight / 10}kg </p>
                <p> Habilidad: ${data.abilities.map(ability => ability.ability.name)} </p>
            </div>
                
        </div>        
        `;

        })
        .catch(error => console.error("Error", error));
});