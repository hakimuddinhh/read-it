
const fetchAPI = async (url: string, options: {} ) => {
  try {
    const response = await fetch(url, {headers: options});
    const body = await response.json();
    return body;
  } catch (e) {
    return e;
  }
};

export { fetchAPI };
