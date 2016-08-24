/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/24/16.
 */

/**
 * Save every key value pair into Storage
 * @param {Object} items - key:value pair for items to be saved
 */
export function set(items) {
  for (let key in items) {
    if (items.hasOwnProperty(key)) {
      localStorage.setItem(key, items[key]);
    }
  }
}

/**
 * Get item of supplied key from Storage
 * @param {String} key - Key of the item to get
 */
export function get(key) {
  return localStorage.getItem(key);
}

/**
 *  Clear everything from Storage
 */
export function clear() {
  localStorage.clear();
}