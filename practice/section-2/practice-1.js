'use strict';

function countSameElements(collection) {
  const item_count = {};
  collection.forEach((item)=>{
    item_count[item] = item_count[item] + 1 || 1
  });
  const new_Array = [];
  for (const [keys, count] of Object.entries(item_count)) {
    new_Array.push({key: keys, count: count});
  }
  return new_Array; 
}