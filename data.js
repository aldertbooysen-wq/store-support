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
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🖥️ MOD PC</h4><strong>Is the PC Switched On?</strong><br>✅ Check that:<ul><li>The power cable is plugged in securely.</li><li>The wall plug is switched on.</li><li>Any UPS or surge protector is switched on.</li><li>The PC power button has been pressed.</li><li>If there are no lights or sounds at all, check another wall socket if possible.</li></ul><br><strong>Restart the PC</strong><br>Many issues are resolved by a restart.<br>✅ Click Restart from Windows if possible.<br>If the PC is frozen:<ul><li>Hold the power button for 10 seconds until it switches off.</li><li>Wait 30 seconds.</li><li>Switch it back on.</li></ul><br><strong>Check All Cables</strong><br>✅ Ensure:<ul><li>Power cables are connected.</li><li>Network cable is plugged in.</li><li>Keyboard and mouse are connected.</li><li>Look for any loose or disconnected cables.</li></ul>",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📠 TILLS</h4><strong>Is the Monitor On?</strong><br>✅ Check that:<ul><li>The monitor power light is on.</li><li>The monitor is not showing 'No Signal.'</li><li>Cables between the PC and monitor are connected firmly.</li><li>Try turning the monitor off and on again.</li></ul><br><strong>If the POS is Not Working</strong><br>✅ Check:<ul><li>POS application is open.</li><li>Receipt printer is powered on.</li><li>Scanner cables are connected.</li><li>Cash drawer and printer cables are secure.</li><li>Restart the POS PC if necessary.</li></ul>",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📱 PACKSCREENS</h4><strong>Remove External Devices</strong><br>Disconnect any:<ul><li>USB drives</li><li>External hard drives</li><li>Unused USB devices</li></ul>Then restart the PC.<br><br><strong>Is There an Error Message?</strong><br>If an error message appears:<br>✅ Take a photo of the screen or write down the exact message.<br>This helps IT resolve the issue faster.<br><br><strong>Can You Access the Internet?</strong><br>If the problem is internet-related:<br>✅ Check:<ul><li>Network cable is plugged in.</li><li>Other PCs in the store can access the internet.</li><li>Restart the PC.</li></ul>"
    ]
  },
  { 
    id: "internet", 
    label: "Exmile - Internet", 
    icon: "🌐", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📡 ROUTER & FIBRE</h4><strong>Determine the Scope of the Problem</strong><br>✅ Check:<ul><li>Is only one PC affected?</li><li>Are all PCs affected?</li><li>Are card machines affected?</li><li>Is the store Wi-Fi working?</li></ul><br><strong>Check Network Cables</strong><br>✅ Ensure:<ul><li>The network cable is securely plugged into the PC.</li><li>The cable is securely plugged into the wall outlet, switch, or router.</li><li>No cables appear damaged, pinched, or disconnected.</li><li>Look for link lights (usually green or orange) where the cable plugs in.</li></ul><br><strong>Check for Power Outages or Load Shedding</strong><br>✅ Confirm:<ul><li>There has not been a recent power outage.</li><li>All internet equipment has powered up correctly after power restoration.</li><li>UPS units are switched on and functioning.</li></ul>",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📶 WI-FI & DEVICES</h4><strong>Test Another Device</strong><br>✅ Check whether:<ul><li>Another PC can access the internet.</li><li>A cellphone connected to the store Wi-Fi can browse the internet.</li></ul><br><strong>Check Wi-Fi Issues</strong><br>If Wi-Fi is not working:<br>✅ Verify:<ul><li>Wi-Fi is enabled on the device.</li><li>The device is connected to the correct Wi-Fi network.</li><li>Airplane mode is turned off.</li><li>Try disconnecting and reconnecting to the Wi-Fi network.</li></ul><br><strong>Test a Website</strong><br>✅ Open a web browser and try:<ul><li>www.google.com</li><li>www.microsoft.com</li></ul><br><strong>Restart the Affected Device</strong><br>✅ Restart the affected PC, tablet, or device and test again."
    ]
  },
  { 
    id: "kiosks", 
    label: "ODM - Kiosks / Menu Screens", 
    icon: "📺", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>⚙️ HARDWARE & POWER</h4><strong>Is the Kiosk Powered On?</strong><br>✅ Check that:<ul><li>The kiosk screen is on.</li><li>There are power lights visible.</li><li>The power cable is connected securely.</li><li>The wall plug is switched on.</li></ul><br><strong>Restart the Kiosk</strong><br>Many kiosk issues are resolved by a simple restart.<br>✅ If possible:<ul><li>Close the kiosk application.</li><li>Restart the kiosk.</li></ul>If the kiosk is frozen:<ul><li>Hold the power button for 10 seconds.</li><li>Wait 30 seconds.</li><li>Switch it back on.</li></ul><br><strong>Is the Touch Screen Responding?</strong><br>✅ Test:<ul><li>Touch several areas of the screen.</li><li>Check whether any buttons respond.</li></ul><br><strong>Check All Cables</strong><br>✅ Ensure:<ul><li>Power cables are connected.</li><li>Network cables are connected.</li><li>No cables have been unplugged.</li></ul>",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>💻 SOFTWARE & PAYMENT</h4><strong>Check the Internet Connection</strong><br>✅ Verify:<ul><li>Other kiosks are working.</li><li>POS terminals have internet access.</li><li>Store Wi-Fi or internet is functioning normally.</li></ul><br><strong>Check for Error Messages</strong><br>✅ If an error message appears: Take a photo and record the exact wording.<br><br><strong>Is the Kiosk Application Open?</strong><br>✅ Check whether the kiosk application is running and displaying the ordering screen.<br><br><strong>Check the Payment Device</strong><br>If customers cannot pay:<br>✅ Check that the card terminal is powered on, cables securely connected, and displays its normal home screen.<br><br><strong>Determine the Scope of the Issue</strong><br>✅ Check: Is only one kiosk affected, or are all kiosks affected?"
    ]
  },
  { 
    id: "cash", 
    label: "Deposita - ABM", 
    icon: "💵", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🔌 POWER & SYSTEM</h4><strong>Is the Deposita Unit Powered On?</strong><br>✅ Check that:<ul><li>The screen is on.</li><li>Power lights are visible.</li><li>The power cable is plugged in securely.</li><li>The wall plug is switched on.</li><li>The UPS (if fitted) is switched on.</li></ul><br><strong>Restart the Deposita Unit</strong><br>✅ If the screen is frozen or unresponsive: Follow the approved restart procedure if available.<br><br><strong>Check the Internet Connection</strong><br>✅ Verify: Store internet is working and other devices can connect.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>⚠️ ERRORS & JAMS</h4><strong>Check for Error Messages</strong><br>✅ If an error is displayed: Take a clear photo of the screen. Do not clear messages before taking a photo.<br><br><strong>Check for Notes or Coin Jams</strong><br>✅ Check whether notes are stuck in the note acceptor or a jam warning is displayed. Do not force notes.<br><br><strong>Check if Deposits Can Be Processed</strong><br>✅ Test: Can a note be inserted? Does the machine accept or reject all notes?<br><br><strong>Determine the Scope of the Issue</strong><br>✅ Check: Is the Deposita completely offline or just not transmitting?"
    ]
  },
  { 
    id: "g4s", 
    label: "G4S - CIT", 
    icon: "💵", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🚚 DELIVERIES & COLLECTIONS</h4><strong>1. Confirm the Issue</strong><br>✅ Identify problem: Change order not delivered, incorrect change, late collection, etc.<br><br><strong>2. Check Collection or Delivery Schedule</strong><br>✅ Verify the collection or delivery was scheduled for today.<br><br><strong>4. Verify Change Orders</strong><br>✅ Confirm the order was submitted correctly and delivery date was requested.<br><br><strong>5. Verify Cash Collections</strong><br>✅ Confirm cash bags were prepared and collection documentation was completed.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🔒 SECURITY & EVIDENCE</h4><strong>3. Check the Deposita Unit</strong><br>✅ Confirm machine is operational, deposit accepted, and door is properly closed and locked.<br><br><strong>6. Check for Security Concerns</strong><br>✅ Immediately report if a Deposita door has been left open, cash bags not secured, or seals broken.<br><br><strong>7. Record Relevant Details</strong><br>✅ Record: Date, time, G4S vehicle details, driver name, and reference numbers.<br><br><strong>8. Take Photos</strong><br>✅ Photograph open doors, errors, incorrect deliveries, and damaged bags."
    ]
  },
  { 
    id: "headsets_gaap", 
    label: "Gaap - DT, Headsets / HME Timer", 
    icon: "🎧", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🎧 HEADSET HARDWARE</h4><strong>Confirm the Problem</strong><br>✅ Check: Is only one headset affected, or all? Can customers be heard?<br><br><strong>Check the Headset Battery</strong><br>✅ Verify battery is fitted correctly, charged, and contacts are clean. Replace with spare if available.<br><br><strong>Switch the Headset Off and On</strong><br>✅ Reboot: Turn off, wait 10 seconds, turn back on.<br><br><strong>Check Volume & Mic</strong><br>✅ Verify volume is turned up, mic is not muted, and boom is positioned correctly.<br><br><strong>Test with Another Headset</strong><br>✅ Log into a different headset to test.<br><br><strong>Inspect for Physical Damage</strong><br>✅ Check for cracked housing or broken clips. Take photos if damaged.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🎛️ BASE STATION</h4><strong>Check the Base Station</strong><br>✅ Verify base station is powered on, lights normal, and cables secure.<br><br><strong>Check the Drive-Thru System</strong><br>✅ Determine if lane detection is working and the order point operates normally. If all headsets fail, it is likely the base station."
    ]
  },
  { 
    id: "headsets_micros", 
    label: "Micros - DT, Headsets / Timer", 
    icon: "🎧", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🎧 HEADSET HARDWARE</h4><strong>Confirm the Problem</strong><br>✅ Check: Is only one headset affected, or all? Can customers be heard?<br><br><strong>Check the Headset Battery</strong><br>✅ Verify battery is fitted correctly, charged, and contacts are clean. Replace with spare if available.<br><br><strong>Switch the Headset Off and On</strong><br>✅ Reboot: Turn off, wait 10 seconds, turn back on.<br><br><strong>Check Volume & Mic</strong><br>✅ Verify volume is turned up, mic is not muted, and boom is positioned correctly.<br><br><strong>Test with Another Headset</strong><br>✅ Log into a different headset to test.<br><br><strong>Inspect for Physical Damage</strong><br>✅ Check for cracked housing or broken clips. Take photos if damaged.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🎛️ BASE STATION</h4><strong>Check the Base Station</strong><br>✅ Verify base station is powered on, lights normal, and cables secure.<br><br><strong>Check the Drive-Thru System</strong><br>✅ Determine if lane detection is working and the order point operates normally. If all headsets fail, it is likely the base station."
    ]
  },
  { 
    id: "music", 
    label: "Gresham - Music", 
    icon: "🎵", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🔈 AMPLIFIER & SPEAKERS</h4><strong>Confirm the Problem</strong><br>✅ Check: Is there no music at all, cutting in and out, too soft, or only one area affected?<br><br><strong>Check the Amplifier</strong><br>✅ Verify amp is switched on, lights visible, and volume controls are not turned down.<br><br><strong>Check Speaker Zones</strong><br>✅ Verify affected area's speakers are switched on and zone controls haven't been adjusted.<br><br><strong>Check for Power Issues</strong><br>✅ Confirm there has not been a recent power outage and UPS is operating correctly.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🖥️ MUSIC PLAYER (NUC)</h4><strong>Check the Music Player (NUC)</strong><br>✅ Verify NUC in network cabinet has power and lights are on.<br><br><strong>Restart the Music Player</strong><br>✅ Switch off, wait 30 seconds, switch back on.<br><br><strong>Check the Internet Connection</strong><br>✅ Verify store internet is working.<br><br><strong>Check Cables</strong><br>✅ Ensure audio cables between NUC and amplifier are securely connected."
    ]
  },
  { 
    id: "cards", 
    label: "Transaction Junction - Card Machines", 
    icon: "💳", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>💳 CARD MACHINE HARDWARE</h4><strong>Confirm the Problem</strong><br>✅ Check: Is one till or all affected? Error displayed? Timeout? Completely offline?<br><br><strong>Check the Card Machine Display</strong><br>✅ Verify screen is on, no errors, showing ready screen. Take photo of errors.<br><br><strong>Restart the Till</strong><br>✅ Close POS, restart Windows, open POS and test.<br><br><strong>Check the Card Machine Cables</strong><br>✅ Ensure power and communication cables connected properly.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🌍 NETWORK & SERVER</h4><strong>Check the Store Internet Connection</strong><br>✅ Verify internet working on other devices.<br><br><strong>Check the GAAP Server</strong><br>✅ Verify GAAP server powered on, lights visible, cables secure. Do not switch off.<br><br><strong>Determine if the Issue Affects All Tills</strong><br>✅ Check if other tills can process card payments.<br><br><strong>Check for Recent Power Interruptions</strong><br>✅ Confirm server restarted correctly after power outage."
    ]
  },
  { 
    id: "cctv", 
    label: "360 Degrees - CCTV", 
    icon: "📹", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📹 CAMERAS & MONITOR</h4><strong>Confirm the Problem</strong><br>✅ Check: All offline, one offline, monitor blank, or playback unavailable?<br><br><strong>Check the CCTV Monitor</strong><br>✅ Verify screen displays CCTV and cables connected.<br><br><strong>Check Camera Status</strong><br>✅ Determine which cameras are offline (e.g. Drive-Thru, Office, Back Door).",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>💾 NVR & NETWORK</h4><strong>Check the NVR / DVR Recorder</strong><br>✅ Verify CCTV recorder in cabinet is powered on, lights flashing. Do not unplug.<br><br><strong>Check the Network Equipment</strong><br>✅ Verify network switches powered on and cables secure.<br><br><strong>Check Recording Playback</strong><br>✅ Attempt playback. Note date and time missing.<br><br><strong>Check for Error Messages</strong><br>✅ Take photo of messages (e.g. Hard Drive Error, No Signal)."
    ]
  },
  { 
    id: "printer", 
    label: "Radian - Office Printer", 
    icon: "🖨️", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>⚙️ HARDWARE & POWER</h4><strong>Confirm the Problem</strong><br>✅ Check: Completely offline, blank pages, error message, or stuck queue?<br><br><strong>Check That the Printer Has Power</strong><br>✅ Verify printer switched on, lights visible, cables secure.<br><br><strong>Check for Error Messages</strong><br>✅ Look for messages like Paper Jam, Out of Paper, Toner Low. Take photo.<br><br><strong>Restart the Printer</strong><br>✅ Switch off, wait 30 seconds, switch back on.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📄 PAPER, TONER & NETWORK</h4><strong>Check Paper & Jams</strong><br>✅ Verify paper loaded correctly. Inspect trays and remove visible jams carefully.<br><br><strong>Check Toner or Ink</strong><br>✅ Verify cartridges installed and not empty. Replace if needed.<br><br><strong>Check Network Connection</strong><br>✅ Ensure network cable connected and lights visible.<br><br><strong>Clear Stuck Print Jobs</strong><br>✅ Cancel pending jobs in Windows queue, then print a test page."
    ]
  },
  { 
    id: "telephone", 
    label: "Switchtel - Telephone", 
    icon: "📞", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>☎️ HARDWARE & POWER</h4><strong>Confirm the Problem</strong><br>✅ Check: Can't make/receive calls, no dial tone, no sound, or error message?<br><br><strong>Check That the Phone Has Power</strong><br>✅ Verify phone screen on, Yealink screen displayed.<br><br><strong>Restart the Phone</strong><br>✅ Unplug network cable, wait 30 seconds, plug back in.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🌐 NETWORK & TESTING</h4><strong>Check for Error Messages</strong><br>✅ Look for No Service, Register Failed. Take photo.<br><br><strong>Check the Store Internet Connection</strong><br>✅ Verify internet working on a PC.<br><br><strong>Test Calling</strong><br>✅ Try calling a mobile phone and calling the store from a mobile."
    ]
  },
  { 
    id: "office", 
    label: "TRG - Emails", 
    icon: "📧", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📩 OUTLOOK & PC</h4><strong>Confirm the Problem</strong><br>✅ Check: Can't send/receive, delayed, Outlook not opening, or error message?<br><br><strong>Restart Outlook & PC</strong><br>✅ Close Outlook, wait 30s, reopen. Or restart the entire computer.<br><br><strong>Check for Error Messages</strong><br>✅ Take screenshot of errors like Disconnected, Need Password.<br><br><strong>Check Outlook Connection Status</strong><br>✅ Check bottom right corner. It should show 'Connected'.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🌍 NETWORK & MAILBOX</h4><strong>Check the Internet Connection</strong><br>✅ Verify internet working on the PC.<br><br><strong>Check the Outbox & Mailbox Space</strong><br>✅ If emails stuck: note amount, check for large attachments. Delete unwanted emails if mailbox is full.<br><br><strong>Test Sending and Receiving</strong><br>✅ Send test email to a known address.<br><br><strong>Try Outlook on the Web</strong><br>✅ Go to outlook.office.com to test if email works there."
    ]
  },
  { 
    id: "tablets", 
    label: "TRG - Tablets", 
    icon: "📱", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>📱 HARDWARE & POWER</h4><strong>Confirm the Problem</strong><br>✅ Check: Won't switch on, frozen, app not opening, screen damaged?<br><br><strong>Check the Battery & Charging</strong><br>✅ Verify charge, cable connected, charger plugged in. Ensure charging indicator appears.<br><br><strong>Restart the Tablet</strong><br>✅ Hold power down, select restart. If frozen, hold for 10 seconds.<br><br><strong>Check for Physical Damage</strong><br>✅ Inspect for cracked screen, damaged port, swollen battery. Take photos.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🌐 SOFTWARE & NETWORK</h4><strong>Check the Wi-Fi Connection</strong><br>✅ Ensure Wi-Fi on, connected to store network, Airplane mode off.<br><br><strong>Check the E-Learning Application</strong><br>✅ Verify app opens correctly without errors.<br><br><strong>Check Login Details</strong><br>✅ Confirm correct username and password are being used."
    ]
  },
  { 
    id: "locks", 
    label: "360 Degrees - Toilet Door Locks", 
    icon: "🔐", 
    checks: [
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🔢 KEYPAD & HARDWARE</h4><strong>Confirm the Problem</strong><br>✅ Check: Completely locked, staying unlocked, PIN not working, keypad unresponsive?<br><br><strong>Check the Keypad</strong><br>✅ Verify illuminated, buttons respond, no damage.<br><br><strong>Check for Low Battery Warnings</strong><br>✅ Look for flashing lights, audible warning beeps.<br><br><strong>Inspect for Damage</strong><br>✅ Check for loose keypad, broken handle, vandalism. Take photos.",
      "<h4 style='color: #0056b3; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-top: 0;'>🚪 OPERATION & DOOR</h4><strong>Try the PIN Code Again</strong><br>✅ Confirm correct PIN entered slowly and correctly.<br><br><strong>Check for Physical Obstructions</strong><br>✅ Ensure nothing blocks door, latch aligns correctly.<br><br><strong>Test Lock Operation</strong><br>✅ Check for clicking sound, door unlocks briefly.<br><br><strong>If Emergency Access is Available</strong><br>✅ Check if manager override or emergency key works."
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
