import web3, { getDefaultAccount } from '../utils/web3'

function web3GetBalance(balance) {
  return {
    type: 'web3/getBalance',
    balance
  }
}

function web3Error(action, error) {
  return {
    type: 'web3/error',
    action,
    error
  }
}

function web3getDefaultAccount(account) {
  return {
    type: 'web3/getDefaultAccount',
    account
  }
}

export function loadDefaultAccount() {
  return function(dispatch) {
    return getDefaultAccount().then(
      ac => dispatch(web3getDefaultAccount(ac)),
      err => dispatch(web3Error('web3/getDefaultAccount', err))
    )
  }
}

export function getBalance() {
  return function(dispatch) {
    return getDefaultAccount().then(ac =>
      web3.eth
        .getBalance(ac)
        .then(
          balance => dispatch(web3GetBalance(balance)),
          error => dispatch(web3Error('web3/getBalance', error))
        )
    )
  }
}
