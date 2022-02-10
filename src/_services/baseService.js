export const setPostRequestOptions = data => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
};

export const setPutRequestOptions = data => {
  return {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
};

/**
 * @param data
 * @param req {string} the request type; i.e. POST, PUT, etc.
 * @returns {{headers: {"Content-Type": string}, method, body: string}}
 */
export const setRequestOptions = (data, req) => {
  return {
    method: req,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
};
