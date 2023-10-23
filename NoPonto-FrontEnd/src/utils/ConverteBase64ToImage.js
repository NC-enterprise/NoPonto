function ConverteBase64ToImage(base64String, mimeType) {
  return `data:${mimeType};base64,${base64String}`;
}

export default ConverteBase64ToImage;