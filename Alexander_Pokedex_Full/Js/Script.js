//Name: Enzo Alexander
//Date: Febuary 24, 2025
//Project: PokeDex - JavaScript
// Filename: script/Script.js
// ---------------------------

// Store Variables for JS
const search = document.querySelector('#Search'); //Sets the Constant to "search" and searches the document for the first case of the ID "Search"
const pkform = document.querySelectorAll('.pkmnFormz')
const number = document.querySelector('#number'); //Sets the Constant to "number" and searches the document for the first case of the ID "number"
const pimage = document.querySelector('#pokemon-image');
const pimgsh = document.querySelector('#pokemon-image-shiny');
const pimagf = document.querySelector('#pokemon-image-F');
const pimgsf = document.querySelector('#pokemon-image-shiny-F');

const mvlihe = document.querySelector('#MoveListHeader');
const moveli = document.querySelector('#MoveList');
const movesp = document.querySelectorAll('.Move');
const movenm = document.querySelectorAll('.MoveName');
const movety = document.querySelectorAll('.MoveType');
const movecl = document.querySelectorAll('.MoveClass');
const movepr = document.querySelectorAll('.MovePower');
const movepp = document.querySelectorAll('.MovePP');
const moveac = document.querySelectorAll('.MoveAcc');
const movecc = document.querySelectorAll('.MoveClassContainer');
const actmov = document.getElementById('#ActiveMove')
const acmovc = document.getElementById('#ActiveMoveClass')

const pokebg = document.querySelector('#pkbody');
const pktype = document.querySelectorAll(".type");
const ptypes = document.querySelector("#types");
const pkbody = document.querySelector("#Pokedex");
const stanum = document.querySelectorAll(".stat-number");
const stibar = document.querySelectorAll(".bar-inner");
const stotal = document.querySelector("#Total");
const itotal = document.querySelector("#inner-total");
const stobar = document.querySelectorAll(".bar-outer");
const sttbar = document.querySelector("#outer-total");
// const sboost = document.querySelector('#Stat-forms');
const pkmnfz = document.querySelectorAll('.pkmnFormz');
const stdesc = document.querySelectorAll('.stat-desc');
const todesc = document.querySelector('#TotalDesc');
const bastat = document.querySelector("#BaseStats");
const topare = document.querySelector("#top");
const sbinnr = document.querySelector('#StFormsInner');
const stacfh = document.querySelector('#scfHea');
const credih = document.querySelector('#credHea');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const pabili = document.querySelector('#abilities');
const pkabil = document.querySelectorAll('.ability')


let shinyLock = "off"; // Change from const to let to allow modification
// const pkbar = document.getElementsByClassName(".bar-inner");
const poryPrinc = [
  "Porygon-Z", "Porygon-z", "porygon-Z", "porygon-z", "474",
  "Ho-Oh", "ho-oh", "Ho-oh", "ho-Oh", "250",
  "Jangmo-o","jangmo-o","Jangmo-O","jangmo-O", "782",
  "Hakamo-o", "Hakam-o","Hakamo-O", "Hakam-O", "783",
  "kommo-o", "Kommo-o","kommo-O", "Kommo-O", "784",
  "Wo-Chien", "wo-chien", "Wo-chien", "wo-Chien", "1001",
  "Chien-Pao", "chien-pao","Chien-pao", "chien-Pao", "1002",
  "Ting-Lu", "ting-lu", "ting-Lu", "Ting-lu", "1003",
  "Chi-Yu", "chi-yu", "chi-Yu", "Chi-yu", "1004",
  "Porygon Z", "Porygon z", "porygon Z", "porygon z",
  "Ho Oh", "ho oh", "Ho oh", "ho Oh",
  "Jangmo o","jangmo o","Jangmo O","jangmo O",
  "Hakamo o", "Hakam o","Hakamo O", "Hakam O",
  "kommo o", "Kommo o","kommo O", "Kommo O",
  "Wo Chien", "wo chien", "Wo chien", "wo Chien",
  "Chien Pao", "chien pao","Chien pao", "chien Pao",
  "Ting Lu", "ting lu", "ting Lu", "Ting lu",
  "Chi Yu", "chi yu", "chi Yu", "Chi yu"
];
const giriPrinc = [
  "aegislash",
  "basculegion",
  "basculin",
  "darmanitan",
  "deoxys",
  "dudunsparce",
  "eiscue",
  "enamorus",
  "giratina",
  "gourgeist",
  "indeedee",
  "keldeo",
  "landorus",
  "lycanroc",
  "maushold",
  "meloetta",
  "meowstic",
  "mimikyu",
  "minior",
  "morpeko",
  "oinkologne",
  "oricorio",
  "palafin",
  "pumpkaboo",
  "shaymin",
  "squawkabilly",
  "tatsugiri",
  "thundurus",
  "tornadus",
  "toxtricity",
  "urshifu",
  "wishiwashi",
  "wormadam",
  "zygarde",
  "mimikyu-totem",
  "raticate-totem",
  "darmanitan-galar",
  "tauros-paldea"
];
const fetchAPI = async (pkmnName) => {
    // pkmnNameApi = pkmnName.split(' ').join('-').replaceAll(".", "").replaceAll("'", "").replaceAll("é", "e").replaceAll("-","").replaceAll("♂","-M").replaceAll("♀","-F").toLowerCase();
    pkmnNameApi = pkmnName.toLowerCase().replace(/[ .é♂♀':]/g, match => match === ' ' ? '-' : match === 'é' ? 'e' : match === '♂' ? '-M' : match === '♀' ? '-F' : '');
    if (giriPrinc.includes(pkmnNameApi)) {
      if (pkmnNameApi.includes("aegislash")) {
        pkmnNameApi = "aegislash-shield";
      }
      if (pkmnNameApi.includes("basculegion")) {
        pkmnNameApi = "basculegion-male";
      }
      if (pkmnNameApi.includes("basculin")) {
        pkmnNameApi = "basculin-red-striped";
      }
      if (pkmnNameApi == "darmanitan") {
        pkmnNameApi = "darmanitan-standard";
      }
      if (pkmnNameApi == "darmanitan-galar") {
        pkmnNameApi = "darmanitan-galar-standard";
      }
      if (pkmnNameApi.includes("deoxys")) {
        pkmnNameApi = "deoxys-normal";
      }
      if (pkmnNameApi.includes("dudunsparce")) {
        pkmnNameApi = "dudunsparce-two-segment";
      }
      if (pkmnNameApi.includes("eiscue")) {
        pkmnNameApi = "eiscue-ice";
      }
      if (pkmnNameApi.includes("enamorus")) {
        pkmnNameApi = "enamorus-incarnate";
      }
      if (pkmnNameApi.includes("giratina")) {
        pkmnNameApi = "giratina-altered";
      }
      if (pkmnNameApi.includes("gourgeist")) {
        pkmnNameApi = "gourgeist-average";
      }
      if (pkmnNameApi.includes("indeedee")) {
        pkmnNameApi = "indeedee-male";
      }
      if (pkmnNameApi.includes("keldeo")) {
        pkmnNameApi = "keldeo-ordinary";
      }
      if (pkmnNameApi.includes("landorus")) {
        pkmnNameApi = "landorus-incarnate";
      }
      if (pkmnNameApi.includes("lycanroc")) {
        pkmnNameApi = "lycanroc-midday";
      }
      if (pkmnNameApi.includes("maushold")) {
        pkmnNameApi = "maushold-family-of-four";
      }
      if (pkmnNameApi.includes("meloetta")) {
        pkmnNameApi = "meloetta-aria";
      }
      if (pkmnNameApi.includes("meowstic")) {
        pkmnNameApi = "meowstic-male";
      }
      if (pkmnNameApi == "mimikyu") {
        pkmnNameApi = "mimikyu-disguised";
      }
      if (pkmnNameApi.includes("minior")) {
        pkmnNameApi = "minior-red-meteor";
      }
      if (pkmnNameApi.includes("morpeko")) {
        pkmnNameApi = "morpeko-full-belly";
      }
      if (pkmnNameApi.includes("oinkologne")) {
        pkmnNameApi = "oinkologne-male";
      }
      if (pkmnNameApi.includes("oricorio")) {
        pkmnNameApi = "oricorio-baile";
      }
      if (pkmnNameApi.includes("palafin")) {
        pkmnNameApi = "palafin-zero";
      }
      if (pkmnNameApi.includes("pumpkaboo")) {
        pkmnNameApi = "pumpkaboo-average";
      }
      if (pkmnNameApi.includes("shaymin")) {
        pkmnNameApi = "shaymin-land";
      }
      if (pkmnNameApi.includes("squawkabilly")) {
        pkmnNameApi = "squawkabilly-green-plumage";
      }
      if (pkmnNameApi.includes("tatsugiri")) {
        pkmnNameApi = "tatsugiri-curly";
      }
      if (pkmnNameApi.includes("thundurus")) {
        pkmnNameApi = "thundurus-incarnate";
      }
      if (pkmnNameApi.includes("tornadus")) {
        pkmnNameApi = "tornadus-incarnate";
      }
      if (pkmnNameApi.includes("toxtricity")) {
        pkmnNameApi = "toxtricity-amped";
      }
      if (pkmnNameApi.includes("urshifu")) {
        pkmnNameApi = "urshifu-single-strike";
      }
      if (pkmnNameApi.includes("wishiwashi")) {
        pkmnNameApi = "wishiwashi-solo";
      }
      if (pkmnNameApi.includes("wormadam")) {
        pkmnNameApi = "wormadam-plant";
      }
      if (pkmnNameApi.includes("zygarde")) {
        pkmnNameApi = "zygarde-50";
      }
      if (pkmnNameApi == "mimikyu-totem") {
        pkmnNameApi = "mimikyu-totem-disguised";
      }
      if (pkmnNameApi.includes("raticate-totem")) {
        pkmnNameApi = "raticate-totem-alola";
      }
      if (pkmnNameApi.includes("tauros-paldea")) {
        pkmnNameApi = "tauros-paldea-combat-breed";
      }
      // if (pkmnNameApi.includes("Name")) {
      //   pkmnNameApi = "Name-Varz";
      // }
    }
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
  "unknown"   :     [104, 160, 144]

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
  "unknown"   :     [141, 161, 155]
}

const pkmnFrmz = [
"abomasnow", "abomasnow-mega", "460",
"absol", "absol-mega", "359",
"aegislash-blade", "aegislash-shield", "681",
"aerodactyl", "aerodactyl-mega", "142",
"aggron", "aggron-mega", "306",
"alakazam", "alakazam-mega", "65",
"alcremie","alcremie-gmax", "869",
"altaria", "altaria-mega", "334",
"ampharos","ampharos-mega", "181",
"appletun", "appletun-gmax", "842",
"araquanid", "araquanid-totem", "752",
"arcanine", "arcanine-hisui", "59",
"articuno", "articuno-galar", "144",
"audino", "audino-mega", "531",
"avalugg", "avalugg-hisui", "713",

"banette", "banette-mega", "354",
"basculegion-female", "basculegion-male", "902",
"basculin-blue-striped", "basculin-red-striped", "basculin-white-striped", "550",
"beedrill", "beedrill-mega", "15",
"blastoise", "blastoise-gmax", "blastoise-mega", "9",
"blaziken", "blaziken-mega", "257",
"braviary", "braviary-hisui", "628",
"butterfree", "butterfree-gmax", "12",

"calyrex", "calyrex-ice", "calyrex-shadow", "898",
"camerupt", "camerupt-mega", "323",
"castform", "castform-rainy", "castform-snowy", "castform-sunny", "351",
"centiskorch", "centiskorch-gmax", "851",
"charizard", "charizard-gmax", "charizard-mega-x", "charizard-mega-y", "6",
"cinderace", "cinderace-gmax", "815",
"coalossal", "coalossal-gmax", "839",
"copperajah", "copperajah-gmax", "879",
"corsola", "corsola-galar", "222",
"corviknight", "corviknight-gmax", "823",
"cramorant", "cramorant-gorging", "cramorant-gulping", "845",

"darmanitan-galar-standard", "darmanitan-galar-zen", "darmanitan-standard", "darmanitan-zen", "555",
"darumaka", "darumaka-galar", "554",
"decidueye", "decidueye-hisui", "724",
"deoxys-attack", "deoxys-defense", "deoxys-normal", "deoxys-speed", "386",
"dialga", "dialga-origin", "483",
"diancie", "diancie-mega", "719",
"diglett", "diglett-alola", "50",
"drednaw", "drednaw-gmax", "834",
"dudunsparce-three-segment", "dudunsparce-two-segment", "982",
"dugtrio", "dugtrio-alola", "51",
"duraludon", "duraludon-gmax", "884",

"eevee", "eevee-gmax", "eevee-starter", "133",
"eiscue-ice", "eiscue-noice", "875",
"electrode", "electrode-hisui", "101",
"enamorus-incarnate", "enamorus-therian", "905",
"eternatus", "eternatus-eternamax", "890",
"exeggutor", "exeggutor-alola", "103",

"farfetch'd", "farfetchd-galar", "83",
"flapple", "flapple-gmax", "841",
"floette", "floette-eternal", "670",

"gallade", "gallade-mega", "475",
"garbodor", "garbodor-gmax", "569",
"garchomp", "garchomp-mega", "445",
"gardevoir", "gardevoir-mega", "282",
"gengar", "gengar-gmax", "gengar-mega", "94",
"geodude", "geodude-alola", "74",
"gimmighoul", "gimmighoul-roaming", "999",
"giratina-altered", "giratina-origin", "487",
"glalie", "glalie-mega", "362",
"golem", "golem-alola", "76",
"goodra", "goodra-hisui", "706",
"gourgeist-average", "gourgeist-large", "gourgeist-small", "gourgeist-super", "711",
"graveler", "graveler-alola", "75",
"greninja", "greninja-ash", "greninja-battle-bond", "658",
"grimer", "grimer-alola", "88",
"grimmsnarl", "grimmsnarl-gmax", "861",
"groudon", "groudon-primal", "383",
"growlithe", "growlithe-hisui", "58",
"gumshoos", "gumshoos-totem", "735",
"gyarados", "gyarados-mega", "130",

"hatterene", "hatterene-gmax", "858",
"heracross", "heracross-mega", "214",
"hoopa", "hoopa-unbound", "720",
"houndoom", "houndoom-mega", "229",
"indeedee-female", "indeedee-male", "876",
"inteleon", "inteleon-gmax", "818",

"kangaskhan", "kangaskhan-mega", "115",
"keldeo-ordinary", "keldeo-resolute", "647",
"kingler", "kingler-gmax", "99",
"kommo-o", "kommo-o-totem", "784",
"kyogre", "kyogre-primal", "382",
"kyurem", "kyurem-black", "kyurem-white", "646",

"landorus-incarnate", "landorus-therian", "645",
"lapras", "lapras-gmax", "131",
"latias", "latias-mega", "380",
"latios", "latios-mega", "381",
"lilligant", "lilligant-hisui", "549",
"linoone", "linoone-galar", "264",
"lopunny", "lopunny-mega", "428",
"lucario", "lucario-mega", "448",
"lycanroc-dusk", "lycanroc-midday", "lycanroc-midnight", "745",

"machamp", "machamp-gmax", "68",
"magearna", "magearna-original", "801",
"manectric", "manectric-mega", "310",
"marowak", "marowak-alola", "marowak-totem", "105",
"maushold-family-of-four", "maushold-family-of-three", "925",
"mawile", "mawile-mega", "303",
"medicham", "medicham-mega", "308",
"melmetal", "melmetal-gmax", "809",
"meloetta-aria", "meloetta-pirouette", "648",
"meowstic-female", "meowstic-male", "678",
"meowth", "meowth-alola", "meowth-galar", "meowth-gmax", "52",
"metagross", "metagross-mega", "376",
"mewtwo", "mewtwo-mega-x", "mewtwo-mega-y","150",
"mimikyu-busted", "mimikyu-disguised", "mimikyu-totem-busted", "mimikyu-totem-disguised", "778",
"minior-blue", "minior-blue-meteor", "minior-green", "minior-green-meteor", "minior-indigo", "minior-indigo-meteor", "minior-orange", "minior-orange-meteor", "minior-red", "minior-red-meteor", "minior-violet", "minior-violet-meteor", "minior-yellow", "minior-yellow-meteor", "774",
"moltres", "moltres-galar", "146",
"morpeko-full-belly", "morpeko-hangry", "877",
"mr-mime", "mr-mime-galar", "122",
"muk", "muk-alola", "89",

"necrozma", "necrozma-dawn", "necrozma-dusk", "necrozma-ultra", "800",
"ninetales", "ninetales-alola", "38",

"ogerpon", "ogerpon-cornerstone-mask", "ogerpon-hearthflame-mask", "ogerpon-wellspring-mask", "1017",
"oinkologne-female", "oinkologne-male", "916",
"orbeetle", "orbeetle-gmax", "826",
"oricorio-baile", "oricorio-pau", "oricorio-pom-pom", "oricorio-sensu", "741",

"palafin-hero", "palafin-zero", "964",
"palkia", "palkia-origin", "484",
"persian", "persian-alola", "53",
"pidgeot", "pidgeot-mega", "18",
"pikachu", "pikachu-alola-cap", "pikachu-belle", "pikachu-cosplay", "pikachu-gmax", "pikachu-hoenn-cap", "pikachu-kalos-cap", "pikachu-libre", "pikachu-original-cap", "pikachu-partner-cap", "pikachu-phd", "pikachu-pop-star", "pikachu-rock-star", "pikachu-sinnoh-cap", "pikachu-starter", "pikachu-unova-cap", "pikachu-world-cap", "25",
"pinsir", "pinsir-mega", "127",
"ponyta", "ponyta-galar", "77",
"pumpkaboo-average", "pumpkaboo-large", "pumpkaboo-small", "pumpkaboo-super", "710",

"qwilfish", "qwilfish-hisui", "211",

"raichu", "raichu-alola", "26",
"rapidash", "rapidash-galar", "78",
"raticate", "raticate-alola", "raticate-totem-alola", "20",
"rattata", "rattata-alola", "19",
"rayquaza", "rayquaza-mega", "384",
"ribombee", "ribombee-totem", "743",
"rillaboom", "rillaboom-gmax", "812",
"rockruff", "rockruff-own-tempo", "744",
"rotom", "rotom-fan", "rotom-frost", "rotom-heat", "rotom-mow", "rotom-wash", "479",

"sableye", "sableye-mega", "302",
"salamence", "salamence-mega", "373",
"samurott", "samurott-hisui", "503",
"sandaconda", "sandaconda-gmax", "844",
"sandshrew", "sandshrew-alola", "27",
"sandslash", "sandslash-alola", "28",
"sceptile", "sceptile-mega", "254",
"scizor", "scizor-mega", "212",
"sharpedo", "sharpedo-mega", "319",
"shaymin-land", "shaymin-sky", "492",
"sliggoo", "sliggoo-hisui", "705",
"slowbro", "slowbro-galar", "slowbro-mega", "80",
"slowking", "slowking-galar", "199",
"slowpoke", "slowpoke-galar", "79",
"sneasel", "sneasel-hisui", "215",
"snorlax", "snorlax-gmax", "143",
"squawkabilly-blue-plumage", "squawkabilly-green-plumage", "squawkabilly-white-plumage", "squawkabilly-yellow-plumage", "931",
"steelix", "steelix-mega", "208",
"stunfisk", "stunfisk-galar", "618",
"swampert", "swampert-mega", "260",

"tatsugiri-curly", "tatsugiri-droopy", "tatsugiri-stretchy", "978",
"tauros", "tauros-paldea-aqua-breed", "tauros-paldea-blaze-breed", "tauros-paldea-combat-breed", "128",
"terapagos", "terapagos-stellar", "terapagos-terastal", "1024",
"thundurus-incarnate", "thundurus-therian", "642",
"togedemaru", "togedemaru-totem", "777",
"tornadus-incarnate", "tornadus-therian", "641",
"toxtricity-amped", "toxtricity-amped-gmax", "toxtricity-low-key", "toxtricity-low-key-gmax", "849",
"typhlosion", "typhlosion-hisui", "typhlosion-hisui", "157",
"tyranitar", "tyranitar-mega", "248",

"ursaluna", "ursaluna-bloodmoon", "901",
"urshifu-rapid-strike", "urshifu-rapid-strike-gmax", "urshifu-single-strike", "urshifu-single-strike-gmax", "892",

"venusaur", "venusaur-gmax", "venusaur-mega", "3",
"vikavolt", "vikavolt-totem", "738",
"voltorb", "voltorb-hisui", "100",
"vulpix", "vulpix-alola", "37",

"weezing", "weezing-galar", "110",
"wishiwashi-school", "wishiwashi-solo","746",
"wooper", "wooper-paldea", "194",
"wormadam-plant", "wormadam-sandy", "wormadam-trash", "413",

"yamask", "yamask-galar", "562",

"zacian", "zacian-crowned", "888",
"zamazenta", "zamazenta-crowned", "889",
"zapdos", "zapdos-galar", "145",
"zarude", "zarude-dada", "893",
"zigzagoon", "zigzagoon-galar", "263",
"zoroark", "zoroark-hisui", "571",
"zorua", "zorua-hisui", "570",
"zygarde-10", "zygarde-10-power-construct", "zygarde-50", "zygarde-50-power-construct", "zygarde-complete", "718"
]; //All Pkmn With Varz and their Varz.

const exclFrmz = [
  "abomasnow", "460",
  "absol", "359",
  "aegislash-shield", "681",
  "aerodactyl", "142",
  "aggron", "306",
  "alakazam", "65",
  "alcremie", "869",
  "altaria", "334",
  "ampharos", "181",
  "appletun", "842",
  "araquanid", "752",
  "arcanine", "59",
  "articuno", "144",
  "audino", "531",
  "avalugg", "713",

  "banette", "354",
  "basculegion-male", "902",
  "basculin-red-striped", "550",
  "beedrill", "15",
  "blastoise", "9",
  "blaziken", "257",
  "braviary", "628",
  "butterfree", "12",

  "calyrex", "898",
  "camerupt", "323",
  "castform", "351",
  "centiskorch", "851",
  "charizard", "6",
  "cinderace", "815",
  "coalossal", "839",
  "copperajah", "879",
  "corsola", "222",
  "corviknight", "823",
  "cramorant", "845",

  "darmanitan-standard", "555",
  "darumaka", "554",
  "decidueye", "724",
  "deoxys-normal", "386",
  "dialga", "483",
  "diancie", "719",
  "diglett", "50",
  "drednaw", "834",
  "dudunsparce-two-segment", "982",
  "dugtrio", "51",
  "duraludon", "884",

  "eevee", "133",
  "eiscue-ice", "875",
  "electrode", "101",
  "enamorus-incarnate", "905",
  "eternatus", "890",
  "exeggutor", "103",

  "farfetch'd", "83",
  "flapple", "841",
  "floette", "670",

  "gallade", "475",
  "garbodor", "569",
  "garchomp", "445",
  "gardevoir", "282",
  "gengar", "94",
  "geodude","74",
  "gimmighoul", "999",
  "giratina-altered", "487",
  "glalie", "362",
  "golem", "76",
  "goodra", "706",
  "gourgeist-average", "711",
  "graveler", "75",
  "greninja", "658",
  "grimer", "88",
  "grimmsnarl", "861",
  "groudon", "383",
  "growlithe", "58",
  "gumshoos", "735",
  "gyarados", "130",

  "hatterene", "858",
  "heracross", "214",
  "hoopa", "720",
  "houndoom", "229",
  "indeedee-male", "876",
  "inteleon", "818",

  "kangaskhan", "115",
  "keldeo-ordinary", "647",
  "kingler", "99",
  "kommo-o", "784",
  "kyogre", "382",
  "kyurem", "646",

  "landorus-incarnate", "645",
  "lapras", "131",
  "latias", "380",
  "latios", "381",
  "lilligant", "549",
  "linoone", "264",
  "lopunny", "428",
  "lucario", "448",
  "lycanroc-midday", "745",

  "machamp", "68",
  "magearna", "801",
  "manectric", "310",
  "marowak", "105",
  "maushold-family-of-four", "925",
  "mawile", "303",
  "medicham", "308",
  "melmetal", "809",
  "meloetta-aria", "648",
  "meowstic-male", "678",
  "meowth", "52",
  "metagross", "376",
  "mewtwo","150",
  "mimikyu-disguised", "778",
  "minior-red-meteor", "774",
  "moltres", "146",
  "morpeko-full-belly", "877",
  "mr-mime", "122",
  "muk", "89",

  "necrozma", "800",
  "ninetales", "38",

  "ogerpon", "1017",
  "oinkologne-male", "916",
  "orbeetle", "826",
  "oricorio-baile", "741",

  "palafin-zero", "964",
  "palkia", "484",
  "persian", "53",
  "pidgeot", "18",
  "pikachu", "25",
  "pinsir", "127",
  "ponyta", "77",
  "pumpkaboo-average", "710",

  "qwilfish", "211",

  "raichu", "26",
  "rapidash", "78",
  "raticate", "20",
  "rattata", "19",
  "rayquaza", "384",
  "ribombee", "743",
  "rillaboom", "812",
  "rockruff", "744",
  "rotom", "479",

  "sableye", "302",
  "salamence", "373",
  "samurott", "503",
  "sandaconda", "844",
  "sandshrew", "27",
  "sandslash", "28",
  "sceptile", "254",
  "scizor", "212",
  "sharpedo", "319",
  "shaymin-land", "492",
  "sliggoo", "705",
  "slowbro", "80",
  "slowking", "199",
  "slowpoke", "79",
  "sneasel", "215",
  "snorlax", "143",
  "squawkabilly-green-plumage", "931",
  "steelix", "208",
  "stunfisk", "618",
  "swampert", "260",

  "tatsugiri-curly", "978",
  "tauros", "128",
  "terapagos", "1024",
  "thundurus-incarnate", "642",
  "togedemaru", "777",
  "tornadus-incarnate", "641",
  "toxtricity-amped", "849",
  "typhlosion", "157",
  "tyranitar", "248",

  "ursaluna", "901",
  "urshifu-single-strike", "892",

  "venusaur", "3",
  "vikavolt", "738",
  "voltorb", "100",
  "vulpix", "37",

  "weezing", "110",
  "wishiwashi-solo","746",
  "wooper", "194",
  "wormadam-plant", "wormadam-sandy", "wormadam-trash", "413",

  "yamask", "562",

  "zacian", "888",
  "zamazenta", "889",
  "zapdos", "145",
  "zarude", "893",
  "zigzagoon", "263",
  "zoroark", "571",
  "zorua", "570",
  "zygarde-50", "718"
];
const origFrmz = [
  "dialga-origin",
  "giratina-origin",
  "magearna-original",
  "palkia-origin"
];
const gmaxFrmz = [
  "alcremie-gmax",
  "appletun-gmax",
  "blastoise-gmax",
  "butterfree-gmax",
  "centiskorch-gmax",
  "charizard-gmax",
  "cinderace-gmax",
  "coalossal-gmax",
  "copperajah-gmax",
  "corviknight-gmax",
  "drednaw-gmax",
  "eevee-gmax",
  "gengar-gmax",
  "grimmsnarl-gmax",
  "hatterene-gmax",
  "inteleon-gmax",
  "kingler-gmax",
  "lapras-gmax",
  "machamp-gmax",
  "melmetal-gmax",
  "meowth-gmax",
  "orbeetle-gmax",
  "pikachu-gmax",
  "rillaboom-gmax",
  "sandaconda-gmax",
  "snorlax-gmax",
  "toxtricity-amped-gmax",
  "toxtricity-low-key-gmax",
  "urshifu-rapid-strike-gmax",
  "urshifu-single-strike-gmax",
  "venusaur-gmax",
  "flapple-gmax",
  "garbodor-gmax",
  "duraludon-gmax",
  "eternatus-eternamax"
];
const megaFrmz = [
  "abomasnow-mega",
  "absol-mega",
  "aerodactyl-mega",
  "aggron-mega",
  "alakazam-mega",
  "altaria-mega",
  "ampharos-mega",
  "audino-mega",
  "banette-mega",
  "beedrill-mega",
  "blastoise-mega",
  "blaziken-mega",
  "camerupt-mega",
  "charizard-mega-x",
  "charizard-mega-y",
  "diancie-mega",
  "glalie-mega",
  "gallade-mega",
  "garchomp-mega",
  "gardevoir-mega",
  "gengar-mega",
  "gyarados-mega",
  "heracross-mega",
  "houndoom-mega",
  "kangaskhan-mega",
  "latias-mega",
  "latios-mega",
  "lopunny-mega",
  "lucario-mega",
  "manectric-mega",
  "mawile-mega",
  "medicham-mega",
  "metagross-mega",
  "mewtwo-mega-x",
  "mewtwo-mega-y",
  "pidgeot-mega",
  "pinsir-mega",
  "rayquaza-mega",
  "sableye-mega",
  "salamence-mega",
  "sceptile-mega",
  "scizor-mega",
  "sharpedo-mega",
  "slowbro-mega",
  "steelix-mega",
  "swampert-mega",
  "tyranitar-mega",
  "venusaur-mega"
];
const toteFrmz = [
  "araquanid-totem",
  "kommo-o-totem",
  "marowak-totem",
  "mimikyu-totem-busted",
  "mimikyu-totem-disguised",
  "raticate-totem-alola",
  "ribombee-totem",
  "vikavolt-totem",
  "togedemaru-totem",
  "gumshoos-totem"
];
const alolFrmz = [
  "diglett-alola",
  "dugtrio-alola",
  "exeggutor-alola",
  "geodude-alola",
  "golem-alola",
  "graveler-alola",
  "grimer-alola",
  "marowak-alola",
  "meowth-alola",
  "muk-alola",
  "ninetales-alola",
  "persian-alola",
  "raichu-alola",
  "raticate-alola",
  "rattata-alola",
  "sandshrew-alola",
  "sandslash-alola",
  "vulpix-alola"
];
const hisuFrmz = [
  "arcanine-hisui",
  "avalugg-hisui",
  "braviary-hisui",
  "decidueye-hisui",
  "enamorus-therian",
  "landorus-therian",
  "thundurus-therian",
  "tornadus-therian",
  "electrode-hisui",
  "goodra-hisui",
  "growlithe-hisui",
  "lilligant-hisui",
  "qwilfish-hisui",
  "samurott-hisui",
  "sliggoo-hisui",
  "sneasel-hisui",
  "zorua-hisui",
  "typhlosion-hisui",
  "voltorb-hisui",
  "zoroark-hisui"
];
const galaFrmz = [
  "articuno-galar",
  "corsola-galar",
  "darmanitan-galar-standard",
  "darmanitan-galar-zen",
  "darumaka-galar",
  "farfetchd-galar",
  "linoone-galar",
  "meowth-galar",
  "moltres-galar",
  "mr-mime-galar",
  "ponyta-galar",
  "rapidash-galar",
  "slowbro-galar",
  "slowking-galar",
  "slowpoke-galar",
  "stunfisk-galar",
  "weezing-galar",
  "yamask-galar",
  "zapdos-galar",
  "zigzagoon-galar"
];
const paldFrmz = [
  "tauros-paldea-aqua-breed",
  "tauros-paldea-blaze-breed",
  "tauros-paldea-combat-breed",
  "terapagos-stellar",
  "terapagos-terastal",
  "wooper-paldea"
];
const starFrmz = [
  "eevee-starter",
  "pikachu-starter"
];
const bondFrmz = [
  "greninja-ash",
  "greninja-battle-bond"
];
const primfrmz = [
  "groudon-primal",
  "kyogre-primal",
  "floette-eternal"
];
const pkbaFrmz = [
  "aegislash-blade",
  "basculegion-female",
  "basculin-blue-striped",
  "basculin-white-striped",
  "calyrex-ice",
  "calyrex-shadow",
  "castform-rainy",
  "castform-snowy",
  "castform-sunny",
  "cramorant-gorging",
  "cramorant-gulping",
  "darmanitan-zen",
  "deoxys-attack",
  "deoxys-defense",
  "deoxys-speed",
  "dudunsparce-three-segment",
  "eiscue-noice",
  "gimmighoul-roaming",
  "gourgeist-large",
  "gourgeist-small",
  "gourgeist-super",
  "hoopa-unbound",
  "indeedee-female",
  "keldeo-resolute",
  "kyurem-black",
  "kyurem-white",
  "lycanroc-dusk",
  "lycanroc-midnight",
  "maushold-family-of-three",
  "meloetta-pirouette",
  "meowstic-female",
  "mimikyu-busted",
  "minior-blue",
  "minior-blue-meteor",
  "minior-green",
  "minior-green-meteor",
  "minior-indigo",
  "minior-indigo-meteor",
  "minior-orange",
  "minior-orange-meteor",
  "minior-red",
  "minior-violet",
  "minior-violet-meteor",
  "minior-yellow",
  "minior-yellow-meteor",
  "morpeko-hangry",
  "necrozma-dawn",
  "necrozma-dusk",
  "necrozma-ultra",
  "ogerpon-cornerstone-mask",
  "ogerpon-hearthflame-mask",
  "ogerpon-wellspring-mask",
  "oinkologne-female",
  "oricorio-pau",
  "oricorio-pom-pom",
  "oricorio-sensu",
  "palafin-hero",
  "pikachu-alola-cap",
  "pikachu-belle",
  "pikachu-cosplay",
  "pikachu-hoenn-cap",
  "pikachu-kalos-cap",
  "pikachu-libre",
  "pikachu-original-cap",
  "pikachu-partner-cap",
  "pikachu-phd",
  "pikachu-pop-star",
  "pikachu-rock-star",
  "pikachu-sinnoh-cap",
  "pikachu-unova-cap",
  "pikachu-world-cap",
  "pumpkaboo-large",
  "pumpkaboo-small",
  "pumpkaboo-super",
  "rockruff-own-tempo",
  "rotom-fan",
  "rotom-frost",
  "rotom-heat",
  "rotom-mow",
  "rotom-wash",
  "shaymin-sky",
  "squawkabilly-blue-plumage",
  "squawkabilly-white-plumage",
  "squawkabilly-yellow-plumage",
  "tatsugiri-droopy",
  "tatsugiri-stretchy",
  "toxtricity-low-key",
  "ursaluna-bloodmoon",
  "urshifu-rapid-strike",
  "wishiwashi-school",
  "wormadam-sandy",
  "wormadam-trash",
  "zacian-crowned",
  "zamazenta-crowned",
  "zarude-dada",
  "zygarde-10",
  "zygarde-10-power-construct",
  "zygarde-50-power-construct",
  "zygarde-complete"
];



const pkmnTypes = [
  "vivillon","Vivillon", "666",
  "Unown","unown", "201",
  "Arceus","arceus", "493",
  "Pichu","pichu", "172",
  "Burmy","burmy", "412",
  "Silvally","silvally", "773",
  "Flabebe","flabebe", "669","Flabébé","flabébé",
  "Florges","florges", "671",
  "Genesect","genesect", "649",
  "Cherrim","cherrim", "421",
  "Shellos", "shellos", "422",
  "Gastrodon", "gastrodon", "423",
  "Alcremie","alcremie", "869",
  "Furfrou","furfrou", "676",
  "Sinistea","sinistea", "854",
  "Polteageist", "polteageist", "855",
  "Sinistcha","sinistcha", "1013",
  "Poltchageist", "poltchageist", "1012",
  "Floette", "floette", "670",
  "Deerling","deerling", "585",
  "Sawsbuck","sawsbuck", "586"
  // I Java'd the Script too hard..............
];

const vivillonTypes = [
  'Vivillon (Meadow)',
  'Vivillon (Icy Snow)',
  'Vivillon (Polar)',
  'Vivillon (Tundra)',
  'Vivillon (Continental)',
  'Vivillon (Garden)',
  'Vivillon (Elegant)',
  'Vivillon (Modern)',
  'Vivillon (Marine)',
  'Vivillon (Archipelago)',
  'Vivillon (High Plains)',
  'Vivillon (Sandstorm)',
  'Vivillon (River)',
  'Vivillon (Monsoon)',
  'Vivillon (Savanna)',
  'Vivillon (Sun)',
  'Vivillon (Ocean)',
  'Vivillon (Jungle)',
  'Vivillon (Fancy)',
  'Vivillon (Poke Ball)'
];
const unownTypes = [
  'Unown (A)',
  'Unown (B)',
  'Unown (C)',
  'Unown (D)',
  'Unown (E)',
  'Unown (F)',
  'Unown (G)',
  'Unown (H)',
  'Unown (I)',
  'Unown (J)',
  'Unown (K)',
  'Unown (L)',
  'Unown (M)',
  'Unown (N)',
  'Unown (O)',
  'Unown (P)',
  'Unown (Q)',
  'Unown (R)',
  'Unown (S)',
  'Unown (T)',
  'Unown (U)',
  'Unown (V)',
  'Unown (W)',
  'Unown (X)',
  'Unown (Y)',
  'Unown (Z)',
  'Unown (Exclamation)',
  'Unown (Question)',
  'Unown (A)',
  'Unown (B)',
  'Unown (C)',
  'Unown (D)',
  'Unown (E)',
  'Unown (F)',
  'Unown (G)',
  'Unown (H)',
  'Unown (I)',
  'Unown (J)',
  'Unown (K)',
  'Unown (L)',
  'Unown (M)',
  'Unown (N)',
  'Unown (O)',
  'Unown (P)',
  'Unown (Q)',
  'Unown (R)',
  'Unown (S)',
  'Unown (T)',
  'Unown (U)',
  'Unown (V)',
  'Unown (W)',
  'Unown (X)',
  'Unown (Y)',
  'Unown (Z)'
];
const arceusTypes = [
  'Arceus (Normal)',
  'Arceus (Bug)',
  'Arceus (Dark)',
  'Arceus (Dragon)',
  'Arceus (Electric)',
  'Arceus (Fighting)',
  'Arceus (Fire)',
  'Arceus (Flying)',
  'Arceus (Ghost)',
  'Arceus (Grass)',
  'Arceus (Ground)',
  'Arceus (Ice)',
  'Arceus (Poison)',
  'Arceus (Psychic)',
  'Arceus (Rock)',
  'Arceus (Steel)',
  'Arceus (Water)',
  'Arceus (Unknown)',
  'Arceus (Fairy)',
];
const pichuTypes = [
  'Pichu',
  'Pichu',
  'Pichu (Spiky Eared)',
  'Pichu',
  'Pichu',
  'Pichu',
  'Pichu',
  'Pichu',
  'Pichu',
  'Pichu'
];
const burmyTypes = [
  'Burmy (Plant)',
  'Burmy (Sandy)',
  'Burmy (Trash)'
];
const silvallyTypes = [
  'Silvally (Normal)',
  'Silvally (Fighting)',
  'Silvally (Flying)',
  'Silvally (Poison)',
  'Silvally (Ground)',
  'Silvally (Rock)',
  'Silvally (Bug)',
  'Silvally (Ghost)',
  'Silvally (Steel)',
  'Silvally (Fire)',
  'Silvally (Water)',
  'Silvally (Grass)',
  'Silvally (Electric)',
  'Silvally (Psychic)',
  'Silvally (Ice)',
  'Silvally (Dragon)',
  'Silvally (Dark)',
  'Silvally (Fairy)'
];
const flabebeTypes = [
  'Flabebe (Red)',
  'Flabebe (Yellow)',
  'Flabebe (Orange)',
  'Flabebe (Blue)',
  'Flabebe (White)'
];
const florgesTypes = [
  'Florges (Red)',
  'Florges (Yellow)',
  'Florges (Orange)',
  'Florges (Blue)',
  'Florges (White)'
];
const genesectTypes = [
  'Genesect',
  'Genesect',
  'Genesect',
  'Genesect',
  'Genesect (Douse)',
  'Genesect (Shock)',
  'Genesect (Burn)',
  'Genesect (Chill)'
];
const cherrimTypes = [
  "Cherrim (Overcast)",
  "Cherrim (Sunshine)"
];
const shellosTypes = [
  "Shellos (East)",
  "Shellos (West)"
];
const gastrodonTypes = [
  "Gastrodon (East)",
  "Gastrodon (West)"
];
const alcremieTypes = [
  "Alcremie (Vanilla Cream Strawberry Sweet)",
  "Alcremie (Ruby Cream Strawberry Sweet)",
  "Alcremie (Matcha Cream Strawberry Sweet)",
  "Alcremie (Mint Cream Strawberry Sweet)",
  "Alcremie (Lemon Cream Strawberry Sweet)",
  "Alcremie (Salted Cream Strawberry Sweet)",
  "Alcremie (Ruby Swirl Strawberry Sweet)",
  "Alcremie (Caramel Swirl Strawberry Sweet)",
  "Alcremie (Rainbow Swirl Strawberry Sweet)",
  "Alcremie (Vanilla Cream Berry Sweet)",
  "Alcremie (Ruby Cream Berry Sweet)",
  "Alcremie (Matcha Cream Berry Sweet)",
  "Alcremie (Mint Cream Berry Sweet)",
  "Alcremie (Lemon Cream Berry Sweet)",
  "Alcremie (Salted Cream Berry Sweet)",
  "Alcremie (Ruby Swirl Berry Sweet)",
  "Alcremie (Caramel Swirl Berry Sweet)",
  "Alcremie (Rainbow Swirl Berry Sweet)",
  "Alcremie (Vanilla Cream Love Sweet)",
  "Alcremie (Ruby Cream Love Sweet)",
  "Alcremie (Matcha Cream Love Sweet)",
  "Alcremie (Mint Cream Love Sweet)",
  "Alcremie (Lemon Cream Love Sweet)",
  "Alcremie (Salted Cream Love Sweet)",
  "Alcremie (Ruby Swirl Love Sweet)",
  "Alcremie (Caramel Swirl Love Sweet)",
  "Alcremie (Rainbow Swirl Love Sweet)",
  "Alcremie (Vanilla Cream Star Sweet)",
  "Alcremie (Ruby Cream Star Sweet)",
  "Alcremie (Matcha Cream Star Sweet)",
  "Alcremie (Mint Cream Star Sweet)",
  "Alcremie (Lemon Cream Star Sweet)",
  "Alcremie (Salted Cream Star Sweet)",
  "Alcremie (Ruby Swirl Star Sweet)",
  "Alcremie (Caramel Swirl Star Sweet)",
  "Alcremie (Rainbow Swirl Star Sweet)",
  "Alcremie (Vanilla Cream Clover Sweet)",
  "Alcremie (Ruby Cream Clover Sweet)",
  "Alcremie (Matcha Cream Clover Sweet)",
  "Alcremie (Mint Cream Clover Sweet)",
  "Alcremie (Lemon Cream Clover Sweet)",
  "Alcremie (Salted Cream Clover Sweet)",
  "Alcremie (Ruby Swirl Clover Sweet)",
  "Alcremie (Caramel Swirl Clover Sweet)",
  "Alcremie (Rainbow Swirl Clover Sweet)",
  "Alcremie (Vanilla Cream Flower Sweet)",
  "Alcremie (Ruby Cream Flower Sweet)",
  "Alcremie (Matcha Cream Flower Sweet)",
  "Alcremie (Mint Cream Flower Sweet)",
  "Alcremie (Lemon Cream Flower Sweet)",
  "Alcremie (Salted Cream Flower Sweet)",
  "Alcremie (Ruby Swirl Flower Sweet)",
  "Alcremie (Caramel Swirl Flower Sweet)",
  "Alcremie (Rainbow Swirl Flower Sweet)",
  "Alcremie (Vanilla Cream Ribbon Sweet)",
  "Alcremie (Ruby Cream Ribbon Sweet)",
  "Alcremie (Matcha Cream Ribbon Sweet)",
  "Alcremie (Mint Cream Ribbon Sweet)",
  "Alcremie (Lemon Cream Ribbon Sweet)",
  "Alcremie (Salted Cream Ribbon Sweet)",
  "Alcremie (Ruby Swirl Ribbon Sweet)",
  "Alcremie (Caramel Swirl Ribbon Sweet)",
  "Alcremie (Rainbow Swirl Ribbon Sweet)"
];
const furfrouTypes = [
  "Furfrou (Natural)",
  "Furfrou (Heart)",
  "Furfrou (Star)",
  "Furfrou (Diamond)",
  "Furfrou (Debutante)",
  "Furfrou (Matron)",
  "Furfrou (Dandy)",
  "Furfrou (La Reine)",
  "Furfrou (Kabuki)",
  "Furfrou (Pharaoh)"
];
const sinisteaTypes = [
  "Sinistea (Phony)",
  "Sinistea (Antique)"
];
const polteageistTypes = [
  "Polteageist (Phony)",
  "Polteageist (Antique)"
];
const sinistchaTypes = [
  "Sinistcha (Unremarkable)",
  "Sinistcha (Masterpiece)"
];
const poltchageistTypes = [
  "Poltchageist (Counterfeit)",
  "Poltchageist (Artisan)"
];
const deerlingTypes = [
  "Deerling (Spring)",
  "Deerling (Summer)",
  "Deerling (Autumn)",
  "Deerling (Winter)"
];
const sawsbuckTypes = [
  "Sawsbuck (Spring)",
  "Sawsbuck (Summer)",
  "Sawsbuck (Autumn)",
  "Sawsbuck (Winter)"
];

const floetteTypes = [
  'Floette (Red)',
  'Floette (Yellow)',
  'Floette (Orange)',
  'Floette (Blue)',
  'Floette (White)'
];




search.addEventListener('change', async (event) => {
  try {
    const pkmnData = await fetchAPI(event.target.value);

    // const mainColor = typeColors[pkmnData.types[0].type.name];
    if (pkmnTypes.includes(search.value)) {
      if (["vivillon","Vivillon", "666"].includes(search.value)) {
      // For debuging
      console.log(pkmnData);
      const vivVar = getRandomInt(21);
      console.log(vivVar);
      const vivVarToType = vivillonTypes[vivVar];
      update(pkmnData);
        const vivData = await vivAPI(vivVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
        search.value = vivVarToType;
      console.log(vivData);
      // const vivData = await vivAPI('vivillon-poke-ball');
      //sets pokemon number
      number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

      //Sets Pokemon Image
      // pimage.src = pkmnData.sprites.other.home.front_shiny;
    updateImage(vivData);
    setTypeTo(vivData);
    setNameTo(vivData);
    // sboost.style.display = "none";
  }
      if (["Unown","unown", "201"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const unoVar = getRandomInt(54);
        console.log(unoVar);
        const unoVarToType = unownTypes[unoVar];
        update(pkmnData);
          const unoData = await vivAPI(unoVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = unoVarToType;
          // search.value = unoData;
        console.log(unoData);
        console.log(unoVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
      updateImage(unoData);
      setTypeTo(unoData);
      setNameTo(unoData);
      // sboost.style.display = "none";
    }
      if (["Arceus","arceus", "493"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const arcVar = getRandomInt(18);
        console.log(arcVar);
        const arcVarToType = arceusTypes[arcVar];
        update(pkmnData);
          const arcData = await vivAPI(arcVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = arcVarToType;
          // search.value = arcData;
        console.log(arcData);
        console.log(arcVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
      updateImage(arcData);
      setTypeTo(arcData);
      setNameTo(arcData);
      // sboost.style.display = "none";
}
      if (["Pichu","pichu", "172"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const picVar = getRandomInt(10);
        console.log(picVar);
        const picVarToType = pichuTypes[picVar];
        update(pkmnData);
          const picData = await vivAPI(picVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = picVarToType;
          // search.value = arcData;
        console.log(picData);
        console.log(picVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
        if (picVarToType == pichuTypes[2]) {

            pimgsh.src = 'Assets/172-shiny.png';
            pimage.src = 'Assets/172.png';
          } else {
          updateImage(picData);
        }

      setTypeTo(picData);
      setNameTo(picData);
      // sboost.style.display = "none";


      }
      if (["Burmy","burmy", "412"].includes(search.value)) {
      // For debuging
      console.log(pkmnData);
      const burVar = getRandomInt(3);
      console.log(burVar);
      const burVarToType = burmyTypes[burVar];
      update(pkmnData);
        const burData = await vivAPI(burVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
        search.value = burVarToType;
        // search.value = arcData;
      console.log(burData);
      console.log(burVarToType);
      // const vivData = await vivAPI('vivillon-poke-ball');
      //sets pokemon number
      number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

      //Sets Pokemon Image
      // pimage.src = pkmnData.sprites.other.home.front_shiny;
    updateImage(burData);
    setTypeTo(burData);
    setNameTo(burData);
    // sboost.style.display = "none";
}
      if (["Silvally","silvally", "773"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const silVar = getRandomInt(18);
        console.log(silVar);
        const silVarToType = silvallyTypes[silVar];
        update(pkmnData);
          const silData = await vivAPI(silVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = silVarToType;
          // search.value = arcData;
        console.log(silData);
        console.log(silVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
      updateImage(silData);
      setTypeTo(silData);
      setNameTo(silData);
      // sboost.style.display = "none";
}
      if (["Flabebe","flabebe", "669","Flabébé","flabébé"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const flaVar = getRandomInt(5);
          console.log (flaVar);
          const flaVarToType = flabebeTypes[flaVar];
          update(pkmnData);
            const flaData = await vivAPI(flaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = flaVarToType;
            // search.value = arcData;
          console.log (flaData);
          console.log (flaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage (flaData);
        setTypeTo (flaData);
        setNameTo (flaData);
        // sboost.style.display = "none";
        search.value = flaVarToType.replace("labebe", "labébé").replace("(", "").replace(")", "");}
      if (["Florges","florges", "671"].includes(search.value)) {
            // For debuging
            console.log(pkmnData);
            const florVar = getRandomInt(5);
            console.log(florVar);
            const florVarToType = florgesTypes[florVar];
            update(pkmnData);
              const florData = await vivAPI(florVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
              search.value = florVarToType;
              // search.value = arcData;
            console.log(florData);
            console.log(florVarToType);
            // const vivData = await vivAPI('vivillon-poke-ball');
            //sets pokemon number
            number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

            //Sets Pokemon Image
            // pimage.src = pkmnData.sprites.other.home.front_shiny;
          updateImage(florData);
          setTypeTo(florData);
          setNameTo(florData);
          // sboost.style.display = "none";
}
      if (["Genesect","genesect", "649"].includes(search.value)) {
              // For debuging
              console.log(pkmnData);
              const genVar = getRandomInt(8);
              console.log(genVar);
              const genVarToType = genesectTypes[genVar];
              update(pkmnData);
                const genData = await vivAPI(genVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                search.value = genVarToType;
                // search.value = arcData;
              console.log(genData);
              console.log(genVarToType);
              // const vivData = await vivAPI('vivillon-poke-ball');
              //sets pokemon number
              number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

              //Sets Pokemon Image
              // pimage.src = pkmnData.sprites.other.home.front_shiny;
            updateImage(genData);
            setTypeTo(genData);
            setNameTo(genData);
            // sboost.style.display = "none";
}
      if (["Cherrim","cherrim", "421"].includes(search.value)) {
                // For debuging
                console.log(pkmnData);
                const cheVar = getRandomInt(2);
                console.log(cheVar);
                const cheVarToType = cherrimTypes[cheVar];
                update(pkmnData);
                  const cheData = await vivAPI(cheVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                  search.value = cheVarToType;
                  // search.value = arcData;
                console.log(cheData);
                console.log(cheVarToType);
                // const vivData = await vivAPI('vivillon-poke-ball');
                //sets pokemon number
                number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                //Sets Pokemon Image
                // pimage.src = pkmnData.sprites.other.home.front_shiny;
              updateImage(cheData);
              setTypeTo(cheData);
              setNameTo(cheData);
              // sboost.style.display = "none";
}
      if (["Shellos", "shellos", "422"].includes(search.value)) {
                          // For debuging
                          console.log(pkmnData);
                          const shelVar = getRandomInt(2);
                          console.log(shelVar);
                          const shelVarToType = shellosTypes[shelVar];
                          update(pkmnData);
                            const shelData = await vivAPI(shelVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                            search.value = shelVarToType;
                            // search.value = arcData;
                          console.log(shelData);
                          console.log(shelVarToType);
                          // const vivData = await vivAPI('vivillon-poke-ball');
                          //sets pokemon number
                          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                          //Sets Pokemon Image
                          // pimage.src = pkmnData.sprites.other.home.front_shiny;
                        updateImage(shelData);
                        setTypeTo(shelData);
                        setNameTo(shelData);
                        // sboost.style.display = "none";
                      }
      if (["Gastrodon", "gastrodon", "423"].includes(search.value)) {
                            // For debuging
                            console.log(pkmnData);
                            const gastVar = getRandomInt(2);
                            console.log(gastVar);
                            const gastVarToType = gastrodonTypes[gastVar];
                            update(pkmnData);
                              const gastData = await vivAPI(gastVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                              search.value = gastVarToType;
                              // search.value = arcData;
                            console.log(gastData);
                            console.log(gastVarToType);
                            // const vivData = await vivAPI('vivillon-poke-ball');
                            //sets pokemon number
                            number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                            //Sets Pokemon Image
                            // pimage.src = pkmnData.sprites.other.home.front_shiny;
                          updateImage(gastData);
                          setTypeTo(gastData);
                          setNameTo(gastData);
                          // sboost.style.display = "none";
}
      if (["Alcremie","alcremie", "869"].includes(search.value)) {
                              // For debuging
                              console.log(pkmnData);
                              const alcrVar = getRandomInt(63);
                              console.log(alcrVar);
                              const alcrVarToType = alcremieTypes[alcrVar];
                              update(pkmnData);
                                const alcrData = await vivAPI(alcrVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                                search.value = alcrVarToType;
                                // search.value = arcData;
                              console.log(alcrData);
                              console.log(alcrVarToType);
                              // const vivData = await vivAPI('vivillon-poke-ball');
                              //sets pokemon number
                              number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                              //Sets Pokemon Image
                              // pimage.src = pkmnData.sprites.other.home.front_shiny;
                            updateImage(alcrData);
                            setTypeTo(alcrData);
                            setNameTo(alcrData);
                            // sboost.style.display = "none";
                          }
      if (["Furfrou","furfrou", "676"].includes(search.value)) {
                                // For debuging
                                console.log(pkmnData);
                                const furVar = getRandomInt(10);
                                console.log(furVar);
                                const furVarToType = furfrouTypes[furVar];
                                update(pkmnData);
                                  const furData = await vivAPI(furVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                                  search.value = furVarToType;
                                  // search.value = arcData;
                                console.log(furData);
                                console.log(furVarToType);
                                // const vivData = await vivAPI('vivillon-poke-ball');
                                //sets pokemon number
                                number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                                //Sets Pokemon Image
                                // pimage.src = pkmnData.sprites.other.home.front_shiny;
                              updateImage(furData);
                              setTypeTo(furData);
                              setNameTo(furData);
                              // sboost.style.display = "none";
}
      if (["Sinistea","sinistea", "854"].includes(search.value)) {
                                  // For debuging
                                  console.log(pkmnData);
                                  const sinteaVar = getRandomInt(2);
                                  console.log(sinteaVar);
                                  const sinteaVarToType = sinisteaTypes[sinteaVar];
                                  update(pkmnData);
                                    const sinteaData = await vivAPI(sinteaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                                    search.value = sinteaVarToType;
                                    // search.value = arcData;
                                  console.log(sinteaData);
                                  console.log(sinteaVarToType);
                                  // const vivData = await vivAPI('vivillon-poke-ball');
                                  //sets pokemon number
                                  number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                                  //Sets Pokemon Image
                                  // pimage.src = pkmnData.sprites.other.home.front_shiny;
                                updateImage(pkmnData);
                                setTypeTo(sinteaData);
                                setNameTo(sinteaData);
                                // sboost.style.display = "none";

      }
      if (["Polteageist", "polteageist", "855"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const polteaVar = getRandomInt(2);
          console.log(polteaVar);
          const polteaVarToType = polteageistTypes[polteaVar];
          update(pkmnData);
            const polteaData = await vivAPI(polteaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = polteaVarToType;
            // search.value = arcData;
          console.log(polteaData);
          console.log(polteaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(pkmnData);
        setTypeTo(polteaData);
        setNameTo(polteaData);
        // sboost.style.display = "none";

      }
      if (["Sinistcha","sinistcha", "1013"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const sinchaVar = getRandomInt(2);
          console.log(sinchaVar);
          const sinchaVarToType = sinistchaTypes[sinchaVar];
          update(pkmnData);
            const sinchaData = await vivAPI(sinchaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = sinchaVarToType;
            // search.value = arcData;
          console.log(sinchaData);
          console.log(sinchaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(pkmnData);
        setTypeTo(sinchaData);
        setNameTo(sinchaData);
        // sboost.style.display = "none";

      }
      if (["Poltchageist", "poltchageist", "1012"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const polchaVar = getRandomInt(2);
          console.log(polchaVar);
          const polchaVarToType = poltchageistTypes[polchaVar];
          update(pkmnData);
            const polchaData = await vivAPI(polchaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = polchaVarToType;
            // search.value = arcData;
          console.log(polchaData);
          console.log(polchaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(pkmnData);
        setTypeTo(polchaData);
        setNameTo(polchaData);
        // sboost.style.display = "none";

      }
      if (["Floette", "floette", "670"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const floetVar = getRandomInt(5);
          console.log(floetVar);
          const floetVarToType = floetteTypes[floetVar];
          update(pkmnData);
            const floetData = await vivAPI(floetVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = floetVarToType;
            // search.value = arcData;
          console.log(floetData);
          console.log(floetVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(floetData);
        setTypeTo(floetData);
        setNameTo(floetData);

        showVarience('FloetteFormz');
      }
      if (["Deerling","deerling", "585"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const deerVar = getRandomInt(4);
          console.log(deerVar);
          const deerVarToType = deerlingTypes[deerVar];
          update(pkmnData);
            const deerData = await vivAPI(deerVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = deerVarToType;
            // search.value = arcData;
          console.log(deerData);
          console.log(deerVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(deerData);
        setTypeTo(deerData);
        setNameTo(deerData);
        // sboost.style.display = "none";
      }
      if (["Sawsbuck","sawsbuck", "586"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const sawsVar = getRandomInt(4);
          console.log(sawsVar);
          const sawsVarToType = sawsbuckTypes[sawsVar];
          update(pkmnData);
            const sawsData = await vivAPI(sawsVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = sawsVarToType;
            // search.value = arcData;
          console.log(sawsData);
          console.log(sawsVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(sawsData);
        setTypeTo(sawsData);
        setNameTo(sawsData);
        // sboost.style.display = "none";
      }
    } else {
      update(pkmnData);
      updateImage(pkmnData);
      setTypeTo(pkmnData);
      if (["nidoran-m","32","nidoran-f","29","farfetchd","83","mr-mime", "mr-mime-galar","122","mime-jr","439","type-null","772","sirfetchd","865","mr-rime","866"].includes(pkmnNameApi)) {
        if (["nidoran-m", "32"].includes(pkmnNameApi)) {
          search.value = "Nidoran♂";
        }
        if (["nidoran-f", "29"].includes(pkmnNameApi)) {
          search.value = "Nidoran♀";
        }
        if (["farfetchd", "83"].includes(pkmnNameApi)) {
          search.value = "Farfetch'd";
        }
        if (["mr-mime", "122"].includes(pkmnNameApi)) {
          search.value = "Mr. Mime";
        }
        if (["mime-jr", "439"].includes(pkmnNameApi)) {
          search.value = "Mime Jr.";
        }
        if (["type-null", "772"].includes(pkmnNameApi)) {
          search.value = "Type: Null";
        }
        if (["sirfetchd","865"].includes(pkmnNameApi)) {
          search.value = "Sirfetch'd";
        }
        if (["mr-rime", "866"].includes(pkmnNameApi)) {
          search.value = "Mr. Rime";
        }
        if (["mr-mime-galar"].includes(pkmnNameApi)) {
          search.value = "Mr. Mime Galar";
        }
      } else {
        setNameTo(pkmnData);
      };
    }
    if (pkmnFrmz.includes(pkmnNameApi)) {
      // sboost.style.display = "block"
      topare.style.backgroundImage = 'url("Assets/pokeball.png")';
      if (gmaxFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/GMax.png")';
        if (pkmnNameApi == "alcremie-gmax") {
          number.innerHTML = "#0869".toString();
          showVarience('AlcremieFormz');
        }
        if (pkmnNameApi == "appletun-gmax") {
          number.innerHTML = "#0842".toString();
          showVarience('AppletunFormz');
        }
        if (pkmnNameApi == "butterfree-gmax") {
          number.innerHTML = "#0012".toString();
          showVarience('ButterfreeFormz');
        }
        if (pkmnNameApi == "blastoise-gmax") {
          number.innerHTML = "#0009".toString();
          showVarience('BlastoiseFormz');
        }
        if (pkmnNameApi == "centiskorch-gmax") {
          number.innerHTML = "#0869".toString();
          showVarience('CentiskorchFormz');
        }
        if (pkmnNameApi == "charizard-gmax") {
          number.innerHTML = "#0006".toString();
          showVarience('CharizardFormz');
        }
        if (pkmnNameApi == "cinderace-gmax") {
          number.innerHTML = "#0815".toString();
          showVarience('CinderaceFormz');
        }
        if (pkmnNameApi == "coalossal-gmax") {
          number.innerHTML = "#0839".toString();
          showVarience('CoalossalFormz');
        }
        if (pkmnNameApi == "copperajah-gmax") {
          number.innerHTML = "#0879".toString();
          showVarience('CopperajahFormz');
        }
        if (pkmnNameApi == "corviknight-gmax") {
          number.innerHTML = "#0823".toString();
          showVarience('CorviknightFormz');
        }
        if (pkmnNameApi == "drednaw-gmax") {
          number.innerHTML = "#0834".toString();
          showVarience('DrednawFormz');
        }
        if (pkmnNameApi == "eevee-gmax") {
          number.innerHTML = "#0133".toString();
          showVarience('EeveeFormz');
        }
        if (pkmnNameApi == "gengar-gmax") {
          number.innerHTML = "#0094".toString();
          showVarience('GengarFormz');
        }
        if (pkmnNameApi == "grimmsnarl-gmax") {
          number.innerHTML = "#0861".toString();
          showVarience('GrimmsnarlFormz');
        }
        if (pkmnNameApi == "hatterene-gmax") {
          number.innerHTML = "#0858".toString();
          showVarience('HattereneFormz');
        }
        if (pkmnNameApi == "inteleon-gmax") {
          number.innerHTML = "#0818".toString();
          showVarience('InteleonFormz');
        }
        if (pkmnNameApi == "lapras-gmax") {
          number.innerHTML = "#0131".toString();
          showVarience('LaprasFormz');
        }
        if (pkmnNameApi == "kingler-gmax") {
          number.innerHTML = "#0099".toString();
          showVarience('KinglerFormz');
        }
        if (pkmnNameApi == "machamp-gmax") {
          number.innerHTML = "#0068".toString();
          showVarience('MachampFormz');
        }
        if (pkmnNameApi == "melmetal-gmax") {
          number.innerHTML = "#0809".toString();
          showVarience('MelmetalFormz');
        }
        if (pkmnNameApi == "meowth-gmax") {
          number.innerHTML = "#0052".toString();
          showVarience('MeowthFormz');
        }
        if (pkmnNameApi == "orbeetle-gmax") {
          number.innerHTML = "#0829".toString();
          showVarience('OrbeetleFormz');
        }
        if (pkmnNameApi == "pikachu-gmax") {
          number.innerHTML = "#0025".toString();
          showVarience('PikachuFormz');
        }
        if (pkmnNameApi == "rillaboom-gmax") {
          number.innerHTML = "#0812".toString();
          showVarience('RillaboomFormz');
        }
        if (pkmnNameApi == "sandaconda-gmax") {
          number.innerHTML = "#0844".toString();
          showVarience('SandacondaFormz');
        }
        if (pkmnNameApi == "snorlax-gmax") {
          number.innerHTML = "#0143".toString();
          showVarience('SnlorlaxFormz');
        }
        if (pkmnNameApi == "toxtricity-amped-gmax") {
          number.innerHTML = "#0849".toString();
          showVarience('ToxtricityFormz');
        }
        if (pkmnNameApi == "toxtricity-low-key-gmax") {
          number.innerHTML = "#0849".toString();
          showVarience('ToxtricityFormz');
        }
        if (pkmnNameApi == "urshifu-rapid-strike-gmax") {
          number.innerHTML = "#0892".toString();
          showVarience('UrshifuFormz');
        }
        if (pkmnNameApi == "urshifu-single-strike-gmax") {
          number.innerHTML = "#0892".toString();
          showVarience('UrshifuFormz');
        }
        if (pkmnNameApi == "venusaur-gmax") {
          number.innerHTML = "#0003".toString();
          showVarience('VenusaurFormz');
        }
        if (pkmnNameApi == "flapple-gmax") {
          number.innerHTML = "#0841".toString();
          showVarience('FlappleFormz');
        }
        if (pkmnNameApi == "garbodor-gmax") {
          number.innerHTML = "#0841".toString();
          showVarience('GarbodorFormz');
        }
        if (pkmnNameApi == "duraludon-gmax") {
          number.innerHTML = "#0884".toString();
          showVarience('DuraludonFormz');
        }
        if (pkmnNameApi == "eternatus-eternamax") {
          number.innerHTML = "#0890".toString();
          showVarience('EternatusFormz');
        }
        }
      if (megaFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Mega.png")';
        if (pkmnNameApi == "abomasnow-mega") {
          number.innerHTML = "#0460".toString();
          showVarience('AbomasnowFormz');
        }
        if (pkmnNameApi == "venusaur-mega") {
          number.innerHTML = "#0003".toString();
          showVarience('VenusaurFormz');
        }
        if (pkmnNameApi == "tyranitar-mega") {
          number.innerHTML = "#0248".toString();
          showVarience('TyranitarFormz');
        }
        if (pkmnNameApi == "swampert-mega") {
          number.innerHTML = "#0260".toString();
          showVarience('SwampertFormz');
        }
        if (pkmnNameApi == "steelix-mega") {
          number.innerHTML = "#0208".toString();
          showVarience('SteelixFormz');
        }
        if (pkmnNameApi == "slowbro-mega") {
          number.innerHTML = "#0080".toString();
          showVarience('SlowbroFormz');
        }
        if (pkmnNameApi == "sharpedo-mega") {
          number.innerHTML = "#0319".toString();
          showVarience('SharpedoFormz');
        }
        if (pkmnNameApi == "scizor-mega") {
          number.innerHTML = "#0212".toString();
          showVarience('ScizorFormz');
        }
        if (pkmnNameApi == "sceptile-mega") {
          number.innerHTML = "#0254".toString();
          showVarience('SceptileFormz');
        }
        if (pkmnNameApi == "mewtwo-mega-y" || pkmnNameApi == "mewtwo-mega-x") {
          number.innerHTML = "#0150".toString();
          showVarience('MewtwoFormz');
        }
        if (pkmnNameApi == "charizard-mega-x" || pkmnNameApi == "charizard-mega-y") {
          number.innerHTML = "#0006".toString();
          showVarience('CharizardFormz');
        }
        if (pkmnNameApi == "salamence-mega") {
          number.innerHTML = "#0373".toString();
          showVarience('SalamenceFormz');
        }
        if (pkmnNameApi == "sableye-mega") {
          number.innerHTML = "#0302".toString();
          showVarience('SableyeFormz');
        }
        if (pkmnNameApi == "rayquaza-mega") {
          number.innerHTML = "#0384".toString();
          showVarience('RayquazaFormz');
        }
        if (pkmnNameApi == "pinsir-mega") {
          number.innerHTML = "#0127".toString();
          showVarience('PinsirFormz');
        }
        if (pkmnNameApi == "pidgeot-mega") {
          number.innerHTML = "#0018".toString();
          showVarience('PidgeotFormz');
        }
        if (pkmnNameApi == "metagross-mega") {
          number.innerHTML = "#0376".toString();
          showVarience('MetagrossFormz');
        }
        if (pkmnNameApi == "medicham-mega") {
          number.innerHTML = "#0308".toString();
          showVarience('MedichamFormz');
        }
        if (pkmnNameApi == "mawile-mega") {
          number.innerHTML = "#0303".toString();
          showVarience('MawileFormz');
        }
        if (pkmnNameApi == "manectric-mega") {
          number.innerHTML = "#0310".toString();
          showVarience('ManectricFormz');
        }
        if (pkmnNameApi == "lucario-mega") {
          number.innerHTML = "#0448".toString();
          showVarience('LucarioFormz');
        }
        if (pkmnNameApi == "lopunny-mega") {
          number.innerHTML = "#0428".toString();
          showVarience('LopunnyFormz');
        }
        if (pkmnNameApi == "latios-mega") {
          number.innerHTML = "#0381".toString();
          showVarience('LatiosFormz');
        }
        if (pkmnNameApi == "latias-mega") {
          number.innerHTML = "#0380".toString();
          showVarience('LatiasFormz');
        }
        if (pkmnNameApi == "kangaskhan-mega") {
          number.innerHTML = "#0115".toString();
          showVarience('KangaskhanFormz');
        }
        if (pkmnNameApi == "houndoom-mega") {
          number.innerHTML = "#0229".toString();
          showVarience('HoundoomFormz');
        }
        if (pkmnNameApi == "heracross-mega") {
          number.innerHTML = "#0214".toString();
          showVarience('HeracrossFormz');
        }
        if (pkmnNameApi == "gyarados-mega") {
          number.innerHTML = "#0130".toString();
          showVarience('GyaradosFormz');
        }
        if (pkmnNameApi == "gengar-mega") {
          number.innerHTML = "#0094".toString();
          showVarience('GengarFormz');
        }
        if (pkmnNameApi == "absol-mega") {
          number.innerHTML = "#0359".toString();
          showVarience('AbsolFormz');
        }
        if (pkmnNameApi == "aerodactyl-mega") {
          number.innerHTML = "#0142".toString();
          showVarience('AerodactylFormz');
        }
        if (pkmnNameApi == "aggron-mega") {
          number.innerHTML = "#0306".toString();
          showVarience('AggronFormz');
        }
        if (pkmnNameApi == "alakazam-mega") {
          number.innerHTML = "#0065".toString();
          showVarience('AlakazamFormz');
        }
        if (pkmnNameApi == "altaria-mega") {
          number.innerHTML = "#0334".toString();
          showVarience('AltariaFormz');
        }
        if (pkmnNameApi == "ampharos-mega") {
          number.innerHTML = "#0181".toString();
          showVarience('AmpharosFormz');
        }
        if (pkmnNameApi == "audino-mega") {
          number.innerHTML = "#0531".toString();
          showVarience('AudinoFormz');
        }
        if (pkmnNameApi == "banette-mega") {
          number.innerHTML = "#0354".toString();
          showVarience('BanetteFormz');
        }
        if (pkmnNameApi == "beedrill-mega") {
          number.innerHTML = "#0015".toString();
          showVarience('BeedrillFormz');
        }
        if (pkmnNameApi == "blastoise-mega") {
          number.innerHTML = "#0009".toString();
          showVarience('BlastoiseFormz');
        }
        if (pkmnNameApi == "blaziken-mega") {
          number.innerHTML = "#0257".toString();
          showVarience('BlazikenFormz');
        }
        if (pkmnNameApi == "camerupt-mega") {
          number.innerHTML = "#0323".toString();
          showVarience('CameruptFormz');
        }
        if (pkmnNameApi == "diancie-mega") {
          number.innerHTML = "#0719".toString();
          showVarience('DiancieFormz');
        }
        if (pkmnNameApi == "glalie-mega") {
          number.innerHTML = "#0362".toString();
          showVarience('GlalieFormz');
        }
        if (pkmnNameApi == "gallade-mega") {
          number.innerHTML = "#0475".toString();
          showVarience('GalladeFormz');
        }
        if (pkmnNameApi == "garchomp-mega") {
          number.innerHTML = "#0445".toString();
          showVarience('GarchompFormz');
        }
        if (pkmnNameApi == "gardevoir-mega") {
          number.innerHTML = "#0282".toString();
          showVarience('GardevoirFormz');
        }
      }
      if (toteFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Totem.png")';
        if (pkmnNameApi == "araquanid-totem") {
          number.innerHTML = "#0752".toString();
          showVarience('AraquanidFormz');
        }
        if (pkmnNameApi == "kommo-o-totem") {
          number.innerHTML = "#0784".toString();
          showVarience('KommooFormz');
        }
        if (pkmnNameApi == "marowak-totem") {
          number.innerHTML = "#0105".toString();
          showVarience('MarowakFormz');
        }
        if (pkmnNameApi == "mimikyu-totem-busted" || pkmnNameApi == "mimikyu-totem-disguised") {
          number.innerHTML = "#0778".toString();
          showVarience('MimikyuFormz');
        }
        if (pkmnNameApi == "raticate-totem-alola") {
          number.innerHTML = "#0020".toString();
          showVarience('RaticateFormz');
        }
        if (pkmnNameApi == "ribombee-totem") {
          number.innerHTML = "#0743".toString();
          showVarience('RibombeeFormz');
        }
        if (pkmnNameApi == "vikavolt-totem") {
          number.innerHTML = "#0738".toString();
          showVarience('VikavoltFormz');
        }
        if (pkmnNameApi == "togedemaru-totem") {
          number.innerHTML = "#0777".toString();
          showVarience('TogedemaruFormz');
        }
        if (pkmnNameApi == "gumshoos-totem") {
          number.innerHTML = "#0735".toString();
          showVarience('GumshoosFormz');
        }
      }
      if (alolFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Alola.png")';
        if (pkmnNameApi == "diglett-alola") {
          number.innerHTML = "#0050".toString();
          showVarience('DiglettFormz');
        }
        if (pkmnNameApi == "dugtrio-alola") {
          number.innerHTML = "#0051".toString();
          showVarience('DugtrioFormz');
        }
        if (pkmnNameApi == "exeggutor-alola") {
          number.innerHTML = "#0103".toString();
          showVarience('ExeggutorFormz');
        }
        if (pkmnNameApi == "geodude-alola") {
          number.innerHTML = "#0074".toString();
          showVarience('GeodudeFormz');
        }
        if (pkmnNameApi == "golem-alola") {
          number.innerHTML = "#0076".toString();
          showVarience('GolemFormz');
        }
        if (pkmnNameApi == "graveler-alola") {
          number.innerHTML = "#0075".toString();
          showVarience('GravelerFormz');
        }
        if (pkmnNameApi == "grimer-alola") {
          number.innerHTML = "#0088".toString();
          showVarience('GrimerFormz');
        }
        if (pkmnNameApi == "marowak-alola") {
          number.innerHTML = "#0105".toString();
          showVarience('MarowakFormz');
        }
        if (pkmnNameApi == "meowth-alola") {
          number.innerHTML = "#0052".toString();
          showVarience('MeowthFormz');
        }
        if (pkmnNameApi == "muk-alola") {
          number.innerHTML = "#0089".toString();
          showVarience('MukFormz');
        }
        if (pkmnNameApi == "ninetales-alola") {
          number.innerHTML = "#0038".toString();
          showVarience('NinetalesFormz');
        }
        if (pkmnNameApi == "persian-alola") {
          number.innerHTML = "#0053".toString();
          showVarience('PersianFormz');
        }
        if (pkmnNameApi == "raichu-alola") {
          number.innerHTML = "#0026".toString();
          showVarience('RaichuFormz');
        }
        if (pkmnNameApi == "raticate-alola") {
          number.innerHTML = "#0020".toString();
          showVarience('RaticateFormz');
        }
        if (pkmnNameApi == "rattata-alola") {
          number.innerHTML = "#0019".toString();
          showVarience('RattataFormz');
        }
        if (pkmnNameApi == "sandshrew-alola") {
          number.innerHTML = "#0027".toString();
          showVarience('SandshrewFormz');
        }
        if (pkmnNameApi == "sandslash-alola") {
          number.innerHTML = "#0028".toString();
          showVarience('SandslashFormz');
        }
        if (pkmnNameApi == "vulpix-alola") {
          number.innerHTML = "#0037".toString();
          showVarience('VulpixFormz');
        }
      }
      if (origFrmz.includes(pkmnNameApi)) {
      topare.style.backgroundImage = 'url("Assets/Arceus.png")';
        if (pkmnNameApi == "dialga-origin") {
          number.innerHTML = "#0483".toString();
          showVarience('DialgaFormz');
        }
        if (pkmnNameApi == "giratina-origin") {
          number.innerHTML = "#0487".toString();
          showVarience('GiratinaFormz');
        }
        if (pkmnNameApi == "magearna-original") {
          number.innerHTML = "#0801".toString();
          showVarience('MagearnaFormz');
        }
        if (pkmnNameApi == "palkia-origin") {
          number.innerHTML = "#0484".toString();
          showVarience('PalkiaFormz');
        }
      }
      if (hisuFrmz.includes(pkmnNameApi)) {
      topare.style.backgroundImage = 'url("Assets/Hisui.png")';
      if (pkmnNameApi == "arcanine-hisui") {
        number.innerHTML = "#0059".toString();
        showVarience('ArcanineFormz');
      }
      if (pkmnNameApi == "avalugg-hisui") {
        number.innerHTML = "#0713".toString();
        showVarience('AvaluggFormz');
      }
      if (pkmnNameApi == "braviary-hisui") {
        number.innerHTML = "#0628".toString();
        showVarience('BraviaryFormz');
      }
      if (pkmnNameApi == "decidueye-hisui") {
        number.innerHTML = "#0724".toString();
        showVarience('DecidueyeFormz');
      }
      if (pkmnNameApi == "enamorus-therian") {
        number.innerHTML = "#0905".toString();
        showVarience('EnamorusFormz');
      }
      if (pkmnNameApi == "landorus-therian") {
        number.innerHTML = "#0645".toString();
        showVarience('LandorusFormz');
      }
      if (pkmnNameApi == "thundurus-therian") {
        number.innerHTML = "#0642".toString();
        showVarience('ThundurusFormz');
      }
      if (pkmnNameApi == "tornadus-therian") {
        number.innerHTML = "#0641".toString();
        showVarience('TornadusFormz');
      }
      if (pkmnNameApi == "electrode-hisui") {
        number.innerHTML = "#0101".toString();
        showVarience('ElectrodeFormz');
      }
      if (pkmnNameApi == "goodra-hisui") {
        number.innerHTML = "#0706".toString();
        showVarience('GoodraFormz');
      }
      if (pkmnNameApi == "growlithe-hisui") {
        number.innerHTML = "#0058".toString();
        showVarience('GrowlitheFormz');
      }
      if (pkmnNameApi == "lilligant-hisui") {
        number.innerHTML = "#0549".toString();
        showVarience('LilligantFormz');
      }
      if (pkmnNameApi == "qwilfish-hisui") {
        number.innerHTML = "#0211".toString();
        showVarience('QwilfishFormz');
      }
      if (pkmnNameApi == "samurott-hisui") {
        number.innerHTML = "#0503".toString();
        showVarience('SamurottFormz');
      }
      if (pkmnNameApi == "sliggoo-hisui") {
        number.innerHTML = "#0705".toString();
        showVarience('SliggooFormz');
      }
      if (pkmnNameApi == "sneasel-hisui") {
        number.innerHTML = "#0215".toString();
        showVarience('SneaselFormz');
      }
      if (pkmnNameApi == "zorua-hisui") {
        number.innerHTML = "#0570".toString();
        showVarience('ZoruaFormz');
      }
      if (pkmnNameApi == "typhlosion-hisui") {
        number.innerHTML = "#0157".toString();
        showVarience('TyphlosionFormz');
      }
      if (pkmnNameApi == "voltorb-hisui") {
        number.innerHTML = "#0100".toString();
        showVarience('VoltorbFormz');
      }
      if (pkmnNameApi == "zoroark-hisui") {
        number.innerHTML = "#0571".toString();
        showVarience('ZoroarkFormz');
      }
      }
      if (galaFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Galar.png")';
        if (pkmnNameApi == "articuno-galar") {
          number.innerHTML = "#0144".toString();
          showVarience('ArticunoFormz');
        }
        if (pkmnNameApi == "corsola-galar") {
          number.innerHTML = "#0222".toString();
          showVarience('CorsolaFormz');
        }
        if (pkmnNameApi == "darmanitan-galar-standard" || pkmnNameApi == "darmanitan-galar-zen") {
          number.innerHTML = "#0555".toString();
          showVarience('DarmanitanFormz');
        }
        if (pkmnNameApi == "darumaka-galar") {
          number.innerHTML = "#0554".toString();
          showVarience('DarumakaFormz');
        }
        if (pkmnNameApi == "farfetchd-galar") {
          number.innerHTML = "#0083".toString();
          showVarience('FarfetchdFormz');
        }
        if (pkmnNameApi == "linoone-galar") {
          number.innerHTML = "#0264".toString();
          showVarience('LinooneFormz');
        }
        if (pkmnNameApi == "meowth-galar") {
          number.innerHTML = "#0052".toString();
          showVarience('MeowthFormz');
        }
        if (pkmnNameApi == "moltres-galar") {
          number.innerHTML = "#0146".toString();
          showVarience('MoltresFormz');
        }
        if (pkmnNameApi == "mr-mime-galar") {
          number.innerHTML = "#0122".toString();
          showVarience('Mr-mimeFormz');
        }
        if (pkmnNameApi == "ponyta-galar") {
          number.innerHTML = "#0077".toString();
          showVarience('PonytaFormz');
        }
        if (pkmnNameApi == "rapidash-galar") {
          number.innerHTML = "#0078".toString();
          showVarience('RapidashFormz');
        }
        if (pkmnNameApi == "slowbro-galar") {
          number.innerHTML = "#0080".toString();
          showVarience('SlowbroFormz');
        }
        if (pkmnNameApi == "slowking-galar") {
          number.innerHTML = "#0199".toString();
          showVarience('SlowkingFormz');
        }
        if (pkmnNameApi == "slowpoke-galar") {
          number.innerHTML = "#0079".toString();
          showVarience('SlowpokeFormz');
        }
        if (pkmnNameApi == "stunfisk-galar") {
          number.innerHTML = "#0618".toString();
          showVarience('StunfiskFormz');
        }
        if (pkmnNameApi == "weezing-galar") {
          number.innerHTML = "#0110".toString();
          showVarience('WeezingFormz');
        }
        if (pkmnNameApi == "yamask-galar") {
          number.innerHTML = "#0562".toString();
          showVarience('YamaskFormz');
        }
        if (pkmnNameApi == "zapdos-galar") {
          number.innerHTML = "#0145".toString();
          showVarience('ZapdosFormz');
        }
        if (pkmnNameApi == "zigzagoon-galar") {
          number.innerHTML = "#0263".toString();
          showVarience('ZigzagoonFormz');
        }
      }
      if (paldFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Paldea.png")';
        if (pkmnNameApi == "tauros-paldea-aqua-breed" || pkmnNameApi == "tauros-paldea-combat-breed" || pkmnNameApi == "tauros-paldea-blaze-breed") {
          number.innerHTML = "#0128".toString();
          showVarience('TaurosFormz');
        }
        if (pkmnNameApi == "terapagos-stellar" || pkmnNameApi == "terapagos-terastal") {
          number.innerHTML = "#1024".toString();
          showVarience('TerapagosFormz');
        }
        if (pkmnNameApi == "wooper-paldea") {
          number.innerHTML = "#0194".toString();
          showVarience('WooperFormz');
        }
      }
      if (starFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Starter.png")';
        if (pkmnNameApi == "eevee-starter") {
          number.innerHTML = "#0133".toString();
          showVarience('EeveeFormz');
        }
        if (pkmnNameApi == "pikachu-starter") {
          number.innerHTML = "#0025".toString();
          showVarience('PikachuFormz');
        }
      }
      if (bondFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Mega.png")';
        if (pkmnNameApi == "greninja-ash" || pkmnNameApi == "greninja-battle-bond") {
          number.innerHTML = "#0658".toString();
          showVarience('GreninjaFormz');
        }
      }
      if (primfrmz.includes(pkmnNameApi)) {
        if (pkmnNameApi == "kyogre-primal") {
          topare.style.backgroundImage = 'url("Assets/PryKy.png")';
          number.innerHTML = "#0382".toString();
          showVarience('KyogreFormz');
        }
        if (pkmnNameApi == "groudon-primal") {
          topare.style.backgroundImage = 'url("Assets/PriGr.png")';
          number.innerHTML = "#0383".toString();
          showVarience('GroudonFormz');

        }
        if (pkmnNameApi == "floette-eternal") {
          topare.style.backgroundImage = 'url("Assets/Eternal.png")';
          number.innerHTML = "#0670".toString();
          showVarience('FloetteFormz');

        }
      }
      if (pkbaFrmz.includes(pkmnNameApi)) {
        if (pkmnNameApi == "aegislash-blade") {
          number.innerHTML = "#0681".toString();
          showVarience('AegislashFormz');
        }
        if (pkmnNameApi == "basculegion-female") {
          number.innerHTML = "#0902".toString();
          showVarience('BasculegionFormz');
        }
        if (["basculin-blue-striped","basculin-white-striped"].includes(pkmnNameApi)) {
          number.innerHTML = "#0550".toString();
          showVarience('BasculinFormz');
        }
        if (["calyrex-ice","calyrex-shadow"].includes(pkmnNameApi)) {
          number.innerHTML = "#0898".toString();
          showVarience('CalyrexFormz');
        }
        if (["castform-rainy", "castform-snowy","castform-sunny"].includes(pkmnNameApi)) {
          number.innerHTML = "#0351".toString();
          showVarience('CastformFormz');
        }
        if (["cramorant-gorging", "cramorant-gulping"].includes(pkmnNameApi)) {
          number.innerHTML = "#0845".toString();
          showVarience('CramorantFormz');
        }
        if (pkmnNameApi == "darmanitan-zen") {
          number.innerHTML = "#0555".toString();
          showVarience('DarmanitanFormz');
        }
        if (["deoxys-attack", "deoxys-defense", "deoxys-speed",].includes(pkmnNameApi)) {
          number.innerHTML = "#0386".toString();
          showVarience('DeoxysFormz');
        }
        if (pkmnNameApi == "dudunsparce-three-segment") {
          number.innerHTML = "#0982".toString();
          showVarience('DudunsparceFormz');
        }
        if (pkmnNameApi == "eiscue-noice") {
          number.innerHTML = "#0875".toString();
          showVarience('EiscueFormz');
        }
        if (pkmnNameApi == "gimmighoul-roaming") {
          number.innerHTML = "#0999".toString();
          showVarience('GimmighoulFormz');
        }
        if (["gourgeist-large","gourgeist-small","gourgeist-super"].includes(pkmnNameApi)) {
          number.innerHTML = "#0711".toString();
          showVarience('GourgeistFormz');
        }
        if (pkmnNameApi == "hoopa-unbound") {
          number.innerHTML = "#0720".toString();
          showVarience('HoopaFormz');
        }
        if (pkmnNameApi == "indeedee-female") {
          number.innerHTML = "#0876".toString();
          showVarience('IndeedeeFormz');
        }
        if (pkmnNameApi == "keldeo-resolute") {
          number.innerHTML = "#0647".toString();
          showVarience('KeldeoFormz');
        }
        if (["kyurem-black","kyurem-white"].includes(pkmnNameApi)) {
          number.innerHTML = "#0646".toString();
          showVarience('KyuremFormz');
        }
        if (["lycanroc-dusk", "lycanroc-midnight"].includes(pkmnNameApi)) {
          number.innerHTML = "#0745".toString();
          showVarience('LycanrocFormz');
        }
        if (pkmnNameApi == "maushold-family-of-three") {
          number.innerHTML = "#0925".toString();
          showVarience('MausholdFormz');
        }
        if (pkmnNameApi == "meloetta-pirouette") {
          number.innerHTML = "#0648".toString();
          showVarience('MeloettaFormz');
        }
        if (pkmnNameApi == "meowstic-female") {
          number.innerHTML = "#0678".toString();
          showVarience('MeowsticFormz');
        }
        if (pkmnNameApi == "mimikyu-busted") {
          number.innerHTML = "#0778".toString();
          showVarience('MimikyuFormz');
        }
        if (["minior-blue","minior-blue-meteor","minior-green","minior-green-meteor","minior-indigo","minior-indigo-meteor","minior-orange","minior-orange-meteor","minior-red","minior-violet","minior-violet-meteor","minior-yellow", "minior-yellow-meteor"].includes(pkmnNameApi)) {
          number.innerHTML = "#0774".toString();
          showVarience('MiniorFormz');
        }
        if (pkmnNameApi == "morpeko-hangry") {
          number.innerHTML = "#0877".toString();
          showVarience('MorpekoFormz');
        }
        if (["necrozma-dawn", "necrozma-dusk", "necrozma-ultra"].includes(pkmnNameApi)) {
          number.innerHTML = "#0800".toString();
          showVarience('NecrozmaFormz');
        }
        if (["ogerpon-cornerstone-mask", "ogerpon-hearthflame-mask", "ogerpon-wellspring-mask",].includes(pkmnNameApi)) {
          number.innerHTML = "#1017".toString();
          showVarience('OgerponFormz');
        }
        if (pkmnNameApi == "oinkologne-female") {
          number.innerHTML = "#0916".toString();
          showVarience('OinkologneFormz');
        }
        if (["oricorio-pau", "oricorio-pom-pom", "oricorio-sensu"].includes(pkmnNameApi)) {
          number.innerHTML = "#0741".toString();
          showVarience('OricorioFormz');
        }
        if (pkmnNameApi == "palafin-hero") {
          number.innerHTML = "#0964".toString();
          showVarience('PalafinFormz');
        }
        if (["pikachu-alola-cap", "pikachu-belle", "pikachu-cosplay", "pikachu-hoenn-cap", "pikachu-kalos-cap", "pikachu-libre", "pikachu-original-cap", "pikachu-partner-cap", "pikachu-phd", "pikachu-pop-star", "pikachu-rock-star", "pikachu-sinnoh-cap", "pikachu-unova-cap", "pikachu-world-cap"].includes(pkmnNameApi)) {
          number.innerHTML = "#0025".toString();
          showVarience('PikachuFormz');
        }
        if (["pumpkaboo-large", "pumpkaboo-small", "pumpkaboo-super"].includes(pkmnNameApi)) {
          number.innerHTML = "#0710".toString();
          showVarience('PumpkabooFormz');
        }
        if (pkmnNameApi == "rockruff-own-tempo") {
          number.innerHTML = "#0744".toString();
          showVarience('RockruffFormz');
        }
        if (["rotom-fan", "rotom-frost", "rotom-heat", "rotom-mow", "rotom-wash"].includes(pkmnNameApi)) {
          number.innerHTML = "#0479".toString();
          showVarience('RotomFormz');
        }
        if (pkmnNameApi == "shaymin-sky") {
          number.innerHTML = "#0492".toString();
          showVarience('ShayminFormz');
        }
        if (["squawkabilly-blue-plumage", "squawkabilly-white-plumage", "squawkabilly-yellow-plumage"].includes(pkmnNameApi)) {
          number.innerHTML = "#0931".toString();
          showVarience('SquawkabillyFormz');
        }
        if (["tatsugiri-droopy", "tatsugiri-stretchy",].includes(pkmnNameApi)) {
          number.innerHTML = "#0978".toString();
          showVarience('TatsugiriFormz');
        }
        if (pkmnNameApi == "toxtricity-low-key") {
          number.innerHTML = "#0849".toString();
          showVarience('ToxtricityFormz');
        }
        if (pkmnNameApi == "ursaluna-bloodmoon") {
          number.innerHTML = "#0901".toString();
          showVarience('UrsalunaFormz');
        }
        if (pkmnNameApi == "urshifu-rapid-strike") {
          number.innerHTML = "#0892".toString();
          showVarience('UrshifuFormz');
        }
        if (pkmnNameApi == "wishiwashi-school") {
          number.innerHTML = "#0746".toString();
          showVarience('WishiwashiFormz');
        }
        if (["wormadam-sandy","wormadam-trash"].includes(pkmnNameApi)) {
          number.innerHTML = "#0413".toString();
          showVarience('WormadamFormz');
        }
        if (pkmnNameApi == "zacian-crowned") {
          number.innerHTML = "#0888".toString();
          showVarience('ZacianFormz');
        }
        if (pkmnNameApi == "zamazenta-crowned") {
          number.innerHTML = "#0889".toString();
          showVarience('ZamazentaFormz');
        }
        if (pkmnNameApi == "zarude-dada") {
          number.innerHTML = "#0893".toString();
          showVarience('ZarudeFormz');
        }
        if (["zygarde-10", "zygarde-10-power-construct", "zygarde-50-power-construct", "zygarde-complete"].includes(pkmnNameApi)) {
          number.innerHTML = "#0718".toString();
          showVarience('ZygardeFormz');
        }
      }
      if (exclFrmz.includes(pkmnNameApi)) {

        if (["abomasnow", "460"].includes(pkmnNameApi)) {
          showVarience('AbomasnowFormz');
        }
        if (["absol", "359"].includes(pkmnNameApi)) {
          showVarience('AbsolFormz');
        }
        if (["aegislash-shield", "681"].includes(pkmnNameApi)) {
          showVarience('AegislashFormz');
        }
        if (["aerodactyl", "142"].includes(pkmnNameApi)) {
          showVarience('AerodactylFormz');
        }
        if (["aggron", "306"].includes(pkmnNameApi)) {
          showVarience('AggronFormz');
        }
        if (["alakazam", "65"].includes(pkmnNameApi)) {
          showVarience('AlakazamFormz');
        }
        if (["alcremie", "869"].includes(pkmnNameApi)) {
          showVarience('AlcremieFormz');
        }
        if (["altaria", "334"].includes(pkmnNameApi)) {
          showVarience('AltariaFormz');
        }
        if (["ampharos", "181"].includes(pkmnNameApi)) {
          showVarience('AmpharosFormz');
        }
        if (["appletun", "842"].includes(pkmnNameApi)) {
          showVarience('AppletunFormz');
        }
        if (["araquanid", "752"].includes(pkmnNameApi)) {
          showVarience('AraquanidFormz');
        }
        if (["arcanine", "59"].includes(pkmnNameApi)) {
          showVarience('ArcanineFormz');
        }
        if (["articuno", "144"].includes(pkmnNameApi)) {
          showVarience('ArticunoFormz');
        }
        if (["audino", "531"].includes(pkmnNameApi)) {
          showVarience('AudinoFormz');
        }
        if (["avalugg", "713"].includes(pkmnNameApi)) {
          showVarience('AvaluggFormz');
        }
        if (["banette", "354"].includes(pkmnNameApi)) {
          showVarience('BanetteFormz');
        }
        if (["basculegion-male", "902"].includes(pkmnNameApi)) {
          showVarience('BasculegionFormz');
        }
        if (["basculin-red-striped", "550"].includes(pkmnNameApi)) {
          showVarience('BasculinFormz');
        }
        if (["beedrill", "15"].includes(pkmnNameApi)) {
          showVarience('BeedrillFormz');
        }
        if (["blastoise", "9"].includes(pkmnNameApi)) {
          showVarience('BlastoiseFormz');
        }
        if (["blaziken", "257"].includes(pkmnNameApi)) {
          showVarience('BlazikenFormz');
        }
        if (["braviary", "628"].includes(pkmnNameApi)) {
          showVarience('BraviaryFormz');
        }
        if (["butterfree", "12"].includes(pkmnNameApi)) {
          showVarience('ButterfreeFormz');
        }
        if (["calyrex", "898"].includes(pkmnNameApi)) {
          showVarience('CalyrexFormz');
        }
        if (["camerupt", "323"].includes(pkmnNameApi)) {
          showVarience('CameruptFormz');
        }
        if (["castform", "351"].includes(pkmnNameApi)) {
          showVarience('CastformFormz');
        }
        if (["centiskorch", "851"].includes(pkmnNameApi)) {
          showVarience('CentiskorchFormz');
        }
        if (["charizard", "6"].includes(pkmnNameApi)) {
          showVarience('CharizardFormz');
        }
        if (["cinderace", "815"].includes(pkmnNameApi)) {
          showVarience('CinderaceFormz');
        }
        if (["coalossal", "839"].includes(pkmnNameApi)) {
          showVarience('CoalossalFormz');
        }
        if (["copperajah", "879"].includes(pkmnNameApi)) {
          showVarience('CopperajahFormz');
        }
        if (["corsola", "222"].includes(pkmnNameApi)) {
          showVarience('CorsolaFormz');
        }
        if (["corviknight", "823"].includes(pkmnNameApi)) {
          showVarience('CorviknightFormz');
        }
        if (["cramorant", "845"].includes(pkmnNameApi)) {
          showVarience('CramorantFormz');
        }
        if (["darmanitan-standard", "555"].includes(pkmnNameApi)) {
          showVarience('DarmanitanFormz');
        }
        if (["darumaka", "554"].includes(pkmnNameApi)) {
          showVarience('DarumakaFormz');
        }
        if (["decidueye", "724"].includes(pkmnNameApi)) {
          showVarience('DecidueyeFormz');
        }
        if (["deoxys-normal", "386"].includes(pkmnNameApi)) {
          showVarience('DeoxysFormz');
        }
        if (["dialga", "483"].includes(pkmnNameApi)) {
          showVarience('DialgaFormz');
        }
        if (["diancie", "719"].includes(pkmnNameApi)) {
          showVarience('DiancieFormz');
        }
        if (["diglett", "50"].includes(pkmnNameApi)) {
          showVarience('DiglettFormz');
        }
        if (["drednaw", "834"].includes(pkmnNameApi)) {
          showVarience('DrednawFormz');
        }
        if (["dudunsparce-two-segment", "982"].includes(pkmnNameApi)) {
          showVarience('DudunsparceFormz');
        }
        if (["dugtrio", "51"].includes(pkmnNameApi)) {
          showVarience('DugtrioFormz');
        }
        if (["duraludon", "884"].includes(pkmnNameApi)) {
          showVarience('DuraludonFormz');
        }
        if (["eevee", "133"].includes(pkmnNameApi)) {
          showVarience('EeveeFormz');
        }
        if (["eiscue-ice", "875"].includes(pkmnNameApi)) {
          showVarience('EiscueFormz');
        }
        if (["electrode", "101"].includes(pkmnNameApi)) {
          showVarience('ElectrodeFormz');
        }
        if (["enamorus-incarnate", "905"].includes(pkmnNameApi)) {
          showVarience('EnamorusFormz');
        }
        if (["eternatus", "890"].includes(pkmnNameApi)) {
          showVarience('EternatusFormz');
        }
        if (["exeggutor", "103"].includes(pkmnNameApi)) {
          showVarience('ExeggutorFormz');
        }
        if (["farfetch'd", "83"].includes(pkmnNameApi)) {
          showVarience('FarfetchdFormz');
        }
        if (["flapple", "841"].includes(pkmnNameApi)) {
          showVarience('FlappleFormz');
        }
        if (["floette", "670"].includes(pkmnNameApi)) {
          showVarience('FloetteFormz');
        }
        if (["gallade", "475"].includes(pkmnNameApi)) {
          showVarience('GalladeFormz');
        }
        if (["garbodor", "569"].includes(pkmnNameApi)) {
          showVarience('GarbodorFormz');
        }
        if (["garchomp", "445"].includes(pkmnNameApi)) {
          showVarience('GarchompFormz');
        }
        if (["gardevoir", "282"].includes(pkmnNameApi)) {
          showVarience('GardevoirFormz');
        }
        if (["gengar", "94"].includes(pkmnNameApi)) {
          showVarience('GengarFormz');
        }
        if (["geodude","74"].includes(pkmnNameApi)) {
          showVarience('GeodudeFormz');
        }
        if (["gimmighoul", "999"].includes(pkmnNameApi)) {
          showVarience('GimmighoulFormz');
        }
        if (["giratina-altered", "487"].includes(pkmnNameApi)) {
          showVarience('GiratinaFormz');
        }
        if (["glalie", "362"].includes(pkmnNameApi)) {
          showVarience('GlalieFormz');
        }
        if (["golem", "76"].includes(pkmnNameApi)) {
          showVarience('GolemFormz');
        }
        if (["goodra", "706"].includes(pkmnNameApi)) {
          showVarience('GoodraFormz');
        }
        if (["gourgeist-average", "711"].includes(pkmnNameApi)) {
          showVarience('GourgeistFormz');
        }
        if (["graveler", "75"].includes(pkmnNameApi)) {
          showVarience('GravelerFormz');
        }
        if (["greninja", "658"].includes(pkmnNameApi)) {
          showVarience('GreninjaFormz');
        }
        if (["grimer", "88"].includes(pkmnNameApi)) {
          showVarience('GrimerFormz');
        }
        if (["grimmsnarl", "861"].includes(pkmnNameApi)) {
          showVarience('GrimmsnarlFormz');
        }
        if (["groudon", "383"].includes(pkmnNameApi)) {
          showVarience('GroudonFormz');
        }
        if (["growlithe", "58"].includes(pkmnNameApi)) {
          showVarience('GrowlitheFormz');
        }
        if (["gumshoos", "735"].includes(pkmnNameApi)) {
          showVarience('GumshoosFormz');
        }
        if (["gyarados", "130"].includes(pkmnNameApi)) {
          showVarience('GyaradosFormz');
        }
        if (["hatterene", "858"].includes(pkmnNameApi)) {
          showVarience('HattereneFormz');
        }
        if (["heracross", "214"].includes(pkmnNameApi)) {
          showVarience('HeracrossFormz');
        }
        if (["hoopa", "720"].includes(pkmnNameApi)) {
          showVarience('HoopaFormz');
        }
        if (["houndoom", "229"].includes(pkmnNameApi)) {
          showVarience('HoundoomFormz');
        }
        if (["indeedee-male", "876"].includes(pkmnNameApi)) {
          showVarience('IndeedeeFormz');
        }
        if (["inteleon", "818"].includes(pkmnNameApi)) {
          showVarience('InteleonFormz');
        }
        if (["kangaskhan", "115"].includes(pkmnNameApi)) {
          showVarience('KangaskhanFormz');
        }
        if (["keldeo-ordinary", "647"].includes(pkmnNameApi)) {
          showVarience('KeldeoFormz');
        }
        if (["kingler", "99"].includes(pkmnNameApi)) {
          showVarience('KinglerFormz');
        }
        if (["kommo-o", "784"].includes(pkmnNameApi)) {
          showVarience('KommooFormz');
        }
        if (["kyogre", "382"].includes(pkmnNameApi)) {
          showVarience('KyogreFormz');
        }
        if (["kyurem", "646"].includes(pkmnNameApi)) {
          showVarience('KyuremFormz');
        }
        if (["landorus-incarnate", "645"].includes(pkmnNameApi)) {
          showVarience('LandorusFormz');
        }
        if (["lapras", "131"].includes(pkmnNameApi)) {
          showVarience('LaprasFormz');
        }
        if (["latias", "380"].includes(pkmnNameApi)) {
          showVarience('LatiasFormz');
        }
        if (["latios", "381"].includes(pkmnNameApi)) {
          showVarience('LatiosFormz');
        }
        if (["lilligant", "549"].includes(pkmnNameApi)) {
          showVarience('LilligantFormz');
        }
        if (["linoone", "264"].includes(pkmnNameApi)) {
          showVarience('LinooneFormz');
        }
        if (["lopunny", "428"].includes(pkmnNameApi)) {
          showVarience('LopunnyFormz');
        }
        if (["lucario", "448"].includes(pkmnNameApi)) {
          showVarience('LucarioFormz');
        }
        if (["lycanroc-midday", "745"].includes(pkmnNameApi)) {
          showVarience('LycanrocFormz');
        }
        if (["machamp", "68"].includes(pkmnNameApi)) {
          showVarience('MachampFormz');
        }
        if (["magearna", "801"].includes(pkmnNameApi)) {
          showVarience('MagearnaFormz');
        }
        if (["manectric", "310"].includes(pkmnNameApi)) {
          showVarience('ManectricFormz');
        }
        if (["marowak", "105"].includes(pkmnNameApi)) {
          showVarience('MarowakFormz');
        }
        if (["maushold-family-of-four", "925"].includes(pkmnNameApi)) {
          showVarience('MausholdFormz');
        }
        if (["mawile", "303"].includes(pkmnNameApi)) {
          showVarience('MawileFormz');
        }
        if (["medicham", "308"].includes(pkmnNameApi)) {
          showVarience('MedichamFormz');
        }
        if (["melmetal", "809"].includes(pkmnNameApi)) {
          showVarience('MelmetalFormz');
        }
        if (["meloetta-aria", "648"].includes(pkmnNameApi)) {
          showVarience('MeloettaFormz');
        }
        if (["meowstic-male", "678"].includes(pkmnNameApi)) {
          showVarience('MeowsticFormz');
        }
        if (["meowth", "52"].includes(pkmnNameApi)) {
          showVarience('MeowthFormz');
        }
        if (["metagross", "376"].includes(pkmnNameApi)) {
          showVarience('MetagrossFormz');
        }
        if (["mewtwo","150"].includes(pkmnNameApi)) {
          showVarience('MewtwoFormz');
        }
        if (["mimikyu-disguised", "778"].includes(pkmnNameApi)) {
          showVarience('MimikyuFormz');
        }
        if (["minior-red-meteor", "774"].includes(pkmnNameApi)) {
          showVarience('MiniorFormz');
        }
        if (["moltres", "146"].includes(pkmnNameApi)) {
          showVarience('MoltresFormz');
        }
        if (["morpeko-full-belly", "877"].includes(pkmnNameApi)) {
          showVarience('MorpekoFormz');
        }
        if (["mr-mime", "122"].includes(pkmnNameApi)) {
          showVarience('Mr-mimeFormz');
        }
        if (["muk", "89"].includes(pkmnNameApi)) {
          showVarience('MukFormz');
        }
        if (["necrozma", "800"].includes(pkmnNameApi)) {
          showVarience('NecrozmaFormz');
        }
        if (["ninetales", "38"].includes(pkmnNameApi)) {
          showVarience('NinetalesFormz');
        }
        if (["ogerpon", "1017"].includes(pkmnNameApi)) {
          showVarience('OgerponFormz');
        }
        if (["oinkologne-male", "916"].includes(pkmnNameApi)) {
          showVarience('OinkologneFormz');
        }
        if (["orbeetle", "826"].includes(pkmnNameApi)) {
          showVarience('OrbeetleFormz');
        }
        if (["oricorio-baile", "741"].includes(pkmnNameApi)) {
          showVarience('OricorioFormz');
        }
        if (["palafin-zero", "964"].includes(pkmnNameApi)) {
          showVarience('PalafinFormz');
        }
        if (["palkia", "484"].includes(pkmnNameApi)) {
          showVarience('PalkiaFormz');
        }
        if (["persian", "53"].includes(pkmnNameApi)) {
          showVarience('PersianFormz');
        }
        if (["pidgeot", "18"].includes(pkmnNameApi)) {
          showVarience('PidgeotFormz');
        }
        if (["pikachu", "25"].includes(pkmnNameApi)) {
          showVarience('PikachuFormz');
        }
        if (["pinsir", "127"].includes(pkmnNameApi)) {
          showVarience('PinsirFormz');
        }
        if (["ponyta", "77"].includes(pkmnNameApi)) {
          showVarience('PonytaFormz');
        }
        if (["pumpkaboo-average", "710"].includes(pkmnNameApi)) {
          showVarience('PumpkabooFormz');
        }
        if (["qwilfish", "211"].includes(pkmnNameApi)) {
          showVarience('QwilfishFormz');
        }
        if (["raichu", "26"].includes(pkmnNameApi)) {
          showVarience('RaichuFormz');
        }
        if (["rapidash", "78"].includes(pkmnNameApi)) {
          showVarience('RapidashFormz');
        }
        if (["raticate", "20"].includes(pkmnNameApi)) {
          showVarience('RaticateFormz');
        }
        if (["rattata", "19"].includes(pkmnNameApi)) {
          showVarience('RattataFormz');
        }
        if (["rayquaza", "384"].includes(pkmnNameApi)) {
          showVarience('RayquazaFormz');
        }
        if (["ribombee", "743"].includes(pkmnNameApi)) {
          showVarience('RibombeeFormz');
        }
        if (["rillaboom", "812"].includes(pkmnNameApi)) {
          showVarience('RillaboomFormz');
        }
        if (["rockruff", "744"].includes(pkmnNameApi)) {
          showVarience('RockruffFormz');
        }
        if (["rotom", "479"].includes(pkmnNameApi)) {
          showVarience('RotomFormz');
        }
        if (["sableye", "302"].includes(pkmnNameApi)) {
          showVarience('SableyeFormz');
        }
        if (["salamence", "373"].includes(pkmnNameApi)) {
          showVarience('SalamenceFormz');
        }
        if (["samurott", "503"].includes(pkmnNameApi)) {
          showVarience('SamurottFormz');
        }
        if (["sandaconda", "844"].includes(pkmnNameApi)) {
          showVarience('SandacondaFormz');
        }
        if (["sandshrew", "27"].includes(pkmnNameApi)) {
          showVarience('SandshrewFormz');
        }
        if (["sandslash", "28"].includes(pkmnNameApi)) {
          showVarience('SandslashFormz');
        }
        if (["sceptile", "254"].includes(pkmnNameApi)) {
          showVarience('SceptileFormz');
        }
        if (["scizor", "212"].includes(pkmnNameApi)) {
          showVarience('ScizorFormz');
        }
        if (["sharpedo", "319"].includes(pkmnNameApi)) {
          showVarience('SharpedoFormz');
        }
        if (["shaymin-land", "492"].includes(pkmnNameApi)) {
          showVarience('ShayminFormz');
        }
        if (["sliggoo", "705"].includes(pkmnNameApi)) {
          showVarience('SliggooFormz');
        }
        if (["slowbro", "80"].includes(pkmnNameApi)) {
          showVarience('SlowbroFormz');
        }
        if (["slowking", "199"].includes(pkmnNameApi)) {
          showVarience('SlowkingFormz');
        }
        if (["slowpoke", "79"].includes(pkmnNameApi)) {
          showVarience('SlowpokeFormz');
        }
        if (["sneasel", "215"].includes(pkmnNameApi)) {
          showVarience('SneaselFormz');
        }
        if (["snorlax", "143"].includes(pkmnNameApi)) {
          showVarience('SnorlaxFormz');
        }
        if (["squawkabilly-green-plumage", "931"].includes(pkmnNameApi)) {
          showVarience('SquawkabillyFormz');
        }
        if (["steelix", "208"].includes(pkmnNameApi)) {
          showVarience('SteelixFormz');
        }
        if (["stunfisk", "618"].includes(pkmnNameApi)) {
          showVarience('StunfiskFormz');
        }
        if (["swampert", "260"].includes(pkmnNameApi)) {
          showVarience('SwampertFormz');
        }
        if (["tatsugiri-curly", "978"].includes(pkmnNameApi)) {
          showVarience('TatsugiriFormz');
        }
        if (["tauros", "128"].includes(pkmnNameApi)) {
          showVarience('TaurosFormz');
        }
        if (["terapagos", "1024"].includes(pkmnNameApi)) {
          showVarience('TerapagosFormz');
        }
        if (["thundurus-incarnate", "642"].includes(pkmnNameApi)) {
          showVarience('ThundurusFormz');
        }
        if (["togedemaru", "777"].includes(pkmnNameApi)) {
          showVarience('TogedemaruFormz');
        }
        if (["tornadus-incarnate", "641"].includes(pkmnNameApi)) {
          showVarience('TornadusFormz');
        }
        if (["toxtricity-amped", "849"].includes(pkmnNameApi)) {
          showVarience('ToxtricityFormz');
        }
        if (["typhlosion", "157"].includes(pkmnNameApi)) {
          showVarience('TyphlosionFormz');
        }
        if (["tyranitar", "248"].includes(pkmnNameApi)) {
          showVarience('TyranitarFormz');
        }
        if (["ursaluna", "901"].includes(pkmnNameApi)) {
          showVarience('UrsalunaFormz');
        }
        if (["urshifu-single-strike", "892"].includes(pkmnNameApi)) {
          showVarience('UrshifuFormz');
        }
        if (["venusaur", "3"].includes(pkmnNameApi)) {
          showVarience('VenusaurFormz');
        }
        if (["vikavolt", "738"].includes(pkmnNameApi)) {
          showVarience('VikavoltFormz');
        }
        if (["voltorb", "100"].includes(pkmnNameApi)) {
          showVarience('VoltorbFormz');
        }
        if (["vulpix", "37"].includes(pkmnNameApi)) {
          showVarience('VulpixFormz');
        }
        if (["weezing", "110"].includes(pkmnNameApi)) {
          showVarience('WeezingFormz');
        }
        if (["wishiwashi-solo","746"].includes(pkmnNameApi)) {
          showVarience('WishiwashiFormz');
        }
        if (["wooper", "194"].includes(pkmnNameApi)) {
          showVarience('WooperFormz');
        }
        if (["wormadam-plant", "413"].includes(pkmnNameApi)) {
          showVarience('WormadamFormz');
        }
        if (["yamask", "562"].includes(pkmnNameApi)) {
          showVarience('YamaskFormz');
        }
        if (["zacian", "888"].includes(pkmnNameApi)) {
          showVarience('ZacianFormz');
        }
        if (["zamazenta", "889"].includes(pkmnNameApi)) {
          showVarience('ZamazentaFormz');
        }
        if (["zapdos", "145"].includes(pkmnNameApi)) {
          showVarience('ZapdosFormz');
        }
        if (["zarude", "893"].includes(pkmnNameApi)) {
          showVarience('ZarudeFormz');
        }
        if (["zigzagoon", "263"].includes(pkmnNameApi)) {
          showVarience('ZigzagoonFormz');
        }
        if (["zoroark", "571"].includes(pkmnNameApi)) {
          showVarience('ZoroarkFormz');
        }
        if (["zorua", "570"].includes(pkmnNameApi)) {
          showVarience('ZoruaFormz');
        }
        if (["zygarde-50", "718"].includes(pkmnNameApi)) {
          showVarience('ZygardeFormz');
        }
      }

    } else {
      // sboost.style.display = "none"
      topare.style.backgroundImage = 'url("Assets/pokeball.png")';
      let allForms = document.querySelectorAll('.pkmnFormz');
      allForms.forEach((element) => {
        element.style.display = "none";
      });
    }
    stacfh.style.display = "block";
    credih.style.display = "none";
  } catch (error) {
    if (["MissingNo.", "Missingno.", "missingNo.", "missingno.", "MissingNo", "Missingno", "missingNo", "missingno", "Missing No.", "Missing no.", "missing No.", "missing no.", "Missing No", "Missing no", "missing No", "missing no", "Missing_No.", "Missing_no.", "missing_No.", "missing_no.", "Missing_No", "Missing_no", "missing_No", "missing_no", "Missing-No.", "Missing-no.", "missing-No.", "missing-no.", "Missing-No", "Missing-no", "missing-No", "missing-no", "0"].includes(search.value )) {

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

      const audio = new Audio('Assets/cries_pokemon_legacy_32.ogg');
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
        newMoveClass.src = "Assets/" + toTitleCase(movData.damage_class.name) + ".png";
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
      alert("That Pokemon Does not Exist, or has not been implemented correctly, Try Again.")
    }
  }
}); // calls "search" then adds the function "On change, run an event, the folowing event being alerting the user to the change sending it as the target value."
pkform.forEach(form => {
  form.addEventListener('click', async (event) => {
  try {
    const pkmnData = await fetchAPI(event.target.innerHTML);

    // const mainColor = typeColors[pkmnData.types[0].type.name];
    if (pkmnTypes.includes(search.value)) {
      if (["vivillon","Vivillon", "666"].includes(search.value)) {
      // For debuging
      console.log(pkmnData);
      const vivVar = getRandomInt(21);
      console.log(vivVar);
      const vivVarToType = vivillonTypes[vivVar];
      update(pkmnData);
        const vivData = await vivAPI(vivVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
        search.value = vivVarToType;
      console.log(vivData);
      // const vivData = await vivAPI('vivillon-poke-ball');
      //sets pokemon number
      number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

      //Sets Pokemon Image
      // pimage.src = pkmnData.sprites.other.home.front_shiny;
    updateImage(vivData);
    setTypeTo(vivData);
    setNameTo(vivData);
    // sboost.style.display = "none";
  }
      if (["Unown","unown", "201"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const unoVar = getRandomInt(54);
        console.log(unoVar);
        const unoVarToType = unownTypes[unoVar];
        update(pkmnData);
          const unoData = await vivAPI(unoVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = unoVarToType;
          // search.value = unoData;
        console.log(unoData);
        console.log(unoVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
      updateImage(unoData);
      setTypeTo(unoData);
      setNameTo(unoData);
      // sboost.style.display = "none";
    }
      if (["Arceus","arceus", "493"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const arcVar = getRandomInt(18);
        console.log(arcVar);
        const arcVarToType = arceusTypes[arcVar];
        update(pkmnData);
          const arcData = await vivAPI(arcVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = arcVarToType;
          // search.value = arcData;
        console.log(arcData);
        console.log(arcVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
      updateImage(arcData);
      setTypeTo(arcData);
      setNameTo(arcData);
      // sboost.style.display = "none";
}
      if (["Pichu","pichu", "172"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const picVar = getRandomInt(10);
        console.log(picVar);
        const picVarToType = pichuTypes[picVar];
        update(pkmnData);
          const picData = await vivAPI(picVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = picVarToType;
          // search.value = arcData;
        console.log(picData);
        console.log(picVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
        if (picVarToType == pichuTypes[2]) {

            pimgsh.src = 'Assets/172-shiny.png';
            pimage.src = 'Assets/172.png';
          } else {
          updateImage(picData);
        }

      setTypeTo(picData);
      setNameTo(picData);
      // sboost.style.display = "none";


      }
      if (["Burmy","burmy", "412"].includes(search.value)) {
      // For debuging
      console.log(pkmnData);
      const burVar = getRandomInt(3);
      console.log(burVar);
      const burVarToType = burmyTypes[burVar];
      update(pkmnData);
        const burData = await vivAPI(burVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
        search.value = burVarToType;
        // search.value = arcData;
      console.log(burData);
      console.log(burVarToType);
      // const vivData = await vivAPI('vivillon-poke-ball');
      //sets pokemon number
      number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

      //Sets Pokemon Image
      // pimage.src = pkmnData.sprites.other.home.front_shiny;
    updateImage(burData);
    setTypeTo(burData);
    setNameTo(burData);
    // sboost.style.display = "none";
}
      if (["Silvally","silvally", "773"].includes(search.value)) {
        // For debuging
        console.log(pkmnData);
        const silVar = getRandomInt(18);
        console.log(silVar);
        const silVarToType = silvallyTypes[silVar];
        update(pkmnData);
          const silData = await vivAPI(silVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
          search.value = silVarToType;
          // search.value = arcData;
        console.log(silData);
        console.log(silVarToType);
        // const vivData = await vivAPI('vivillon-poke-ball');
        //sets pokemon number
        number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

        //Sets Pokemon Image
        // pimage.src = pkmnData.sprites.other.home.front_shiny;
      updateImage(silData);
      setTypeTo(silData);
      setNameTo(silData);
      // sboost.style.display = "none";
}
      if (["Flabebe","flabebe", "669","Flabébé","flabébé"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const flaVar = getRandomInt(5);
          console.log (flaVar);
          const flaVarToType = flabebeTypes[flaVar];
          update(pkmnData);
            const flaData = await vivAPI(flaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = flaVarToType;
            // search.value = arcData;
          console.log (flaData);
          console.log (flaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage (flaData);
        setTypeTo (flaData);
        setNameTo (flaData);
        // sboost.style.display = "none";
        search.value = flaVarToType.replace("labebe", "labébé").replace("(", "").replace(")", "");}
      if (["Florges","florges", "671"].includes(search.value)) {
            // For debuging
            console.log(pkmnData);
            const florVar = getRandomInt(5);
            console.log(florVar);
            const florVarToType = florgesTypes[florVar];
            update(pkmnData);
              const florData = await vivAPI(florVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
              search.value = florVarToType;
              // search.value = arcData;
            console.log(florData);
            console.log(florVarToType);
            // const vivData = await vivAPI('vivillon-poke-ball');
            //sets pokemon number
            number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

            //Sets Pokemon Image
            // pimage.src = pkmnData.sprites.other.home.front_shiny;
          updateImage(florData);
          setTypeTo(florData);
          setNameTo(florData);
          // sboost.style.display = "none";
}
      if (["Genesect","genesect", "649"].includes(search.value)) {
              // For debuging
              console.log(pkmnData);
              const genVar = getRandomInt(8);
              console.log(genVar);
              const genVarToType = genesectTypes[genVar];
              update(pkmnData);
                const genData = await vivAPI(genVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                search.value = genVarToType;
                // search.value = arcData;
              console.log(genData);
              console.log(genVarToType);
              // const vivData = await vivAPI('vivillon-poke-ball');
              //sets pokemon number
              number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

              //Sets Pokemon Image
              // pimage.src = pkmnData.sprites.other.home.front_shiny;
            updateImage(genData);
            setTypeTo(genData);
            setNameTo(genData);
            // sboost.style.display = "none";
}
      if (["Cherrim","cherrim", "421"].includes(search.value)) {
                // For debuging
                console.log(pkmnData);
                const cheVar = getRandomInt(2);
                console.log(cheVar);
                const cheVarToType = cherrimTypes[cheVar];
                update(pkmnData);
                  const cheData = await vivAPI(cheVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                  search.value = cheVarToType;
                  // search.value = arcData;
                console.log(cheData);
                console.log(cheVarToType);
                // const vivData = await vivAPI('vivillon-poke-ball');
                //sets pokemon number
                number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                //Sets Pokemon Image
                // pimage.src = pkmnData.sprites.other.home.front_shiny;
              updateImage(cheData);
              setTypeTo(cheData);
              setNameTo(cheData);
              // sboost.style.display = "none";
}
      if (["Shellos", "shellos", "422"].includes(search.value)) {
                          // For debuging
                          console.log(pkmnData);
                          const shelVar = getRandomInt(2);
                          console.log(shelVar);
                          const shelVarToType = shellosTypes[shelVar];
                          update(pkmnData);
                            const shelData = await vivAPI(shelVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                            search.value = shelVarToType;
                            // search.value = arcData;
                          console.log(shelData);
                          console.log(shelVarToType);
                          // const vivData = await vivAPI('vivillon-poke-ball');
                          //sets pokemon number
                          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                          //Sets Pokemon Image
                          // pimage.src = pkmnData.sprites.other.home.front_shiny;
                        updateImage(shelData);
                        setTypeTo(shelData);
                        setNameTo(shelData);
                        // sboost.style.display = "none";
                      }
      if (["Gastrodon", "gastrodon", "423"].includes(search.value)) {
                            // For debuging
                            console.log(pkmnData);
                            const gastVar = getRandomInt(2);
                            console.log(gastVar);
                            const gastVarToType = gastrodonTypes[gastVar];
                            update(pkmnData);
                              const gastData = await vivAPI(gastVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                              search.value = gastVarToType;
                              // search.value = arcData;
                            console.log(gastData);
                            console.log(gastVarToType);
                            // const vivData = await vivAPI('vivillon-poke-ball');
                            //sets pokemon number
                            number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                            //Sets Pokemon Image
                            // pimage.src = pkmnData.sprites.other.home.front_shiny;
                          updateImage(gastData);
                          setTypeTo(gastData);
                          setNameTo(gastData);
                          // sboost.style.display = "none";
}
      if (["Alcremie","alcremie", "869"].includes(search.value)) {
                              // For debuging
                              console.log(pkmnData);
                              const alcrVar = getRandomInt(63);
                              console.log(alcrVar);
                              const alcrVarToType = alcremieTypes[alcrVar];
                              update(pkmnData);
                                const alcrData = await vivAPI(alcrVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                                search.value = alcrVarToType;
                                // search.value = arcData;
                              console.log(alcrData);
                              console.log(alcrVarToType);
                              // const vivData = await vivAPI('vivillon-poke-ball');
                              //sets pokemon number
                              number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                              //Sets Pokemon Image
                              // pimage.src = pkmnData.sprites.other.home.front_shiny;
                            updateImage(alcrData);
                            setTypeTo(alcrData);
                            setNameTo(alcrData);
                            // sboost.style.display = "none";
                          }
      if (["Furfrou","furfrou", "676"].includes(search.value)) {
                                // For debuging
                                console.log(pkmnData);
                                const furVar = getRandomInt(10);
                                console.log(furVar);
                                const furVarToType = furfrouTypes[furVar];
                                update(pkmnData);
                                  const furData = await vivAPI(furVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                                  search.value = furVarToType;
                                  // search.value = arcData;
                                console.log(furData);
                                console.log(furVarToType);
                                // const vivData = await vivAPI('vivillon-poke-ball');
                                //sets pokemon number
                                number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                                //Sets Pokemon Image
                                // pimage.src = pkmnData.sprites.other.home.front_shiny;
                              updateImage(furData);
                              setTypeTo(furData);
                              setNameTo(furData);
                              // sboost.style.display = "none";
}
      if (["Sinistea","sinistea", "854"].includes(search.value)) {
                                  // For debuging
                                  console.log(pkmnData);
                                  const sinteaVar = getRandomInt(2);
                                  console.log(sinteaVar);
                                  const sinteaVarToType = sinisteaTypes[sinteaVar];
                                  update(pkmnData);
                                    const sinteaData = await vivAPI(sinteaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
                                    search.value = sinteaVarToType;
                                    // search.value = arcData;
                                  console.log(sinteaData);
                                  console.log(sinteaVarToType);
                                  // const vivData = await vivAPI('vivillon-poke-ball');
                                  //sets pokemon number
                                  number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

                                  //Sets Pokemon Image
                                  // pimage.src = pkmnData.sprites.other.home.front_shiny;
                                updateImage(pkmnData);
                                setTypeTo(sinteaData);
                                setNameTo(sinteaData);
                                // sboost.style.display = "none";

      }
      if (["Polteageist", "polteageist", "855"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const polteaVar = getRandomInt(2);
          console.log(polteaVar);
          const polteaVarToType = polteageistTypes[polteaVar];
          update(pkmnData);
            const polteaData = await vivAPI(polteaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = polteaVarToType;
            // search.value = arcData;
          console.log(polteaData);
          console.log(polteaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(pkmnData);
        setTypeTo(polteaData);
        setNameTo(polteaData);
        // sboost.style.display = "none";

      }
      if (["Sinistcha","sinistcha", "1013"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const sinchaVar = getRandomInt(2);
          console.log(sinchaVar);
          const sinchaVarToType = sinistchaTypes[sinchaVar];
          update(pkmnData);
            const sinchaData = await vivAPI(sinchaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = sinchaVarToType;
            // search.value = arcData;
          console.log(sinchaData);
          console.log(sinchaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(pkmnData);
        setTypeTo(sinchaData);
        setNameTo(sinchaData);
        // sboost.style.display = "none";

      }
      if (["Poltchageist", "poltchageist", "1012"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const polchaVar = getRandomInt(2);
          console.log(polchaVar);
          const polchaVarToType = poltchageistTypes[polchaVar];
          update(pkmnData);
            const polchaData = await vivAPI(polchaVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = polchaVarToType;
            // search.value = arcData;
          console.log(polchaData);
          console.log(polchaVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(pkmnData);
        setTypeTo(polchaData);
        setNameTo(polchaData);
        // sboost.style.display = "none";

      }
      if (["Floette", "floette", "670"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const floetVar = getRandomInt(5);
          console.log(floetVar);
          const floetVarToType = floetteTypes[floetVar];
          update(pkmnData);
            const floetData = await vivAPI(floetVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = floetVarToType;
            // search.value = arcData;
          console.log(floetData);
          console.log(floetVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(floetData);
        setTypeTo(floetData);
        setNameTo(floetData);

        showVarience('FloetteFormz');
      }
      if (["Deerling","deerling", "585"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const deerVar = getRandomInt(4);
          console.log(deerVar);
          const deerVarToType = deerlingTypes[deerVar];
          update(pkmnData);
            const deerData = await vivAPI(deerVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = deerVarToType;
            // search.value = arcData;
          console.log(deerData);
          console.log(deerVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(deerData);
        setTypeTo(deerData);
        setNameTo(deerData);
        // sboost.style.display = "none";
      }
      if (["Sawsbuck","sawsbuck", "586"].includes(search.value)) {
          // For debuging
          console.log(pkmnData);
          const sawsVar = getRandomInt(4);
          console.log(sawsVar);
          const sawsVarToType = sawsbuckTypes[sawsVar];
          update(pkmnData);
            const sawsData = await vivAPI(sawsVarToType.toLowerCase().replaceAll(' ', '-').replace('(',"").replace(")", ""));
            search.value = sawsVarToType;
            // search.value = arcData;
          console.log(sawsData);
          console.log(sawsVarToType);
          // const vivData = await vivAPI('vivillon-poke-ball');
          //sets pokemon number
          number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');

          //Sets Pokemon Image
          // pimage.src = pkmnData.sprites.other.home.front_shiny;
        updateImage(sawsData);
        setTypeTo(sawsData);
        setNameTo(sawsData);
        // sboost.style.display = "none";
      }
    } else {
      update(pkmnData);
      updateImage(pkmnData);
      setTypeTo(pkmnData);
      if (["nidoran-m","32","nidoran-f","29","farfetchd","83","mr-mime", "mr-mime-galar","122","mime-jr","439","type-null","772","sirfetchd","865","mr-rime","866"].includes(pkmnNameApi)) {
        if (["nidoran-m", "32"].includes(pkmnNameApi)) {
          search.value = "Nidoran♂";
        }
        if (["nidoran-f", "29"].includes(pkmnNameApi)) {
          search.value = "Nidoran♀";
        }
        if (["farfetchd", "83"].includes(pkmnNameApi)) {
          search.value = "Farfetch'd";
        }
        if (["mr-mime", "122"].includes(pkmnNameApi)) {
          search.value = "Mr. Mime";
        }
        if (["mime-jr", "439"].includes(pkmnNameApi)) {
          search.value = "Mime Jr.";
        }
        if (["type-null", "772"].includes(pkmnNameApi)) {
          search.value = "Type: Null";
        }
        if (["sirfetchd","865"].includes(pkmnNameApi)) {
          search.value = "Sirfetch'd";
        }
        if (["mr-rime", "866"].includes(pkmnNameApi)) {
          search.value = "Mr. Rime";
        }
        if (["mr-mime-galar"].includes(pkmnNameApi)) {
          search.value = "Mr. Mime Galar";
        }
      } else {
        setNameTo(pkmnData);
      };
    }

    if (pkmnFrmz.includes(pkmnNameApi)) {
      // sboost.style.display = "block"
      topare.style.backgroundImage = 'url("Assets/pokeball.png")';
      if (gmaxFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/GMax.png")';
        if (pkmnNameApi == "alcremie-gmax") {
          number.innerHTML = "#0869".toString();
          showVarience('AlcremieFormz');
        }
        if (pkmnNameApi == "appletun-gmax") {
          number.innerHTML = "#0842".toString();
          showVarience('AppletunFormz');
        }
        if (pkmnNameApi == "butterfree-gmax") {
          number.innerHTML = "#0012".toString();
          showVarience('ButterfreeFormz');
        }
        if (pkmnNameApi == "blastoise-gmax") {
          number.innerHTML = "#0009".toString();
          showVarience('BlastoiseFormz');
        }
        if (pkmnNameApi == "centiskorch-gmax") {
          number.innerHTML = "#0869".toString();
          showVarience('CentiskorchFormz');
        }
        if (pkmnNameApi == "charizard-gmax") {
          number.innerHTML = "#0006".toString();
          showVarience('CharizardFormz');
        }
        if (pkmnNameApi == "cinderace-gmax") {
          number.innerHTML = "#0815".toString();
          showVarience('CinderaceFormz');
        }
        if (pkmnNameApi == "coalossal-gmax") {
          number.innerHTML = "#0839".toString();
          showVarience('CoalossalFormz');
        }
        if (pkmnNameApi == "copperajah-gmax") {
          number.innerHTML = "#0879".toString();
          showVarience('CopperajahFormz');
        }
        if (pkmnNameApi == "corviknight-gmax") {
          number.innerHTML = "#0823".toString();
          showVarience('CorviknightFormz');
        }
        if (pkmnNameApi == "drednaw-gmax") {
          number.innerHTML = "#0834".toString();
          showVarience('DrednawFormz');
        }
        if (pkmnNameApi == "eevee-gmax") {
          number.innerHTML = "#0133".toString();
          showVarience('EeveeFormz');
        }
        if (pkmnNameApi == "gengar-gmax") {
          number.innerHTML = "#0094".toString();
          showVarience('GengarFormz');
        }
        if (pkmnNameApi == "grimmsnarl-gmax") {
          number.innerHTML = "#0861".toString();
          showVarience('GrimmsnarlFormz');
        }
        if (pkmnNameApi == "hatterene-gmax") {
          number.innerHTML = "#0858".toString();
          showVarience('HattereneFormz');
        }
        if (pkmnNameApi == "inteleon-gmax") {
          number.innerHTML = "#0818".toString();
          showVarience('InteleonFormz');
        }
        if (pkmnNameApi == "lapras-gmax") {
          number.innerHTML = "#0131".toString();
          showVarience('LaprasFormz');
        }
        if (pkmnNameApi == "kingler-gmax") {
          number.innerHTML = "#0099".toString();
          showVarience('KinglerFormz');
        }
        if (pkmnNameApi == "machamp-gmax") {
          number.innerHTML = "#0068".toString();
          showVarience('MachampFormz');
        }
        if (pkmnNameApi == "melmetal-gmax") {
          number.innerHTML = "#0809".toString();
          showVarience('MelmetalFormz');
        }
        if (pkmnNameApi == "meowth-gmax") {
          number.innerHTML = "#0052".toString();
          showVarience('MeowthFormz');
        }
        if (pkmnNameApi == "orbeetle-gmax") {
          number.innerHTML = "#0829".toString();
          showVarience('OrbeetleFormz');
        }
        if (pkmnNameApi == "pikachu-gmax") {
          number.innerHTML = "#0025".toString();
          showVarience('PikachuFormz');
        }
        if (pkmnNameApi == "rillaboom-gmax") {
          number.innerHTML = "#0812".toString();
          showVarience('RillaboomFormz');
        }
        if (pkmnNameApi == "sandaconda-gmax") {
          number.innerHTML = "#0844".toString();
          showVarience('SandacondaFormz');
        }
        if (pkmnNameApi == "snorlax-gmax") {
          number.innerHTML = "#0143".toString();
          showVarience('SnlorlaxFormz');
        }
        if (pkmnNameApi == "toxtricity-amped-gmax") {
          number.innerHTML = "#0849".toString();
          showVarience('ToxtricityFormz');
        }
        if (pkmnNameApi == "toxtricity-low-key-gmax") {
          number.innerHTML = "#0849".toString();
          showVarience('ToxtricityFormz');
        }
        if (pkmnNameApi == "urshifu-rapid-strike-gmax") {
          number.innerHTML = "#0892".toString();
          showVarience('UrshifuFormz');
        }
        if (pkmnNameApi == "urshifu-single-strike-gmax") {
          number.innerHTML = "#0892".toString();
          showVarience('UrshifuFormz');
        }
        if (pkmnNameApi == "venusaur-gmax") {
          number.innerHTML = "#0003".toString();
          showVarience('VenusaurFormz');
        }
        if (pkmnNameApi == "flapple-gmax") {
          number.innerHTML = "#0841".toString();
          showVarience('FlappleFormz');
        }
        if (pkmnNameApi == "garbodor-gmax") {
          number.innerHTML = "#0841".toString();
          showVarience('GarbodorFormz');
        }
        if (pkmnNameApi == "duraludon-gmax") {
          number.innerHTML = "#0884".toString();
          showVarience('DuraludonFormz');
        }
        if (pkmnNameApi == "eternatus-eternamax") {
          number.innerHTML = "#0890".toString();
          showVarience('EternatusFormz');
        }
        }
      if (megaFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Mega.png")';
        if (pkmnNameApi == "abomasnow-mega") {
          number.innerHTML = "#0460".toString();
          showVarience('AbomasnowFormz');
        }
        if (pkmnNameApi == "venusaur-mega") {
          number.innerHTML = "#0003".toString();
          showVarience('VenusaurFormz');
        }
        if (pkmnNameApi == "tyranitar-mega") {
          number.innerHTML = "#0248".toString();
          showVarience('TyranitarFormz');
        }
        if (pkmnNameApi == "swampert-mega") {
          number.innerHTML = "#0260".toString();
          showVarience('SwampertFormz');
        }
        if (pkmnNameApi == "steelix-mega") {
          number.innerHTML = "#0208".toString();
          showVarience('SteelixFormz');
        }
        if (pkmnNameApi == "slowbro-mega") {
          number.innerHTML = "#0080".toString();
          showVarience('SlowbroFormz');
        }
        if (pkmnNameApi == "sharpedo-mega") {
          number.innerHTML = "#0319".toString();
          showVarience('SharpedoFormz');
        }
        if (pkmnNameApi == "scizor-mega") {
          number.innerHTML = "#0212".toString();
          showVarience('ScizorFormz');
        }
        if (pkmnNameApi == "sceptile-mega") {
          number.innerHTML = "#0254".toString();
          showVarience('SceptileFormz');
        }
        if (pkmnNameApi == "mewtwo-mega-y" || pkmnNameApi == "mewtwo-mega-x") {
          number.innerHTML = "#0150".toString();
          showVarience('MewtwoFormz');
        }
        if (pkmnNameApi == "charizard-mega-x" || pkmnNameApi == "charizard-mega-y") {
          number.innerHTML = "#0006".toString();
          showVarience('CharizardFormz');
        }
        if (pkmnNameApi == "salamence-mega") {
          number.innerHTML = "#0373".toString();
          showVarience('SalamenceFormz');
        }
        if (pkmnNameApi == "sableye-mega") {
          number.innerHTML = "#0302".toString();
          showVarience('SableyeFormz');
        }
        if (pkmnNameApi == "rayquaza-mega") {
          number.innerHTML = "#0384".toString();
          showVarience('RayquazaFormz');
        }
        if (pkmnNameApi == "pinsir-mega") {
          number.innerHTML = "#0127".toString();
          showVarience('PinsirFormz');
        }
        if (pkmnNameApi == "pidgeot-mega") {
          number.innerHTML = "#0018".toString();
          showVarience('PidgeotFormz');
        }
        if (pkmnNameApi == "metagross-mega") {
          number.innerHTML = "#0376".toString();
          showVarience('MetagrossFormz');
        }
        if (pkmnNameApi == "medicham-mega") {
          number.innerHTML = "#0308".toString();
          showVarience('MedichamFormz');
        }
        if (pkmnNameApi == "mawile-mega") {
          number.innerHTML = "#0303".toString();
          showVarience('MawileFormz');
        }
        if (pkmnNameApi == "manectric-mega") {
          number.innerHTML = "#0310".toString();
          showVarience('ManectricFormz');
        }
        if (pkmnNameApi == "lucario-mega") {
          number.innerHTML = "#0448".toString();
          showVarience('LucarioFormz');
        }
        if (pkmnNameApi == "lopunny-mega") {
          number.innerHTML = "#0428".toString();
          showVarience('LopunnyFormz');
        }
        if (pkmnNameApi == "latios-mega") {
          number.innerHTML = "#0381".toString();
          showVarience('LatiosFormz');
        }
        if (pkmnNameApi == "latias-mega") {
          number.innerHTML = "#0380".toString();
          showVarience('LatiasFormz');
        }
        if (pkmnNameApi == "kangaskhan-mega") {
          number.innerHTML = "#0115".toString();
          showVarience('KangaskhanFormz');
        }
        if (pkmnNameApi == "houndoom-mega") {
          number.innerHTML = "#0229".toString();
          showVarience('HoundoomFormz');
        }
        if (pkmnNameApi == "heracross-mega") {
          number.innerHTML = "#0214".toString();
          showVarience('HeracrossFormz');
        }
        if (pkmnNameApi == "gyarados-mega") {
          number.innerHTML = "#0130".toString();
          showVarience('GyaradosFormz');
        }
        if (pkmnNameApi == "gengar-mega") {
          number.innerHTML = "#0094".toString();
          showVarience('GengarFormz');
        }
        if (pkmnNameApi == "absol-mega") {
          number.innerHTML = "#0359".toString();
          showVarience('AbsolFormz');
        }
        if (pkmnNameApi == "aerodactyl-mega") {
          number.innerHTML = "#0142".toString();
          showVarience('AerodactylFormz');
        }
        if (pkmnNameApi == "aggron-mega") {
          number.innerHTML = "#0306".toString();
          showVarience('AggronFormz');
        }
        if (pkmnNameApi == "alakazam-mega") {
          number.innerHTML = "#0065".toString();
          showVarience('AlakazamFormz');
        }
        if (pkmnNameApi == "altaria-mega") {
          number.innerHTML = "#0334".toString();
          showVarience('AltariaFormz');
        }
        if (pkmnNameApi == "ampharos-mega") {
          number.innerHTML = "#0181".toString();
          showVarience('AmpharosFormz');
        }
        if (pkmnNameApi == "audino-mega") {
          number.innerHTML = "#0531".toString();
          showVarience('AudinoFormz');
        }
        if (pkmnNameApi == "banette-mega") {
          number.innerHTML = "#0354".toString();
          showVarience('BanetteFormz');
        }
        if (pkmnNameApi == "beedrill-mega") {
          number.innerHTML = "#0015".toString();
          showVarience('BeedrillFormz');
        }
        if (pkmnNameApi == "blastoise-mega") {
          number.innerHTML = "#0009".toString();
          showVarience('BlastoiseFormz');
        }
        if (pkmnNameApi == "blaziken-mega") {
          number.innerHTML = "#0257".toString();
          showVarience('BlazikenFormz');
        }
        if (pkmnNameApi == "camerupt-mega") {
          number.innerHTML = "#0323".toString();
          showVarience('CameruptFormz');
        }
        if (pkmnNameApi == "diancie-mega") {
          number.innerHTML = "#0719".toString();
          showVarience('DiancieFormz');
        }
        if (pkmnNameApi == "glalie-mega") {
          number.innerHTML = "#0362".toString();
          showVarience('GlalieFormz');
        }
        if (pkmnNameApi == "gallade-mega") {
          number.innerHTML = "#0475".toString();
          showVarience('GalladeFormz');
        }
        if (pkmnNameApi == "garchomp-mega") {
          number.innerHTML = "#0445".toString();
          showVarience('GarchompFormz');
        }
        if (pkmnNameApi == "gardevoir-mega") {
          number.innerHTML = "#0282".toString();
          showVarience('GardevoirFormz');
        }
      }
      if (toteFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Totem.png")';
        if (pkmnNameApi == "araquanid-totem") {
          number.innerHTML = "#0752".toString();
          showVarience('AraquanidFormz');
        }
        if (pkmnNameApi == "kommo-o-totem") {
          number.innerHTML = "#0784".toString();
          showVarience('KommooFormz');
        }
        if (pkmnNameApi == "marowak-totem") {
          number.innerHTML = "#0105".toString();
          showVarience('MarowakFormz');
        }
        if (pkmnNameApi == "mimikyu-totem-busted" || pkmnNameApi == "mimikyu-totem-disguised") {
          number.innerHTML = "#0778".toString();
          showVarience('MimikyuFormz');
        }
        if (pkmnNameApi == "raticate-totem-alola") {
          number.innerHTML = "#0020".toString();
          showVarience('RaticateFormz');
        }
        if (pkmnNameApi == "ribombee-totem") {
          number.innerHTML = "#0743".toString();
          showVarience('RibombeeFormz');
        }
        if (pkmnNameApi == "vikavolt-totem") {
          number.innerHTML = "#0738".toString();
          showVarience('VikavoltFormz');
        }
        if (pkmnNameApi == "togedemaru-totem") {
          number.innerHTML = "#0777".toString();
          showVarience('TogedemaruFormz');
        }
        if (pkmnNameApi == "gumshoos-totem") {
          number.innerHTML = "#0735".toString();
          showVarience('GumshoosFormz');
        }
      }
      if (alolFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Alola.png")';
        if (pkmnNameApi == "diglett-alola") {
          number.innerHTML = "#0050".toString();
          showVarience('DiglettFormz');
        }
        if (pkmnNameApi == "dugtrio-alola") {
          number.innerHTML = "#0051".toString();
          showVarience('DugtrioFormz');
        }
        if (pkmnNameApi == "exeggutor-alola") {
          number.innerHTML = "#0103".toString();
          showVarience('ExeggutorFormz');
        }
        if (pkmnNameApi == "geodude-alola") {
          number.innerHTML = "#0074".toString();
          showVarience('GeodudeFormz');
        }
        if (pkmnNameApi == "golem-alola") {
          number.innerHTML = "#0076".toString();
          showVarience('GolemFormz');
        }
        if (pkmnNameApi == "graveler-alola") {
          number.innerHTML = "#0075".toString();
          showVarience('GravelerFormz');
        }
        if (pkmnNameApi == "grimer-alola") {
          number.innerHTML = "#0088".toString();
          showVarience('GrimerFormz');
        }
        if (pkmnNameApi == "marowak-alola") {
          number.innerHTML = "#0105".toString();
          showVarience('MarowakFormz');
        }
        if (pkmnNameApi == "meowth-alola") {
          number.innerHTML = "#0052".toString();
          showVarience('MeowthFormz');
        }
        if (pkmnNameApi == "muk-alola") {
          number.innerHTML = "#0089".toString();
          showVarience('MukFormz');
        }
        if (pkmnNameApi == "ninetales-alola") {
          number.innerHTML = "#0038".toString();
          showVarience('NinetalesFormz');
        }
        if (pkmnNameApi == "persian-alola") {
          number.innerHTML = "#0053".toString();
          showVarience('PersianFormz');
        }
        if (pkmnNameApi == "raichu-alola") {
          number.innerHTML = "#0026".toString();
          showVarience('RaichuFormz');
        }
        if (pkmnNameApi == "raticate-alola") {
          number.innerHTML = "#0020".toString();
          showVarience('RaticateFormz');
        }
        if (pkmnNameApi == "rattata-alola") {
          number.innerHTML = "#0019".toString();
          showVarience('RattataFormz');
        }
        if (pkmnNameApi == "sandshrew-alola") {
          number.innerHTML = "#0027".toString();
          showVarience('SandshrewFormz');
        }
        if (pkmnNameApi == "sandslash-alola") {
          number.innerHTML = "#0028".toString();
          showVarience('SandslashFormz');
        }
        if (pkmnNameApi == "vulpix-alola") {
          number.innerHTML = "#0037".toString();
          showVarience('VulpixFormz');
        }
      }
      if (origFrmz.includes(pkmnNameApi)) {
      topare.style.backgroundImage = 'url("Assets/Arceus.png")';
        if (pkmnNameApi == "dialga-origin") {
          number.innerHTML = "#0483".toString();
          showVarience('DialgaFormz');
        }
        if (pkmnNameApi == "giratina-origin") {
          number.innerHTML = "#0487".toString();
          showVarience('GiratinaFormz');
        }
        if (pkmnNameApi == "magearna-original") {
          number.innerHTML = "#0801".toString();
          showVarience('MagearnaFormz');
        }
        if (pkmnNameApi == "palkia-origin") {
          number.innerHTML = "#0484".toString();
          showVarience('PalkiaFormz');
        }
      }
      if (hisuFrmz.includes(pkmnNameApi)) {
      topare.style.backgroundImage = 'url("Assets/Hisui.png")';
      if (pkmnNameApi == "arcanine-hisui") {
        number.innerHTML = "#0059".toString();
        showVarience('ArcanineFormz');
      }
      if (pkmnNameApi == "avalugg-hisui") {
        number.innerHTML = "#0713".toString();
        showVarience('AvaluggFormz');
      }
      if (pkmnNameApi == "braviary-hisui") {
        number.innerHTML = "#0628".toString();
        showVarience('BraviaryFormz');
      }
      if (pkmnNameApi == "decidueye-hisui") {
        number.innerHTML = "#0724".toString();
        showVarience('DecidueyeFormz');
      }
      if (pkmnNameApi == "enamorus-therian") {
        number.innerHTML = "#0905".toString();
        showVarience('EnamorusFormz');
      }
      if (pkmnNameApi == "landorus-therian") {
        number.innerHTML = "#0645".toString();
        showVarience('LandorusFormz');
      }
      if (pkmnNameApi == "thundurus-therian") {
        number.innerHTML = "#0642".toString();
        showVarience('ThundurusFormz');
      }
      if (pkmnNameApi == "tornadus-therian") {
        number.innerHTML = "#0641".toString();
        showVarience('TornadusFormz');
      }
      if (pkmnNameApi == "electrode-hisui") {
        number.innerHTML = "#0101".toString();
        showVarience('ElectrodeFormz');
      }
      if (pkmnNameApi == "goodra-hisui") {
        number.innerHTML = "#0706".toString();
        showVarience('GoodraFormz');
      }
      if (pkmnNameApi == "growlithe-hisui") {
        number.innerHTML = "#0058".toString();
        showVarience('GrowlitheFormz');
      }
      if (pkmnNameApi == "lilligant-hisui") {
        number.innerHTML = "#0549".toString();
        showVarience('LilligantFormz');
      }
      if (pkmnNameApi == "qwilfish-hisui") {
        number.innerHTML = "#0211".toString();
        showVarience('QwilfishFormz');
      }
      if (pkmnNameApi == "samurott-hisui") {
        number.innerHTML = "#0503".toString();
        showVarience('SamurottFormz');
      }
      if (pkmnNameApi == "sliggoo-hisui") {
        number.innerHTML = "#0705".toString();
        showVarience('SliggooFormz');
      }
      if (pkmnNameApi == "sneasel-hisui") {
        number.innerHTML = "#0215".toString();
        showVarience('SneaselFormz');
      }
      if (pkmnNameApi == "zorua-hisui") {
        number.innerHTML = "#0570".toString();
        showVarience('ZoruaFormz');
      }
      if (pkmnNameApi == "typhlosion-hisui") {
        number.innerHTML = "#0157".toString();
        showVarience('TyphlosionFormz');
      }
      if (pkmnNameApi == "voltorb-hisui") {
        number.innerHTML = "#0100".toString();
        showVarience('VoltorbFormz');
      }
      if (pkmnNameApi == "zoroark-hisui") {
        number.innerHTML = "#0571".toString();
        showVarience('ZoroarkFormz');
      }
      }
      if (galaFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Galar.png")';
        if (pkmnNameApi == "articuno-galar") {
          number.innerHTML = "#0144".toString();
          showVarience('ArticunoFormz');
        }
        if (pkmnNameApi == "corsola-galar") {
          number.innerHTML = "#0222".toString();
          showVarience('CorsolaFormz');
        }
        if (pkmnNameApi == "darmanitan-galar-standard" || pkmnNameApi == "darmanitan-galar-zen") {
          number.innerHTML = "#0555".toString();
          showVarience('DarmanitanFormz');
        }
        if (pkmnNameApi == "darumaka-galar") {
          number.innerHTML = "#0554".toString();
          showVarience('DarumakaFormz');
        }
        if (pkmnNameApi == "farfetchd-galar") {
          number.innerHTML = "#0083".toString();
          showVarience('FarfetchdFormz');
        }
        if (pkmnNameApi == "linoone-galar") {
          number.innerHTML = "#0264".toString();
          showVarience('LinooneFormz');
        }
        if (pkmnNameApi == "meowth-galar") {
          number.innerHTML = "#0052".toString();
          showVarience('MeowthFormz');
        }
        if (pkmnNameApi == "moltres-galar") {
          number.innerHTML = "#0146".toString();
          showVarience('MoltresFormz');
        }
        if (pkmnNameApi == "mr-mime-galar") {
          number.innerHTML = "#0122".toString();
          showVarience('Mr-mimeFormz');
        }
        if (pkmnNameApi == "ponyta-galar") {
          number.innerHTML = "#0077".toString();
          showVarience('PonytaFormz');
        }
        if (pkmnNameApi == "rapidash-galar") {
          number.innerHTML = "#0078".toString();
          showVarience('RapidashFormz');
        }
        if (pkmnNameApi == "slowbro-galar") {
          number.innerHTML = "#0080".toString();
          showVarience('SlowbroFormz');
        }
        if (pkmnNameApi == "slowking-galar") {
          number.innerHTML = "#0199".toString();
          showVarience('SlowkingFormz');
        }
        if (pkmnNameApi == "slowpoke-galar") {
          number.innerHTML = "#0079".toString();
          showVarience('SlowpokeFormz');
        }
        if (pkmnNameApi == "stunfisk-galar") {
          number.innerHTML = "#0618".toString();
          showVarience('StunfiskFormz');
        }
        if (pkmnNameApi == "weezing-galar") {
          number.innerHTML = "#0110".toString();
          showVarience('WeezingFormz');
        }
        if (pkmnNameApi == "yamask-galar") {
          number.innerHTML = "#0562".toString();
          showVarience('YamaskFormz');
        }
        if (pkmnNameApi == "zapdos-galar") {
          number.innerHTML = "#0145".toString();
          showVarience('ZapdosFormz');
        }
        if (pkmnNameApi == "zigzagoon-galar") {
          number.innerHTML = "#0263".toString();
          showVarience('ZigzagoonFormz');
        }
      }
      if (paldFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Paldea.png")';
        if (pkmnNameApi == "tauros-paldea-aqua-breed" || pkmnNameApi == "tauros-paldea-combat-breed" || pkmnNameApi == "tauros-paldea-blaze-breed") {
          number.innerHTML = "#0128".toString();
          showVarience('TaurosFormz');
        }
        if (pkmnNameApi == "terapagos-stellar" || pkmnNameApi == "terapagos-terastal") {
          number.innerHTML = "#1024".toString();
          showVarience('TerapagosFormz');
        }
        if (pkmnNameApi == "wooper-paldea") {
          number.innerHTML = "#0194".toString();
          showVarience('WooperFormz');
        }
      }
      if (starFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Starter.png")';
        if (pkmnNameApi == "eevee-starter") {
          number.innerHTML = "#0133".toString();
          showVarience('EeveeFormz');
        }
        if (pkmnNameApi == "pikachu-starter") {
          number.innerHTML = "#0025".toString();
          showVarience('PikachuFormz');
        }
      }
      if (bondFrmz.includes(pkmnNameApi)) {
        topare.style.backgroundImage = 'url("Assets/Mega.png")';
        if (pkmnNameApi == "greninja-ash" || pkmnNameApi == "greninja-battle-bond") {
          number.innerHTML = "#0658".toString();
          showVarience('GreninjaFormz');
        }
      }
      if (primfrmz.includes(pkmnNameApi)) {
        if (pkmnNameApi == "kyogre-primal") {
          topare.style.backgroundImage = 'url("Assets/PryKy.png")';
          number.innerHTML = "#0382".toString();
          showVarience('KyogreFormz');
        }
        if (pkmnNameApi == "groudon-primal") {
          topare.style.backgroundImage = 'url("Assets/PriGr.png")';
          number.innerHTML = "#0383".toString();
          showVarience('GroudonFormz');

        }
        if (pkmnNameApi == "floette-eternal") {
          topare.style.backgroundImage = 'url("Assets/Eternal.png")';
          number.innerHTML = "#0670".toString();
          showVarience('FloetteFormz');

        }
      }
      if (pkbaFrmz.includes(pkmnNameApi)) {
        if (pkmnNameApi == "aegislash-blade") {
          number.innerHTML = "#0681".toString();
          showVarience('AegislashFormz');
        }
        if (pkmnNameApi == "basculegion-female") {
          number.innerHTML = "#0902".toString();
          showVarience('BasculegionFormz');
        }
        if (["basculin-blue-striped","basculin-white-striped"].includes(pkmnNameApi)) {
          number.innerHTML = "#0550".toString();
          showVarience('BasculinFormz');
        }
        if (["calyrex-ice","calyrex-shadow"].includes(pkmnNameApi)) {
          number.innerHTML = "#0898".toString();
          showVarience('CalyrexFormz');
        }
        if (["castform-rainy", "castform-snowy","castform-sunny"].includes(pkmnNameApi)) {
          number.innerHTML = "#0351".toString();
          showVarience('CastformFormz');
        }
        if (["cramorant-gorging", "cramorant-gulping"].includes(pkmnNameApi)) {
          number.innerHTML = "#0845".toString();
          showVarience('CramorantFormz');
        }
        if (pkmnNameApi == "darmanitan-zen") {
          number.innerHTML = "#0555".toString();
          showVarience('DarmanitanFormz');
        }
        if (["deoxys-attack", "deoxys-defense", "deoxys-speed",].includes(pkmnNameApi)) {
          number.innerHTML = "#0386".toString();
          showVarience('DeoxysFormz');
        }
        if (pkmnNameApi == "dudunsparce-three-segment") {
          number.innerHTML = "#0982".toString();
          showVarience('DudunsparceFormz');
        }
        if (pkmnNameApi == "eiscue-noice") {
          number.innerHTML = "#0875".toString();
          showVarience('EiscueFormz');
        }
        if (pkmnNameApi == "gimmighoul-roaming") {
          number.innerHTML = "#0999".toString();
          showVarience('GimmighoulFormz');
        }
        if (["gourgeist-large","gourgeist-small","gourgeist-super"].includes(pkmnNameApi)) {
          number.innerHTML = "#0711".toString();
          showVarience('GourgeistFormz');
        }
        if (pkmnNameApi == "hoopa-unbound") {
          number.innerHTML = "#0720".toString();
          showVarience('HoopaFormz');
        }
        if (pkmnNameApi == "indeedee-female") {
          number.innerHTML = "#0876".toString();
          showVarience('IndeedeeFormz');
        }
        if (pkmnNameApi == "keldeo-resolute") {
          number.innerHTML = "#0647".toString();
          showVarience('KeldeoFormz');
        }
        if (["kyurem-black","kyurem-white"].includes(pkmnNameApi)) {
          number.innerHTML = "#0646".toString();
          showVarience('KyuremFormz');
        }
        if (["lycanroc-dusk", "lycanroc-midnight"].includes(pkmnNameApi)) {
          number.innerHTML = "#0745".toString();
          showVarience('LycanrocFormz');
        }
        if (pkmnNameApi == "maushold-family-of-three") {
          number.innerHTML = "#0925".toString();
          showVarience('MausholdFormz');
        }
        if (pkmnNameApi == "meloetta-pirouette") {
          number.innerHTML = "#0648".toString();
          showVarience('MeloettaFormz');
        }
        if (pkmnNameApi == "meowstic-female") {
          number.innerHTML = "#0678".toString();
          showVarience('MeowsticFormz');
        }
        if (pkmnNameApi == "mimikyu-busted") {
          number.innerHTML = "#0778".toString();
          showVarience('MimikyuFormz');
        }
        if (["minior-blue","minior-blue-meteor","minior-green","minior-green-meteor","minior-indigo","minior-indigo-meteor","minior-orange","minior-orange-meteor","minior-red","minior-violet","minior-violet-meteor","minior-yellow", "minior-yellow-meteor"].includes(pkmnNameApi)) {
          number.innerHTML = "#0774".toString();
          showVarience('MiniorFormz');
        }
        if (pkmnNameApi == "morpeko-hangry") {
          number.innerHTML = "#0877".toString();
          showVarience('MorpekoFormz');
        }
        if (["necrozma-dawn", "necrozma-dusk", "necrozma-ultra"].includes(pkmnNameApi)) {
          number.innerHTML = "#0800".toString();
          showVarience('NecrozmaFormz');
        }
        if (["ogerpon-cornerstone-mask", "ogerpon-hearthflame-mask", "ogerpon-wellspring-mask",].includes(pkmnNameApi)) {
          number.innerHTML = "#1017".toString();
          showVarience('OgerponFormz');
        }
        if (pkmnNameApi == "oinkologne-female") {
          number.innerHTML = "#0916".toString();
          showVarience('OinkologneFormz');
        }
        if (["oricorio-pau", "oricorio-pom-pom", "oricorio-sensu"].includes(pkmnNameApi)) {
          number.innerHTML = "#0741".toString();
          showVarience('OricorioFormz');
        }
        if (pkmnNameApi == "palafin-hero") {
          number.innerHTML = "#0964".toString();
          showVarience('PalafinFormz');
        }
        if (["pikachu-alola-cap", "pikachu-belle", "pikachu-cosplay", "pikachu-hoenn-cap", "pikachu-kalos-cap", "pikachu-libre", "pikachu-original-cap", "pikachu-partner-cap", "pikachu-phd", "pikachu-pop-star", "pikachu-rock-star", "pikachu-sinnoh-cap", "pikachu-unova-cap", "pikachu-world-cap"].includes(pkmnNameApi)) {
          number.innerHTML = "#0025".toString();
          showVarience('PikachuFormz');
        }
        if (["pumpkaboo-large", "pumpkaboo-small", "pumpkaboo-super"].includes(pkmnNameApi)) {
          number.innerHTML = "#0710".toString();
          showVarience('PumpkabooFormz');
        }
        if (pkmnNameApi == "rockruff-own-tempo") {
          number.innerHTML = "#0744".toString();
          showVarience('RockruffFormz');
        }
        if (["rotom-fan", "rotom-frost", "rotom-heat", "rotom-mow", "rotom-wash"].includes(pkmnNameApi)) {
          number.innerHTML = "#0479".toString();
          showVarience('RotomFormz');
        }
        if (pkmnNameApi == "shaymin-sky") {
          number.innerHTML = "#0492".toString();
          showVarience('ShayminFormz');
        }
        if (["squawkabilly-blue-plumage", "squawkabilly-white-plumage", "squawkabilly-yellow-plumage"].includes(pkmnNameApi)) {
          number.innerHTML = "#0931".toString();
          showVarience('SquawkabillyFormz');
        }
        if (["tatsugiri-droopy", "tatsugiri-stretchy",].includes(pkmnNameApi)) {
          number.innerHTML = "#0978".toString();
          showVarience('TatsugiriFormz');
        }
        if (pkmnNameApi == "toxtricity-low-key") {
          number.innerHTML = "#0849".toString();
          showVarience('ToxtricityFormz');
        }
        if (pkmnNameApi == "ursaluna-bloodmoon") {
          number.innerHTML = "#0901".toString();
          showVarience('UrsalunaFormz');
        }
        if (pkmnNameApi == "urshifu-rapid-strike") {
          number.innerHTML = "#0892".toString();
          showVarience('UrshifuFormz');
        }
        if (pkmnNameApi == "wishiwashi-school") {
          number.innerHTML = "#0746".toString();
          showVarience('WishiwashiFormz');
        }
        if (["wormadam-sandy","wormadam-trash"].includes(pkmnNameApi)) {
          number.innerHTML = "#0413".toString();
          showVarience('WormadamFormz');
        }
        if (pkmnNameApi == "zacian-crowned") {
          number.innerHTML = "#0888".toString();
          showVarience('ZacianFormz');
        }
        if (pkmnNameApi == "zamazenta-crowned") {
          number.innerHTML = "#0889".toString();
          showVarience('ZamazentaFormz');
        }
        if (pkmnNameApi == "zarude-dada") {
          number.innerHTML = "#0893".toString();
          showVarience('ZarudeFormz');
        }
        if (["zygarde-10", "zygarde-10-power-construct", "zygarde-50-power-construct", "zygarde-complete"].includes(pkmnNameApi)) {
          number.innerHTML = "#0718".toString();
          showVarience('ZygardeFormz');
        }
      }
      if (exclFrmz.includes(pkmnNameApi)) {

        if (["abomasnow", "460"].includes(pkmnNameApi)) {
          showVarience('AbomasnowFormz');
        }
        if (["absol", "359"].includes(pkmnNameApi)) {
          showVarience('AbsolFormz');
        }
        if (["aegislash-shield", "681"].includes(pkmnNameApi)) {
          showVarience('AegislashFormz');
        }
        if (["aerodactyl", "142"].includes(pkmnNameApi)) {
          showVarience('AerodactylFormz');
        }
        if (["aggron", "306"].includes(pkmnNameApi)) {
          showVarience('AggronFormz');
        }
        if (["alakazam", "65"].includes(pkmnNameApi)) {
          showVarience('AlakazamFormz');
        }
        if (["alcremie", "869"].includes(pkmnNameApi)) {
          showVarience('AlcremieFormz');
        }
        if (["altaria", "334"].includes(pkmnNameApi)) {
          showVarience('AltariaFormz');
        }
        if (["ampharos", "181"].includes(pkmnNameApi)) {
          showVarience('AmpharosFormz');
        }
        if (["appletun", "842"].includes(pkmnNameApi)) {
          showVarience('AppletunFormz');
        }
        if (["araquanid", "752"].includes(pkmnNameApi)) {
          showVarience('AraquanidFormz');
        }
        if (["arcanine", "59"].includes(pkmnNameApi)) {
          showVarience('ArcanineFormz');
        }
        if (["articuno", "144"].includes(pkmnNameApi)) {
          showVarience('ArticunoFormz');
        }
        if (["audino", "531"].includes(pkmnNameApi)) {
          showVarience('AudinoFormz');
        }
        if (["avalugg", "713"].includes(pkmnNameApi)) {
          showVarience('AvaluggFormz');
        }
        if (["banette", "354"].includes(pkmnNameApi)) {
          showVarience('BanetteFormz');
        }
        if (["basculegion-male", "902"].includes(pkmnNameApi)) {
          showVarience('BasculegionFormz');
        }
        if (["basculin-red-striped", "550"].includes(pkmnNameApi)) {
          showVarience('BasculinFormz');
        }
        if (["beedrill", "15"].includes(pkmnNameApi)) {
          showVarience('BeedrillFormz');
        }
        if (["blastoise", "9"].includes(pkmnNameApi)) {
          showVarience('BlastoiseFormz');
        }
        if (["blaziken", "257"].includes(pkmnNameApi)) {
          showVarience('BlazikenFormz');
        }
        if (["braviary", "628"].includes(pkmnNameApi)) {
          showVarience('BraviaryFormz');
        }
        if (["butterfree", "12"].includes(pkmnNameApi)) {
          showVarience('ButterfreeFormz');
        }
        if (["calyrex", "898"].includes(pkmnNameApi)) {
          showVarience('CalyrexFormz');
        }
        if (["camerupt", "323"].includes(pkmnNameApi)) {
          showVarience('CameruptFormz');
        }
        if (["castform", "351"].includes(pkmnNameApi)) {
          showVarience('CastformFormz');
        }
        if (["centiskorch", "851"].includes(pkmnNameApi)) {
          showVarience('CentiskorchFormz');
        }
        if (["charizard", "6"].includes(pkmnNameApi)) {
          showVarience('CharizardFormz');
        }
        if (["cinderace", "815"].includes(pkmnNameApi)) {
          showVarience('CinderaceFormz');
        }
        if (["coalossal", "839"].includes(pkmnNameApi)) {
          showVarience('CoalossalFormz');
        }
        if (["copperajah", "879"].includes(pkmnNameApi)) {
          showVarience('CopperajahFormz');
        }
        if (["corsola", "222"].includes(pkmnNameApi)) {
          showVarience('CorsolaFormz');
        }
        if (["corviknight", "823"].includes(pkmnNameApi)) {
          showVarience('CorviknightFormz');
        }
        if (["cramorant", "845"].includes(pkmnNameApi)) {
          showVarience('CramorantFormz');
        }
        if (["darmanitan-standard", "555"].includes(pkmnNameApi)) {
          showVarience('DarmanitanFormz');
        }
        if (["darumaka", "554"].includes(pkmnNameApi)) {
          showVarience('DarumakaFormz');
        }
        if (["decidueye", "724"].includes(pkmnNameApi)) {
          showVarience('DecidueyeFormz');
        }
        if (["deoxys-normal", "386"].includes(pkmnNameApi)) {
          showVarience('DeoxysFormz');
        }
        if (["dialga", "483"].includes(pkmnNameApi)) {
          showVarience('DialgaFormz');
        }
        if (["diancie", "719"].includes(pkmnNameApi)) {
          showVarience('DiancieFormz');
        }
        if (["diglett", "50"].includes(pkmnNameApi)) {
          showVarience('DiglettFormz');
        }
        if (["drednaw", "834"].includes(pkmnNameApi)) {
          showVarience('DrednawFormz');
        }
        if (["dudunsparce-two-segment", "982"].includes(pkmnNameApi)) {
          showVarience('DudunsparceFormz');
        }
        if (["dugtrio", "51"].includes(pkmnNameApi)) {
          showVarience('DugtrioFormz');
        }
        if (["duraludon", "884"].includes(pkmnNameApi)) {
          showVarience('DuraludonFormz');
        }
        if (["eevee", "133"].includes(pkmnNameApi)) {
          showVarience('EeveeFormz');
        }
        if (["eiscue-ice", "875"].includes(pkmnNameApi)) {
          showVarience('EiscueFormz');
        }
        if (["electrode", "101"].includes(pkmnNameApi)) {
          showVarience('ElectrodeFormz');
        }
        if (["enamorus-incarnate", "905"].includes(pkmnNameApi)) {
          showVarience('EnamorusFormz');
        }
        if (["eternatus", "890"].includes(pkmnNameApi)) {
          showVarience('EternatusFormz');
        }
        if (["exeggutor", "103"].includes(pkmnNameApi)) {
          showVarience('ExeggutorFormz');
        }
        if (["farfetch'd", "83"].includes(pkmnNameApi)) {
          showVarience('FarfetchdFormz');
        }
        if (["flapple", "841"].includes(pkmnNameApi)) {
          showVarience('FlappleFormz');
        }
        if (["floette", "670"].includes(pkmnNameApi)) {
          showVarience('FloetteFormz');
        }
        if (["gallade", "475"].includes(pkmnNameApi)) {
          showVarience('GalladeFormz');
        }
        if (["garbodor", "569"].includes(pkmnNameApi)) {
          showVarience('GarbodorFormz');
        }
        if (["garchomp", "445"].includes(pkmnNameApi)) {
          showVarience('GarchompFormz');
        }
        if (["gardevoir", "282"].includes(pkmnNameApi)) {
          showVarience('GardevoirFormz');
        }
        if (["gengar", "94"].includes(pkmnNameApi)) {
          showVarience('GengarFormz');
        }
        if (["geodude","74"].includes(pkmnNameApi)) {
          showVarience('GeodudeFormz');
        }
        if (["gimmighoul", "999"].includes(pkmnNameApi)) {
          showVarience('GimmighoulFormz');
        }
        if (["giratina-altered", "487"].includes(pkmnNameApi)) {
          showVarience('GiratinaFormz');
        }
        if (["glalie", "362"].includes(pkmnNameApi)) {
          showVarience('GlalieFormz');
        }
        if (["golem", "76"].includes(pkmnNameApi)) {
          showVarience('GolemFormz');
        }
        if (["goodra", "706"].includes(pkmnNameApi)) {
          showVarience('GoodraFormz');
        }
        if (["gourgeist-average", "711"].includes(pkmnNameApi)) {
          showVarience('GourgeistFormz');
        }
        if (["graveler", "75"].includes(pkmnNameApi)) {
          showVarience('GravelerFormz');
        }
        if (["greninja", "658"].includes(pkmnNameApi)) {
          showVarience('GreninjaFormz');
        }
        if (["grimer", "88"].includes(pkmnNameApi)) {
          showVarience('GrimerFormz');
        }
        if (["grimmsnarl", "861"].includes(pkmnNameApi)) {
          showVarience('GrimmsnarlFormz');
        }
        if (["groudon", "383"].includes(pkmnNameApi)) {
          showVarience('GroudonFormz');
        }
        if (["growlithe", "58"].includes(pkmnNameApi)) {
          showVarience('GrowlitheFormz');
        }
        if (["gumshoos", "735"].includes(pkmnNameApi)) {
          showVarience('GumshoosFormz');
        }
        if (["gyarados", "130"].includes(pkmnNameApi)) {
          showVarience('GyaradosFormz');
        }
        if (["hatterene", "858"].includes(pkmnNameApi)) {
          showVarience('HattereneFormz');
        }
        if (["heracross", "214"].includes(pkmnNameApi)) {
          showVarience('HeracrossFormz');
        }
        if (["hoopa", "720"].includes(pkmnNameApi)) {
          showVarience('HoopaFormz');
        }
        if (["houndoom", "229"].includes(pkmnNameApi)) {
          showVarience('HoundoomFormz');
        }
        if (["indeedee-male", "876"].includes(pkmnNameApi)) {
          showVarience('IndeedeeFormz');
        }
        if (["inteleon", "818"].includes(pkmnNameApi)) {
          showVarience('InteleonFormz');
        }
        if (["kangaskhan", "115"].includes(pkmnNameApi)) {
          showVarience('KangaskhanFormz');
        }
        if (["keldeo-ordinary", "647"].includes(pkmnNameApi)) {
          showVarience('KeldeoFormz');
        }
        if (["kingler", "99"].includes(pkmnNameApi)) {
          showVarience('KinglerFormz');
        }
        if (["kommo-o", "784"].includes(pkmnNameApi)) {
          showVarience('KommooFormz');
        }
        if (["kyogre", "382"].includes(pkmnNameApi)) {
          showVarience('KyogreFormz');
        }
        if (["kyurem", "646"].includes(pkmnNameApi)) {
          showVarience('KyuremFormz');
        }
        if (["landorus-incarnate", "645"].includes(pkmnNameApi)) {
          showVarience('LandorusFormz');
        }
        if (["lapras", "131"].includes(pkmnNameApi)) {
          showVarience('LaprasFormz');
        }
        if (["latias", "380"].includes(pkmnNameApi)) {
          showVarience('LatiasFormz');
        }
        if (["latios", "381"].includes(pkmnNameApi)) {
          showVarience('LatiosFormz');
        }
        if (["lilligant", "549"].includes(pkmnNameApi)) {
          showVarience('LilligantFormz');
        }
        if (["linoone", "264"].includes(pkmnNameApi)) {
          showVarience('LinooneFormz');
        }
        if (["lopunny", "428"].includes(pkmnNameApi)) {
          showVarience('LopunnyFormz');
        }
        if (["lucario", "448"].includes(pkmnNameApi)) {
          showVarience('LucarioFormz');
        }
        if (["lycanroc-midday", "745"].includes(pkmnNameApi)) {
          showVarience('LycanrocFormz');
        }
        if (["machamp", "68"].includes(pkmnNameApi)) {
          showVarience('MachampFormz');
        }
        if (["magearna", "801"].includes(pkmnNameApi)) {
          showVarience('MagearnaFormz');
        }
        if (["manectric", "310"].includes(pkmnNameApi)) {
          showVarience('ManectricFormz');
        }
        if (["marowak", "105"].includes(pkmnNameApi)) {
          showVarience('MarowakFormz');
        }
        if (["maushold-family-of-four", "925"].includes(pkmnNameApi)) {
          showVarience('MausholdFormz');
        }
        if (["mawile", "303"].includes(pkmnNameApi)) {
          showVarience('MawileFormz');
        }
        if (["medicham", "308"].includes(pkmnNameApi)) {
          showVarience('MedichamFormz');
        }
        if (["melmetal", "809"].includes(pkmnNameApi)) {
          showVarience('MelmetalFormz');
        }
        if (["meloetta-aria", "648"].includes(pkmnNameApi)) {
          showVarience('MeloettaFormz');
        }
        if (["meowstic-male", "678"].includes(pkmnNameApi)) {
          showVarience('MeowsticFormz');
        }
        if (["meowth", "52"].includes(pkmnNameApi)) {
          showVarience('MeowthFormz');
        }
        if (["metagross", "376"].includes(pkmnNameApi)) {
          showVarience('MetagrossFormz');
        }
        if (["mewtwo","150"].includes(pkmnNameApi)) {
          showVarience('MewtwoFormz');
        }
        if (["mimikyu-disguised", "778"].includes(pkmnNameApi)) {
          showVarience('MimikyuFormz');
        }
        if (["minior-red-meteor", "774"].includes(pkmnNameApi)) {
          showVarience('MiniorFormz');
        }
        if (["moltres", "146"].includes(pkmnNameApi)) {
          showVarience('MoltresFormz');
        }
        if (["morpeko-full-belly", "877"].includes(pkmnNameApi)) {
          showVarience('MorpekoFormz');
        }
        if (["mr-mime", "122"].includes(pkmnNameApi)) {
          showVarience('Mr-mimeFormz');
        }
        if (["muk", "89"].includes(pkmnNameApi)) {
          showVarience('MukFormz');
        }
        if (["necrozma", "800"].includes(pkmnNameApi)) {
          showVarience('NecrozmaFormz');
        }
        if (["ninetales", "38"].includes(pkmnNameApi)) {
          showVarience('NinetalesFormz');
        }
        if (["ogerpon", "1017"].includes(pkmnNameApi)) {
          showVarience('OgerponFormz');
        }
        if (["oinkologne-male", "916"].includes(pkmnNameApi)) {
          showVarience('OinkologneFormz');
        }
        if (["orbeetle", "826"].includes(pkmnNameApi)) {
          showVarience('OrbeetleFormz');
        }
        if (["oricorio-baile", "741"].includes(pkmnNameApi)) {
          showVarience('OricorioFormz');
        }
        if (["palafin-zero", "964"].includes(pkmnNameApi)) {
          showVarience('PalafinFormz');
        }
        if (["palkia", "484"].includes(pkmnNameApi)) {
          showVarience('PalkiaFormz');
        }
        if (["persian", "53"].includes(pkmnNameApi)) {
          showVarience('PersianFormz');
        }
        if (["pidgeot", "18"].includes(pkmnNameApi)) {
          showVarience('PidgeotFormz');
        }
        if (["pikachu", "25"].includes(pkmnNameApi)) {
          showVarience('PikachuFormz');
        }
        if (["pinsir", "127"].includes(pkmnNameApi)) {
          showVarience('PinsirFormz');
        }
        if (["ponyta", "77"].includes(pkmnNameApi)) {
          showVarience('PonytaFormz');
        }
        if (["pumpkaboo-average", "710"].includes(pkmnNameApi)) {
          showVarience('PumpkabooFormz');
        }
        if (["qwilfish", "211"].includes(pkmnNameApi)) {
          showVarience('QwilfishFormz');
        }
        if (["raichu", "26"].includes(pkmnNameApi)) {
          showVarience('RaichuFormz');
        }
        if (["rapidash", "78"].includes(pkmnNameApi)) {
          showVarience('RapidashFormz');
        }
        if (["raticate", "20"].includes(pkmnNameApi)) {
          showVarience('RaticateFormz');
        }
        if (["rattata", "19"].includes(pkmnNameApi)) {
          showVarience('RattataFormz');
        }
        if (["rayquaza", "384"].includes(pkmnNameApi)) {
          showVarience('RayquazaFormz');
        }
        if (["ribombee", "743"].includes(pkmnNameApi)) {
          showVarience('RibombeeFormz');
        }
        if (["rillaboom", "812"].includes(pkmnNameApi)) {
          showVarience('RillaboomFormz');
        }
        if (["rockruff", "744"].includes(pkmnNameApi)) {
          showVarience('RockruffFormz');
        }
        if (["rotom", "479"].includes(pkmnNameApi)) {
          showVarience('RotomFormz');
        }
        if (["sableye", "302"].includes(pkmnNameApi)) {
          showVarience('SableyeFormz');
        }
        if (["salamence", "373"].includes(pkmnNameApi)) {
          showVarience('SalamenceFormz');
        }
        if (["samurott", "503"].includes(pkmnNameApi)) {
          showVarience('SamurottFormz');
        }
        if (["sandaconda", "844"].includes(pkmnNameApi)) {
          showVarience('SandacondaFormz');
        }
        if (["sandshrew", "27"].includes(pkmnNameApi)) {
          showVarience('SandshrewFormz');
        }
        if (["sandslash", "28"].includes(pkmnNameApi)) {
          showVarience('SandslashFormz');
        }
        if (["sceptile", "254"].includes(pkmnNameApi)) {
          showVarience('SceptileFormz');
        }
        if (["scizor", "212"].includes(pkmnNameApi)) {
          showVarience('ScizorFormz');
        }
        if (["sharpedo", "319"].includes(pkmnNameApi)) {
          showVarience('SharpedoFormz');
        }
        if (["shaymin-land", "492"].includes(pkmnNameApi)) {
          showVarience('ShayminFormz');
        }
        if (["sliggoo", "705"].includes(pkmnNameApi)) {
          showVarience('SliggooFormz');
        }
        if (["slowbro", "80"].includes(pkmnNameApi)) {
          showVarience('SlowbroFormz');
        }
        if (["slowking", "199"].includes(pkmnNameApi)) {
          showVarience('SlowkingFormz');
        }
        if (["slowpoke", "79"].includes(pkmnNameApi)) {
          showVarience('SlowpokeFormz');
        }
        if (["sneasel", "215"].includes(pkmnNameApi)) {
          showVarience('SneaselFormz');
        }
        if (["snorlax", "143"].includes(pkmnNameApi)) {
          showVarience('SnorlaxFormz');
        }
        if (["squawkabilly-green-plumage", "931"].includes(pkmnNameApi)) {
          showVarience('SquawkabillyFormz');
        }
        if (["steelix", "208"].includes(pkmnNameApi)) {
          showVarience('SteelixFormz');
        }
        if (["stunfisk", "618"].includes(pkmnNameApi)) {
          showVarience('StunfiskFormz');
        }
        if (["swampert", "260"].includes(pkmnNameApi)) {
          showVarience('SwampertFormz');
        }
        if (["tatsugiri-curly", "978"].includes(pkmnNameApi)) {
          showVarience('TatsugiriFormz');
        }
        if (["tauros", "128"].includes(pkmnNameApi)) {
          showVarience('TaurosFormz');
        }
        if (["terapagos", "1024"].includes(pkmnNameApi)) {
          showVarience('TerapagosFormz');
        }
        if (["thundurus-incarnate", "642"].includes(pkmnNameApi)) {
          showVarience('ThundurusFormz');
        }
        if (["togedemaru", "777"].includes(pkmnNameApi)) {
          showVarience('TogedemaruFormz');
        }
        if (["tornadus-incarnate", "641"].includes(pkmnNameApi)) {
          showVarience('TornadusFormz');
        }
        if (["toxtricity-amped", "849"].includes(pkmnNameApi)) {
          showVarience('ToxtricityFormz');
        }
        if (["typhlosion", "157"].includes(pkmnNameApi)) {
          showVarience('TyphlosionFormz');
        }
        if (["tyranitar", "248"].includes(pkmnNameApi)) {
          showVarience('TyranitarFormz');
        }
        if (["ursaluna", "901"].includes(pkmnNameApi)) {
          showVarience('UrsalunaFormz');
        }
        if (["urshifu-single-strike", "892"].includes(pkmnNameApi)) {
          showVarience('UrshifuFormz');
        }
        if (["venusaur", "3"].includes(pkmnNameApi)) {
          showVarience('VenusaurFormz');
        }
        if (["vikavolt", "738"].includes(pkmnNameApi)) {
          showVarience('VikavoltFormz');
        }
        if (["voltorb", "100"].includes(pkmnNameApi)) {
          showVarience('VoltorbFormz');
        }
        if (["vulpix", "37"].includes(pkmnNameApi)) {
          showVarience('VulpixFormz');
        }
        if (["weezing", "110"].includes(pkmnNameApi)) {
          showVarience('WeezingFormz');
        }
        if (["wishiwashi-solo","746"].includes(pkmnNameApi)) {
          showVarience('WishiwashiFormz');
        }
        if (["wooper", "194"].includes(pkmnNameApi)) {
          showVarience('WooperFormz');
        }
        if (["wormadam-plant", "413"].includes(pkmnNameApi)) {
          showVarience('WormadamFormz');
        }
        if (["yamask", "562"].includes(pkmnNameApi)) {
          showVarience('YamaskFormz');
        }
        if (["zacian", "888"].includes(pkmnNameApi)) {
          showVarience('ZacianFormz');
        }
        if (["zamazenta", "889"].includes(pkmnNameApi)) {
          showVarience('ZamazentaFormz');
        }
        if (["zapdos", "145"].includes(pkmnNameApi)) {
          showVarience('ZapdosFormz');
        }
        if (["zarude", "893"].includes(pkmnNameApi)) {
          showVarience('ZarudeFormz');
        }
        if (["zigzagoon", "263"].includes(pkmnNameApi)) {
          showVarience('ZigzagoonFormz');
        }
        if (["zoroark", "571"].includes(pkmnNameApi)) {
          showVarience('ZoroarkFormz');
        }
        if (["zorua", "570"].includes(pkmnNameApi)) {
          showVarience('ZoruaFormz');
        }
        if (["zygarde-50", "718"].includes(pkmnNameApi)) {
          showVarience('ZygardeFormz');
        }
      }

    } else {
      // sboost.style.display = "none"
      topare.style.backgroundImage = 'url("Assets/pokeball.png")';
      let allForms = document.querySelectorAll('.pkmnFormz');
      allForms.forEach((element) => {
        element.style.display = "none";
      });
    }
    stacfh.style.display = "block";
    credih.style.display = "none";
  } catch (error) {
    if (["MissingNo.", "Missingno.", "missingNo.", "missingno.", "MissingNo", "Missingno", "missingNo", "missingno", "Missing No.", "Missing no.", "missing No.", "missing no.", "Missing No", "Missing no", "missing No", "missing no", "Missing_No.", "Missing_no.", "missing_No.", "missing_no.", "Missing_No", "Missing_no", "missing_No", "missing_no", "Missing-No.", "Missing-no.", "missing-No.", "missing-no.", "Missing-No", "Missing-no", "missing-No", "missing-no", "0"].includes(search.value )) {

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
      mvhile.style.color = `rgb(${typeColors["bird"][0]}, ${typeColors["bird"][1]}, ${typeColors["bird"][2]})`;

      pabili.innerHTML = '';

      let newAbil = document.createElement('div');
      newAbil.innerHTML = toTitleCase("No Ability");
      newAbil.classList.add('ability');
      pabili.appendChild(newAbil);

      let newnewAbil = document.createElement('div');
      newnewAbil.innerHTML = toTitleCase("Pressure");
      newnewAbil.classList.add('ability', 'hidden');
      pabili.appendChild(newnewAbil);




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
        newMoveClass.src = "Assets/" + toTitleCase(movData.damage_class.name) + ".png";
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
      alert("That Pokemon Does not Exist, or has not been implemented correctly, Try Again.")
    }
  }
  }); // calls "search" then adds the function "On change, run an event, the folowing event being alerting the user to the change sending it as the target value."
});





function update(pkmnData) {
  // For debuging
  console.log(pkmnData);

  const mainColor = typeColors[pkmnData.types[0].type.name];


  //sets pokemon number
  number.innerHTML = '#'+ pkmnData.id.toString().padStart(4,'0');
  let mHeight = pkmnData.height/10;
  height.innerHTML = "&nbsp" + mHeight.toString() + " m";
  let lbsweight = pkmnData.weight/10;
  weight.innerHTML = "&nbsp" + lbsweight.toString() + " lbs";
  // Sets Pokemon Image
  // pimage.src = pkmnData.sprites.other.home.front_shiny;
  pabili.innerHTML = '';
  pkmnData.abilities.forEach((ab) => {

    let newAbil = document.createElement('div');
    newAbil.innerHTML = toTitleCase(ab.ability.name);
    console.log(ab.is_hidden);
    if (ab.is_hidden.toString() == "true") {
      newAbil.classList.add('ability', 'hidden');
    } else {
    newAbil.classList.add('ability');
  }
    pabili.appendChild(newAbil);
  });
  if (["jigglypuff", "Jigglypuff", "39"].includes(search.value)) {
    const audio = new Audio('Assets/Jigglypuff_Song.wav');
    // const audio = new Audio(pkmnData.cries.legacy);
    audio.play();
  } else {
    if (["sentret", "Sentret", "161", "lillipup", "Lillipup", "506"].includes(search.value)) {
      const audio = new Audio(pkmnData.cries.legacy);
      // const audio = new Audio(pkmnData.cries.legacy);
      audio.play();
    }else {


        const audio = new Audio(pkmnData.cries.latest);
        // const audio = new Audio(pkmnData.cries.legacy);
        audio.play();
      }
    }
    // itotal.style = "";
    // stibar.style = "";
    // Update stats
  let totalStats = 0; // Initialize total stats variable

  pkmnData.stats.forEach((s, i) => {
    stanum[i].innerHTML = s.base_stat.toString().padStart(3, "0");
    totalStats += s.base_stat; // Add each stat value to the total
    let barStat = s.base_stat/2.5;
    stibar[i].style.width = barStat.toString() + '%';
    stibar[i].style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    stobar[i].style.backgroundColor = `rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]}, ${".3"})`;
    stanum[i].style.color = `rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    stdesc[i].style.borderRightColor =`rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    stdesc[i].style.color =`rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
  });
// NOTE: Change the Scroll Bar Color.
  // Update total stat value
  stotal.innerHTML = totalStats.toString().padStart(3, '0');
  let tPercent = totalStats/10;
  itotal.style.width = tPercent.toString() + "%";
  todesc.style.borderRightColor =`rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
  bastat.style.color = `rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
  mvlihe.style.color = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;

  try {
  moveli.innerHTML = '';
  pkmnData.moves.forEach( async (m) => {
    let pkmnMove = m.move.name;
    const movData = await movAPI(pkmnMove);
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
    newMoveClass.src = "Assets/" + toTitleCase(movData.damage_class.name) + ".png";
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











}


function shinyLocks() {
  if (shinyLock === "off") {
    shinyLock = "on"; // Toggle shinyLock to "on"
    const audio = new Audio('Assets/shiny.mp3');
    audio.play();
    console.log("Shiny lock is now ON");
  } else {
    shinyLock = "off"; // Toggle shinyLock to "off"
    console.log("Shiny lock is now OFF");
    const audio = new Audio('Assets/Ability-Activate.mp3');
    audio.play();
  }
}



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setTypeTo(sourceData) {
  const mainColor = typeColors[sourceData.types[0].type.name];
  ptypes.innerHTML = '';
  sourceData.types.forEach((t) => {

    let newType = document.createElement('span');
    let color = typeColors[t.type.name];
    newType.innerHTML = toTitleCase(t.type.name);
    newType.classList.add('type');
    ptypes.appendChild(newType);
    newType.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    console.log(t.type.name);
    pkbody.style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    // sboost.style.backgroundColor = `rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]})`;
    document.body.style.backgroundColor = `rgb(${bgColors[t.type.name][0]}, ${bgColors[t.type.name][1]}, ${bgColors[t.type.name][2]})`;
    itotal.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    sttbar.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${".3"})`;
    stotal.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    todesc.style.color = `rgba(${color[0]}, ${color[1]}, ${color[2]})`;
    sbinnr.style.scrollbarColor = `rgba(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]}) rgba(${0},${0},${0},${0})`;


  });
};

function setNameTo(sourceData) {
  if (!poryPrinc.includes(search.value.toString())) {

      search.value =  toTitleCase(sourceData.name.toString().replaceAll("-", " "));
    }
    else {
      search.value =  toTitleCase(sourceData.name.toString().replaceAll(" ", "-"));
    }
};
function updateImage(sourceData) {
  pimage.style.display = "block";
  pimgsh.style.display = "block";
  pimagf.style.display = "block";
  pimgsf.style.display = "block";
try {
  if (sourceData.sprites.front_default !== null) {
    pimage.src = sourceData.sprites.front_default;
  } else {
    if (sourceData.sprites.other.showdown.front_default !== null) {
      pimage.src = sourceData.sprites.other.showdown.front_default;
    } else {
      if (sourceData.sprites.other.home.front_default !== null) {
        pimage.src = sourceData.sprites.other.home.front_default;
      } else {
        if (sourceData.sprites.other.home.front_default == null) {
        pimage.style.display = "none";
      }
      }
    }
    }
    if (sourceData.sprites.front_shiny !== null) {
      pimgsh.src = sourceData.sprites.front_shiny;
    } else {
      if (sourceData.sprites.other.showdown.front_shiny !== null) {
        pimgsh.src = sourceData.sprites.other.showdown.front_shiny;
      } else {
        if (sourceData.sprites.other.home.front_shiny !== null) {
          pimgsh.src = sourceData.sprites.other.home.front_shiny;
        } else {
          if (sourceData.sprites.other.home.front_shiny == null) {
          pimgsh.style.display = "none";
        }
        }
      }
      }


      if (sourceData.sprites.front_female !== null) {
        pimagf.src = sourceData.sprites.front_female;
      } else {
        if (sourceData.sprites.other.showdown.front_female !== null) {
          pimagf.src = sourceData.sprites.other.showdown.front_female;
        } else {
          if (sourceData.sprites.other.home.front_female !== null) {
            pimagf.src = sourceData.sprites.other.home.front_female;
          } else {
            if (sourceData.sprites.other.home.front_female == null) {
            pimagf.style.display = "none";
          }
          }
        }
        }
        if (sourceData.sprites.front_shiny_female !== null) {
          pimgsf.src = sourceData.sprites.front_shiny_female;
        } else {
          if (sourceData.sprites.other.showdown.front_shiny_female !== null) {
            pimgsf.src = sourceData.sprites.other.showdown.front_shiny_female;
          } else {
            if (sourceData.sprites.other.home.front_shiny_female !== null) {
              pimgsf.src = sourceData.sprites.other.home.front_shiny_female;
            } else {
              if (sourceData.sprites.other.home.front_shiny_female == null) {
              pimgsf.style.display = "none";
            }
            }
          }
          }
  } catch (error) {
    if (sourceData.sprites.front_default !== null) {
      pimage.src = sourceData.sprites.front_default;
        } else {
          pimage.style.display = "none";
        }

      if (sourceData.sprites.front_shiny !== null) {
        pimgsh.src = sourceData.sprites.front_shiny;
      } else {
            pimgsh.style.display = "none";
          }



        if (sourceData.sprites.front_female !== null) {
          pimagf.src = sourceData.sprites.front_female;
        } else {
              pimagf.style.display = "none";
            }

          if (sourceData.sprites.front_shiny_female !== null) {
            pimgsf.src = sourceData.sprites.front_shiny_female;
          } else {
                pimgsf.style.display = "none";
              }

  }
};

function showVarience(pkmnZ) {
  // sboost.style.display = "block";
  stacfh.style.display = "block";
  credih.style.display = "none";
  let allForms = document.querySelectorAll('.pkmnFormz');
  allForms.forEach((element) => {
    element.style.display = "none";
  });

  let specificpkn = document.querySelectorAll("." + pkmnZ);
  specificpkn.forEach((element) => {
    element.style.display = "block";
  });
}


// Copied from Stack Overflow for Title casing.
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
