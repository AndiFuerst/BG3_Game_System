// Import document classes.
import { BG3Item } from "./bg3_item.mjs";
// Import sheet classes.
import { BG3ItemSheet } from "./bg3_item-sheet.mjs";
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./templates.mjs";


/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', function () {
    console.log(`Initiallizing BG3 Game System`)
    // Add utility classes to the global game object so that they're more easily
    // accessible in global contexts.
    game.bg3 = {
      Actor,
      Item,
      rollItemMacro,
    };
  
    // Add custom constants for configuration.
    CONFIG.BG3 = {};
  
    /**
     * Set an initiative formula for the system
     * @type {String}
     */
    CONFIG.Combat.initiative = {
      formula: '1d20',
      decimals: 2,
    };
  
    // Define custom Document classes
    CONFIG.Item.documentClass = BG3Item;
  
    // Active Effects are never copied to the Actor,
    // but will still apply to the Actor from within the Item
    // if the transfer property on the Active Effect is true.
    CONFIG.ActiveEffect.legacyTransferral = false;
  
    // Register sheet application classes
    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('bg3', BG3ItemSheet, {
      makeDefault: true,
    });
  
    // Preload Handlebars templates.
    return preloadHandlebarsTemplates();
  });

