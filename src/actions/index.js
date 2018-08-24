export const addUrl = (url) => {
  return {
    type: 'ADD_URL',
    payload: {
              url:url
              }
  };
}

export const submittingUrl = (url) => {
  return {
    type: 'SUBMITTING_URL',
    payload: {
              url:url
              }
  };
}

export const incTruth = (id) => {
  return{
    type: 'INC_TRUTH',
    payload: {
              id:id
              }
  }
}

export const incFake = (id) => {
  return{
    type: 'INC_FAKE',
    payload: {
              id:id
              }
  }
}
