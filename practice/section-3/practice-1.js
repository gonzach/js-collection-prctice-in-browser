'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const item_countB    = {},
        new_objectB    = [],
        new_collection = [];
  objectB.value.forEach((item)=>{
    item_countB[item] = item_countB[item] + 1 || 1
 });

  for (const [keys, count] of Object.entries(item_countB)) {
    new_objectB.push({key: keys, count: count})
  }

  for (const object in collectionA) {
    let identifier = true; 
    for (const obj in new_objectB) {
      if ( collectionA[object].key === new_objectB[obj].key ) {
        if ( collectionA[object].count === new_objectB[obj].count ) {
          new_collection.push({key: collectionA[object].key, count: new_objectB[obj].count});
          identifier = false;
        }
        else {
          const new_count =  collectionA[object].count - new_objectB[obj].count;
          new_collection.push({key: collectionA[object].key, count: new_count});
          identifier = false;
        }
      }
    }
    if ( identifier == true) {
      new_collection.push({key: collectionA[object].key, count: collectionA[object].count});
    } 
  }
  return new_collection;
}