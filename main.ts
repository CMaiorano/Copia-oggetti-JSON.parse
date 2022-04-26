const config = {
  theme: 'dark',
  styles: {
    width: 100,
    fontSize: 30,
    textAlign: 'center',
  },
};

/**
 * ESERCIZIO
 *
 * 1. Clona l'oggetto 'config' nella proprietà 'merged'
 * 2. Il nuovo oggetto NON DEVE avere referenze all'oggetto 'config'.
 *
 * TIP1: Puoi utilizzare Object.assign()
 * TIP2: Puoi utilizzare lo spread operator {...obj}
 * TIP3: Puoi utilizzare JSON.stringify
 *
 * Il nostro consiglio è di provare tutti e 3 gli approcci
 *
 * GOAL
 * { theme: "dark", styles: { width: 100, fontSize: 30 } }
 *
 * IMPORTANTE: la proprietà 'width' dev'essere 100 e non 800!!!
 */

export const merged: any = JSON.parse(JSON.stringify(config))
merged.styles.width = 800;
console.log(merged)

// OUTPUT
// { theme: "dark", styles: { width: 100, fontSize: 30 } }
console.log(config);

// IMPORTANT OUTPUT: should be 100 (no 800)!!
console.log(config.styles.width);
