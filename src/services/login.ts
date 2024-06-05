import { LoginType } from '@/types/types'
import { YT_URL } from '@/utils/consts'

export async function login(dataUser: LoginType) {
  // Estos son parametros de prueba para realizar una simple peticion a la API
  // de YouTube y comprobar que el TOKEN es correcto
  const PART = 'status'
  const FOR_HANDLE = 'test'
  const ACCEPT = 'application/json'
  const MAX_RESULT = 2
  const { password } = dataUser

  return fetch(
    `${YT_URL}/channels?part=${PART}&forHandle=${FOR_HANDLE}&key=${password}&accept=${ACCEPT}&maxResults=${MAX_RESULT}`,
  ).then((res) => {
    if (!res.ok) throw new Error('Login Error')

    return res.json()
  })
}
