//Name: Enzo Alexander
//Date: Febuary 24, 2025
//Project: PokeDex - JavaScript
// Filename: script/Script.js
// ---------------------------

// Store Variables for JS
const search = document.querySelector('#Search'); //Sets the Constant to "search" and searches the document for the first case of the ID "Search"
const number = document.querySelector('#number'); //Sets the Constant to "number" and searches the document for the first case of the ID "number"
const pimage = document.querySelector('#pokemon-image');


const pokebg = document.querySelector('#pkbody');
const pkbody = document.querySelector("#Pokedex");
const pkmnfz = document.querySelectorAll('.pkmnFormz');

const topare = document.querySelector("#top");
const sbinnr = document.querySelector('#StFormsInner');
const longef = document.querySelector('#longEffect');
const shorte = document.querySelector('#shortEffect');



const counta = document.querySelector("#countable");
const consum = document.querySelector("#consumable");
const useove = document.querySelector("#usable-overworld");
const usebat = document.querySelector("#usable-in-battle");
const holdab = document.querySelector("#holdable");
const holdpa = document.querySelector("#holdable-passive");
const holdac = document.querySelector("#holdable-active");
const underg = document.querySelector("#underground");
const pkmmov = document.querySelector("#machineMove");

const giriprinc = {
  "contest-costume-(jacket)":"contest-costume--jacket",
  "normalium-z-(held)":"normalium-z--held",
  "firium-z-(held)":"firium-z--held",
  "waterium-z-(held)":"waterium-z--held",
  "electrium-z-(held)":"electrium-z--held",
  "grassium-z-(held)":"grassium-z--held",
  "icium-z-(held)":"icium-z--held",
  "fightinium-z-(held)":"fightinium-z--held",
  "poisonium-z-(held)":"poisonium-z--held",
  "groundium-z-(held)":"groundium-z--held",
  "flyinium-z-(held)":"flyinium-z--held",
  "psychium-z-(held)":"psychium-z--held",
  "buginium-z-(held)":"buginium-z--held",
  "rockium-z-(held)":"rockium-z--held",
  "ghostium-z-(held)":"ghostium-z--held",
  "dragonium-z-(held)":"dragonium-z--held",
  "darkinium-z-(held)":"darkinium-z--held",
  "steelium-z-(held)":"steelium-z--held",
  "fairium-z-(held)":"fairium-z--held",
  "pikanium-z-(held)":"pikanium-z--held",
  "decidium-z-(held)":"decidium-z--held",
  "incinium-z-(held)":"incinium-z--held",
  "primarium-z-(held)":"primarium-z--held",
  "tapunium-z-(held)":"tapunium-z--held",
  "marshadium-z-(held)":"marshadium-z--held",
  "aloraichium-z-(held)":"aloraichium-z--held",
  "snorlium-z-(held)":"snorlium-z--held",
  "eevium-z-(held)":"eevium-z--held",
  "mewnium-z-(held)":"mewnium-z--held",
  "pikashunium-z-(held)":"pikashunium-z--held",
  "bike-(green)":"bike--green",
  "normalium-z-(bag)":"normalium-z--bag",
  "firium-z-(bag)":"firium-z--bag",
  "waterium-z-(bag)":"waterium-z--bag",
  "electrium-z-(bag)":"electrium-z--bag",
  "grassium-z-(bag)":"grassium-z--bag",
  "icium-z-(bag)":"icium-z--bag",
  "fightinium-z-(bag)":"fightinium-z--bag",
  "poisonium-z-(bag)":"poisonium-z--bag",
  "groundium-z-(bag)":"groundium-z--bag",
  "flyinium-z-(bag)":"flyinium-z--bag",
  "psychium-z-(bag)":"psychium-z--bag",
  "buginium-z-(bag)":"buginium-z--bag",
  "rockium-z-(bag)":"rockium-z--bag",
  "ghostium-z-(bag)":"ghostium-z--bag",
  "dragonium-z-(bag)":"dragonium-z--bag",
  "darkinium-z-(bag)":"darkinium-z--bag",
  "steelium-z-(bag)":"steelium-z--bag",
  "fairium-z-(bag)":"fairium-z--bag",
  "pikanium-z-(bag)":"pikanium-z--bag",
  "decidium-z-(bag)":"decidium-z--bag",
  "incinium-z-(bag)":"incinium-z--bag",
  "primarium-z-(bag)":"primarium-z--bag",
  "tapunium-z-(bag)":"tapunium-z--bag",
  "marshadium-z-(bag)":"marshadium-z--bag",
  "aloraichium-z-(bag)":"aloraichium-z--bag",
  "snorlium-z-(bag)":"snorlium-z--bag",
  "eevium-z-(bag)":"eevium-z--bag",
  "mewnium-z-(bag)":"mewnium-z--bag",
  "pikashunium-z-(bag)":"pikashunium-z--bag",
  "solganium-z-(held)":"solganium-z--held",
  "lunalium-z-(held)":"lunalium-z--held",
  "ultranecrozium-z-(held)":"ultranecrozium-z--held",
  "mimikium-z-(held)":"mimikium-z--held",
  "lycanium-z-(held)":"lycanium-z--held",
  "kommonium-z-(held)":"kommonium-z--held",
  "solganium-z-(bag)":"solganium-z--bag",
  "lunalium-z-(bag)":"lunalium-z--bag",
  "ultranecrozium-z-(bag)":"ultranecrozium-z--bag",
  "mimikium-z-(bag)":"mimikium-z--bag",
  "lycanium-z-(bag)":"lycanium-z--bag",
  "kommonium-z-(bag)":"kommonium-z--bag",
  "storage-key-(galactic-warehouse)":"storage-key--galactic-warehouse",
  "basement-key-(goldenrod)":"basement-key--goldenrod",
  "xtransceiver-(red)":"xtransceiver--red",
  "xtransceiver-(yellow)":"xtransceiver--yellow",
  "dna-splicers-(merge)":"dna-splicers--merge",
  "dna-splicers-(split)":"dna-splicers--split",
  "dropped-item-(red)":"dropped-item--red",
  "dropped-item-(yellow)":"dropped-item--yellow",
  "holo-caster-(green)":"holo-caster--green",
  "bike-(yellow)":"bike--yellow",
  "holo-caster-(red)":"holo-caster--red",
  "basement-key-(new-mauville)":"basement-key--new-mauville",
  "storage-key-(sea-mauville)":"storage-key--sea-mauville",
  "ss-ticket-(hoenn)":"ss-ticket--hoenn",
  "contest-costume-(dress)": "contest-costume--dress",
  "meteorite-2": "meteorite--2",
  "meteorite-3": "meteorite--3",
  "meteorite-4": "meteorite--4",
  "n-solarizer-(merge)": "n-solarizer--merge",
  "n-lunarizer-(merge)": "n-lunarizer--merge",
  "n-solarizer-(split)": "n-solarizer--split",
  "n-lunarizer-(split)": "n-lunarizer--split",
  "secret-key-(lets-go)": "secret-key--letsgo",
  "ss-ticket-(lets-go)": "ss-ticket--letsgo",
  "parcel-(lets-go)": "parcel--letsgo",
  "card-key-(lets-go)": "card-key--letsgo",
  "leaf-letter-(pikachu)": "leaf-letter--pikachu",
  "leaf-letter-(eevee)": "leaf-letter--eevee",
  "fishing-rod-(galar)": "fishing-rod--galar",
  "rotom-bike-(water)-mode": "rotom-bike--water-mode",
  "rotom-bike-(sparkling-white)": "rotom-bike--sparkling-white",
  "rotom-bike-(glistening-black)": "rotom-bike--glistening-black",
  "reins-of-unity-(merge)": "reins-of-unity--merge",
  "reins-of-unity-(split)": "reins-of-unity--split",
  "contest-costume":"contest-costume--jacket",
  "aloraichium-z" : "aloraichium-z--bag",
  "bike" : "bike--green",
  "buginium-z" : "buginium-z--bag",
  "darkinium-z" : "darkinium-z--bag",
  "decidium-z" : "decidium-z--bag",
  "dragonium-z" : "dragonium-z--bag",
  "eevium-z" : "eevium-z--bag",
  "electrium-z" : "electrium-z--bag",
  "fairium-z" : "fairium-z--bag",
  "fightinium-z" : "fightinium-z--bag",
  "firium-z" : "firium-z--bag",
  "flyinium-z" : "flyinium-z--bag",
  "ghostium-z" : "ghostium-z--bag",
  "grassium-z" : "grassium-z--bag",
  "groundium-z" : "groundium-z--bag",
  "icium-z" : "icium-z--bag",
  "incinium-z" : "incinium-z--bag",
  "kommonium-z" : "kommonium-z--bag",
  "leaf-letter" : "leaf-letter--eevee",
  "lunalium-z" : "lunalium-z--bag",
  "lycanium-z" : "lycanium-z--bag",
  "marshadium-z" : "marshadium-z--bag",
  "mewnium-z" : "mewnium-z--bag",
  "mimikium-z" : "mimikium-z--bag",
  "n-lunarizer" : "n-lunarizer--merge",
  "normalium-z" : "normalium-z--bag",
  "n-solarizer" : "n-solarizer--merge",
  "pikanium-z" : "pikanium-z--bag",
  "pikashunium-z" : "pikashunium-z--bag",
  "poisonium-z" : "poisonium-z--bag",
  "primarium-z" : "primarium-z--bag",
  "psychium-z" : "psychium-z--bag",
  "reins-of-unity" : "reins-of-unity--merge",
  "rockium-z" : "rockium-z--bag",
  "snorlium-z" : "snorlium-z--bag",
  "solganium-z" : "solganium-z--bag",
  "steelium-z" : "steelium-z--bag",
  "tapunium-z" : "tapunium-z--bag",
  "ultranecrozium-z" : "ultranecrozium-z--bag",
  "waterium-z" : "waterium-z--bag"

}


let shinyLock = "off"; // Change from const to let to allow modification
// const pkbar = document.getElementsByClassName(".bar-inner");

const fetchAPI = async (pkmnName) => {
    // pkmnNameApi = pkmnName.split(' ').join('-').replaceAll(".", "").replaceAll("'", "").replaceAll("é", "e").replaceAll("-","").replaceAll("♂","-M").replaceAll("♀","-F").toLowerCase();
    pkmnNameApi = pkmnName.toLowerCase().replace(/[ .é♂♀':]/g, match => match === ' ' ? '-' : match === 'é' ? 'e' : match === '♂' ? '-M' : match === '♀' ? '-F' : '');

    if (pkmnNameApi == "" || pkmnNameApi == "-") {
      pkmnNameApi = getRandomInt(2180);
    }
    if (pkmnNameApi in giriprinc) {
      pkmnNameApi = giriprinc[pkmnNameApi]
    }
    const response = await fetch('https://pokeapi.co/api/v2/item/' + pkmnNameApi);

  if (response.status === 200) {
    const pkmnData = await response.json();
    return pkmnData;
  }

  return false;
};
const fetchTMAPI = async (tmlink) => {

    const tmresponse = await fetch(tmlink);

  if (tmresponse.status === 200) {
    const tmData = await tmresponse.json();
    return tmData;
  }

  return false;
};

// const misc = ["collectibles","evolution","spelunking","held-items","choice","effort-training","bad-held-items","training","plates","species-specific","type-enhancement","loot","mulch","dex-completion","scarves","jewels","mega-stones","memories","species-candies","dynamax-crystals","curry-ingredients","tera-shard","sandwich-ingredients","tm-materials","picnic"]
// const medicine = ["vitamins", "healing", "pp-recovery", "revival", "status-cures", "nature-mints"]
// const pokeballs = ["special-balls", "standard-balls", "apricorn-balls"]
// const machines = ["all-machines"]
// const berries = ["effort-drop", "medicine", "other", "in-a-pinch", "picky-healing", "type-protection", "baking-only", "catching-bonus"]
// const mail = ["all-mail"]
// const battle = ["stat-boosts", "flutes", "miracle-shooter"]
// const key = ["event-items", "gameplay", "plot-advancement", "unused", "apricon-box", "data-cards", "z-crystals"]
// const itemcats = [misc, medicine, pokeballs, machines, berries, mail, battle, key]

const itemCategories = {
  "misc": ["collectibles","evolution","spelunking","held-items","choice","effort-training","bad-held-items","training","plates","species-specific","type-enhancement","loot","mulch","dex-completion","scarves","jewels","mega-stones","memories","species-candies","dynamax-crystals","curry-ingredients","tera-shard","sandwich-ingredients","tm-materials","picnic"],
  "medicine": ["vitamins", "healing", "pp-recovery", "revival", "status-cures", "nature-mints"],
  "pokeballs": ["special-balls", "standard-balls", "apricorn-balls"],
  "machines": ["all-machines"],
  "berries": ["effort-drop", "medicine", "other", "in-a-pinch", "picky-healing", "type-protection", "baking-only", "catching-bonus"],
  "mail": ["all-mail"],
  "battle": ["stat-boosts", "flutes", "miracle-shooter"],
  "key": ["event-items", "gameplay", "plot-advancement", "unused", "apricon-box", "data-cards", "z-crystals"]
};









const typeColors = {
  "misc"          :     [135, 156, 232],
  "medicine"      :     [132, 121, 180],
  "pokeballs"     :     [237, 083, 058],
  "machines"      :     [175, 096, 215],
  "berries"       :     [080, 160, 240],
  "mail"          :     [240, 128, 128],
  "battle"        :     [222, 129, 118],
  "key"           :     [134, 183, 020]

}
const bgColors = {
  "misc"          :     [248, 202, 076],
  "medicine"      :     [242, 242, 242],
  "pokeballs"     :     [050, 050, 050],
  "machines"      :     [186, 186, 186],
  "berries"       :     [248, 192, 152],
  "mail"          :     [128, 160, 240],
  "battle"        :     [155, 150, 159],
  "key"           :     [204, 032, 020]
}




search.addEventListener('change', async (event) => {
    const pkmnData = await fetchAPI(event.target.value);
    search.value = search.value.split("-").join(" ")
    if (search.value == " ") {
      search.value = toTitleCase(pkmnData.name)
      search.value = search.value.split("-").join(" ")
    } if (search.value == "") {
      search.value = toTitleCase(pkmnData.name)
      search.value = search.value.split("-").join(" ")
    } else if (isNumber(search.value) == true) {
      search.value = search.value.split("-").join(" ")
      search.value = toTitleCase(pkmnData.name)
    } else {
      search.value = toTitleCase(search.value)
    }

    // const mainColor = typeColors[pkmnData.types[0].type.name];

      update(pkmnData);

      updateImage(pkmnData);
      setTypeTo(pkmnData);

      if (pkmnData.category.name == "all-machines") {
        let newmov;
        for (move in pkmnData.machines) {
          // console.log(pkmnData.machines[move])
          newmov = pkmnData.machines[move].machine.url
        }
        const movData = await fetchTMAPI(newmov);
        console.log(movData);
        refmove = movData.move.name.split("-").join(" ")
        refmove = toTitleCase(refmove)
        pkmmov.innerHTML = "&nbsp;" + refmove

      } else {
        pkmmov.innerHTML = "&nbsp;N/A"
      }

      counta.innerHTML = "&nbsp;False"
      consum.innerHTML = "&nbsp;False"
      useove.innerHTML = "&nbsp;False"
      usebat.innerHTML = "&nbsp;False"
      holdab.innerHTML = "&nbsp;False"
      holdpa.innerHTML = "&nbsp;False"
      holdac.innerHTML = "&nbsp;False"
      underg.innerHTML = "&nbsp;False"

      for (i in pkmnData.attributes) {

        let newattrib = pkmnData.attributes[i].name
        if (newattrib == "countable") {
          counta.innerHTML = "&nbsp;True"
        } else if (newattrib == "consumable") {
          consum.innerHTML = "&nbsp;True"
        } else if (newattrib == "usable-overworld") {
          useove.innerHTML = "&nbsp;True"
        } else if (newattrib == "usable-in-battle") {
          usebat.innerHTML = "&nbsp;True"
        } else if (newattrib == "holdable") {
          holdab.innerHTML = "&nbsp;True"
        } else if (newattrib == "holdable-passive") {
          holdpa.innerHTML = "&nbsp;True"
        } else if (newattrib == "holdable-active") {
          holdac.innerHTML = "&nbsp;True"
        } else if (newattrib == "underground") {
          underg.innerHTML = "&nbsp;True"
        }
      }


    // stacfh.style.display = "block";
    // credih.style.display = "none";
}); // calls "search" then adds the function "On change, run an event, the folowing event being alerting the user to the change sending it as the target value."






function update(pkmnData) {
  let temper = false
  // For debuging
  console.log(pkmnData);
  console.log(pkmnData.category.name);
  for (cate in itemCategories) {
    // console.log(cate)
    // console.log(itemCategories[cate]);
    for (catitem in itemCategories[cate]) {
      // console.log(itemCategories[cate][catitem])
      if (pkmnData.category.name == itemCategories[cate][catitem]) {
          const mainColor = cate;
          temper = true
          topare.style.backgroundImage = 'url("Assets/' + cate + '.png")';
        // console.log(pkmnData.category.name + "==" + itemCategories[cate][catitem])
      } else {
      }
    }
  }

  if (temper == true) {

  } else {
    const mainColor = "pokeballs"
    alert("Item Category not in bag")
  }









  //sets pokemon number
  number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

  // Sets Pokemon Image
  // pimage.src = pkmnData.sprites.other.home.front_shiny;

  const audio = new Audio('Assets/itemobtained.wav');
  // const audio = new Audio(pkmnData.cries.legacy);
  audio.play();
  // console.log(pkmnData.effect_entries[0]);


  try {
    if (pkmnData.effect_entries[0].effect !== null) {
      longef.style.display = 'block'
      longef.innerHTML = pkmnData.effect_entries[0].effect
    } else {
      longef.style.display = 'none'
    }

    if (pkmnData.effect_entries[0].short_effect !== null) {
      shorte.style.display = 'block'
      shorte.innerHTML = pkmnData.effect_entries[0].short_effect
    } else {
      shorte.style.display = 'none'
    }
  } catch {
      shorte.style.display = 'none'
      longef.style.display = 'none'
  }










}

function updateImage(sourceData) {
  pimage.style.display = "block";
  if (sourceData.sprites.default !== null) {
    pimage.src = sourceData.sprites.default;
  } else {
    pimage.style.display = "none";
  }

};

function setTypeTo(sourceData) {
  let mainColor;
  let temper = false
  // For debuging
  // console.log(sourceData);
  // console.log(sourceData.category.name);
  for (cate in itemCategories) {
    // console.log(cate)
    // console.log(itemCategories[cate]);
    for (catitem in itemCategories[cate]) {
      // console.log(itemCategories[cate][catitem])
      if (sourceData.category.name == itemCategories[cate][catitem]) {
           mainColor = cate;
          // console.log(mainColor);
          temper = true
          topare.style.backgroundImage = 'url("Assets/' + cate + '.png")';
        // console.log(sourceData.category.name + "==" + itemCategories[cate][catitem])
      } else {
      }
    }
  }
  if (temper == true) {

  } else {
     mainColor = "pokeballs"
    alert("Item Category not in bag")
  }
  pkbody.style.backgroundColor = `rgb(${typeColors[mainColor][0]}, ${typeColors[mainColor][1]}, ${typeColors[mainColor][2]})`;
  document.body.style.backgroundColor = `rgb(${bgColors[mainColor][0]}, ${bgColors[mainColor][1]}, ${bgColors[mainColor][2]})`;
  sbinnr.style.scrollbarColor = `rgba(${typeColors[mainColor][0]}, ${typeColors[mainColor][1]}, ${typeColors[mainColor][2]}) rgba(${0},${0},${0},${0})`;




};



// Copied from Stack Overflow for Title casing.
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}
