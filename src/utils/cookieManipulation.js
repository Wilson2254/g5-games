const cookieSet = (name, value, lifeTime) => {
  document.cookie = `${name}=${value}; max-age=${lifeTime}`
}

const cookieGet = (cookieName) => {
  return (
    document.cookie.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`)?.pop() || ''
  )
}

export { cookieSet, cookieGet }
