"use strict";

const fs = require("fs");

function parseDictionary(filePath) {
    const file = fs.readFileSync(filePath);
    const json = JSON.parse(file.toString());
    const dict = Object.keys(json);
    return dict;
}

function findWord(dict) {
    const FLWords = dict.filter(word => word.length === 5);
    const countMap = new Map();
    FLWords.forEach(word => {
        const chars = Array.from(word);
        const sorted = chars.sort( (c1, c2) => c1 - c2 );
        const s = sorted.join("");
        const set = new Set(s);
        if (set.size < 5) return;
        const count = countMap.get(s);
        console.log(count);
        if (count) countMap.set(s, count + 1)
        else countMap.set(s, 1);
    });

    const countArray = Array.from(countMap.entries());
    countArray.sort( ([k1, v1], [k2, v2]) => v2 - v1 );
    const mostCommon = countArray.map( ([key, value]) => key ).at(0);
    
    const word = FLWords.find( w => {
        const chars = Array.from(w);
        const sorted = chars.sort( (c1, c2) => c1 - c2 );
        const s = sorted.join("");
        return s == mostCommon;
    });

    return word;
}

const dict = parseDictionary("dictionary.json");
const word = findWord(dict);
console.log(word);