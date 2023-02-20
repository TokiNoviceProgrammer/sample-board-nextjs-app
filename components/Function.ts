import { QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'
import { PostDataList, UpdatePostDisplayState } from './Type'

export function convPostDataFromDoc(d: QueryDocumentSnapshot<any>) {
  return {
    date: d.data().date as string,
    name: d.data().name as string,
    content: d.data().content as string,
  }
}
export function settingPostData(
  snapshot: QuerySnapshot<any>,
  setData: Dispatch<SetStateAction<PostDataList>>,
  updatePostDisplayState: UpdatePostDisplayState,
  setUdatePostDisplayState: Dispatch<UpdatePostDisplayState>,
) {
  let postData: PostDataList = []
  setUdatePostDisplayState({})
  snapshot.docs.map((d) => {
    postData.push(convPostDataFromDoc(d))
    setUdatePostDisplayState({ ...updatePostDisplayState, [d.data().date]: false })
  })
  postData.sort((a, b) => {
    return convNumFromDate(a.date) - convNumFromDate(b.date)
  })
  setData(postData)
}
/**
 * yyyy-mm-dd hh:mm:ss -> yyyymmddhhmmss
 * @param yyyymmddhhmmss
 * @returns
 */
function convNumFromDate(yyyymmddhhmmss: string) {
  return Number(yyyymmddhhmmss.replace(/-|:| /g, ''))
}
/**
 * @param date
 * @returns yyyy-mm-dd hh:mm:ss
 */
export function formatDate(date: Date) {
  const yyyy = date.getFullYear()
  const mm = ('00' + (date.getMonth() + 1)).slice(-2)
  const dd = ('00' + date.getDate()).slice(-2)
  const h = ('00' + date.getHours()).slice(-2)
  const m = ('00' + date.getMinutes()).slice(-2)
  const s = ('00' + date.getSeconds()).slice(-2)
  return yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + m + ':' + s
}
