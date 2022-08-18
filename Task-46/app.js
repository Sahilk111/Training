// Anagrams //

function aclean(arr){

    let map = new Map();

    for (let word of arr){

        let sorted = word.toLowerCase().split('').sort().join('');

        map.set(sorted,word);
    }
    for (let entry of map) 
  alert(entry);

    return Array.from(map.values());
};


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );