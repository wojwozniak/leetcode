const encode = (arr) => {
    let encoded = '';
    for (let i = 0; i < arr.length; i++) {
        encoded += arr[i].length + '/' + arr[i];
    }
    return encoded;
}

const decode = (str) => {
    let decoded = [];
    let i = 0;
    while (i < str.length) {
        let slash = str.indexOf('/', i);
        let len = Number(str.slice(i, slash));
        decoded.push(str.slice(slash + 1, slash + 1 + len));
        i = slash + 1 + len;
    }
    return decoded;
}