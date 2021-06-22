import { appConfig } from 'config';

const getURL = (queryParams) => {
  try {
    let url = new URL(appConfig.baseURL);
    Object.keys(queryParams).forEach((key) => url.searchParams.append(key, queryParams[key]));

    return url;
  } catch {
    return appConfig.baseURL;
  }
};

export default function httpClient({ headers, queryParams, method, data, ...rest }) {
  const serializedData = data ? JSON.stringify(data) : undefined;

  return fetch(getURL(queryParams), {
    method,
    body: serializedData,
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }).then((response) => response.json());
}
