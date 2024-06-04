export interface LoginType {
  username: string
  password: string
}

export interface VideoType {
  id: string
  name: string
  imageUrl: string
  videoDate: string
  visits: number
  hashmd5: CryptoJS.lib.WordArray
}
