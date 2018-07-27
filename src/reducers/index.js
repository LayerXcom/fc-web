const initialState = {
  balance: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'web3/getBalance':
      return { ...state, balance: action.balance }
    case 'web3/getDefaultAccount':
      return { ...state, account: action.account, initialized: true }
    case 'web3/error':
      if (action.action === 'web3/getDefaultAccount') {
        return { ...state, initialized: true, error: action.error }
      }
      return { ...state, error: action.error }
    default:
      return state
  }
}
