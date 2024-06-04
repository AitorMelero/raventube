import { LoginType } from '@/types/types'

const ENDPOINT = 'https://www.googleapis.com/youtube/v3'

export async function login(dataUser: LoginType) {
  const PART = 'id'
  const CHANNEL_ID = 'UC_x5XG1OV2P6uZZ5FSM9Ttw'
  const ACCEPT = 'application/json'
  const MAX_RESULT = 2
  const { password } = dataUser

  return fetch(
    `${ENDPOINT}/activities?part=${PART}&channelId=${CHANNEL_ID}&key=${password}&accept=${ACCEPT}&maxResults=${MAX_RESULT}`,
  ).then((res) => {
    if (!res.ok) throw new Error('Login Error')

    return res.json()
  })
}
