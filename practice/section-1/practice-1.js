'use strict';

function collectSameElements(collectionA, collectionB) {  
  const result = [];
  collectionA.forEach((a)=>collectionB.forEach((b)=>{
    if ( a === b ){
      result.push(a);
    }
  }));
  return result;
}