const groupAnagrams = (strs) => {
    let res = {};
    for(let s of strs) {
        let count = new Array(26).fill(0);
        for(let c of s) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        let countString = count.join(";");
        if(countString in res) {
            res[countString].push(s)
        } else {
            res[countString] = [s];
        }
    }
    return Object.values(res);
}