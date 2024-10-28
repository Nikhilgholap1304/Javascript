const HOF = (callback, anime) => {
  callback(anime)
}

const callbackFn = (anime) => {
  console.log(`${anime} is the best`)
}

console.log(HOF(callbackFn, "One Piece"))