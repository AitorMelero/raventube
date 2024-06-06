import { searchChannelLocal, searchVideosLocal } from './dataTest'
import { getEnvVariables } from './envVariables'

// Llamada a API real
export async function callAPI(endpoint: string, errorMessage: string, token?: string) {
  const YT_URL = getEnvVariables().VITE_YT_URL
  const key = token ? token : localStorage.getItem(getEnvVariables().VITE_TOKEN_NAME)

  return fetch(YT_URL + endpoint + '&key=' + key).then((res) => {
    if (!res.ok) throw new Error(errorMessage)

    return res.json()
  })
}

// Llamada de simulacion local para API
export async function callAPISimulation(endpoint: string, errorMessage: string, idItem: string) {
  if (endpoint === 'channel') {
    return searchChannelLocal(idItem).then((res) => {
      if (res === null) throw new Error(errorMessage)

      return res
    })
  } else {
    return searchVideosLocal(idItem).then((res) => {
      if (res === null) throw new Error(errorMessage)

      return res
    })
  }
}
