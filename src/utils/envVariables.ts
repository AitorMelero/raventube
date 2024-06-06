export const getEnvVariables = () => {
  import.meta.env

  return {
    VITE_USERNAME: import.meta.env.VITE_USERNAME,
    VITE_PASSWORD: import.meta.env.VITE_PASSWORD,
    VITE_YT_URL: import.meta.env.VITE_YT_URL,
    VITE_TOKEN_NAME: import.meta.env.VITE_TOKEN_NAME,
  }
}
