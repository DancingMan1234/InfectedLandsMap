
//  MAP DATA 

window.MAP_CONFIG = {
  title: "Infected Lands Interactive Map FOR FM 😈",
  creator: "Discord: @LucklessLeaf625, Roblox: @DancingMan1234",
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
  { id: "GunStore",    group: "Lootable", name: "Gun Store / Gun Store Crates",    icon: "⚔️", color: "#634000" },

  { id: "HardwareStore",    group: "POI", name: "Hardware Store",    icon: "🛠️", color: "#cec54b" },
  { id: "MedicalStore",    group: "POI", name: "Medical Store",    icon: "💊", color: "#da403b" },
  { id: "FoodStore",    group: "POI", name: "Food Store",    icon: "🍗", color: "#68c7a2" },
]

// x / z are Roblox world positions. `id` must be unique and never change

window.MAP_MARKERS = [
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


  {"id":"HardwareStore_mwx6v4he","type":"HardwareStore","name":"Southpoint Hardware Store","x":591,"z":-691,"desc":"5x Shelves,Nearest building to Fire Station"},
  {"id":"HardwareStore_mwx6vpcw","type":"HardwareStore","name":"Shopping Centre Hardware Store","x":-74,"z":574,"desc":"Middle Building"},
  {"id":"GunStore_mwy7tiiq","type":"GunStore","name":"Southpoint Gun Store","x":553,"z":-680,"desc":"8x GS Shelves, 3x GS Displays, 3x Weapon Crates"},

  {"id":"MedicalStore_mwx70ygz","type":"MedicalStore","name":"Southpoint Pharmacy","x":569,"z":-668,"desc":"Pharmacy next to the Police Station"},

  {"id":"GreenCrate_mwx778yp","type":"GreenCrate","name":"Airfield Army Crate","x":297,"z":-335,"desc":"1x, in the Westmost Hangar"},
  {"id":"TanCrate_mwx78kj7","type":"TanCrate","name":"Airfield Weapon Crates","x":309,"z":-339,"desc":"5x, 3 in the South Hangar, Two in the West Hangar"},

  {"id":"MedicalSupply_mwx7dkys","type":"MedicalSupply","name":"Evac Point MedCase","x":54,"z":-287,"desc":"Behind the Ambulance in the centre"},
  {"id":"GreenCrate_mwx7f5gh","type":"GreenCrate","name":"Evac Point Army Crate","x":61,"z":-286,"desc":"1x, Centermost Green Tent"},
  {"id":"TanCrate_mwy6afr5","type":"TanCrate","name":"Evac Point Weapon Crate","x":70,"z":-286,"desc":"2x, One between helipad and crashed heli, other in the south-eastern Green Tent"},

  {"id":"FoodStore_mwx7l20t","type":"FoodStore","name":"Southpoint Food Maket","x":466,"z":-692,"desc":""},
  {"id":"FoodStore_mwx7lwlk","type":"FoodStore","name":"Southpoint Diner","x":481,"z":-692,"desc":""},

  {"id":"GreenCrate_mwy68rzf","type":"GreenCrate","name":"Radio Tower Army Crate","x":-819,"z":245,"desc":"2x, both on the first platform"},

  {"id":"GunStore_mwy6ozoo","type":"GunStore","name":"Pineville Gun store","x":-685,"z":73,"desc":"2x GS Lockers, 8x GS Shelves, 4x GS Displays"},

  {"id":"HardwareStore_mwy6u9tn","type":"HardwareStore","name":"Pineville Hardware Store","x":-682,"z":-10,"desc":"Store is a bit generous, its one shelf. first store next to the humvee"},
  {"id":"TanCrate_mwy6v0dg","type":"TanCrate","name":"Pineville Humvee Crate","x":-683,"z":-25,"desc":"1x, Hidden behind the humvee next to the diner"},
  {"id":"FoodStore_mwy78rsf","type":"FoodStore","name":"Pineville Diner","x":-675,"z":-28,"desc":"Full Diner, Gas station next door for a little bit more food"},
];
