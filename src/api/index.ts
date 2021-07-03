import React from 'react'; // Rocky's

export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response | false> {
  const finalUrl = url.includes('http') ? url : `https://swapi.dev/api/${url}`
  const response = await fetch(
    finalUrl,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

  if (response.ok) {
    return response.json()
  }
  return false
}

// Rocky's code for search tool

export const useSwapi = (): [any[], (uri: string) => Promise<void>] => {
  // Holds the result of the API calls
  const [result, setResult] = React.useState<any[]>([]);

  // Helper function for making API calls
  const fetchData = React.useCallback(async (uri) => {
    const result = await fetch(`https://swapi.dev/api${uri}`);
    const data = await result.json();
    console.log(data);
    if (!data.results) {
      setResult(data);
    } else {
      setResult(data.results);
    }
  }, [setResult]);

  return [result, fetchData];
}
