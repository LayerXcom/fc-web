import web3, { getDefaultAccount } from '../utils/web3'

function web3GetBalance(balance) {
  return {
    type: 'web3/getBalance',
    balance
  }
}

function web3Error(error) {
  return {
    type: 'web3/error',
    error
  }
}

export function getBalance() {
  return function(dispatch) {
    return getDefaultAccount().then(ac =>
      web3.eth
        .getBalance(ac)
        .then(
          balance => dispatch(web3GetBalance(balance)),
          error => dispatch(web3Error(error))
        )
    )
  }
}
