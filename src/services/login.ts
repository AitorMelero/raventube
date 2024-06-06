import { LoginType } from '@/types/types'
import { callAPI } from '@/utils/api'
import { getEnvVariables } from '@/utils/envVariables'

export async function login(dataUser: LoginType): Promise<boolean> {
  // Estos son parametros de prueba para realizar una simple peticion a la API
  // de YouTube y comprobar que el TOKEN es correcto
  const PART = 'status'
  const FOR_HANDLE = 'test'
  const ACCEPT = 'application/json'
  const MAX_RESULT = 1
  const { username, password } = dataUser
  const endpoint = `/channels?part=${PART}&forHandle=${FOR_HANDLE}&accept=${ACCEPT}&maxResults=${MAX_RESULT}`

  if (username !== getEnvVariables().VITE_USERNAME) {
    return false
  } else if (isTestUser(password)) {
    // Login con usuario con datos locales
    return true
  }

  try {
    await callAPI(endpoint, 'Login Error', password)
    return true
  } catch (error) {
    return false
  }
}

export const isTestUser = (password: string): boolean => {
  return password === getEnvVariables().VITE_PASSWORD
}
