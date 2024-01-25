
const splitParts = /(?:\["?)?(\w+)(?:\.|"?])?(.*)/i;

/**
 * A simple function to get a deep value from an object
 **/
export function get<R>(obj: any, path: string): R {
    if (!path)
        return obj as R;

    // Just a placeholder for match result spreading
    let _full: unknown;

    let property: string;
    let rest = path;

    while (rest) {
        [_full, property, rest] = rest.match(splitParts);
        obj = obj[property];
    }

    return obj;
}