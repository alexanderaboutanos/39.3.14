/** @format */

import foods from "./foods";
import { choice, remove } from "./helpers";

let randFruit = choice(foods);
console.log(`I’d like one ${randFruit}, please`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious, may I have another?`);
remove(foods, randFruit);
let remainingFruits = foods.length;
console.log(`I’m sorry, we’re all out. We have ${remainingFruits} left`);
