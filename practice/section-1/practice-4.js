'use strict';

function collectSameElements(collectionA, collectionB) {
    
  return collectionA.map(listA => listA.key)
  .filter( finalListA => Object.values(collectionB)[0].includes(finalListA));

}