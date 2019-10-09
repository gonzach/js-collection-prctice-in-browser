'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(listA=>collectionB[0].includes(listA));
}
