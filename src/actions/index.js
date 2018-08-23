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
