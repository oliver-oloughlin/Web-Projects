"use strict";

function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json", (text) => {
    const json = JSON.parse(text);
    const dict = Object.keys(json);

    const FLWords = dict.filter(word => word.length === 5);
    const countMap = new Map();
    FLWords.forEach(word => {
        const chars = Array.from(word);
        chars.forEach(c => {
            const char = c.toLowerCase();
            if (countMap.get(char)) countMap.set(char, countMap.get(char) + 1);
            else countMap.set(char, 1);
        })
    });

    const countArray = Array.from(countMap.entries());
    countArray.sort( ([k1, v1], [k2, v2]) => v2 - v1 );
    const mostCommon = countArray.map( ([key, value]) => key );
    const common5 = mostCommon.slice(0, 5);
    
    const word = FLWords.find( w => common5.every( c => w.toLowerCase().includes(c) ) );
    console.log(word);
});
