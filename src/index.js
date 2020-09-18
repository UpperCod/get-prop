/**
 * Gets the value of an object based on the index
 * @param {object} value
 * @param {string|string[]} prop - search index
 * @param {*} [optionValue] - optional return value in case the index cannot be resolved
 * @returns {any}
 */
export default function getProp(value, prop, optionValue, safe = true) {
    value = value || {};
    let parts = Array.isArray(prop) ? prop : prop.match(/([^\[\](\.|\/)]+)/g);
    try {
        for (let i = 0; i < parts.length; i++) {
            const withNext = safe
                ? typeof value == "object" && value != null
                : true;
            if (withNext && parts[i] in value) {
                value = value[parts[i]];
            } else {
                return optionValue;
            }
        }
    } catch (e) {
        value = optionValue;
    }
    return value;
}
