'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const item_countA     = [],
        item_countB     = {},
        new_objectB     = [],
        collectionC     = [],
        new_collectionC = [];
//Counting the same elements in Collection A and get a new Collection C.         
    Object.values(collectionA).forEach((item)=>{
    item_countA[item] = item_countA[item] + 1 || 1
    });

    for (const [keys, count] of Object.entries(item_countA)) {
    collectionC.push({key: keys, count: count})
    }
    //Counting elements in Collection C.  
    objectB.value.forEach((itemB)=>{
    item_countB[itemB] = item_countB[itemB] + 1 || 1
    });

    for (const [keys, count] of Object.entries(item_countB)) {
    new_objectB.push({key: keys, count: count})
    } 
    //Output new Collection C  
    for (const object in collectionC) {
        let identifier = true; 
        for (const obj in new_objectB) {
            if ( collectionC[object].key === new_objectB[obj].key ) {
                if ( collectionC[object].count === new_objectB[obj].count ) {
                    new_collectionC.push({key: collectionC[object].key, count: new_objectB[obj].count});
                    identifier = false;
                }
                else {
                    let div = collectionC[object].count / 3;
                    if ( div == 1) {
                        const new_count =  collectionC[object].count - new_objectB[obj].count;
                        new_collectionC.push({key: collectionC[object].key, count: new_count});
                        identifier = false;
                    }
                    else 
                    {
                        const new_count =  collectionC[object].count - Math.floor(div);
                        new_collectionC.push({key: collectionC[object].key, count: new_count});
                        identifier = false;
                    }
                }
            }
        }
        const len = collectionC[object].key.length;
        if ( len  !== 1 ) {
            const newcount = parseInt(collectionC[object].key.substring(2, 4), 10);
            const div = newcount / 3;
            const final_count = newcount -  Math.floor(div);
            new_collectionC.push({key: collectionC[object].key[0], count: final_count});
            }
        else if ( identifier == true) {
            new_collectionC.push({key: collectionC[object].key, count: collectionC[object].count});
        } 
    }
    return new_collectionC; 
}