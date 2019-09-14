'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = [];
  collectionA.forEach((a)=>collectionB[0].forEach((b)=>{
    if ( a === b ){
      result.push(a);
    }
    }));
    return result; 
}
