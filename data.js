const STORES = [
  { id: "airport", name: "Airport" },
  { id: "atlantis", name: "Atlantis" },
  { id: "belhar", name: "Belhar" },
  { id: "bellville", name: "Bellville" },
  { id: "bredasdorp", name: "Bredasdorp" },
  { id: "clanwilliam", name: "Clanwilliam" },
  { id: "douglas", name: "Douglas" },
  { id: "ekhaya_mall", name: "Ekhaya Mall" },
  { id: "embalenhle", name: "Embalenhle" },
  { id: "evander", name: "Evander" },
  { id: "george", name: "George" },
  { id: "glengarry", name: "Glengarry" },
  { id: "gordonsbaai", name: "Gordonsbaai" },
  { id: "grabouw", name: "Grabouw" },
  { id: "haasendal", name: "Haasendal" },
  { id: "hartswater", name: "Hartswater" },
  { id: "heiderand", name: "Heiderand" },
  { id: "hendrina", name: "Hendrina" },
  { id: "kalahari_mall", name: "Kalahari Mall" },
  { id: "kasselsvlei", name: "Kasselsvlei" },
  { id: "kathu_2", name: "Kathu 2" },
  { id: "kinross_sasol_n17", name: "Kinross Sasol N17" },
  { id: "kraaifontein", name: "Kraaifontein" },
  { id: "kuilsriver", name: "Kuilsriver" },
  { id: "kwanonqaba", name: "Kwanonqaba" },
  { id: "langebaan", name: "Langebaan" },
  { id: "malmesbury", name: "Malmesbury" },
  { id: "melkbos_strand", name: "Melkbos Strand" },
  { id: "middestad_mall", name: "Middestad Mall" },
  { id: "montagu", name: "Montagu" },
  { id: "northpine", name: "Northpine" },
  { id: "okovango", name: "Okovango" },
  { id: "pinehurst", name: "Pinehurst" },
  { id: "plettenberg_baai", name: "Plettenberg Baai" },
  { id: "polkadraai", name: "Polkadraai" },
  { id: "riversdal", name: "Riversdal" },
  { id: "saldanha", name: "Saldanha" },
  { id: "schweizer_reneke", name: "Schweizer Reneke" },
  { id: "secunda_2_east", name: "Secunda 2 East" },
  { id: "secunda_village", name: "Secunda Village" },
  { id: "simonsrust", name: "Simonsrust" },
  { id: "soneike", name: "Soneike" },
  { id: "springbok", name: "Springbok" },
  { id: "standerton", name: "Standerton" },
  { id: "standerton_3", name: "Standerton 3" },
  { id: "standerton_cbd", name: "Standerton CBD" },
  { id: "upington", name: "Upington" },
  { id: "villiersdorp", name: "Villiersdorp" },
  { id: "voorbaai", name: "Voorbaai" },
  { id: "vredendal", name: "Vredendal" },
  { id: "vredenburg", name: "Vredenburg" },
  { id: "wesbank", name: "Wesbank" },
  { id: "weskus_mall", name: "Weskus Mall" },
  { id: "zevenwacht", name: "Zevenwacht" }
];

const MENU_STRUCTURE = [
  {
    id: "gaap_tills",
    label: "GAAP - Tills / SCREENS / MOD PC",
    icon: "💻",
    subCategories: [
      { id: "mod_pc", label: "1. MOD PC", icon: "🖥️", finalChecks: ["<strong>Is the PC Switched On?</strong><br>✅ Check power cables and wall plug.", "<strong>Restart the PC</strong><br>✅ Hold power for 10 seconds if frozen."] },
      { id: "tills", label: "2. Tills", icon: "📠", finalChecks: ["<strong>Monitor Check</strong><br>✅ Check monitor power light.", "<strong>POS Application</strong><br>✅ Ensure POS app is open."] },
      { id: "screens", label: "3. Packscreens", icon: "📱", finalChecks: ["<strong>Unresponsive?</strong><br>✅ Check network cable and power.", "<strong>Order Not Showing?</strong><br>✅ Restart screen."] }
    ]
  },
  {
    id: "internet",
    label: "Exmile - Internet",
    icon: "🌐",
    subCategories: [
      { id: "router", label: "1. Router / Fibre", icon: "📡", finalChecks: ["<strong>Cable Check</strong><br>✅ Check network cables.", "<strong>Power Check</strong><br>✅ Ensure UPS is on."] },
      { id: "wifi", label: "2. Wi-Fi & Devices", icon: "📶", finalChecks: ["<strong>Test Device</strong><br>✅ Check internet access.", "<strong>Restart</strong><br>✅ Restart device."] }
    ]
  },
  {
    id: "kiosks",
    label: "ODM - Kiosks",
    icon: "📺",
    subCategories: [
      { id: "k_hw", label: "1. Hardware", icon: "⚙️", finalChecks: ["<strong>Power On?</strong><br>✅ Check cables.", "<strong>Restart</strong><br>✅ Hold power 10s."] },
      { id: "k_sw", label: "2. Software", icon: "💻", finalChecks: ["<strong>Internet</strong><br>✅ Check connection.", "<strong>Payment Device</strong><br>✅ Check cables."] }
    ]
  },
  {
    id: "cash",
    label: "Deposita - ABM",
    icon: "💵",
    subCategories: [
      { id: "d_power", label: "1. Power & System", icon: "🔌", finalChecks: ["<strong>Powered On?</strong><br>✅ Check UPS.", "<strong>Restart</strong><br>✅ Restart unit."] },
      { id: "d_errors", label: "2. Errors & Jams", icon: "⚠️", finalChecks: ["<strong>Error Msgs</strong><br>✅ Take photo.", "<strong>Jams</strong><br>✅ Clear jams carefully."] }
    ]
  },
  {
    id: "g4s",
    label: "G4S - CIT",
    icon: "💵",
    subCategories: [
      { id: "cit_sched", label: "1. Collections", icon: "🚚", finalChecks: ["<strong>Schedule</strong><br>✅ Verify today's date.", "<strong>Cash Bags</strong><br>✅ Documentation."] },
      { id: "cit_sec", label: "2. Security", icon: "🔒", finalChecks: ["<strong>Deposita Door</strong><br>✅ Check if closed.", "<strong>Evidence</strong><br>✅ Take photos."] }
    ]
  },
  {
    id: "headsets",
    label: "Headsets / Timers",
    icon: "🎧",
    subCategories: [
      { id: "h_hw", label: "1. Headsets", icon: "🎧", finalChecks: ["<strong>Battery</strong><br>✅ Check charge.", "<strong>Reboot</strong><br>✅ Turn off/on."] },
      { id: "h_base", label: "2. Base Station", icon: "🎛️", finalChecks: ["<strong>Power</strong><br>✅ Check lights.", "<strong>System</strong><br>✅ Check lane detection."] }
    ]
  },
  {
    id: "music",
    label: "Gresham - Music",
    icon: "🎵",
    subCategories: [
      { id: "m_amp", label: "1. Amplifier", icon: "🔈", finalChecks: ["<strong>Powered On?</strong><br>✅ Check volume.", "<strong>Power Issues</strong><br>✅ Check UPS."] },
      { id: "m_nuc", label: "2. Player (NUC)", icon: "🖥️", finalChecks: ["<strong>Restart</strong><br>✅ Power cycle.", "<strong>Internet</strong><br>✅ Check connection."] }
    ]
  },
  {
    id: "cards",
    label: "Card Machines",
    icon: "💳",
    subCategories: [
      { id: "c_hw", label: "1. Hardware", icon: "💳", finalChecks: ["<strong>Display</strong><br>✅ Check screen.", "<strong>Restart Till</strong><br>✅ Restart Windows."] },
      { id: "c_net", label: "2. Network", icon: "🌍", finalChecks: ["<strong>Internet</strong><br>✅ Verify connection.", "<strong>GAAP Server</strong><br>✅ Check cables."] }
    ]
  },
  {
    id: "cctv",
    label: "360 Degrees - CCTV",
    icon: "📹",
    subCategories: [
      { id: "cc_cam", label: "1. Cameras", icon: "📹", finalChecks: ["<strong>Monitor</strong><br>✅ Check display.", "<strong>Offline?</strong><br>✅ Identify camera."] },
      { id: "cc_nvr", label: "2. NVR", icon: "💾", finalChecks: ["<strong>Lights</strong><br>✅ Check recorder.", "<strong>Playback</strong><br>✅ Test footage."] }
    ]
  },
  {
    id: "printer",
    label: "Office Printer",
    icon: "🖨️",
    subCategories: [
      { id: "p_hw", label: "1. Hardware", icon: "⚙️", finalChecks: ["<strong>Power</strong><br>✅ Check cables.", "<strong>Errors</strong><br>✅ Check display."] },
      { id: "p_sup", label: "2. Supplies", icon: "📄", finalChecks: ["<strong>Paper/Toner</strong><br>✅ Replace if low.", "<strong>Jams</strong><br>✅ Clear path."] }
    ]
  },
  {
    id: "telephone",
    label: "Telephone",
    icon: "📞",
    subCategories: [
      { id: "t_hw", label: "1. Hardware", icon: "☎️", finalChecks: ["<strong>Power</strong><br>✅ Check screen.", "<strong>Restart</strong><br>✅ Replug cable."] },
      { id: "t_net", label: "2. Network", icon: "🌐", finalChecks: ["<strong>Error Msg</strong><br>✅ Take photo.", "<strong>Test</strong><br>✅ Make call."] }
    ]
  },
  {
    id: "office",
    label: "Emails",
    icon: "📧",
    subCategories: [
      { id: "e_out", label: "1. Outlook", icon: "📩", finalChecks: ["<strong>Restart</strong><br>✅ Close/Open.", "<strong>Status</strong><br>✅ Connected?"] },
      { id: "e_net", label: "2. Mailbox", icon: "🌍", finalChecks: ["<strong>Internet</strong><br>✅ Check connection.", "<strong>Web Test</strong><br>✅ Use Webmail."] }
    ]
  },
  {
    id: "tablets",
    label: "Tablets",
    icon: "📱",
    subCategories: [
      { id: "tb_hw", label: "1. Hardware", icon: "📱", finalChecks: ["<strong>Battery</strong><br>✅ Check charge.", "<strong>Damage</strong><br>✅ Check screen."] },
      { id: "tb_sw", label: "2. Software", icon: "🌐", finalChecks: ["<strong>Wi-Fi</strong><br>✅ Check connection.", "<strong>App</strong><br>✅ Open training app."] }
    ]
  },
  {
    id: "locks",
    label: "Door Locks",
    icon: "🔐",
    subCategories: [
      { id: "l_hw", label: "1. Keypad", icon: "🔢", finalChecks: ["<strong>Keypad</strong><br>✅ Check buttons.", "<strong>Battery</strong><br>✅ Low battery warning?"] },
      { id: "l_op", label: "2. Operation", icon: "🚪", finalChecks: ["<strong>PIN</strong><br>✅ Enter slowly.", "<strong>Obstruction</strong><br>✅ Door alignment."] }
    ]
  }
];

const DEFAULT_CONTACTS = {
  "tills": { type: "call", contacts: [{ name: "Gaap Helpdesk", role: "Log on Retail Office 'New Case'. No calls.", phone: "" }, { name: "Abduragmaan (Gaap)", role: "POS / Cabling WhatsApp Escalation", phone: "0738600229" }] },
  "internet": { type: "call", contacts: [{ name: "Exmile Support", role: "Level 1 (WhatsApp / Email)", phone: "0636839085", email: "support@exmile.co.za" }, { name: "Adelaide", role: "Level 2 (Centre Manager)", phone: "0636839085", email: "adelaideg@exmile.co.za" }, { name: "Ilario", role: "Level 3 (Account Manager)", phone: "0768392508", email: "ilarioh@exmile.co.za" }, { name: "Bianca", role: "Level 4 (COO)", phone: "0645164913", email: "biancat@exmile.co.za" }] },
  "kiosks": { type: "call", contacts: [{ name: "ODM Service Desk", role: "1st Line Support", phone: "0861106041", email: "clientsupport@onedigitalmedia.com" }] },
  "cash": { type: "call", contacts: [{ name: "Deposita Call Centre", role: "ABM Maintenance & Support", phone: "0861000965", email: "deposita.ccc@za.g4s.com" }, { name: "Nathan Smith", role: "Priority L1 (CIT Manager)", phone: "0835606214" }, { name: "Nicodemeus Carelse", role: "Priority L2 (Branch Security)", phone: "0825621106" }, { name: "Andriella Da Fonseca", role: "Priority L3 (Regional Sales)", phone: "0665873354" }, { name: "Steven Collinson", role: "Priority L4 (Regional Director)", phone: "0715539624" }, { name: "Jaylee Bourne", role: "Box Room Queries (CPC Manager)", phone: "0834429630" }] },
  "g4s": { type: "call", contacts: [{ name: "G4S Helpdesk", role: "CIT / Collection Support", phone: "0861126789" }, { name: "Nathan Smith", role: "CIT Manager", phone: "0835606214" }] },
  "headsets_gaap": { type: "call", contacts: [{ name: "Gaap Workshop", role: "Log call, courier item.", phone: "" }, { name: "Andre (Gaap)", role: "Speaker Box / Timers Escalation", phone: "0715766421" }] },
  "headsets_micros": { type: "call", contacts: [{ name: "Micros Workshop", role: "Log call, courier item.", phone: "" }] },
  "music": { type: "call", contacts: [{ name: "Gresham Helpdesk", role: "Main Support", phone: "0116564348", email: "support@mcm.co.za" }, { name: "Darius (360 Degrees)", role: "Music / DMX Decoder Escalation", phone: "0722123933" }] },
  "cards": { type: "call", contacts: [{ name: "Transaction Junction", role: "Level 1 Helpdesk", phone: "0769914982" }, { name: "Leslie", role: "Level 2 (Operations Manager)", phone: "0742635504" }, { name: "Ysuf", role: "Level 3 (Account Manager)", phone: "0825704820" }] },
  "cctv": { type: "call", contacts: [{ name: "Darius (360 Degrees)", role: "CCTV Support", phone: "0722123933" }] },
  "printer": { type: "call", contacts: [{ name: "Raydian Support", role: "Level 1", phone: "", email: "support@raydian.co.za" }, { name: "Adiel", role: "Level 2 (Technical)", phone: "0833245309" }, { name: "Busi", role: "Level 3 (Account Manager)", phone: "0723422211" }] },
  "telephone": { type: "call", contacts: [{ name: "Aldert", role: "Switchtel Support", phone: "0835644582" }] },
  "office": { type: "call", contacts: [{ name: "Aldert", role: "Microsoft 365 / Emails", phone: "0835644582" }] },
  "tablets": { type: "call", contacts: [{ name: "Aldert", role: "Hardware Issues (RuggedSA)", phone: "0835644582" }, { name: "Belinda", role: "Software / Training Issues", phone: "0824962256" }] },
  "locks": { type: "call", contacts: [{ name: "Darius (360 Degrees)", role: "Toilet Locks", phone: "0722123933" }] }
};

const CONTACTS = {};
const DEFAULT_CONTACTS = { /* Bly dieselfde as voorheen */ };
const CONTACTS = {};
