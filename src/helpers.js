/** @format */

// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
  let idx = items.indexOf(item);
  if (idx !== -1) {
    items.splice(idx, 1);
    return item;
  }
  return undefined;
}

export { choice, remove };
