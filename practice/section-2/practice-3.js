'use strict';

function countSameElements(collection) {
  const item_count = {};
  collection.forEach((item)=>{
    item_count[item] = item_count[item] + 1 || 1
 });
  const new_Array = [];
  for (const [keys, count] of Object.entries(item_count)) {
    const len = keys.length;
    if ( len  !== 1 ) {
      const newcount = parseInt(keys.substring(2, 4), 10);
      new_Array.push({name: keys[0], summary: newcount});
    }
    else {
        new_Array.push({name: keys, summary: count});
    }
  }
  const newcollection = new_Array.reduce((prev, cur)=> {
    const name = cur.name, found = prev.find((elem)=> {
        return elem.name == name
    });
    if (found) found.summary += cur.summary;
    else prev.push(cur);
    return prev;
  }, []);  
  return newcollection; 
}
