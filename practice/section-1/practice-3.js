'use strict';

function collectSameElements(collectionA, objectB) {
  const finalCollection = [];
  collectionA.forEach((collection_a)=>Object.values(objectB)[0].forEach((collection_b)=>{
    if ( collection_a === collection_b ){
      finalCollection.push(collection_a);
    }
    }));
    return finalCollection;
}
