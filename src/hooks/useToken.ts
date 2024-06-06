import { getEnvVariables } from '@/utils/envVariables'

interface TokenHook {
  token: string | null
  addToken: (token: string) => void
  deleteToken: () => void
}

export const useToken = (): TokenHook => {
  const token = localStorage.getItem(getEnvVariables().VITE_TOKEN_NAME)

  const addToken = (token: string) => {
    localStorage.setItem(getEnvVariables().VITE_TOKEN_NAME, token)
  }

  const deleteToken = () => {
    localStorage.removeItem(getEnvVariables().VITE_TOKEN_NAME)
  }

  return {
    token,
    addToken,
    deleteToken,
  }
}
