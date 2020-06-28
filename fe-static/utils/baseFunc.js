/**
 * 通过插入a标签实现点击下载
 */
export const clickDownUrl = function (url, k) {
  const id = k || 'aiddownloadcomplete'
  const a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('id', id)
  // if (document.getElementById(id)) {
  //   document.body.removeChild(document.getElementById(id))
  // }
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById(id))
}

/**
 * 深度copy  from vuex code
 */
export function find(list, f) {
  return list.filter(f)[0]
}
export function deepCopy(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}