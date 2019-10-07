'use strict';

function collectSameElements(collectionA, collectionB) {
  const finalCollection = [];
  collectionA.forEach((collection_a)=>collectionB[0].forEach((collection_b)=>{
    if ( collection_a === collection_b ){
      finalCollection.push(collection_a);
    }
    }));
    return finalCollection; 
}
