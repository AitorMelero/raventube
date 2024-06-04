interface TokenHook {
  token: string | null
  addToken: (token: string) => void
  deleteToken: () => void
}

export const useToken = (): TokenHook => {
  const TOKEN_NAME = 'raventube-token'
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
