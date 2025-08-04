//Name: Enzo Alexander
//Date: Febuary 24, 2025
//Project: PokeDex - JavaScript
// Filename: script/Script.js
// ---------------------------

// Store Variables for JS
const search = document.querySelector('#Search'); //Sets the Constant to "search" and searches the document for the first case of the ID "Search"
const number = document.querySelector('#number'); //Sets the Constant to "number" and searches the document for the first case of the ID "number"


const mvlihe = document.querySelector('#MoveListHeader');
const moveli = document.querySelector('#MoveList');
const movesp = document.querySelectorAll('.Move');
const movenm = document.querySelectorAll('.MoveName');
const movecl = document.querySelectorAll('.MoveClass');
const movepr = document.querySelectorAll('.MovePower');
const movepp = document.querySelectorAll('.MovePP');
const moveac = document.querySelectorAll('.MoveAcc');
const movecc = document.querySelectorAll('.MoveClassContainer');
const actmov = document.getElementById('#ActiveMove')
const acmovc = document.getElementById('#ActiveMoveClass')

const pokebg = document.querySelector('#pkbody');
const pkbody = document.querySelector("#Pokedex");

const pkmnfz = document.querySelectorAll('.pkmnFormz');
const topare = document.querySelector("#top");

const stacfh = document.querySelector('#scfHea');
const credih = document.querySelector('#credHea');

const pkmnLis = document.querySelector('#PokemonList');
const pkmnInd = document.querySelectorAll('.Pokemon');
const pkmnImg = document.querySelectorAll('.PokemonImage');
const pkmnNom = document.querySelectorAll('.PokemonName');

const typeLis = document.querySelectorAll('.TypeLists');
const pktype = document.querySelectorAll(".type");
const superef = document.querySelector('#SupEff');
const notveef = document.querySelector('#NoVeEff');
const noeffec = document.querySelector('#NoEff');
const weakto = document.querySelector('#WeaTo');
const resists = document.querySelector('#Resists');
const imuneto = document.querySelector('#ImmTo');
const neuteff = document.querySelector('#Neutral');


const typeMatchups = {
    'normal': 0,
    'fire': 0,
    'water': 0,
    'electric': 0,
    'grass': 0,
    'ice': 0,
    'fighting': 0,
    'poison': 0,
    'ground': 0,
    'flying': 0,
    'psychic': 0,
    'bug': 0,
    'rock': 0,
    'ghost': 0,
    'dragon': 0,
    'steel': 0,
    'dark': 0,
    'fairy': 0
};

const fetchAPI = async (pkmnName) => {
    // pkmnNameApi = pkmnName.split(' ').join('-').replaceAll(".", "").replaceAll("'", "").replaceAll("é", "e").replaceAll("-","").replaceAll("♂","-M").replaceAll("♀","-F").toLowerCase();
    pkmnNameApi = pkmnName.toLowerCase().replace(/[ .é♂♀':]/g, match => match === ' ' ? '-' : match === 'é' ? 'e' : match === '♂' ? '-M' : match === '♀' ? '-F' : '');
    if (pkmnNameApi == "" || pkmnNameApi == "-") {
      pkmnNameApi = getRandomInt(18);
    }

    const response = await fetch('https://pokeapi.co/api/v2/type/' + pkmnNameApi);

  if (response.status === 200) {
    const pkmnData = await response.json();
    return pkmnData;
  }

  return false;
};
const pokemonAPI = async (pkmnVar) => {
  const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnVar);
  const pokemonData = await pokemonResponse.json();

  return pokemonData;
};
const movAPI = async (pkmnMove) => {
  const movResponse = await fetch('https://pokeapi.co/api/v2/move/' + pkmnMove);
  const movData = await movResponse.json();

  return movData;
};

const typeColors = {
  "rock"      :     [182, 158, 049],
  "ghost"     :     [112, 085, 155],
  "steel"     :     [183, 185, 208],
  "water"     :     [100, 147, 235],
  "grass"     :     [116, 203, 072],
  "psychic"   :     [251, 085, 132],
  "ice"       :     [154, 214, 223],
  "dark"      :     [117, 087, 076],
  "fairy"     :     [230, 158, 172],
  "normal"    :     [170, 166, 127],
  "fighting"  :     [193, 034, 057],
  "flying"    :     [168, 145, 236],
  "poison"    :     [164, 062, 158],
  "ground"    :     [222, 193, 107],
  "bug"       :     [167, 183, 035],
  "fire"      :     [245, 125, 049],
  "electric"  :     [249, 207, 048],
  "dragon"    :     [112, 055, 255],
  "bird"      :     [104, 160, 144],
  "unknown"   :     [104, 160, 144],
  "stellar"   :     [100, 218, 222],
  "shadow"    :     [053, 053, 093]

}
const bgColors = {
  "rock"      :     [191, 154, 099],
  "ghost"     :     [108, 078, 130],
  "steel"     :     [206, 214, 215],
  "water"     :     [176, 176, 255],
  "grass"     :     [206, 255, 180],
  "psychic"   :     [250, 176, 241],
  "ice"       :     [176, 255, 255],
  "dark"      :     [078, 078, 078],
  "fairy"     :     [255, 180, 203],
  "normal"    :     [236, 232, 225],
  "fighting"  :     [191, 099, 099],
  "flying"    :     [176, 231, 250],
  "poison"    :     [173, 113, 201],
  "ground"    :     [248, 205, 141],
  "bug"       :     [241, 250, 176],
  "fire"      :     [255, 155, 097],
  "electric"  :     [255, 248, 176],
  "dragon"    :     [166, 107, 182],
  "bird"      :     [141, 161, 155],
  "unknown"   :     [141, 161, 155],
  "stellar"   :     [229, 229, 229],
  "shadow"    :     [181, 194, 205]

}
const mvClass = {
  "special"   :     [004, 072, 201],
  "physical"  :     [255, 109, 004],
  "status"    :     [086, 087, 102]

}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



search.addEventListener('change', async (event) => {
  try {
    const pkmnData = await fetchAPI(event.target.value);

    // const mainColor = typeColors[pkmnData.types[0].type.name];

      update(pkmnData);
      setTypeTo(pkmnData);
      setNameTo(pkmnData);
      typeMashups(pkmnData);

    if (['shadow', 'unknown'].includes(pkmnData.name)) {
      uniquePlacePokemon(pkmnData.name);
    } else {
      placePokemon(pkmnData);
    }

  } catch (error) {
      alert("That Pokemon Does not Exist, or has not been implemented correctly, Try Again.");
      console.log(error);

  }
}); // calls "search" then adds the function "On change, run an event, the folowing event being alerting the user to the change sending it as the target value."






function update(pkmnData) {
  // For debuging
  //console.log(pkmnData);

  const mainColor = typeColors[pkmnData.name];


  //sets pokemon number
  number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

  topare.style.backgroundImage = "url('Assets/" + pkmnData.name + ".png')";
  try {
  moveli.innerHTML = '';
  pkmnData.moves.forEach( async (m) => {
    let pkmnMove = m.name;
    const movData = await movAPI(pkmnMove);
    //console.log(movData);
    const newMoveRow = document.createElement('tr');
    const rowcolor = typeColors[movData.type.name].toString();
    newMoveRow.classList.add('Move');
    newMoveRow.id = 'ActiveMove';
    // pkbody.style.backgroundColor = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`; // Set background color for Bird type
    moveli.appendChild(newMoveRow);
//console.log(movData.type.name)

    const newMoveName = document.createElement('td');
    newMoveName.innerHTML = toTitleCase(movData.name.toString().replaceAll("-", " "));
    newMoveName.classList.add('MoveName');
    newMoveRow.appendChild(newMoveName);

    const newMoveClassContainer = document.createElement('td');
    newMoveClassContainer.id = 'ActiveMoveClass';
    newMoveClassContainer.classList.add('MoveClassContainer');
    newMoveRow.appendChild(newMoveClassContainer);
    const newMoveClass = document.createElement('img');
    newMoveClass.src = "Assets/" + toTitleCase(movData.damage_class.name) + ".png";
    newMoveClass.alt = movData.damage_class.name;
    newMoveClass.classList.add('MoveClass');
    newMoveClassContainer.appendChild(newMoveClass);

    newMoveRow.style.background = `rgb(${mvClass[movData.damage_class.name][0]}, ${mvClass[movData.damage_class.name][1]}, ${mvClass[movData.damage_class.name][2]})`;



    const newMovePower = document.createElement('td');
    if (movData.power == null) {
      newMovePower.innerHTML = "N/A";
    } else {
      newMovePower.innerHTML = movData.power;
    }
    newMovePower.classList.add('MovePower');
    newMoveRow.appendChild(newMovePower);

    const newMovePP = document.createElement('td');
    if (movData.pp == null) {
      newMovePP.innerHTML = "N/A";
    } else {
      newMovePP.innerHTML = movData.pp;
    }
    newMovePP.classList.add('MovePP');
    newMoveRow.appendChild(newMovePP);

    const newMoveAcc = document.createElement('td');
    if (movData.accuracy == null) {
      newMoveAcc.innerHTML = "N/A";
    } else {
      newMoveAcc.innerHTML = movData.accuracy + "%";
    }
    newMoveAcc.classList.add('MoveAcc');
    newMoveRow.appendChild(newMoveAcc);

      newMoveRow.removeAttribute('id');
      newMoveClassContainer.removeAttribute('id');


      });
    } catch (error) {
      console.log(error);
    }



}

function setTypeTo(sourceData) {
  const mainColor = typeColors[sourceData.name];
  let color = typeColors[sourceData.name];
  pkbody.style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
  document.body.style.backgroundColor = `rgb(${bgColors[sourceData.name][0]}, ${bgColors[sourceData.name][1]}, ${bgColors[sourceData.name][2]})`;


};

function setNameTo(sourceData) {
  search.value =  toTitleCase(sourceData.name.toString().replaceAll("-", " "));
};

function placePokemon(pkmnData) {

  pkmnLis.innerHTML = '';
  pkmnData.pokemon.forEach( async (t) => {

    const newMon = document.createElement('div');
    newMon.classList.add('Pokemon');
    pkmnLis.appendChild(newMon);
    let monData = await pokemonAPI(t.pokemon.name);
    console.log(monData);
    console.log(monData.types.length);


     let priMove = monData.types[0];

    if (monData.types.length == 2) {
       let secMove = monData.types[1];


       if (t.slot == "1") {
         console.log(secMove.type.name);
         pokemonType = secMove.type.name;
       }
       if (t.slot == "2") {
         console.log("!!!!" + pkmnData.name + "!!!!");
         console.log(priMove.type.name);
         pokemonType = priMove.type.name;
       }
    } else {
      console.log("Monotype " + priMove.type.name);
      pokemonType = priMove.type.name;
    }
      let color = typeColors[pokemonType];
      newMon.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

      const pimage = document.createElement('img');
      pimage.classList.add('PokemonImage');
      if (monData.sprites.front_default !== null) {
        pimage.src = monData.sprites.front_default;
      } else {
        if (monData.sprites.other.showdown.front_default !== null) {
          pimage.src = monData.sprites.other.showdown.front_default;
        } else {
          if (monData.sprites.other.home.front_default !== null) {
            pimage.src = monData.sprites.other.home.front_default;
          } else {
            if (monData.sprites.other.home.front_default == null) {
            pimage.style.display = "none";
          }
          }
        }
        }

        if (t.pokemon.name == "jigglypuff") {
           pokeCry = 'Assets/Jigglypuff_Song.wav';
        } else {
          if (["sentret", "lillipup"].includes(t.pokemon.name)) {
             pokeCry = monData.cries.legacy;
          }else {
               pokeCry = monData.cries.latest;
            }
          }

          // pimage.addEventListener("onclick", playCry(pokeCry));
          pimage.setAttribute('onclick', 'playCry("' + pokeCry.toString() + '")');
          newMon.appendChild(pimage);

        const pName = document.createElement('span');
        pName.classList.add('PokemonName');
        thePokeName = t.pokemon.name;
        thepokepoke = thePokeName.toString().replaceAll("-", " ");
        pName.innerHTML = toTitleCase(thepokepoke);
        newMon.appendChild(pName);
  });
};

function typeMashups(pkmnData) {

  const dmgRelations = pkmnData.damage_relations;

  typeMatchups['normal'] = 0;
  typeMatchups['fire'] = 0;
  typeMatchups['water'] = 0;
  typeMatchups['electric'] = 0;
  typeMatchups['grass'] = 0;
  typeMatchups['ice'] = 0;
  typeMatchups['fighting'] = 0;
  typeMatchups['poison'] = 0;
  typeMatchups['ground'] = 0;
  typeMatchups['flying'] = 0;
  typeMatchups['psychic'] = 0;
  typeMatchups['bug'] = 0;
  typeMatchups['rock'] = 0;
  typeMatchups['ghost'] = 0;
  typeMatchups['dragon'] = 0;
  typeMatchups['steel'] = 0;
  typeMatchups['dark'] = 0;
  typeMatchups['fairy'] = 0;


  superef.innerHTML = '';
  notveef.innerHTML = '';
  noeffec.innerHTML = '';
  weakto.innerHTML = '';
  resists.innerHTML = '';
  imuneto.innerHTML = '';
  neuteff.innerHTML = '';


  if (dmgRelations.double_damage_to.length !== 0) {
    dmgRelations.double_damage_to.forEach((t) => {
      typeMatchups[t.name.toString()] = 1;
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = toTitleCase(t.name);
      let tycolor = typeColors[t.name];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      superef.appendChild(newType);
    });
  } else {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    superef.appendChild(newType);
  }

  if (dmgRelations.half_damage_to.length !== 0) {
    dmgRelations.half_damage_to.forEach((t) => {
      typeMatchups[t.name.toString()] = 1;
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = toTitleCase(t.name);
      let tycolor = typeColors[t.name];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      notveef.appendChild(newType);
    });
  } else {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    notveef.appendChild(newType);
  }

  if (dmgRelations.no_damage_to.length !== 0) {
    dmgRelations.no_damage_to.forEach((t) => {
      typeMatchups[t.name.toString()] = 1;
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = toTitleCase(t.name);
      let tycolor = typeColors[t.name];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      noeffec.appendChild(newType);
    });
  } else {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    noeffec.appendChild(newType);
  }


  if (dmgRelations.double_damage_from.length !== 0) {
    dmgRelations.double_damage_from.forEach((t) => {
      typeMatchups[t.name.toString()] = 1;
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = toTitleCase(t.name);
      let tycolor = typeColors[t.name];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      weakto.appendChild(newType);
    });
  } else {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    weakto.appendChild(newType);
  }

  if (dmgRelations.half_damage_from.length !== 0) {
    dmgRelations.half_damage_from.forEach((t) => {
      typeMatchups[t.name.toString()] = 1;
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = toTitleCase(t.name);
      let tycolor = typeColors[t.name];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      resists.appendChild(newType);
    });
  } else {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    resists.appendChild(newType);
  }

  if (dmgRelations.no_damage_from.length !== 0) {
    dmgRelations.no_damage_from.forEach((t) => {
      typeMatchups[t.name.toString()] = 1;
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = toTitleCase(t.name);
      let tycolor = typeColors[t.name];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      imuneto.appendChild(newType);
    });
  } else {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    imuneto.appendChild(newType);
  }

  let typeChecksum = typeMatchups['normal'] + typeMatchups['fire'] + typeMatchups['water'] + typeMatchups['electric'] + typeMatchups['grass'] + typeMatchups['ice'] + typeMatchups['fighting'] + typeMatchups['poison'] + typeMatchups['ground'] + typeMatchups['flying'] + typeMatchups['psychic'] + typeMatchups['bug'] + typeMatchups['rock'] + typeMatchups['ghost'] + typeMatchups['dragon'] + typeMatchups['steel'] + typeMatchups['dark'] + typeMatchups['fairy'];
  console.log(typeChecksum);

  if (typeChecksum == 18) {
    const newType = document.createElement('span');
    newType.classList.add('type');
    newType.innerHTML = "None";
    let tycolor = typeColors['unknown'];
    newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
    neuteff.appendChild(newType);
  } else {

    if (typeMatchups['normal'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Normal";
      let tycolor = typeColors['normal'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['fire'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Fire";
      let tycolor = typeColors['fire'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['water'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Water";
      let tycolor = typeColors['water'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['electric'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Electric";
      let tycolor = typeColors['electric'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['grass'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Grass";
      let tycolor = typeColors['grass'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['ice'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Ice";
      let tycolor = typeColors['ice'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['fighting'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Fighting";
      let tycolor = typeColors['fighting'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['poison'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Poison";
      let tycolor = typeColors['poison'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['ground'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Ground";
      let tycolor = typeColors['ground'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['flying'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Flying";
      let tycolor = typeColors['flying'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['psychic'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Psychic";
      let tycolor = typeColors['psychic'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['bug'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Bug";
      let tycolor = typeColors['bug'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['rock'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Rock";
      let tycolor = typeColors['rock'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['ghost'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Ghost";
      let tycolor = typeColors['ghost'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['dragon'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Dragon";
      let tycolor = typeColors['dragon'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['steel'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Steel";
      let tycolor = typeColors['steel'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['dark'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Dark";
      let tycolor = typeColors['dark'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }
    if (typeMatchups['fairy'] == 0) {
      const newType = document.createElement('span');
      newType.classList.add('type');
      newType.innerHTML = "Fairy";
      let tycolor = typeColors['fairy'];
      newType.style.backgroundColor = `rgb(${tycolor[0]}, ${tycolor[1]}, ${tycolor[2]})`;
      neuteff.appendChild(newType);
    }


  }


};

function uniquePlacePokemon(typeName) {

  pkmnLis.innerHTML = '';

  if (typeName == "shadow") {
    const newMon = document.createElement('div');
    newMon.classList.add('Pokemon');
    pkmnLis.appendChild(newMon);
    // let monData = await pokemonAPI(t.pokemon.name);
    // console.log(monData);
    // console.log(monData.types.length);

      pokemonType = "shadow";
      let color = typeColors[pokemonType];
      newMon.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

      const pimage = document.createElement('img');
      pimage.classList.add('PokemonImage');
      pimage.src = "Assets/ShadowLugia.png";
      pimage.setAttribute('onclick', 'playCry("Assets/249.ogg")');
      newMon.appendChild(pimage);

        const pName = document.createElement('span');
        pName.classList.add('PokemonName');
        pName.innerHTML = "Shadow Lugia";
        newMon.appendChild(pName);

  }
  if (typeName == "unknown") {
    try {

      // let pokemonType = "unknown";
      // let monData = await pokemonAPI(t.pokemon.name);
      // console.log(monData);
      // console.log(monData.types.length);
        const newMon = document.createElement('div');
        const pimage = document.createElement('img');
        const pName = document.createElement('span');
        pokemonType = "unknown";
        color = typeColors[pokemonType];
        newMon.classList.add('Pokemon');
        pkmnLis.appendChild(newMon);
        newMon.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        pimage.classList.add('PokemonImage');
        pimage.src = "Assets/0.png";
        pimage.setAttribute('onclick', 'playCry("Assets/cries_pokemon_legacy_32.ogg")');
        newMon.appendChild(pimage);
        pName.classList.add('PokemonName');
        pName.innerHTML = "MissingNo.";
        newMon.appendChild(pName);

        const newMon2 = document.createElement('div');
        const pimage2 = document.createElement('img');
        const pName2 = document.createElement('span');
        pokemonType2 = "dark";
        color2 = typeColors[pokemonType2];
        newMon2.classList.add('Pokemon');
        pkmnLis.appendChild(newMon2);
        newMon2.style.backgroundColor = `rgb(${color2[0]}, ${color2[1]}, ${color2[2]})`;
        pimage2.classList.add('PokemonImage');
        pimage2.src = "Assets/lewis-bryant-plauge.gif";
        pimage2.setAttribute('onclick', 'playCry("Assets/823.ogg")');
        newMon2.appendChild(pimage2);
        pName2.classList.add('PokemonName');
        pName2.innerHTML = "Taylor Adami (Concept)";
        newMon2.appendChild(pName2);

        const newMon3 = document.createElement('div');
        const pimage3 = document.createElement('img');
        const pName3 = document.createElement('span');
        pokemonType3 = "ghost";
        color3 = typeColors[pokemonType3];
        newMon3.classList.add('Pokemon');
        pkmnLis.appendChild(newMon3);
        newMon3.style.backgroundColor = `rgb(${color3[0]}, ${color3[1]}, ${color3[2]})`;
        pimage3.classList.add('PokemonImage');
        pimage3.src = "Assets/778.png";
        pimage3.setAttribute('onclick', 'playCry("Assets/487.ogg")');
        newMon3.appendChild(pimage3);
        pName3.classList.add('PokemonName');
        pName3.innerHTML = "Enzo Alexander [Me] (Continuation)";
        newMon3.appendChild(pName3);

        const newMon4 = document.createElement('div');
        const pimage4 = document.createElement('img');
        const pName4 = document.createElement('span');
        pokemonType4 = "shadow";
        color4 = typeColors[pokemonType4];
        newMon4.classList.add('Pokemon');
        pkmnLis.appendChild(newMon4);
        newMon4.style.backgroundColor = `rgb(${color4[0]}, ${color4[1]}, ${color4[2]})`;
        pimage4.classList.add('PokemonImage');
        pimage4.src = "Assets/ChatGPT.png";
        pimage4.setAttribute('onclick', 'playCry("Assets/137.ogg")');
        newMon4.appendChild(pimage4);
        pName4.classList.add('PokemonName');
        pName4.innerHTML = "ChatGPT (Code Aid)";
        newMon4.appendChild(pName4);

        const newMon5 = document.createElement('div');
        const pimage5 = document.createElement('img');
        const pName5 = document.createElement('span');
        pokemonType5 = "normal";
        color5 = typeColors[pokemonType5];
        newMon5.classList.add('Pokemon');
        pkmnLis.appendChild(newMon5);
        newMon5.style.backgroundColor = `rgb(${color5[0]}, ${color5[1]}, ${color5[2]})`;
        pimage5.classList.add('PokemonImage');
        pimage5.src = "Assets/StackOverflow.png";
        pimage5.setAttribute('onclick', 'playCry("Assets/474.ogg")');
        newMon5.appendChild(pimage5);
        pName5.classList.add('PokemonName');
        pName5.innerHTML = "Stack Overflow (Code Aid)";
        newMon5.appendChild(pName5);

        const newMon6 = document.createElement('div');
        const pimage6 = document.createElement('img');
        const pName6 = document.createElement('span');
        pokemonType6 = "fire";
        color6 = typeColors[pokemonType6];
        newMon6.classList.add('Pokemon');
        pkmnLis.appendChild(newMon6);
        newMon6.style.backgroundColor = `rgb(${color6[0]}, ${color6[1]}, ${color6[2]})`;
        pimage6.classList.add('PokemonImage');
        pimage6.src = "Assets/480.png";
        pimage6.setAttribute('onclick', 'playCry("Assets/480.ogg")');
        newMon6.appendChild(pimage6);
        pName6.classList.add('PokemonName');
        pName6.innerHTML = "PokeAPI (Data Source)";
        newMon6.appendChild(pName6);

        const newMon7 = document.createElement('div');
        const pimage7 = document.createElement('img');
        const pName7 = document.createElement('span');
        pokemonType7 = "ground";
        color7 = typeColors[pokemonType7];
        newMon7.classList.add('Pokemon');
        pkmnLis.appendChild(newMon7);
        newMon7.style.backgroundColor = `rgb(${color7[0]}, ${color7[1]}, ${color7[2]})`;
        pimage7.classList.add('PokemonImage');
        pimage7.src = "Assets/872.png";
        pimage7.setAttribute('onclick', 'playCry("Assets/403.ogg")');
        newMon7.appendChild(pimage7);
        pName7.classList.add('PokemonName');
        pName7.innerHTML = "Mark Alexander (Idea Continuince)";
        newMon7.appendChild(pName7);

        const newMon8 = document.createElement('div');
        const pimage8 = document.createElement('img');
        const pName8 = document.createElement('span');
        pokemonType8 = "ghost";
        color8 = typeColors[pokemonType8];
        newMon8.classList.add('Pokemon');
        pkmnLis.appendChild(newMon8);
        newMon8.style.backgroundColor = `rgb(${color8[0]}, ${color8[1]}, ${color8[2]})`;
        pimage8.classList.add('PokemonImage');
        pimage8.src = "Assets/487.png";
        pimage8.setAttribute('onclick', 'playCry("Assets/487.ogg")');
        newMon8.appendChild(pimage8);
        pName8.classList.add('PokemonName');
        pName8.innerHTML = "Bishaaan";
        newMon8.appendChild(pName8);
      } catch (error) {
        console.log(error);
      }
  }
  // <p class="Credits pkmnFormz" style="display:none;">Mark Alexander</p> Snom (Shinx)








/*
  pkmnData.pokemon.forEach( async (t) => {

    const newMon = document.createElement('div');
    newMon.classList.add('Pokemon');
    pkmnLis.appendChild(newMon);
    let monData = await pokemonAPI(t.pokemon.name);
    console.log(monData);
    console.log(monData.types.length);


     let priMove = monData.types[0];

    if (monData.types.length == 2) {
       let secMove = monData.types[1];


       if (t.slot == "1") {
         console.log(secMove.type.name);
         pokemonType = secMove.type.name;
       }
       if (t.slot == "2") {
         console.log("!!!!" + pkmnData.name + "!!!!");
         console.log(priMove.type.name);
         pokemonType = priMove.type.name;
       }
    } else {
      console.log("Monotype " + priMove.type.name);
      pokemonType = priMove.type.name;
    }
      let color = typeColors[pokemonType];
      newMon.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

      const pimage = document.createElement('img');
      pimage.classList.add('PokemonImage');
      if (monData.sprites.front_default !== null) {
        pimage.src = monData.sprites.front_default;
      } else {
        if (monData.sprites.other.showdown.front_default !== null) {
          pimage.src = monData.sprites.other.showdown.front_default;
        } else {
          if (monData.sprites.other.home.front_default !== null) {
            pimage.src = monData.sprites.other.home.front_default;
          } else {
            if (monData.sprites.other.home.front_default == null) {
            pimage.style.display = "none";
          }
          }
        }
        }

        if (t.pokemon.name == "jigglypuff") {
           pokeCry = 'Assets/Jigglypuff_Song.wav';
        } else {
          if (["sentret", "lillipup"].includes(t.pokemon.name)) {
             pokeCry = monData.cries.legacy;
          }else {
               pokeCry = monData.cries.latest;
            }
          }

          // pimage.addEventListener("onclick", playCry(pokeCry));
          pimage.setAttribute('onclick', 'playCry("' + pokeCry.toString() + '")');
          newMon.appendChild(pimage);

        const pName = document.createElement('span');
        pName.classList.add('PokemonName');
        thePokeName = t.pokemon.name;
        thepokepoke = thePokeName.toString().replaceAll("-", " ");
        pName.innerHTML = toTitleCase(thepokepoke);
        newMon.appendChild(pName);
  }); */
};

function playCry(cry) {
  const pokemonCry = new Audio(cry);
  pokemonCry.play();
}
