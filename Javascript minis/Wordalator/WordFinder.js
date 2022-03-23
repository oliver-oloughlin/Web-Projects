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
        chars.forEach( c => countMap.set(c, countMap.has(c) ? countMap.get(c) + 1 : 1));
    });

    const countArray = Array.from(countMap.entries());
    countArray.sort( ([k1, v1], [k2, v2]) => v2 - v1 );
    const mostCommon = countArray.filter( (v, i, _) => i < 5).map( ([k, v]) => k);
    const word = FLWords.find( w => mostCommon.every( c => w.includes(c) ) );
    return word;
}

const dict = parseDictionary("dictionary.json");
const word = findWord(dict);
console.log(word);