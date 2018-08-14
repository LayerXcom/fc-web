export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_URL':
      const url = action.payload.url;
      const urlList = state.urlList.slice(0);
      urlList.push(url);
      const newState = Object.assign({}, state);
      newState.urlList = urlList;
      return newState;
    case 'web3/getBalance':
      return { ...state, balance: action.balance }
    case 'web3/getDefaultAccount':
      return {
        ...state,
        account: action.account,
        network: action.network,
        initialized: true
      }
    case 'web3/error':
      if (action.action === 'web3/getDefaultAccount') {
        return { ...state, initialized: true, error: action.error }
      }
      return { ...state, error: action.error }
    default:
      return state
  }
}
