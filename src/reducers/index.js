export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_URL':
      const urlObj = {
        url:action.payload.url,
        id:state.urlId,
        vote:0,
        truth:0,
        fake:0
      }
      const urlList = state.urlList.slice(0);
      const sortList = state.sortList.slice(0);
      urlList.push(urlObj);
      sortList.push(urlObj);
      const newState = Object.assign({}, state);
      newState.urlList = urlList;
      newState.sortList = sortList;
      newState.urlId++
      return newState;
    case 'SUBMITTING_URL':
      const newnewState = Object.assign({}, state);
      newnewState.submittingUrl = action.payload.url;
      return newnewState;
    case "INC_TRUTH":
      const newurlList = state.urlList.slice(0);
      const newsortList = state.sortList.slice(0);
      newurlList[action.payload.id].truth++;
      newurlList[action.payload.id].vote++;
      newsortList.sort(function(a,b){
                          if(a.vote > b.vote) return -1;
                          if(a.vote < b.vote) return 1;
                          return 0;
                      });
      const newnewnewState = Object.assign({}, state);
      newnewnewState.urlList = newurlList;
      newnewnewState.sortList = newsortList;
      return newnewnewState;
    case "INC_FAKE":
      const newnewurlList = state.urlList.slice(0);
      const newnewsortList = state.sortList.slice(0);
      newnewurlList[action.payload.id].fake++;
      newnewurlList[action.payload.id].vote++;
      newnewsortList.sort(function(a,b){
                          if(a.vote > b.vote) return -1;
                          if(a.vote < b.vote) return 1;
                          return 0;
                      });
      const newnewnewnewState = Object.assign({}, state);
      newnewnewnewState.urlList = newnewurlList;
      newnewnewnewState.sortList = newnewsortList;
      return newnewnewnewState;
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
