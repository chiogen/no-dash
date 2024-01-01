
type CreateHash<K> = (k: K) => string;

export class HashSet<K> {

    readonly #store = new Map<string, K>();
    readonly #createHash: CreateHash<K> = JSON.stringify;

    get size(): number {
        return this.#store.size;
    }

    [Symbol.iterator](): IterableIterator<K> {
        return this.#store.values();
    }
    readonly [Symbol.toStringTag]: string = '';

    constructor(createHash: CreateHash<K>) {
        this.#createHash = createHash;
    }

    add(value: K): this {
        const hash = this.#createHash(value);
        this.#store.set(hash, value);
        return this;
    }

    has(value: K): boolean {
        const hash = this.#createHash(value);
        return this.#store.has(hash);
    }

    delete(value: K): boolean {
        const hash = this.#createHash(value);
        return this.#store.delete(hash);
    }

    clear(): void {
        this.#store.clear();
    }

    forEach(callbackfn: (value: K, set: HashSet<K>) => void, thisArg?: any): void {
        for (const value of this) {
            callbackfn.call(thisArg ?? this, value);
        }
    }

    * entries(): IterableIterator<[K, K]> {
        for (const value of this.#store.values()) {
            yield [value, value];
        }
    }

    keys(): IterableIterator<K> {
        return this.#store.values();
    }
    values(): IterableIterator<K> {
        return this.#store.values();
    }

}