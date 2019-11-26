export function setItem(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(e)
  }
}

export function getItem(key: string) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : undefined
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export function clear() {
  try {
    localStorage.clear()
  } catch (e) {
    console.error(e)
  }
}
