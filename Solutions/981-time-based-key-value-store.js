class TimeMap {
    constructor() {
        this.store = new Map();
    }

    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }

        this.store.get(key).push({ timestamp, value });
    }

    get(key, timestamp) {
        if (!this.store.has(key)) {
            return '';
        }

        const data = this.store.get(key);
        let left = 0;
        let right = data.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (data[mid].timestamp === timestamp) {
                return data[mid].value;
            } else if (data[mid].timestamp > timestamp) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left > 0 ? data[left - 1].value : '';
    }
}