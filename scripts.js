var letters = [
[	"AA",	"AB",	"AC",	"AD",	"AE",	"AF",	"AG",	"AH",	"AI",	"AJ",	"AK",	"AL",	"AM",	"AN",	"AO",	"AP",	"AR",	"AS",	"AT",	"AU",	"AV",	"AW",	"AY",	"AZ"	],
[	"BA",	"BB",	"BC",	"BD",	"BE",	"BF",	"BG",	"BH",	"BI",	"BJ",	"BK",	"BL",	"BM",	"BN",	"BO",	"BP",	"BR",	"BS",	"BT",	"BU",	"BV",	"BW",	"BY",	"BZ"	],
[	"CA",	"CB",	"CC",	"CD",	"CE",	"CF",	"CG",	"CH",	"CI",	"CJ",	"CK",	"CL",	"CM",	"CN",	"CO",	"CP",	"CR",	"CS",	"CT",	"CU",	"CV",	"CW",	"CY",	"CZ"	],
[	"DA",	"DB",	"DC",	"DD",	"DE",	"DF",	"DG",	"DH",	"DI",	"DJ",	"DK",	"DL",	"DM",	"DN",	"DO",	"DP",	"DR",	"DS",	"DT",	"DU",	"DV",	"DW",	"DY",	"DZ"	],
[	"EA",	"EB",	"EC",	"ED",	"EE",	"EF",	"EG",	"EH",	"EI",	"EJ",	"EK",	"EL",	"EM",	"EN",	"EO",	"EP",	"ER",	"ES",	"ET",	"EU",	"EV",	"EW",	"EY",	"EZ"	],
[	"FA",	"FB",	"FC",	"FD",	"FE",	"FF",	"FG",	"FH",	"FI",	"FJ",	"FK",	"FL",	"FM",	"FN",	"FO",	"FP",	"FR",	"FS",	"FT",	"FU",	"FV",	"FW",	"FY",	"FZ"	],
[	"GA",	"GB",	"GC",	"GD",	"GE",	"GF",	"GG",	"GH",	"GI",	"GJ",	"GK",	"GL",	"GM",	"GN",	"GO",	"GP",	"GR",	"GS",	"GT",	"GU",	"GV",	"GW",	"GY",	"GZ"	],
[	"HA",	"HB",	"HC",	"HD",	"HE",	"HF",	"HG",	"HH",	"HI",	"HJ",	"HK",	"HL",	"HM",	"HN",	"HO",	"HP",	"HR",	"HS",	"HT",	"HU",	"HV",	"HW",	"HY",	"HZ"	],
[	"IA",	"IB",	"IC",	"ID",	"IE",	"IF",	"IG",	"IH",	"II",	"IJ",	"IK",	"IL",	"IM",	"IN",	"IO",	"IP",	"IR",	"IS",	"IT",	"IU",	"IV",	"IW",	"IY",	"IZ"	],
[	"JA",	"JB",	"JC",	"JD",	"JE",	"JF",	"JG",	"JH",	"JI",	"JJ",	"JK",	"JL",	"JM",	"JN",	"JO",	"JP",	"JR",	"JS",	"JT",	"JU",	"JV",	"JW",	"JY",	"JZ"	],
[	"KA",	"KB",	"KC",	"KD",	"KE",	"KF",	"KG",	"KH",	"KI",	"KJ",	"KK",	"KL",	"KM",	"KN",	"KO",	"KP",	"KR",	"KS",	"KT",	"KU",	"KV",	"KW",	"KY",	"KZ"	],
[	"LA",	"LB",	"LC",	"LD",	"LE",	"LF",	"LG",	"LH",	"LI",	"LJ",	"LK",	"LL",	"LM",	"LN",	"LO",	"LP",	"LR",	"LS",	"LT",	"LU",	"LV",	"LW",	"LY",	"LZ"	],
[	"MA",	"MB",	"MC",	"MD",	"ME",	"MF",	"MG",	"MH",	"MI",	"MJ",	"MK",	"ML",	"MM",	"MN",	"MO",	"MP",	"MR",	"MS",	"MT",	"MU",	"MV",	"MW",	"MY",	"MZ"	],
[	"NA",	"NB",	"NC",	"ND",	"NE",	"NF",	"NG",	"NH",	"NI",	"NJ",	"NK",	"NL",	"NM",	"NN",	"NO",	"NP",	"NR",	"NS",	"NT",	"NU",	"NV",	"NW",	"NY",	"NZ"	],
[	"OA",	"OB",	"OC",	"OD",	"OE",	"OF",	"OG",	"OH",	"OI",	"OJ",	"OK",	"OL",	"OM",	"ON",	"OO",	"OP",	"OR",	"OS",	"OT",	"OU",	"OV",	"OW",	"OY",	"OZ"	],
[	"PA",	"PB",	"PC",	"PD",	"PE",	"PF",	"PG",	"PH",	"PI",	"PJ",	"PK",	"PL",	"PM",	"PN",	"PO",	"PP",	"PR",	"PS",	"PT",	"PU",	"PV",	"PW",	"PY",	"PZ"	],
[	"RA",	"RB",	"RC",	"RD",	"RE",	"RF",	"RG",	"RH",	"RI",	"RJ",	"RK",	"RL",	"RM",	"RN",	"RO",	"RP",	"RR",	"RS",	"RT",	"RU",	"RV",	"RW",	"RY",	"RZ"	],
[	"SA",	"SB",	"SC",	"SD",	"SE",	"SF",	"SG",	"SH",	"SI",	"SJ",	"SK",	"SL",	"SM",	"SN",	"SO",	"SP",	"SR",	"SS",	"ST",	"SU",	"SV",	"SW",	"SY",	"SZ"	],
[	"TA",	"TB",	"TC",	"TD",	"TE",	"TF",	"TG",	"TH",	"TI",	"TJ",	"TK",	"TL",	"TM",	"TN",	"TO",	"TP",	"TR",	"TS",	"TT",	"TU",	"TV",	"TW",	"TY",	"TZ"	],
[	"UA",	"UB",	"UC",	"UD",	"UE",	"UF",	"UG",	"UH",	"UI",	"UJ",	"UK",	"UL",	"UM",	"UN",	"UO",	"UP",	"UR",	"US",	"UT",	"UU",	"UV",	"UW",	"UY",	"UZ"	],
[	"VA",	"VB",	"VC",	"VD",	"VE",	"VF",	"VG",	"VH",	"VI",	"VJ",	"VK",	"VL",	"VM",	"VN",	"VO",	"VP",	"VR",	"VS",	"VT",	"VU",	"VV",	"VW",	"VY",	"VZ"	],
[	"WA",	"WB",	"WC",	"WD",	"WE",	"WF",	"WG",	"WH",	"WI",	"WJ",	"WK",	"WL",	"WM",	"WN",	"WO",	"WP",	"WR",	"WS",	"WT",	"WU",	"WV",	"WW",	"WY",	"WZ"	],
[	"YA",	"YB",	"YC",	"YD",	"YE",	"YF",	"YG",	"YH",	"YI",	"YJ",	"YK",	"YL",	"YM",	"YN",	"YO",	"YP",	"YR",	"YS",	"YT",	"YU",	"YV",	"YW",	"YY",	"YZ"	],
[	"ZA",	"ZB",	"ZC",	"ZD",	"ZE",	"ZF",	"ZG",	"ZH",	"ZI",	"ZJ",	"ZK",	"ZL",	"ZM",	"ZN",	"ZO",	"ZP",	"ZR",	"ZS",	"ZT",	"ZU",	"ZV",	"ZW",	"ZY",	"ZZ"	]
];

var words = [
[	"X",	"ABBA",	"Airco",	"AD",	"aerobics",	"Afro",	"Zilver",	"AH ",	"AI",	"Ajax",	"Ark",	"Alien",	"Arm",	"Anus",	"Aorta",	"Appel",	"Arjan",	"Ass",	"Auto",	"Augurk",	"Afval",	"AOW",	"Axe",	"Azijn"	],
[	"Bal",	"X",	"Bacon",	"Bed",	"Beer",	"Boef",	"Boog",	"BH",	"Biljard",	"Bij",	"Boek",	"Bril",	"Bom",	"Banaan",	"Boor",	"BP",	"Bier",	"Bas",	"Boot",	"Bus",	"Bever",	"Bowlen",	"Boxer",	"Bezem"	],
[	"Circa",	"Cube",	"X",	"Code",	"Cement",	"Café",	"Cigarette",	"Czech",	"Circus",	"Chipjes",	"Cake",	"Clown",	"Cam",	"Citroen",	"Cor",	"Cape",	"Computer",	"Chess",	"Cat",	"Cup",	"Cave",	"Cow",	"Cijfer, Charly",	"CZ"	],
[	"Dia",	"Dobby",	"Doc.",	"X",	"Dead",	"Doof",	"Dog",	"DHL",	"Dik",	"Dj",	"Dak",	"Dell",	"Dam",	"Donut",	"Deo",	"Dop",	"Draak",	"Das, DS",	"Dart",	"Drum",	"DVD",	"Duw",	"DIY",	"Dozen"	],
[	"Elsa",	"Eb",	"Eco",	"Eend",	"X",	"Elf",	"Egel",	"Eindhoven",	"Ei",	"Eject",	"Eik",	"Elmo",	"Eminem",	"Entei",	"Epo",	"EPVN",	"Eer",	"Eskimo",	"ET",	"Europe",	"Eevee",	"Eeuw",	"Elly",	"Ezel"	],
[	"Fifa",	"FaceBook",	"FMC",	"Fred",	"Fe",	"X",	"Frog",	"Fohn",	"Fiets",	"Fiji",	"Fik",	"Flood",	"FM",	"Fan",	"Fossiel",	"Fop",	"Fruit",	"Fles",	"Friet",	"Fuck You",	"Five",	"Flow",	"Fly",	"Fazant"	],
[	"Gans",	"Gebak",	"Guacamole",	"God",	"Game",	"Giraffe",	"X",	"Ghost",	"Ginny",	"Getij",	"Gek",	"Gel",	"Gum",	"Genie",	"Goal",	"GPS",	"Gras",	"Gas",	"Geit",	"Gup",	"Gravel",	"Geweer",	"Gym",	"Gazon"	],
[	"Haha",	"Hobbit",	"Helicopter",	"Hond",	"Hek",	"Half",	"HG",	"X",	"Haai",	"Hasj",	"Hak",	"Hal",	"Ham",	"Honing",	"Hol",	"Harp",	"Haar",	"Haas",	"Hart",	"Hut",	"Hiv",	"Hogwarts",	"Harry",	"Hazen"	],
[	"Iowa",	"Ibiza",	"Ice",	"ID Kaart",	"Idee",	"If Else",	"Iglo",	"Ijshockey",	"X",	"IJ",	"Ik",	"Island",	"Imker",	"Ion",	"Agar.io",	"iPad",	"Ier",	"ISS",	"ICT",	"Input",	"Ivysaur",	"Interview",	"IX (9)",	"Ijzer"	],
[	"Jaws",	"JBL",	"Jack",	"Jedi",	"Jeep",	"Juf",	"Jaguar",	"Jehova",	"Jigsaw",	"X",	"Joker",	"Jelly",	"Jam",	"Jeans",	"Jojo",	"Japan",	"JRCuber, Jaar",	"Jas",	"Jet",	"Jus",	"Java",	"Jew",	"Jinx, Joey, Jax",	"Jazzy"	],
[	"Kak",	"Keyboard",	"KFC",	"Kid",	"Koe",	"Korf",	"kraag",	"Kwal",	"Kraai",	"Kajak",	"X",	"Klok",	"Kom",	"Kan",	"Kano",	"Kop",	"Kurk",	"Kaas",	"Kont",	"Kunst",	"Kaviaar",	"Kiwi",	"Keizer",	"Kazen"	],
[	"La",	"Lab",	"Lucifer",	"Ladder",	"Lepel",	"Laaf",	"Lego",	"Lach",	"Lips",	"Lijk",	"Lak",	"X",	"Limoen",	"Land",	"London",	"Lamp",	"Leer",	"Lisa",	"Let",	"Lunch",	"Lava",	"Leeuw",	"Lynx",	"Linzen"	],
[	"Mama",	"MBO",	"iMac",	"Mand",	"ME",	"Metaforum",	"Magneet",	"MH17",	"Min",	"Mij",	"Mok",	"Mol",	"X",	"Maan",	"Mobiel",	"Map",	"Mars",	"Muis",	"Mat",	"Muur",	"Movie",	"Mouw",	"Mixer",	"Muziek"	],
[	"Natrium",	"NoteBook",	"Nacho",	"Needle",	"Neon",	"Nerf",	"Neger",	"NoaH",	"Nier",	"Ninja",	"Nek",	"Noël",	"Nemo",	"X",	"Nose",	"Nop",	"Nerd",	"Nest",	"Net",	"Nu",	"Navigatie",	"Newt, Newton",	"aNIJs",	"Nazi"	],
[	"Oma",	"Obelisk",	"Octopus",	"OCD",	"Oreo",	"Office",	"Orange",	"3x3OH",	"Oil",	"OJ Punctuel",	"Orka",	"Olive",	"Oom",	"Oen",	"X",	"Opera",	"Oor",	"Mac OS",	"Otter",	"Ouch",	"Oven",	"Owl",	"Onyx",	"Ozon"	],
[	"Panda",	"PB",	"PopCorn",	"Pad",	"Penguin",	"PDF",	"Pig",	"Pathe",	"Pi(π)",	"Pyjama",	"Pikachu",	"Paal",	"Pyraminx",	"Pen",	"Pop",	"X",	"Peer",	"Pas",	"Pet",	"Puma",	"PVC",	"Pauw",	"Prei, Penny",	"Puzzel"	],
[	"Ram",	"Rib",	"Racoon",	"Rood",	"Ree",	"Raaf",	"Rog, Rug",	"Rohan",	"Rice",	"Rij",	"Rook",	"Rol",	"Riem",	"Ren",	"Roos",	"Rapper",	"X",	"Rits",	"Rat",	"Rus",	"Raven",	"Rauw",	"Romy",	"Rozijn"	],
[	"Sla",	"Sub",	"Sec",	"SD kaart",	"Sea",	"Surf",	"Segway",	"Slush",	"Ski",	"Steve Jobs",	"Sok",	"Slak",	"Sims",	"Sonic",	"Soda",	"Sap",	"Stuur",	"X",	"Saté",	"Sun",	"SUV",	"Show",	"Sex",	"Seizoen"	],
[	"Tank",	"Tube",	"Truc",	"Toad",	"Thee",	"Tafel",	"Tiger",	"Thor",	"Tin",	"Tij",	"Tak",	"Trol",	"Tam",	"TNT",	"Tomb",	"Trompet",	"Train",	"Toast, Tas",	"X",	"Tutu",	"TV",	"Touw",	"Tax",	"Tazer"	],
[	"USA",	"UB40",	"Unicorn",	"Under",	"Ukelele",	"UFO",	"Uggs",	"uhhh…",	"Ui",	"",	"UK",	"Uil",	"Umbrella",	"Uno",	"Duo",	"UPS ",	"URL",	"Usher",	"Utopia",	"X",	"UV licht",	"Uw",	"UX",	"Uzi"	],
[	"Vla",	"Voetbal",	"Vacuum",	"Video",	"Vee",	"Verf",	"Vegas",	"VHS Tape",	"Vis",	"Vrij",	"Vak",	"Vel",	"Vorm",	"Vin",	"Vol, Veel",	"VIP",	"Veer",	"Vaas",	"Vat",	"VU Toren",	"X",	"View",	"Vortex",	"Vazen "	],
[	"Wak",	"Web",	"WC",	"Wood",	"Weed",	"Wafel",	"Wagen",	"Whip",	"Wit",	"Wij",	"Wiki",	"Wall",	"Worm",	"Window",	"Wolf",	"Weapons",	"War",	"Wasabi",	"Water",	"Wurm",	"Weaver",	"X",	"Wax",	"Wezen"	],
[	"Yang",	"Xbox",	"XTC",	"Yoda",	"Yeti",	"Yaws",	"Yoga",	"Yoghurt",	"Yin",	"YJ",	"Yak",	"Yellow",	"X-man",	"Yen",	"Xenos",	"Ypsilon",	"X-ray",	"Yoshi",	"Xatu",	"Phil Yu",	"Xavi",	"",	"X",	"XYZ"	],
[	"Zaandam",	"Zebra",	"Zac",	"Zelda",	"Zee",	"Zalf",	"Zagen",	"Zaha",	"Ziggy",	"Zij",	"Zak",	"Zaal",	"Zimbabwe",	"Zon",	"Zoo",	"Zweep",	"Zuur",	"Zes",	"Zoet",	"Zus",	"Zeven",	"Zwaluw",	"",	"X"	]
];

var good = localStorage.getItem('good') || 0;
var total = localStorage.getItem('total') || 0;





function goodResult(){
	good ++;
		total ++;

	next();
		turn();

}
function wrongResult(){
		total ++;

	next();
		turn();

}
function next(){
	var i = Math.floor(Math.random() * 24);
	var j = Math.floor(Math.random() * 24);
	while (i==j){
		j = Math.floor(Math.random() * 24);
	}
	var word = words[i][j];
	var letter = letters[i][j];
	document.getElementById("front").innerHTML=letter;
	document.getElementById("back").innerHTML=word;
	document.getElementById("goodCount").innerHTML=good;
		document.getElementById("total").innerHTML=total;


  localStorage.setItem('good', good);
  localStorage.setItem('total', total);

	}
function turn(){
	var element = document.getElementById("word");
    element.classList.toggle("active");
	var element = document.getElementById("bottom_container");
    element.classList.toggle("active");
}
	