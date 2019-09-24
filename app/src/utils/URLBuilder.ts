/**
 * Build a URL with a query string.
 * @param base the base URL
 * @param params an object containing the query paramters to add
 */
const URLBuilder = (base: string, params: { [key: string]: string }) => {
  return `${base}?${Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&")}`;
};

export default URLBuilder;
