const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pikaSad.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let nombre = data.id + '. ' + data.species.name[0].toUpperCase() + data.species.name.substring(1);
            pokeNumero(data.id);
            pokeNombre(nombre);

            let tipos = data.types.map(typ => typ.type.name);
            pokeTipo(tipos);

            let estadisticas = data.stats[0].stat.name + " = " + data.stats[0].base_stat + " " +
                                data.stats[1].stat.name + " = " + data.stats[1].base_stat + " " +
                                data.stats[2].stat.name + " = " + data.stats[2].base_stat + " " +
                                data.stats[3].stat.name + " = " + data.stats[3].base_stat + " " +
                                data.stats[4].stat.name + " = " + data.stats[4].base_stat + " " +
                                data.stats[5].stat.name + " = " + data.stats[5].base_stat;
            pokeEstadisticas(estadisticas);

            let movimientos = data.moves.map(mov => mov.move.name);
            pokeMovimientos(movimientos);
        }
    });
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNumero = (numero) => {
    const inputfield = document.getElementById("numero");
    inputfield.value = numero;
}

const pokeMovimientos = (movimientos) => {
    const inputfield = document.getElementById("movimientos");
    inputfield.value = movimientos;
}

const pokeEstadisticas = (estadisticas) => {
    const inputfield = document.getElementById("estadisticas");
    inputfield.value = estadisticas;
}

const pokeTipo = (tipo) => {
    const inputfield = document.getElementById("tipo");
    inputfield.value = tipo;
}

const pokeNombre = (nombre) => {
    const inputfield = document.getElementById("nombre");
    inputfield.value = nombre;
}