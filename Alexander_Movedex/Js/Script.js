//Name: Enzo Alexander
//Date: Febuary 24, 2025
//Project: PokeDex - JavaScript
// Filename: script/Script.js
// ---------------------------

// Store Variables for JS
const pokebg = document.querySelector('#pkbody'); //Body
const pkbody = document.querySelector("#Pokedex"); //White Area
const topare = document.querySelector("#top"); // Search bar and Number
const search = document.querySelector('#Search'); //Sets the Constant to "search" and searches the document for the first case of the ID "Search"
const number = document.querySelector('#number'); //Sets the Constant to "number" and searches the document for the first case of the ID "number"

const flavText = document.querySelector('#FlavorText'); //Flavor Text
const shoEffec = document.querySelector('#ShortEffect'); //Short Effect
const pokelist = document.querySelector('#PokemonList'); //List of Pokemon
const pokemons = document.querySelectorAll('.Pokemon'); //List of Pokemon
const pimage = document.querySelectorAll('.PokemonImage'); // Pokemon Icon
const pname = document.querySelectorAll('.PokemonName'); // Pokemon Icon


const pokeApiFetch = async (pkmnName) => {
    // pkmnNameApi = pkmnName.split(' ').join('-').replaceAll(".", "").replaceAll("'", "").replaceAll("é", "e").replaceAll("-","").replaceAll("♂","-M").replaceAll("♀","-F").toLowerCase();
    pkmnNameApi = pkmnName.toLowerCase().replace(/[ .é♂♀':]/g, match => match === ' ' ? '-' : match === 'é' ? 'e' : match === '♂' ? '-M' : match === '♀' ? '-F' : '');

    if (pkmnNameApi == "" || pkmnNameApi == "-") {
      pkmnNameApi = getRandomInt(1025);
    }

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnNameApi);

  if (response.status === 200) {
    const pkmnData = await response.json();
    return pkmnData;
  }

  return false;
};

const abilApi = async (abilityName) => {
    // pkmnNameApi = pkmnName.split(' ').join('-').replaceAll(".", "").replaceAll("'", "").replaceAll("é", "e").replaceAll("-","").replaceAll("♂","-M").replaceAll("♀","-F").toLowerCase();
    abilNameApi = abilityName.toLowerCase().replace(/[ .é♂♀':]/g, match => match === ' ' ? '-' : match === 'é' ? 'e' : match === '♂' ? '-M' : match === '♀' ? '-F' : '');

    if (abilNameApi == "" || abilNameApi == "-") {
      abilNameApi = getRandomInt(367);
    }

    const response = await fetch('https://pokeapi.co/api/v2/ability/' + abilNameApi);

  if (response.status === 200) {
    const abilData = await response.json();
    return abilData;
  }

  return false;
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
  "unknown"   :     [104, 160, 144]

}



const genColors = {
  "generation-i"          :     [172, 211, 108],
  "generation-ii"         :     [220, 214, 119],
  "generation-iii"        :     [156, 215, 200],
  "generation-iv"         :     [183, 163, 195],
  "generation-v"          :     [159, 202, 223],
  "generation-vi"         :     [221, 96, 140],
  "generation-vii"        :     [232, 148, 131],
  "generation-viii"       :     [201, 125, 192],
  "generation-ix"         :     [235, 192, 129]
}
const genColorsAcc = {
  "generation-i"          :     [83, 122, 19],
  "generation-ii"         :     [131, 125, 30],
  "generation-iii"        :     [67, 126, 111],
  "generation-iv"         :     [94, 74, 106],
  "generation-v"          :     [70, 113, 134],
  "generation-vi"         :     [132, 7, 51],
  "generation-vii"        :     [143, 59, 42],
  "generation-viii"       :     [112, 36, 103],
  "generation-ix"         :     [146, 104, 40]
}




search.addEventListener('change', async (event) => {


  const abilData = await abilApi(event.target.value);
  number.innerHTML = '#'+ abilData.id.toString().padStart(3,'0');


  pokelist.innerHTML = '';
  abilData.pokemon.forEach( async (pk) => {

    let newPk = document.createElement('div');
    newPk.classList.add('Pokemon');

    let newPkImage = document.createElement('img');
    newPkImage.classList.add('PokemonImage');

    let newPkName = document.createElement('span');
    newPkName.classList.add('PokemonName');

    const pkmnData = await pokeApiFetch(pk.pokemon.name);
    console.log(pkmnData);
    newPkImage.style.display = "block";
    try {
      if (pkmnData.sprites.front_default !== null) {
        newPkImage.src = pkmnData.sprites.front_default;
      } else {
        if (pkmnData.sprites.other.showdown.front_default !== null) {
          newPkImage.src = pkmnData.sprites.other.showdown.front_default;
        } else {
          if (pkmnData.sprites.other.home.front_default !== null) {
            newPkImage.src = pkmnData.sprites.other.home.front_default;
          } else {
            if (pkmnData.sprites.other.home.front_default == null) {
            newPkImage.style.display = "none";
          }
          }
        }
        }

      } catch (error) {
        if (pkmnData.sprites.front_default !== null) {
          newPkImage.src = pkmnData.sprites.front_default;
            } else {
              newPkImage.style.display = "none";
            }
    }



    newPkName.innerHTML = toTitleCase(pk.pokemon.name);

    console.log(pk.is_hidden);

    if (pk.is_hidden.toString() == "true") {
      newPkName.classList.add('hidden');
    }
    newPk.addEventListener('click', (event) => {
      const audio = new Audio('Assets/Ability-Activate.mp3');
              audio.play();
    });
    const mainColor = typeColors[pkmnData.types[0].type.name];

    newPk.style.background = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;

    newPk.appendChild(newPkImage);
    newPk.appendChild(newPkName);
    pokelist.appendChild(newPk);
  });

  search.value =  toTitleCase(abilData.name.toString().replaceAll("-", " "));
  if (abilData.effect_entries[0].language.name == "en") {
    flavText.innerHTML = abilData.effect_entries[0].effect.toString();
    shoEffec.innerHTML = abilData.effect_entries[0].short_effect.toString();
  } else {
    if (abilData.effect_entries[1].language.name == "en") {
      flavText.innerHTML = abilData.effect_entries[1].effect.toString();
      shoEffec.innerHTML = abilData.effect_entries[1].short_effect.toString();
    } else {
      if (abilData.effect_entries[2].language.name == "en") {
        flavText.innerHTML = abilData.effect_entries[2].effect.toString();
        shoEffec.innerHTML = abilData.effect_entries[2].short_effect.toString();
      } else {
        if (abilData.effect_entries[3].language.name == "en") {
          flavText.innerHTML = abilData.effect_entries[3].effect.toString();
          shoEffec.innerHTML = abilData.effect_entries[3].short_effect.toString();
        }
      }
    }
  }
  const genFinalColor  = genColors[abilData.generation.name];
  const genScrollColor = genColorsAcc[abilData.generation.name];
  pokelist.style.scrollbarColor = `rgba(${genScrollColor[0]}, ${genScrollColor[1]}, ${genScrollColor[2]}) rgba(${0},${0},${0},${0})`;
  pokebg.style.background = `rgba(${genFinalColor[0]}, ${genFinalColor[1]}, ${genFinalColor[2]})`;
    //


      topare.style.backgroundImage = 'url("Assets/pokeball.png")';

}); // calls "search" then adds the function "On change, run an event, the folowing event being alerting the user to the change sending it as the target value."

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
