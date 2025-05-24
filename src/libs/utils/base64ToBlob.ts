export const base64ToBlob = (base64: string, mime: string) => {
	const byteString = atob(base64.split(',')[1])
	const arrayBuffer = new ArrayBuffer(byteString.length)
	const uintArray = new Uint8Array(arrayBuffer)

	for (let i = 0; i < byteString.length; i++) {
		uintArray[i] = byteString.charCodeAt(i)
	}

	return new Blob([arrayBuffer], { type: mime })
}
