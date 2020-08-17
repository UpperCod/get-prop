/**
 * Gets the value of an object based on the index
 * @param {object} value
 * @param {string|string[]} prop - search index
 * @param {*} [optionValue] - optional return value in case the index cannot be resolved
 * @returns {any}
 */
export default function getProp(value, prop, optionValue) {
    value = value || {};
    let parts = Array.isArray(prop) ? prop : prop.match(/([^\[\](\.|\/)]+)/g);
    for (let i = 0; i < parts.length; i++) {
        if (typeof value === "object" && parts[i] in value) {
            value = value[parts[i]];
        } else {
            return optionValue;
        }
    }
    return value;
}
