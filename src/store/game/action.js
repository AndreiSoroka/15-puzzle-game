export function createCards(size) {
  return {type: "CREATE_CARDS", payload: size}
}
export function moveCard(index) {
  return {type: "MOVE_CARDS", payload: index}
}

export function backMoveCard() {
  return {type: "BACK_MOVE_CARDS"}
}
