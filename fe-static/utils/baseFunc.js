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