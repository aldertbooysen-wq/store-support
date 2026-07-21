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
    "id": "pos",
    "label": "Point of Sales",
    "icon": "💻",
    "subCategories": [
      {
        "id": "mod_pc",
        "label": "1. MOD PC",
        "icon": "🖥️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>PC display is blank</h4>Check that the PC is switched on. <br><br>✅ Ensure the cable is securely plugged into both the PC and the wall socket.",
          "<h4 style='color: #0056b3; margin-top:0;'>Message: Error Connecting to Database</h4>Switch on the Gaap server inside the top server cabinet",
          "<h4 style='color: #0056b3; margin-top:0;'>Cannot do Cashups</h4>Sales Importer possibly down. Restart PC",
          "<h4 style='color: #0056b3; margin-top:0;'>Stock does not Update</h4>Sales Importer possibly down. Restart PC",
          "<h4 style='color: #0056b3; margin-top:0;'>Cannot do a Dayend</h4>Check all tills are switched on<br><br>✅ Check for stored orders <br><br>✅ remove / void stored orders <br><br>✅ Confirm dayend wizard steps were followed",
          "<h4 style='color: #0056b3; margin-top:0;'>Online Orders not coming through</h4>Switch on the Gaap server inside the top server cabinet <br><br>✅ Restart the Gaap server inside the top server cabinet <br><br>✅ Check if till 1 and the printer are switched on",
          "<h4 style='color: #0056b3; margin-top:0;'>Till shows \"Not OK\"</h4>Open Link System <br><br>✅ See which till it is <br><br>✅ Check if the till is switched on <br><br>✅ Restart the Till",
          "<h4 style='color: #0056b3; margin-top:0;'>Till 99 shows NOT OK</h4>Switch on the Gaap server inside the top server cabinet <br><br>✅ Restart the Gaap server inside the top server cabinet"
        ]
      },
      {
        "id": "tills",
        "label": "2. Tills",
        "icon": "📠",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Screen is blank</h4>Check the power cable is secured <br><br>✅ Switch on the till <br><br>✅ Check the monitor power light",
          "<h4 style='color: #0056b3; margin-top:0;'>POS Application. Wpro freezes</h4>Force shutdown the till by holding the power button till the display goes black <br><br>✅ Count to 20 <br><br>✅ Switch on the till <br><br>✅ Wpro should start again",
          "<h4 style='color: #0056b3; margin-top:0;'>Error shows \"Not connected to server\"</h4>Switch off the till <br><br>✅ Unplug the network cable and plug it in again <br><br>✅ Switch till on again",
          "<h4 style='color: #0056b3; margin-top:0;'>New Promotions are not on Tills</h4>Close Retail Office <br><br>✅ Run Upload to HQ <br><br>✅ Open Retail Office <br><br>✅ Transmit Stocks, Departments and Preps to tills",
          "<h4 style='color: #0056b3; margin-top:0;'>Printer not printing</h4>Shut down the till <br><br>✅ Reset all the cables <br><br>✅ Open the lid and remove the printer roll.  Put it back again and close lid <br><br>✅ Restart the till and the printer",
          "<h4 style='color: #0056b3; margin-top:0;'>Cashier cannot login</h4>On the MOD pc open Link System <br><br>✅ Wait till all tills shows OK <br><br>✅ Transmit cashiers to the tills <br><br>✅ Still not able to login: Cashier is not enrolled to work on the till.  Call the office to enroll the cashier <br><br>✅ Cashier permissions not setup correctly. Call the office",
          "<h4 style='color: #0056b3; margin-top:0;'>Till not responding</h4>Switch off the till <br><br>✅ remove the network cable <br><br>✅ Plug the cable back in <br><br>✅ Start the till again"
        ]
      },
      {
        "id": "screens",
        "label": "3. Packscreens",
        "icon": "📱",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Unresponsive Screen</h4>Switch off the screen <br><br>✅ remove the network cable <br><br>✅ Plug the cable back in <br><br>✅ Start the screen again",
          "<h4 style='color: #0056b3; margin-top:0;'>Orders Not Showing</h4>Switch off the screen <br><br>✅ remove the network cable <br><br>✅ Plug the cable back in <br><br>✅ Start the screen again",
          "<h4 style='color: #0056b3; margin-top:0;'>Screen is blank</h4>Check the power cable is secured <br><br>✅ Switch on the screen<br><br>✅ Check the monitor power light",
          "<h4 style='color: #0056b3; margin-top:0;'>Application freezes</h4>Force shutdown the screen by holding the power button till the display goes black <br><br>✅ Count to 20 <br><br>✅ Switch on the screen",
          "<h4 style='color: #0056b3; margin-top:0;'>Error shows \"Not connected to server\"</h4>Switch off the screen <br><br>✅ Unplug the network cable and plug it in again <br><br>✅ Switch screen on again",
          "<h4 style='color: #0056b3; margin-top:0;'>New Promotions are not on the screens</h4>Close Retail Office <br><br>✅ Run Upload to HQ <br><br>✅ Open Retail Office <br><br>✅ Transmit Stocks, Departments and Preps to tills"
        ]
      }
    ]
  },
  {
    "id": "online",
    "label": "Yum Online",
    "icon": "🌐",
    "subCategories": [
      {
        "id": "yum",
        "label": "1. Yum Online",
        "icon": "🍔",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Orders not showing on pack screens</h4>Switch on the Gaap server inside the top server cabinet <br><br>✅ Restart the Gaap server inside the top server cabinet <br><br>✅ Check for failed orders printed at printer nr 1 <br><br>✅ Check emails to see if online order did come through <br><br>✅ Open ORDERSERV website and see if you can find the customer order"
        ]
      },
      {
        "id": "mrd",
        "label": "2. MrD",
        "icon": "🛵",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Orders not showing on pack screens</h4>Switch on the Gaap server inside the top server cabinet <br><br>✅ Restart the Gaap server inside the top server cabinet <br><br>✅ Check for failed orders printed at printer nr 1 <br><br>✅ Check emails to see if online order did come through <br><br>✅ Open ORDERSERV website and see if you can find the customer order"
        ]
      },
      {
        "id": "uber",
        "label": "3. Uber",
        "icon": "🚗",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Orders not showing on pack screens</h4>Switch on the Gaap server inside the top server cabinet <br><br>✅ Restart the Gaap server inside the top server cabinet <br><br>✅ Check for failed orders printed at printer nr 1 <br><br>✅ Check emails to see if online order did come through <br><br>✅ Open ORDERSERV website and see if you can find the customer order"
        ]
      }
    ]
  },
  {
    "id": "internet",
    "label": "Internet",
    "icon": "🌐",
    "subCategories": [
      {
        "id": "router",
        "label": "1. Router / Fibre",
        "icon": "📡",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Internet Down</h4>On the MOD pc open the internet browser and search for the YUM site <br><br>✅ If site does not open it is the internet <br><br>✅ Find the router in the switch cabinet and restart it <br><br>✅ Wait for 10 minutes <br><br>✅ Check if you can open the internet site"
        ]
      },
      {
        "id": "wifi",
        "label": "2. Wi-Fi & Devices",
        "icon": "📶",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Wi-Fi Down</h4>Find a Yum elearning tablet <br><br>✅ Open an internet browser <br><br>✅ Search for the YUM website <br><br>✅ If it does not open the backoffice Wi-Fi is down <br><br>✅ Now connect a mobile phone to the FREE Wi-Fi <br><br>✅ Open an internet page <br><br>✅ If it does not open the customer Wi-Fi is also down <br><br>✅ Find the router in the switch cabinet and restart it <br><br>✅ Wait 10 minutes <br><br>✅ Check again if you can open a website from the tablet"
        ]
      }
    ]
  },
  {
    "id": "kiosks",
    "label": "Kiosks",
    "icon": "📺",
    "subCategories": [
      {
        "id": "k_hw",
        "label": "1. Hardware",
        "icon": "⚙️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Kiosk is not responding</h4>Restart by switching off at the plug and start again",
          "<h4 style='color: #0056b3; margin-top:0;'>Shows \"OOPS\" on screen</h4>Switch on the Gaap server inside the top server cabinet",
          "<h4 style='color: #0056b3; margin-top:0;'>Orders not printing</h4>Check till 1 is switched on else restart till nr 1",
          "<h4 style='color: #0056b3; margin-top:0;'>Payment Device</h4>Check cables."
        ]
      },
      {
        "id": "k_sw",
        "label": "2. Software",
        "icon": "💻",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Internet</h4>Check connection.",
          "<h4 style='color: #0056b3; margin-top:0;'>Orders not coming through on pack screens</h4>Restart the Gaap server allocated in the top server cabinet <br><br>✅ Check that Till nr 1 is switched on <br><br>✅ Check that printer at till nr 1 is switched on"
        ]
      }
    ]
  },
  {
    "id": "cash",
    "label": "ABM",
    "icon": "💵",
    "subCategories": [
      {
        "id": "d_power",
        "label": "1. Power & System",
        "icon": "🔌",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Powered On?</h4>Check UPS.",
          "<h4 style='color: #0056b3; margin-top:0;'>Restart</h4>Restart unit."
        ]
      },
      {
        "id": "d_errors",
        "label": "2. Errors & Jams",
        "icon": "⚠️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Error Msgs</h4>Take photo.",
          "<h4 style='color: #0056b3; margin-top:0;'>Jams</h4>Clear jams carefully."
        ]
      }
    ]
  },
  {
    "id": "cit",
    "label": "Cash in Transit",
    "icon": "💵",
    "subCategories": [
      {
        "id": "cit_sched",
        "label": "1. Collections",
        "icon": "🚚",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Schedule</h4>Verify today's date.",
          "<h4 style='color: #0056b3; margin-top:0;'>Cash Bags</h4>Documentation."
        ]
      },
      {
        "id": "cit_sec",
        "label": "2. Security",
        "icon": "🔒",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Deposita Door</h4>Check if closed.",
          "<h4 style='color: #0056b3; margin-top:0;'>Evidence</h4>Take photos."
        ]
      }
    ]
  },
  {
    "id": "headsets",
    "label": "Drive Thru",
    "icon": "🎧",
    "subCategories": [
      {
        "id": "h_hw",
        "label": "1. Headsets",
        "icon": "🎧",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Battery</h4>Check charge.",
          "<h4 style='color: #0056b3; margin-top:0;'>Reboot</h4>Turn off/on.",
          "<h4 style='color: #0056b3; margin-top:0;'>Broken headset</h4>Log a call with Gaap for the repair <br><br>✅ Contact the Courier to pickup and deliver it to Gaap repair centre"
        ]
      },
      {
        "id": "h_base",
        "label": "2. Base Station",
        "icon": "🎛️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Power</h4>Check lights.",
          "<h4 style='color: #0056b3; margin-top:0;'>System</h4>Check lane detection.",
          "<h4 style='color: #0056b3; margin-top:0;'>Not Counting Cars</h4>Reset the cables on the CU box"
        ]
      }
    ]
  },
  {
    "id": "music",
    "label": "Music",
    "icon": "🎵",
    "subCategories": [
      {
        "id": "m_amp",
        "label": "1. Amplifier",
        "icon": "🔈",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Powered On?</h4>Check volume.",
          "<h4 style='color: #0056b3; margin-top:0;'>Power Issues</h4>Check UPS."
        ]
      },
      {
        "id": "m_nuc",
        "label": "2. Player (NUC)",
        "icon": "🖥️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Restart</h4>Power cycle.",
          "<h4 style='color: #0056b3; margin-top:0;'>Internet</h4>Check connection."
        ]
      }
    ]
  },
  {
    "id": "cards",
    "label": "Card Machines",
    "icon": "💳",
    "subCategories": [
      {
        "id": "c_hw",
        "label": "1. Hardware",
        "icon": "💳",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Display</h4>Check screen.",
          "<h4 style='color: #0056b3; margin-top:0;'>Restart Till</h4>Restart Windows.",
          "<h4 style='color: #0056b3; margin-top:0;'>Only 1 card machine is down</h4>Check cables. Restart the till",
          "<h4 style='color: #0056b3; margin-top:0;'>All the card machines are down</h4>Restart the Gaap server allocated in the top server cabinet"
        ]
      },
      {
        "id": "c_net",
        "label": "2. Network",
        "icon": "🌍",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Network Cable</h4>Verify connection bu unplugging and plug in again",
          "<h4 style='color: #0056b3; margin-top:0;'>Kiosk card machine not working</h4>Restart by switching off at the plug and start again"
        ]
      }
    ]
  },
  {
    "id": "cctv",
    "label": "CCTV",
    "icon": "📹",
    "subCategories": [
      {
        "id": "cc_cam",
        "label": "1. Cameras",
        "icon": "📹",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Monitor</h4>Check display.",
          "<h4 style='color: #0056b3; margin-top:0;'>Offline?</h4>Identify camera."
        ]
      },
      {
        "id": "cc_nvr",
        "label": "2. NVR",
        "icon": "💾",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Lights</h4>Check recorder.",
          "<h4 style='color: #0056b3; margin-top:0;'>Playback</h4>Test footage.",
          "<h4 style='color: #0056b3; margin-top:0;'>All cameras show No Video</h4>power",
          "<h4 style='color: #0056b3; margin-top:0;'>Cameras do not record</h4>HDD space",
          "<h4 style='color: #0056b3; margin-top:0;'>Cannot access the cameras</h4>IP / power"
        ]
      }
    ]
  },
  {
    "id": "printer",
    "label": "Office Printer",
    "icon": "🖨️",
    "subCategories": [
      {
        "id": "p_hw",
        "label": "1. Hardware",
        "icon": "⚙️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Power</h4>Check cables.",
          "<h4 style='color: #0056b3; margin-top:0;'>Errors</h4>Check display."
        ]
      },
      {
        "id": "p_sup",
        "label": "2. Supplies",
        "icon": "📄",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Paper/Toner</h4>Replace if low.",
          "<h4 style='color: #0056b3; margin-top:0;'>Jams</h4>Clear path."
        ]
      }
    ]
  },
  {
    "id": "telephone",
    "label": "Telephone",
    "icon": "📞",
    "subCategories": [
      {
        "id": "t_hw",
        "label": "1. Hardware",
        "icon": "☎️",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Power</h4>Check screen.",
          "<h4 style='color: #0056b3; margin-top:0;'>Restart</h4>Replug cable."
        ]
      },
      {
        "id": "t_net",
        "label": "2. Network",
        "icon": "🌐",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Error Msg</h4>Take photo.",
          "<h4 style='color: #0056b3; margin-top:0;'>Test</h4>Make call."
        ]
      }
    ]
  },
  {
    "id": "office",
    "label": "Emails",
    "icon": "📧",
    "subCategories": [
      {
        "id": "e_out",
        "label": "1. Outlook",
        "icon": "📩",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Restart</h4>Close/Open.",
          "<h4 style='color: #0056b3; margin-top:0;'>Status</h4>Connected?"
        ]
      },
      {
        "id": "e_net",
        "label": "2. Mailbox",
        "icon": "🌍",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Internet</h4>Check connection.",
          "<h4 style='color: #0056b3; margin-top:0;'>Web Test</h4>Use Webmail."
        ]
      }
    ]
  },
  {
    "id": "tablets",
    "label": "Tablets",
    "icon": "📱",
    "subCategories": [
      {
        "id": "tb_hw",
        "label": "1. Hardware",
        "icon": "📱",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Battery</h4>Check charge.",
          "<h4 style='color: #0056b3; margin-top:0;'>Damage</h4>Check screen."
        ]
      },
      {
        "id": "tb_sw",
        "label": "2. Software",
        "icon": "🌐",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Wi-Fi</h4>Check connection.",
          "<h4 style='color: #0056b3; margin-top:0;'>App</h4>Open training app."
        ]
      }
    ]
  },
  {
    "id": "locks",
    "label": "Toilet Door Locks",
    "icon": "🔐",
    "subCategories": [
      {
        "id": "l_hw",
        "label": "1. Keypad",
        "icon": "🔢",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Keypad</h4>Check buttons.",
          "<h4 style='color: #0056b3; margin-top:0;'>Battery</h4>Low battery warning?"
        ]
      },
      {
        "id": "l_op",
        "label": "2. Operation",
        "icon": "🚪",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>PIN</h4>Enter slowly.",
          "<h4 style='color: #0056b3; margin-top:0;'>Obstruction</h4>Door alignment."
        ]
      }
    ]
  },
  {
    "id": "electrical",
    "label": "Electrical",
    "icon": "⚡",
    "subCategories": [
      {
        "id": "dents_pots",
        "label": "1. Pots / Fryers",
        "icon": "🥘",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Power</h4>Check if the pot/fryer is plugged in and switched on.",
          "<h4 style='color: #0056b3; margin-top:0;'>Temperature</h4>Verify the thermostat is set to the correct temperature.",
          "<h4 style='color: #0056b3; margin-top:0;'>Safety Cut-off</h4>Check if the safety reset button has been triggered."
        ]
      },
      {
        "id": "dents_ovens",
        "label": "2. Ovens",
        "icon": "🔥",
        "finalChecks": [
          "<h4 style='color: #0056b3; margin-top:0;'>Power Supply</h4>Check the isolator switch is on.",
          "<h4 style='color: #0056b3; margin-top:0;'>Elements</h4>Ensure the oven is heating up evenly.",
          "<h4 style='color: #0056b3; margin-top:0;'>Door Seal</h4>Check if the door closes tightly to maintain heat."
        ]
      }
    ]
  }
];

const DEFAULT_CONTACTS = {
  "pos": {
    "type": "call",
    "contacts": [
      {
        "name": "Gaap Helpdesk",
        "role": "Log on Retail Office 'New Case'. No calls.",
        "phone": ""
      },
      {
        "name": "Abduragmaan (Gaap)",
        "role": "POS / Cabling WhatsApp Escalation",
        "phone": "0738600229"
      }
    ]
  },
  "online": {
    "type": "call",
    "contacts": [
      {
        "name": "Gaap Helpdesk",
        "role": "Online Orders Support",
        "phone": ""
      }
    ]
  },
  "internet": {
    "type": "call",
    "contacts": [
      {
        "name": "Exmile Support",
        "role": "Level 1 (WhatsApp / Email)",
        "phone": "0636839085",
        "email": "support@exmile.co.za"
      },
      {
        "name": "Adelaide",
        "role": "Level 2 (Centre Manager)",
        "phone": "0636839085",
        "email": "adelaideg@exmile.co.za"
      },
      {
        "name": "Ilario",
        "role": "Level 3 (Account Manager)",
        "phone": "0768392508",
        "email": "ilarioh@exmile.co.za"
      },
      {
        "name": "Bianca",
        "role": "Level 4 (COO)",
        "phone": "0645164913",
        "email": "biancat@exmile.co.za"
      }
    ]
  },
  "kiosks": {
    "type": "call",
    "contacts": [
      {
        "name": "ODM Service Desk",
        "role": "1st Line Support",
        "phone": "0861106041",
        "email": "clientsupport@onedigitalmedia.com"
      }
    ]
  },
  "cash": {
    "type": "call",
    "contacts": [
      {
        "name": "Deposita Call Centre",
        "role": "ABM Maintenance & Support",
        "phone": "0861000965",
        "email": "deposita.ccc@za.g4s.com"
      },
      {
        "name": "Nathan Smith",
        "role": "Priority L1 (CIT Manager)",
        "phone": "0835606214"
      },
      {
        "name": "Nicodemeus Carelse",
        "role": "Priority L2 (Branch Security)",
        "phone": "0825621106"
      },
      {
        "name": "Andriella Da Fonseca",
        "role": "Priority L3 (Regional Sales)",
        "phone": "0665873354"
      },
      {
        "name": "Steven Collinson",
        "role": "Priority L4 (Regional Director)",
        "phone": "0715539624"
      },
      {
        "name": "Jaylee Bourne",
        "role": "Box Room Queries (CPC Manager)",
        "phone": "0834429630"
      }
    ]
  },
  "cit": {
    "type": "call",
    "contacts": [
      {
        "name": "G4S Helpdesk",
        "role": "CIT / Collection Support",
        "phone": "0861126789"
      },
      {
        "name": "Nathan Smith",
        "role": "CIT Manager",
        "phone": "0835606214"
      }
    ]
  },
  "headsets": {
    "type": "call",
    "contacts": [
      {
        "name": "Gaap Workshop",
        "role": "Log call, courier item.",
        "phone": ""
      },
      {
        "name": "Andre (Gaap)",
        "role": "Speaker Box / Timers Escalation",
        "phone": "0715766421"
      }
    ]
  },
  "music": {
    "type": "call",
    "contacts": [
      {
        "name": "Gresham Helpdesk",
        "role": "Main Support",
        "phone": "0116564348",
        "email": "support@mcm.co.za"
      },
      {
        "name": "Darius (360 Degrees)",
        "role": "Music / DMX Decoder Escalation",
        "phone": "0722123933"
      }
    ]
  },
  "cards": {
    "type": "call",
    "contacts": [
      {
        "name": "Transaction Junction",
        "role": "Level 1 Helpdesk",
        "phone": "0769914982"
      },
      {
        "name": "Leslie",
        "role": "Level 2 (Operations Manager)",
        "phone": "0742635504"
      },
      {
        "name": "Ysuf",
        "role": "Level 3 (Account Manager)",
        "phone": "0825704820"
      }
    ]
  },
  "cctv": {
    "type": "call",
    "contacts": [
      {
        "name": "Darius (360 Degrees)",
        "role": "CCTV Support",
        "phone": "0722123933"
      }
    ]
  },
  "printer": {
    "type": "call",
    "contacts": [
      {
        "name": "Raydian Support",
        "role": "Level 1",
        "phone": "",
        "email": "support@raydian.co.za"
      },
      {
        "name": "Adiel",
        "role": "Level 2 (Technical)",
        "phone": "0833245309"
      },
      {
        "name": "Busi",
        "role": "Level 3 (Account Manager)",
        "phone": "0723422211"
      }
    ]
  },
  "telephone": {
    "type": "call",
    "contacts": [
      {
        "name": "Aldert",
        "role": "Switchtel Support",
        "phone": "0835644582"
      }
    ]
  },
  "office": {
    "type": "call",
    "contacts": [
      {
        "name": "Aldert",
        "role": "Microsoft 365 / Emails",
        "phone": "0835644582"
      }
    ]
  },
  "tablets": {
    "type": "call",
    "contacts": [
      {
        "name": "Aldert",
        "role": "Hardware Issues (RuggedSA)",
        "phone": "0835644582"
      },
      {
        "name": "Belinda",
        "role": "Software / Training Issues",
        "phone": "0824962256"
      }
    ]
  },
  "locks": {
    "type": "call",
    "contacts": [
      {
        "name": "Darius (360 Degrees)",
        "role": "Toilet Locks",
        "phone": "0722123933"
      }
    ]
  },
  "electrical": {
    "type": "call",
    "contacts": [
      {
        "name": "Dents Support",
        "role": "Electrical / Oven Repairs",
        "phone": "0123456789"
      }
    ]
  }
};

const CONTACTS = {};
