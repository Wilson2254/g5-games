const fileTypeRegex = /\.(jpe?g||png|webp|bmp)$/i

const checkFileType = (fileUrl = '') => {
  return fileTypeRegex.test(fileUrl)
}

export { checkFileType }
