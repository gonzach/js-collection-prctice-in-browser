'use strict';

function countSameElements(collection) {
  const item_count = {};
  collection.forEach((item)=>{
    item_count[item] = item_count[item] + 1 || 1
 });
  const new_Array = [];
  for (const [keys, count] of Object.entries(item_count)) {
    const len = keys.length;
    if ( len === 1 ) {
      new_Array.push({key: keys, count: count});
    }
    else {
      const new_key = keys.split("");
      const newcount = parseInt(new_key[2], 10);
      new_Array.push({key: keys[0], count:newcount});
    }
  }
  return new_Array;
}