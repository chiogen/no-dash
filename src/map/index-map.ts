
type IndexMapHashBuilder<K, V> = (key: K) => string;

interface IndexMapStore<K, V> {
    readonly indices: Map<string, number>;
    readonly entries: Array<[K, V]>;
}

export class IndexMap<K, V> {

    private readonly store: IndexMapStore<K, V>;
    private readonly hashBuilder: IndexMapHashBuilder<K, V>;

    public get size(): number {
        return this.store.entries.length;
    }

    public [Symbol.toStringTag]: string = '';
    public [Symbol.iterator](): IterableIterator<[K, V]> {
        throw new Error("Method not implemented.");
    }

    constructor(hashBuilder: IndexMapHashBuilder<K, V>) {

        this.store = {
            indices: new Map(),
            entries: new Array()
        };

        this.hashBuilder = hashBuilder;
    }

    public forEach(callbackfn: (value: V, key: K) => void, thisArg?: any): void {
        for (const [key, value] of this.store.entries) {
            callbackfn.call(thisArg ?? this, value, key);
        }
    }

    public get(key: K): V | undefined {
        const hash = this.hashBuilder(key);
        const index = this.store.indices.get(hash);

        if (typeof index !== 'number')
            return undefined;

        return this.store.entries[index]?.[1];
    }
    public at(index: number): readonly [K, V] {
        return this.store.entries[index];
    }

    public has(key: K): boolean {
        const hash = this.hashBuilder(key);
        return this.store.indices.has(hash);
    }

    public set(key: K, value: V): this {
        const hash = this.hashBuilder(key);
        let index = this.store.indices.get(hash);

        if (typeof index === 'number') {
            this.store.entries[index] = [key, value];
        } else {
            index = this.store.entries.length;
            this.store.indices.set(hash, index);
            this.store.entries.push([key, value]);
        }

        return this;
    }

    public * entries(): IterableIterator<readonly [K, V]> {
        for (const entry of this.store.entries) {
            yield entry;
        }
    }

    public * keys(): IterableIterator<K> {
        for (const entry of this.store.entries) {
            yield entry[0];
        }
    }

    public * values(): IterableIterator<V> {
        for (const entry of this.store.entries) {
            yield entry[1];
        }
    }

    public clear(): void {
        this.store.indices.clear();
        this.store.entries.length = 0;
    }

    public delete(key: K, optimizeIndices = true): boolean {

        const hash = this.hashBuilder(key);
        const index = this.store.indices.get(hash);

        if (typeof index !== 'number')
            return;

        this.store.indices.delete(hash);
        this.store.entries[index] = undefined;

        if (optimizeIndices)
            this.rebuildIndices();
    }

    public rebuildIndices() {
        const { entries, indices } = this.store;

        let i = 0;

        while (i < entries.length) {

            if (!entries[i]) {
                entries.splice(i, 1);
                continue;
            }

            const [key] = entries[i];
            const hash = this.hashBuilder(key);
            indices.set(hash, i);
            i++;
        }
    }

}
