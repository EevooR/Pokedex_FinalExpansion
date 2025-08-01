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
const pktype = document.querySelectorAll(".type");
const pkbody = document.querySelector("#Pokedex");

const pkmnfz = document.querySelectorAll('.pkmnFormz');
const topare = document.querySelector("#top");

const stacfh = document.querySelector('#scfHea');
const credih = document.querySelector('#credHea');


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
const vivAPI = async (pkmnVar) => {
  const vivResponse = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + pkmnVar);
  const vivData = await vivResponse.json();

  return vivData;
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




  } catch (error) {
    if ([].includes(search.value )) {

      console.error("Error fetching Pokemon data:", error);

      // Set the value to "Hello" in case of an error
      search.value = "MissingNo.";

      // Optionally handle the UI for error (e.g., reset other elements)
      number.innerHTML = "#0000";  // Reset number

      pimage.style.display = "block";
      pimgsh.style.display = "block";
      // pimagf.style.display = "block";
      // pimgsf.style.display = "block";
      pimagf.style.display = "none";
      pimgsf.style.display = "none";

      pimage.src = "Assets/0.png";             // Clear image
      pimgsh.src = "Assets/0shiny.png";
      // pimagf.src = "Assets/0f.png";
      // pimgsf.src = "Assets/0fshiny.png";



      height.innerHTML = "&nbsp" + "3.3 m";
      weight.innerHTML = "&nbsp" + "3507.2 lbs";

      topare.style.backgroundImage = 'url("Assets/pokeball.png")';
      showVarience("Credits")
      stacfh.style.display = "none";
      credih.style.display = "block";

      const audio = new Audio('https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/32.ogg');
      audio.play();
      ptypes.innerHTML = ''; // Clear the current types
      let newType = document.createElement('span');
      newType.innerHTML = "Bird"; // Set "Bird" as the type for Missingno
      newType.classList.add('type');
      ptypes.appendChild(newType);
      newType.style.backgroundColor = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`; // Apply color for Bird type
      let extraType = document.createElement('span');
      extraType.innerHTML = "Normal"; // Set "Bird" as the type for Missingno
      extraType.classList.add('type');
      ptypes.appendChild(extraType);
      extraType.style.backgroundColor = `rgb(${typeColors["normal"][0]}, ${typeColors["normal"][1]}, ${typeColors["normal"][2]})`; // Apply color for Bird type
      pkbody.style.backgroundColor = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`; // Set background color for Bird type
      document.body.style.backgroundColor = `rgb(${bgColors["normal"][0]}, ${bgColors["normal"][1]}, ${bgColors["normal"][2]})`; // Set background color for Bird type

      pabili.innerHTML = '';

      let newAbil = document.createElement('div');
      newAbil.innerHTML = toTitleCase("No Ability");
      newAbil.classList.add('ability');
      pabili.appendChild(newAbil);

      let newnewAbil = document.createElement('div');
      newnewAbil.innerHTML = toTitleCase("Pressure");
      newnewAbil.classList.add('ability', 'hidden');
      pabili.appendChild(newnewAbil);

      mvlihe.style.color = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;





      const customMoves = [
        "water-gun", "water-gun","sky-attack","pay-day", "bind", "mega-punch", "razor-wind","swords-dance","mega-kick","toxic","take-down",
        "double-edge","bubble-beam","ice-beam","blizzard","submission","seismic-toss","rage","thunder","earthquake","fissure","psychic",
        "teleport","rest","thunder-wave","tri-attack","substitute","cut","fly"

      ];





      try {
      moveli.innerHTML = '';
      customMoves.forEach( async (move) => {
        console.log(move)
        const movData = await movAPI(move);
        console.log(movData);
        const newMoveRow = document.createElement('tr');
        const rowcolor = typeColors[movData.type.name].toString();
        newMoveRow.classList.add('Move');
        newMoveRow.id = 'ActiveMove';
        // pkbody.style.backgroundColor = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`; // Set background color for Bird type
        newMoveRow.style.background = `rgb(${typeColors[movData.type.name][0]}, ${typeColors[movData.type.name][1]}, ${typeColors[movData.type.name][2]})`;
        moveli.appendChild(newMoveRow);
    console.log(movData.type.name)

        const newMoveName = document.createElement('td');
        newMoveName.innerHTML = toTitleCase(movData.name.toString().replaceAll("-", " "));
        newMoveName.classList.add('MoveName');
        newMoveRow.appendChild(newMoveName);

        const newMoveType = document.createElement('td');
        newMoveType.innerHTML = movData.type.name.toString().replaceAll("-", " ");
        newMoveType.classList.add('MoveType');
        newMoveRow.appendChild(newMoveType);

        const newMoveClassContainer = document.createElement('td');
        newMoveClassContainer.id = 'ActiveMoveClass';
        newMoveClassContainer.classList.add('MoveClassContainer');
        newMoveRow.appendChild(newMoveClassContainer);
        const newMoveClass = document.createElement('img');
        newMoveClass.src = "Assets/" + movData.damage_class.name + ".png";
        newMoveClass.alt = movData.damage_class.name;
        newMoveClass.classList.add('MoveClass');
        newMoveClassContainer.appendChild(newMoveClass);




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



















        // Custom stats for Missingno (replace with any values you want)
        const customStats = [
          { base_stat: 33, stat: { name: "hp" } },         // HP
          { base_stat: 136, stat: { name: "attack" } },     // Attack
          { base_stat: 0, stat: { name: "defense" } },    // Defense
          { base_stat: 6, stat: { name: "special-attack" } }, // Special Attack
          { base_stat: 6, stat: { name: "special-defense" } }, // Special Defense
          { base_stat: 29, stat: { name: "speed" } },      // Speed
          // { base_stat: 231, stat: { name: "total" } },      // total
        ];


        // Manually update the stats for Missingno
   let totalStats = 0; // Initialize total stats variable
   stanum.forEach((statElem, index) => {
       const statValue = customStats[index].base_stat;
       statElem.innerHTML = statValue.toString().padStart(3, "0");

       totalStats += statValue; // Add each stat value to the total
       let barStat = statValue / 2.5;
       stibar[index].style.width = barStat.toString() + '%';
       let totstat = totalStats / 10;
       itotal.style.width = barStat.toString() + '%';
       stibar[index].style.backgroundColor = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;
       stobar[index].style.backgroundColor = `rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]}, ${".3"})`;
       stanum[index].style.color = `rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;
       stdesc[index].style.borderRightColor =`rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;
       stdesc[index].style.color =`rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;
       sbinnr.style.scrollbarColor = `rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]}) rgba(${0},${0},${0},${0})`;
       // sboost.style.backgroundColor = `rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;
       bastat.style.color = `rgba(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;
       stotal.style.color = `rgb(${typeColors["normal"][0]}, ${typeColors["normal"][1]}, ${typeColors["normal"][2]})`;
       todesc.style.color = `rgba(${typeColors["normal"][0]}, ${typeColors["normal"][1]}, ${typeColors["normal"][2]})`;
       sttbar.style.backgroundColor = `rgba(${typeColors["normal"][0]}, ${typeColors["normal"][1]}, ${typeColors["normal"][2]}, ${".3"})`;
       itotal.style.backgroundColor = `rgb(${typeColors["normal"][0]}, ${typeColors["normal"][1]}, ${typeColors["normal"][2]})`;
   });

   // Update total stat value (sum of custom stats)
   // stotal.innerHTML = totalStats.toString().padStart(3, '0');
   // let tPercent = totalStats / 10;
   // itotal.style.width = tPercent.toString() + "%";


    } else {
      alert("That Pokemon Does not Exist, or has not been implemented correctly, Try Again.");
      console.log(error);
    }
  }
}); // calls "search" then adds the function "On change, run an event, the folowing event being alerting the user to the change sending it as the target value."






function update(pkmnData) {
  // For debuging
  console.log(pkmnData);

  const mainColor = typeColors[pkmnData.name];


  //sets pokemon number
  number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

  topare.style.backgroundImage = "url('Assets/" + pkmnData.name + ".png')";
  try {
  moveli.innerHTML = '';
  pkmnData.moves.forEach( async (m) => {
    let pkmnMove = m.name;
    const movData = await movAPI(pkmnMove);
    console.log(movData);
    const newMoveRow = document.createElement('tr');
    const rowcolor = typeColors[movData.type.name].toString();
    newMoveRow.classList.add('Move');
    newMoveRow.id = 'ActiveMove';
    // pkbody.style.backgroundColor = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`; // Set background color for Bird type
    moveli.appendChild(newMoveRow);
console.log(movData.type.name)

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




// Copied from Stack Overflow for Title casing.
