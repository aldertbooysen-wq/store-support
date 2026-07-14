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

const ISSUES = [
  { 
    id: "tills", 
    label: "GAAP - Tills / SCREENS / MOD PC", 
    icon: "💻", 
    subCategories: [
      {
        id: "mod_pc",
        label: "MOD PC",
        checks: [
          "<strong>Is the PC Switched On?</strong><br>✅ Check that:<ul><li>The power cable is plugged in securely.</li><li>The wall plug is switched on.</li><li>Any UPS or surge protector is switched on.</li><li>The PC power button has been pressed.</li><li>If there are no lights or sounds at all, check another wall socket if possible.</li></ul>",
          "<strong>Restart the PC</strong><br>Many issues are resolved by a restart.<br>✅ Click Restart from Windows if possible.<br>If the PC is frozen:<ul><li>Hold the power button for 10 seconds until it switches off.</li><li>Wait 30 seconds.</li><li>Switch it back on.</li></ul>",
          "<strong>Check All Cables</strong><br>✅ Ensure:<ul><li>Power cables are connected.</li><li>Network cable is plugged in.</li><li>Keyboard and mouse are connected.</li><li>Look for any loose or disconnected cables.</li></ul>"
        ]
      },
      {
        id: "tills_hardware",
        label: "Tills",
        checks: [
          "<strong>Is the Monitor On?</strong><br>✅ Check that:<ul><li>The monitor power light is on.</li><li>The monitor is not showing 'No Signal.'</li><li>Cables between the PC and monitor are connected firmly.</li><li>Try turning the monitor off and on again.</li></ul>",
          "<strong>If the POS is Not Working</strong><br>✅ Check:<ul><li>POS application is open.</li><li>Receipt printer is powered on.</li><li>Scanner cables are connected.</li><li>Cash drawer and printer cables are secure.</li><li>Restart the POS PC if necessary.</li></ul>"
        ]
      },
      {
        id: "packscreens",
        label: "Packscreens & Devices",
        checks: [
          "<strong>Remove External Devices</strong><br>Disconnect any:<ul><li>USB drives</li><li>External hard drives</li><li>Unused USB devices</li></ul>Then restart the PC.",
          "<strong>Is There an Error Message?</strong><br>If an error message appears:<br>✅ Take a photo of the screen or write down the exact message.<br>This helps IT resolve the issue faster.",
          "<strong>Can You Access the Internet?</strong><br>If the problem is internet-related:<br>✅ Check:<ul><li>Network cable is plugged in.</li><li>Other PCs in the store can access the internet.</li><li>Restart the PC.</li></ul>"
        ]
      }
    ]
  },
  { 
    id: "internet", 
    label: "Exmile - Internet", 
    icon: "🌐", 
    subCategories: [
      {
        id: "router",
        label: "Router / Fibre",
        checks: [
          "<strong>Determine the Scope of the Problem</strong><br>✅ Check:<ul><li>Is only one PC affected?</li><li>Are all PCs affected?</li><li>Are card machines affected?</li><li>Is the store Wi-Fi working?</li></ul>",
          "<strong>Check Network Cables</strong><br>✅ Ensure:<ul><li>The network cable is securely plugged into the PC.</li><li>The cable is securely plugged into the wall outlet, switch, or router.</li><li>No cables appear damaged, pinched, or disconnected.</li><li>Look for link lights (usually green or orange) where the cable plugs in.</li></ul>",
          "<strong>Check for Power Outages or Load Shedding</strong><br>✅ Confirm:<ul><li>There has not been a recent power outage.</li><li>All internet equipment has powered up correctly after power restoration.</li><li>UPS units are switched on and functioning.</li></ul>"
        ]
      },
      {
        id: "devices_wifi",
        label: "Wi-Fi & Devices",
        checks: [
          "<strong>Test Another Device</strong><br>✅ Check whether:<ul><li>Another PC can access the internet.</li><li>A cellphone connected to the store Wi-Fi can browse the internet.</li></ul>",
          "<strong>Check Wi-Fi Issues</strong><br>If Wi-Fi is not working:<br>✅ Verify:<ul><li>Wi-Fi is enabled on the device.</li><li>The device is connected to the correct Wi-Fi network.</li><li>Airplane mode is turned off.</li><li>Try disconnecting and reconnecting to the Wi-Fi network.</li></ul>",
          "<strong>Test a Website</strong><br>✅ Open a web browser and try:<ul><li>www.google.com</li><li>www.microsoft.com</li></ul>",
          "<strong>Restart the Affected Device</strong><br>✅ Restart the affected PC, tablet, or device and test again."
        ]
      }
    ]
  },
  { 
    id: "kiosks", 
    label: "ODM - Kiosks / Menu Screens", 
    icon: "📺", 
    subCategories: [
      {
        id: "kiosk_hardware",
        label: "Hardware & Power",
        checks: [
          "<strong>Is the Kiosk Powered On?</strong><br>✅ Check that:<ul><li>The kiosk screen is on.</li><li>There are power lights visible.</li><li>The power cable is connected securely.</li><li>The wall plug is switched on.</li></ul>",
          "<strong>Restart the Kiosk</strong><br>✅ If possible:<ul><li>Close the kiosk application.</li><li>Restart the kiosk.</li></ul>If frozen: Hold power for 10 seconds, wait 30 seconds, switch back on.",
          "<strong>Is the Touch Screen Responding?</strong><br>✅ Test:<ul><li>Touch several areas of the screen.</li><li>Check whether any buttons respond.</li></ul>",
          "<strong>Check All Cables</strong><br>✅ Ensure:<ul><li>Power cables are connected.</li><li>Network cables are connected.</li><li>No cables have been unplugged.</li></ul>"
        ]
      },
      {
        id: "kiosk_software",
        label: "Software & Network",
        checks: [
          "<strong>Check the Internet Connection</strong><br>✅ Verify:<ul><li>Other kiosks are working.</li><li>POS terminals have internet access.</li><li>Store Wi-Fi or internet is functioning normally.</li></ul>",
          "<strong>Check for Error Messages</strong><br>✅ If an error message appears: Take a photo and record the exact wording.",
          "<strong>Is the Kiosk Application Open?</strong><br>✅ Check whether: The kiosk application is running and displaying the ordering screen.",
          "<strong>Check the Payment Device</strong><br>✅ Check that: The card terminal is powered on, cables connected, and displays home screen.",
          "<strong>Determine the Scope of the Issue</strong><br>✅ Check: Is only one kiosk affected or are all affected?"
        ]
      }
    ]
  },
  { 
    id: "cash", 
    label: "Deposita - ABM", 
    icon: "💵", 
    subCategories: [
      {
        id: "deposita_power",
        label: "Power & Status",
        checks: [
          "<strong>Is the Deposita Unit Powered On?</strong><br>✅ Check that: The screen is on, power lights visible, cable plugged in securely, wall plug and UPS switched on.",
          "<strong>Restart the Deposita Unit</strong><br>✅ If frozen: Follow approved restart procedure, wait 30 seconds before switching on.",
          "<strong>Check the Internet Connection</strong><br>✅ Verify: Store internet is working, router/switch is powered on."
        ]
      },
      {
        id: "deposita_errors",
        label: "Errors & Jams",
        checks: [
          "<strong>Check for Error Messages</strong><br>✅ If error is displayed: Take a clear photo. Do not clear messages before taking a photo.",
          "<strong>Check for Notes or Coin Jams</strong><br>✅ Check whether notes are stuck or a jam warning is displayed. Do not force notes.",
          "<strong>Check if Deposits Can Be Processed</strong><br>✅ Test: Can a note be inserted? Does it accept/reject all notes?",
          "<strong>Determine the Scope of the Issue</strong><br>✅ Check: Is it completely offline or just not transmitting?"
        ]
      }
    ]
  },
  { 
    id: "g4s", 
    label: "G4S - CIT", 
    icon: "💵", 
    subCategories: [
      {
        id: "cit_scheduling",
        label: "Collections & Deliveries",
        checks: [
          "<strong>1. Confirm the Issue</strong><br>✅ Identify problem: Change order not delivered, cash collection missed, late arrival, etc.",
          "<strong>2. Check Collection or Delivery Schedule</strong><br>✅ Verify it was scheduled for today and expected time has passed.",
          "<strong>4. Verify Change Orders</strong><br>✅ Confirm order was submitted correctly with reference number.",
          "<strong>5. Verify Cash Collections</strong><br>✅ Confirm cash bags were ready and documentation completed."
        ]
      },
      {
        id: "cit_security",
        label: "Security & Reporting",
        checks: [
          "<strong>3. Check the Deposita Unit</strong><br>✅ Confirm machine operational, deposit accepted, door closed/locked.",
          "<strong>6. Check for Security Concerns</strong><br>✅ Report if Deposita door left open, cash not secured, or seals broken.",
          "<strong>7. Record Relevant Details</strong><br>✅ Record: Date, time, vehicle details, driver name, reference numbers.",
          "<strong>8. Take Photos</strong><br>✅ Photograph open doors, errors, incorrect deliveries, damaged bags."
        ]
      }
    ]
  },
  { 
    id: "headsets_gaap", 
    label: "Gaap - DT, Headsets / HME Timer", 
    icon: "🎧", 
    subCategories: [
      {
        id: "gaap_headset",
        label: "Headset Hardware",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Only one headset affected or all? Can customers be heard/hear you?",
          "<strong>Check the Headset Battery</strong><br>✅ Verify battery fitted correctly, charged, contacts clean. Replace with spare if available.",
          "<strong>Switch the Headset Off and On</strong><br>✅ Reboot: Turn off, wait 10s, turn back on.",
          "<strong>Check the Volume Settings</strong><br>✅ Verify headset volume is up and mic is not muted.",
          "<strong>Check the Microphone Position</strong><br>✅ Ensure mic boom is positioned correctly and not obstructed.",
          "<strong>Test with Another Headset</strong><br>✅ Connect different headset to test.",
          "<strong>Inspect for Physical Damage</strong><br>✅ Check for cracked housing, damaged boom, broken clips."
        ]
      },
      {
        id: "gaap_base",
        label: "Base Station",
        checks: [
          "<strong>Check the Base Station</strong><br>✅ Verify base station is powered on, lights normal, cables secure.",
          "<strong>Check the Drive-Thru System</strong><br>✅ Determine if lane detection is working and order point operating normally."
        ]
      }
    ]
  },
  { 
    id: "headsets_micros", 
    label: "Micros - DT, Headsets / Timer", 
    icon: "🎧", 
    subCategories: [
      {
        id: "micros_headset",
        label: "Headset Hardware",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Only one headset affected or all? Can customers be heard/hear you?",
          "<strong>Check the Headset Battery</strong><br>✅ Verify battery fitted correctly, charged, contacts clean.",
          "<strong>Switch the Headset Off and On</strong><br>✅ Reboot: Turn off, wait 10s, turn back on.",
          "<strong>Check the Volume Settings</strong><br>✅ Verify headset volume is up and mic is not muted.",
          "<strong>Check the Microphone Position</strong><br>✅ Ensure mic boom is positioned correctly.",
          "<strong>Test with Another Headset</strong><br>✅ Connect different headset to test.",
          "<strong>Inspect for Physical Damage</strong><br>✅ Check for cracked housing, damaged boom, broken clips."
        ]
      },
      {
        id: "micros_base",
        label: "Base Station",
        checks: [
          "<strong>Check the Base Station</strong><br>✅ Verify base station is powered on, lights normal, cables secure.",
          "<strong>Check the Drive-Thru System</strong><br>✅ Determine if lane detection is working and order point operating normally."
        ]
      }
    ]
  },
  { 
    id: "music", 
    label: "Gresham - Music", 
    icon: "🎵", 
    subCategories: [
      {
        id: "music_amp",
        label: "Amplifier & Speakers",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: No music at all, cutting in/out, too soft, or only one area affected?",
          "<strong>Check the Amplifier</strong><br>✅ Verify amp is switched on, lights visible, volume not turned down.",
          "<strong>Check Speaker Zones</strong><br>✅ Verify affected area's speakers are switched on and zone controls not adjusted.",
          "<strong>Check for Power Issues</strong><br>✅ Confirm no recent power outages or UPS issues."
        ]
      },
      {
        id: "music_player",
        label: "Music Player (NUC)",
        checks: [
          "<strong>Check the Music Player (NUC)</strong><br>✅ Verify NUC in network cabinet has power and lights on.",
          "<strong>Restart the Music Player</strong><br>✅ Restart NUC: Switch off, wait 30s, switch back on.",
          "<strong>Check the Internet Connection</strong><br>✅ Verify store internet is working.",
          "<strong>Check Audio Cables</strong><br>✅ Ensure cables between NUC and amplifier are securely connected.",
          "<strong>Check the Network Cabinet</strong><br>✅ Verify no equipment unplugged, switches have lights."
        ]
      }
    ]
  },
  { 
    id: "cards", 
    label: "Transaction Junction - Card Machines", 
    icon: "💳", 
    subCategories: [
      {
        id: "cards_device",
        label: "Card Machine Hardware",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: One till or all affected? Error displayed? Timeout? Completely offline?",
          "<strong>Check the Card Machine Display</strong><br>✅ Verify screen is on, no errors, showing ready screen. Take photo of errors.",
          "<strong>Restart the Till</strong><br>✅ Close POS, restart Windows, open POS and test.",
          "<strong>Check the Card Machine Cables</strong><br>✅ Ensure power and communication cables connected properly."
        ]
      },
      {
        id: "cards_network",
        label: "Network & Server",
        checks: [
          "<strong>Check the Store Internet Connection</strong><br>✅ Verify internet working on other devices.",
          "<strong>Check the GAAP Server</strong><br>✅ Verify GAAP server powered on, lights visible, cables secure. Do not switch off.",
          "<strong>Determine if the Issue Affects All Tills</strong><br>✅ Check if other tills process cards.",
          "<strong>Check for Recent Power Interruptions</strong><br>✅ Confirm server restarted correctly after power outage.",
          "<strong>Record Any Error Messages</strong><br>✅ Take photos of errors on till or card machine."
        ]
      }
    ]
  },
  { 
    id: "cctv", 
    label: "360 Degrees - CCTV", 
    icon: "📹", 
    subCategories: [
      {
        id: "cctv_cameras",
        label: "Cameras & Monitor",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: All offline, one offline, monitor blank, or playback unavailable?",
          "<strong>Check the CCTV Monitor</strong><br>✅ Verify screen displays CCTV and cables connected.",
          "<strong>Check Camera Status</strong><br>✅ Determine which cameras are offline (e.g. Drive-Thru, Office, Back Door)."
        ]
      },
      {
        id: "cctv_nvr",
        label: "NVR & Network",
        checks: [
          "<strong>Check the NVR / DVR Recorder</strong><br>✅ Verify CCTV recorder in cabinet is powered on, lights flashing. Do not unplug.",
          "<strong>Check the Network Equipment</strong><br>✅ Verify network switches powered on and cables secure.",
          "<strong>Check Recording Playback</strong><br>✅ Attempt playback. Note date and time missing.",
          "<strong>Check for Error Messages</strong><br>✅ Take photo of messages (e.g. Hard Drive Error, No Signal)."
        ]
      }
    ]
  },
  { 
    id: "printer", 
    label: "Radian - Office Printer", 
    icon: "🖨️", 
    subCategories: [
      {
        id: "printer_hardware",
        label: "Hardware & Power",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Completely offline, blank pages, error message, or stuck queue?",
          "<strong>Check That the Printer Has Power</strong><br>✅ Verify printer switched on, lights visible, cables secure.",
          "<strong>Check for Error Messages</strong><br>✅ Look for messages like Paper Jam, Out of Paper, Toner Low. Take photo.",
          "<strong>Restart the Printer</strong><br>✅ Switch off, wait 30s, switch on."
        ]
      },
      {
        id: "printer_supplies",
        label: "Paper, Toner & Network",
        checks: [
          "<strong>Check Paper Supply</strong><br>✅ Verify paper loaded correctly and guides set.",
          "<strong>Check for Paper Jams</strong><br>✅ Inspect trays and doors. Remove visible jams carefully.",
          "<strong>Check Toner or Ink</strong><br>✅ Verify cartridges installed and not empty. Replace if needed.",
          "<strong>Check Network Connection</strong><br>✅ Ensure network cable connected and lights visible.",
          "<strong>Clear Stuck Print Jobs</strong><br>✅ Cancel pending jobs in Windows queue.",
          "<strong>Perform a Test Print</strong><br>✅ Print Windows test page."
        ]
      }
    ]
  },
  { 
    id: "telephone", 
    label: "Switchtel - Telephone", 
    icon: "📞", 
    subCategories: [
      {
        id: "tel_hardware",
        label: "Hardware & Power",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Can't make/receive calls, no dial tone, no sound, or error message?",
          "<strong>Check That the Phone Has Power</strong><br>✅ Verify phone screen on, Yealink screen displayed.",
          "<strong>Restart the Phone</strong><br>✅ Unplug network cable, wait 30s, plug back in."
        ]
      },
      {
        id: "tel_network",
        label: "Network & Testing",
        checks: [
          "<strong>Check for Error Messages</strong><br>✅ Look for No Service, Register Failed. Take photo.",
          "<strong>Check the Store Internet Connection</strong><br>✅ Verify internet working on PC.",
          "<strong>Test Calling</strong><br>✅ Try calling mobile and calling from mobile."
        ]
      }
    ]
  },
  { 
    id: "office", 
    label: "TRG - Emails", 
    icon: "📧", 
    subCategories: [
      {
        id: "email_outlook",
        label: "Outlook & PC",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Can't send/receive, delayed, Outlook not opening, or error message?",
          "<strong>Restart Outlook</strong><br>✅ Close completely, wait 30s, reopen.",
          "<strong>Restart the PC</strong><br>✅ Restart computer and test.",
          "<strong>Check for Error Messages</strong><br>✅ Take screenshot of errors like Disconnected, Need Password.",
          "<strong>Check Outlook Connection Status</strong><br>✅ Check bottom right for 'Connected'. Take screenshot if not."
        ]
      },
      {
        id: "email_network",
        label: "Network & Mailbox",
        checks: [
          "<strong>Check the Internet Connection</strong><br>✅ Verify internet working on PC.",
          "<strong>Check the Outbox</strong><br>✅ If emails stuck: note amount, check large attachments.",
          "<strong>Test Sending and Receiving</strong><br>✅ Send test email to known address.",
          "<strong>Check Available Mailbox Space</strong><br>✅ If full, delete unwanted emails.",
          "<strong>Try Outlook on the Web</strong><br>✅ Go to outlook.office.com to test if email works there."
        ]
      }
    ]
  },
  { 
    id: "tablets", 
    label: "TRG - Tablets", 
    icon: "📱", 
    subCategories: [
      {
        id: "tablet_hardware",
        label: "Hardware & Power",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Won't switch on, frozen, app not opening, screen damaged?",
          "<strong>Check the Battery</strong><br>✅ Verify charge, cable connected, charger plugged in.",
          "<strong>Test Charging</strong><br>✅ Verify charging indicator appears. Test another charger if possible.",
          "<strong>Restart the Tablet</strong><br>✅ Hold power down, restart. If frozen, hold 10s.",
          "<strong>Check for Physical Damage</strong><br>✅ Inspect for cracked screen, damaged port, swollen battery. Take photos."
        ]
      },
      {
        id: "tablet_software",
        label: "Software & Network",
        checks: [
          "<strong>Check the Internet Connection</strong><br>✅ Verify connected to store Wi-Fi and internet working.",
          "<strong>Check the Wi-Fi Connection</strong><br>✅ Ensure Wi-Fi on, Airplane mode off.",
          "<strong>Check the E-Learning Application</strong><br>✅ Verify app opens correctly without errors.",
          "<strong>Check Login Details</strong><br>✅ Confirm correct username/password used."
        ]
      }
    ]
  },
  { 
    id: "locks", 
    label: "360 Degrees - Toilet Door Locks", 
    icon: "🔐", 
    subCategories: [
      {
        id: "locks_hardware",
        label: "Keypad & Hardware",
        checks: [
          "<strong>Confirm the Problem</strong><br>✅ Check: Completely locked, staying unlocked, PIN not working, keypad unresponsive?",
          "<strong>Check the Keypad</strong><br>✅ Verify illuminated, buttons respond, no damage.",
          "<strong>Check for Low Battery Warnings</strong><br>✅ Look for flashing lights, beeps.",
          "<strong>Inspect for Damage</strong><br>✅ Check for loose keypad, broken handle, vandalism. Take photos."
        ]
      },
      {
        id: "locks_operation",
        label: "Operation & Door",
        checks: [
          "<strong>Try the PIN Code Again</strong><br>✅ Confirm correct PIN entered slowly.",
          "<strong>Check for Physical Obstructions</strong><br>✅ Ensure nothing blocks door, latch aligns correctly.",
          "<strong>Test Lock Operation</strong><br>✅ Check for clicking sound, door unlocks briefly.",
          "<strong>Check for Recent Power Interruptions</strong><br>✅ Confirm lock operating normally since power restored.",
          "<strong>If Emergency Access is Available</strong><br>✅ Check if manager override or emergency key works."
        ]
      }
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
