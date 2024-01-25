
const splitParts = /(?:\["?)?(\w+)(?:\.|"?])?(.*)/i;

/**
 * A simple function to set a deep value from an object
 * 
 * Attention: This is not tested at all.
 **/
export function get(obj: any, path: string, value: any) {
    if (!path)
        return;

    // Just a placeholder for match result spreading
    let _full: unknown;

    let property: string;
    let rest = path;
    let target = obj;

    while (rest) {
        [_full, property, rest] = rest.match(splitParts);
        if (rest)
            target = target[property];
    }

    target[property] = value;
}