'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];  
  collectionA.forEach((key)=>Object.values(collectionB)[0].forEach((value)=> {
  if ( key.key === value ){
    result.push(key.key);
  }
  }));
  return result;
}