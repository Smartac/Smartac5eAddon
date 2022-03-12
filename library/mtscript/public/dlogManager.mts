[h: dlgName=macro.args]
<!-- Choose between the various dialog options -->
[h, switch(dlgName), code:
  case "Setup": {
    [h,macro("setup@this"):dlgName]
  };
  case "Spellbook": {
    [h,macro("libViewer@this"):dlgName]
  };
  case "Bestiary": {
    [h,macro("libViewer@this"):dlgName]
  };
  case "Items": {
    [h,macro("libViewer@this"):dlgName]
  };
  default: {
    [dialog5("dlgError"): {
      <html>
        <head><title>Smartac5e - Error</title></head>
        <body>
          <span style="color: #ff0000;">No such dialog or database exists.  Please try again.</span>
        </body>
      </html>
    }]
    [broadcast("No such database exists.  Please try again.")]
  }
]
<!-- Need to add notes to each feature -->
<!-- Adventurer sets up properties and a default PC token for you to copy and base other PCs on -->
<!-- -- Inventory +/-, Ready Attack, Attack, Spell, Dice Rollers -->
<!-- Bestiary includes name, race, class, CR, attacks, spells, etc for a multitude of creatures -->
<!-- Spellbook includes name, spell level, attack info, damage info, etc. for a multitude of spells -->
<!-- Items DB includes stats for basic and advanced adventuring gear -->
<!-- Weapons DB includes a plethora of weapons to choose from -->
<!-- Campaign Tools include Dice(d2, d4, d6, d8, d10, d12, d20, d100), Initiative (roll/clear/track), End Turn, Timers, States, etc. -->
<!-- -- Turn tracker with indicator of whose turn, round counter -->
<!-- Gadgets includes things like teleporting players and other useful toys for GMs -->