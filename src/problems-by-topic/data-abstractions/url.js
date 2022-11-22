export const make = (url) => {
  return new URL(url);
};

export const getProtocol = (data) => data.protocol;
export const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};

export const getHost = (data) => data.host;
export const setHost = (data, host) => {
  data.host = host;
};

export const getPath = (data) => data.pathname;
export const setPath = (data, path) => {
  data.pathname = path;
};

export const getQueryParam = (data, paramName, defaultValue = null) =>
  data.searchParams.get(paramName) || defaultValue;

export const setQueryParam = (data, key, value) => {
  data.searchParams.set(key, value);
};

export const toString = (data) => data.toString();
