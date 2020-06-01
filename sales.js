function calculateRangeTotal(won, min, price) {
  const rest = won - min

  if (rest <= 0) {
    return 0
  }

  if (rest >= 1 && rest <= 5) {
    return rest * price
  }

  if (rest > 5) {
    return 5 * price
  } else {
    return 0
  }
}

function rangeFiveToNine(won) {
  // =IF(AND(C3>=1,C3<=5),C3*25,IF(C3>=6,5*25,0))
  // C3 = rest (saldo)
  // won (ganados)
  return calculateRangeTotal(won, 5, 25)
}

function rangeTenToFourteen(won) {
  // =IF(AND(D3>=1,D3<=5),D3*32.5,IF(D3>=6,5*32.5,IF(D3<=0,0,0)))
  // D3 = rest (saldo)
  // won (ganados)
  return calculateRangeTotal(won, 10, 32.5)
}

function rangeFifhteenToNineteen(won) {
  // spec + implement rangeFifthteenToNineTeen
  // D3 = rest (saldo)
  // won (ganados)

  return calculateRangeTotal(won, 15, 40)
}

// spec + implement rangeTweentyOrMore
function rangeTweentyOrMore(won) {
  // spec + implement rangeFifthteenToNineTeen
  // D3 = rest (saldo)
  // won (ganados)

  const rest = won - 20

  if (rest <= 0) {
    return 0
  }

  return rest * 50
}

function total(won) {
  return rangeFiveToNine(won) + rangeTenToFourteen(won) + rangeFifhteenToNineteen(won) + rangeTweentyOrMore(won)
}

exports.rangeFiveToNine = rangeFiveToNine
exports.rangeTenToFourteen = rangeTenToFourteen
exports.rangeFifhteenToNineteen = rangeFifhteenToNineteen
exports.rangeTweentyOrMore = rangeTweentyOrMore
exports.total = total