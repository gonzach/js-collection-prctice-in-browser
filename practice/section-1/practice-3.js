'use strict';

function collectSameElements(collectionA, objectB) {
  const result = [];
  collectionA.forEach((a)=>Object.values(objectB)[0].forEach((value)=>{
    console.log(objectB);
    if ( a === value ){
      result.push(a);
    }
    }));
    return result;
}
