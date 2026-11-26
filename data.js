// ============================================================
//  MAP DATA — this is the only file you need to edit regularly
// ============================================================

window.MAP_CONFIG = {
  title: "Infected Lands Interactive Map",
  creator: "LucklessLeaf625",
  version: "1.8.5",

  // Your map image (a top-down screenshot/render of your game world).
  image: "map.png",
  imageWidth: 1235,   // pixel size of the image
  imageHeight: 1236,

  // The Roblox world coordinates (in studs) that the image's EDGES represent.
  // Top of the image = minZ (north is -Z in Roblox), left = minX.
  // Tip: in Studio, put a Part at each corner of your map and read its Position.
  world: { minX: -1000, maxX: 1000, minZ: -1000, maxZ: 1000 },

  minZoom: -2,
  maxZoom: 2,
};

// Categories are grouped in the sidebar. `color` is the pin colour, `icon` is any emoji
// (or swap for an image URL later).
window.MAP_CATEGORIES = [
  { id: "GreenCrate",  group: "Lootable",       name: "Army Crate",  icon: "🪖", color: "#664c26" },
  { id: "TanCrate",    group: "Lootable",       name: "Weapon Crate",    icon: "🔫", color: "#3b82f6" },
  { id: "ClothesRacks",  group: "Lootable",       name: "Clothing Rack", icon: "👕", color: "#f59e0b" },
  { id: "HardwareShelves",       group: "Lootable", name: "Hardware Shelves",    icon: "🛠️", color: "#cec54b" },
  { id: "MedicalSupply",    group: "Lootable", name: "Medical Shelves/Crate",    icon: "💊", color: "#da403b" },

  { id: "HardwareStore",    group: "POI", name: "Hardware Store",    icon: "🛠️", color: "#cec54b" },
  { id: "MedicalStore",    group: "POI", name: "Medical Store",    icon: "💊", color: "#da403b" },
  { id: "FoodStore",    group: "POI", name: "Food Store",    icon: "🍗", color: "#68c7a2" },
]

// x / z are Roblox world positions (studs). `id` must be unique and never change
// (it's used to remember what players have found).
window.MAP_MARKERS = [
  { id: "c1",  type: "chest_common", name: "Riverside Chest",  x: -620, z: -300, desc: "Behind the waterfall." },
  { id: "c2",  type: "chest_common", name: "Cabin Chest",      x: -200, z:  400, desc: "Inside the abandoned cabin." },
  { id: "c3",  type: "chest_common", name: "Rooftop Chest",    x:  300, z: -450, desc: "Climb the ladder on the east side." },
  { id: "r1",  type: "chest_rare",   name: "Cave Chest",       x:  550, z:  200, desc: "Needs the Torch item." },
  { id: "r2",  type: "chest_rare",   name: "Island Chest",     x: -750, z:  650, desc: "Reachable by boat only." },
  { id: "l1",  type: "chest_legend", name: "Dragon's Hoard",   x:  100, z:  -50, desc: "Drops after defeating the Dragon.", image: "" },
  { id: "n1",  type: "npc",          name: "Blacksmith",       x: -100, z: -200, desc: "Upgrade your weapons here." },
  { id: "n2",  type: "npc",          name: "Merchant",         x:  420, z:  480, desc: "Sells potions." },
  { id: "t1",  type: "teleporter",   name: "Teleporter A",     x: -500, z:  100, desc: "Links to Teleporter B." },
  { id: "t2",  type: "teleporter",   name: "Teleporter B",     x:  650, z: -650, desc: "Links to Teleporter A." },
  { id: "p1",  type: "puzzle",       name: "Rune Door",        x:  250, z:  700, desc: "Match the runes in order: ▲ ● ■" },
  { id: "b1",  type: "boss",         name: "Dragon",           x:  100, z:  -80, desc: "Level 30. Weak to ice." },
  { id: "s1",  type: "spawn",        name: "Wolf Pack",        x: -400, z: -650, desc: "Spawns at night." },

  {"id":"GreenCrate_mwx6oiok","type":"GreenCrate","name":"Watchtower","x":454,"z":140,"desc":"On top, on the balcony"},
  {"id":"GreenCrate_mwx6ok5u","type":"GreenCrate","name":"Watchtower","x":611,"z":-245,"desc":"On top, on the balcony"},
  {"id":"GreenCrate_mwx6om6k","type":"GreenCrate","name":"Watchtower","x":-536,"z":-210,"desc":"On top, on the balcony"},

  {"id":"TanCrate_mwx6pj34","type":"TanCrate","name":"Watchtower","x":591,"z":-242,"desc":"Underneath, Next to the ladder"},
  {"id":"TanCrate_mwx6pk6s","type":"TanCrate","name":"Watchtower","x":473,"z":149,"desc":"Underneath, Next to the ladder"},
  {"id":"TanCrate_mwx6pnrn","type":"TanCrate","name":"Watchtower","x":-526,"z":-209,"desc":"Underneath, Next to the ladder"},

  {"id":"ClothesRacks_mwx6qzsc","type":"ClothesRacks","name":"Clothing Store","x":568,"z":-681,"desc":"5 Clothing racks, inside the corner store."},


  {"id":"GreenCrate_mwx6t64q","type":"GreenCrate","name":"Checkpoint Delta","x":419,"z":509,"desc":"1x"},
  {"id":"GreenCrate_mwx6tdcl","type":"GreenCrate","name":"Checkpoint Alpha","x":296,"z":-711,"desc":"1x"},
  {"id":"GreenCrate_mwx6thes","type":"GreenCrate","name":"Checkpoint Charlie","x":-242,"z":-447,"desc":"1x"},
  {"id":"GreenCrate_mwx6tqhx","type":"GreenCrate","name":"Checkpoint Bravo","x":-334,"z":711,"desc":"1x"},


  {"id":"HardwareStore_mwx6v4he","type":"HardwareStore","name":"Southpoint Hardware Store","x":591,"z":-691,"desc":"Nearest building to Fire Station"},
  {"id":"HardwareStore_mwx6vpcw","type":"HardwareStore","name":"Shopping Centre Hardware Store","x":-74,"z":574,"desc":"Middle Building"},

  {"id":"MedicalStore_mwx70ygz","type":"MedicalStore","name":"Southpoint Pharmacy","x":569,"z":-668,"desc":"Pharmacy next to the Police Station"},

  {"id":"GreenCrate_mwx778yp","type":"GreenCrate","name":"Airfield Army Crate","x":297,"z":-335,"desc":"1x, in the Westmost Hangar"},
  {"id":"TanCrate_mwx78kj7","type":"TanCrate","name":"Airfield Weapon Crates","x":309,"z":-339,"desc":"5x, 3 in the South Hangar, Two in the West Hangar"},

  {"id":"MedicalSupply_mwx7dkys","type":"MedicalSupply","name":"Evac Point MedCase","x":54,"z":-287,"desc":"Behind the Ambulance in the centre"},
  {"id":"GreenCrate_mwx7ec70","type":"GreenCrate","name":"Evac Point ","x":415,"z":-355,"desc":"Behind the Ambulance in the centre"},
  {"id":"GreenCrate_mwx7f5gh","type":"GreenCrate","name":"Evac Point Army Crate","x":61,"z":-286,"desc":"1x, Centermost Green Tent"},
  {"id":"TanCrate_mwx7gsq6","type":"TanCrate","name":"Evac Point WeaponCrate","x":306,"z":-330,"desc":"2x, One in South-East green tent, One next to the Helipad"},

  {"id":"FoodStore_mwx7l20t","type":"FoodStore","name":"Southpoint Food Maket","x":466,"z":-692,"desc":""},
  {"id":"FoodStore_mwx7lwlk","type":"FoodStore","name":"Southpoint Diner","x":481,"z":-692,"desc":""},

];
