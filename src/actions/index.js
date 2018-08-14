export const addUrl = (url) => {
  return {
    type: 'ADD_URL',
    payload: {url:url}
  };
}
