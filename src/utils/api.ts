import { getEnvVariables } from './envVariables'

export async function callAPI(endpoint: string, errorMessage: string, token?: string) {
  const YT_URL = getEnvVariables().VITE_YT_URL
  const key = token ? token : localStorage.getItem(getEnvVariables().VITE_TOKEN_NAME)

  return fetch(YT_URL + endpoint + '&key=' + key).then((res) => {
    if (!res.ok) throw new Error(errorMessage)

    return res.json()
  })
}
