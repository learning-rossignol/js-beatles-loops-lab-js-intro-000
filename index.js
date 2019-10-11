// add solution here

function theBeatlesPlay(musicians, instruments){
  var store = [];
  for (let i = 0; i < musicians.length; i++) {
    store.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return store;
}

function johnLennonFacts(facts) {
  let store = [], i = 0;

  while (i < facts.length) {
    store.push( facts[i] + "!!!")
  }
  return store;
}
