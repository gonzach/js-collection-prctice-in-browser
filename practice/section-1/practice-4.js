'use strict';

function collectSameElements(collectionA, collectionB) {
  const finalCollection = [];  
  collectionA.forEach((key)=>Object.values(collectionB)[0].forEach((collectionB_value)=> {
  if ( key.key === collectionB_value ){
    finalCollection.push(key.key);
  }
  }));
  return finalCollection;
}