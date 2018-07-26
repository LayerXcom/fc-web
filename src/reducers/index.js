const initialState = {
  balance: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'web3/getBalance':
      return { ...state, balance: action.balance }
    default:
      return state
  }
}
