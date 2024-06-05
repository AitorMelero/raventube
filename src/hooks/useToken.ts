import { TOKEN_NAME } from '@/utils/consts'

interface TokenHook {
  token: string | null
  addToken: (token: string) => void
  deleteToken: () => void
}

export const useToken = (): TokenHook => {
  const token = localStorage.getItem(TOKEN_NAME)

  const addToken = (token: string) => {
    localStorage.setItem(TOKEN_NAME, token)
  }

  const deleteToken = () => {
    localStorage.removeItem(TOKEN_NAME)
  }

  return {
    token,
    addToken,
    deleteToken,
  }
}
