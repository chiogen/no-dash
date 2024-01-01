
export function isObject<O>(obj: unknown): obj is O {
    return typeof obj === 'object' && !!obj;
}