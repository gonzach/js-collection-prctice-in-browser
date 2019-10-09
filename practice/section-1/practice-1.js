'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(listA=>collectionB.includes(listA));
}