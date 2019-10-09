'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(listA=>Object.values(objectB)[0].includes(listA));
}
