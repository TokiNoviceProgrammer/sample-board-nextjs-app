import { QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'
import { PostData } from './Type'

export function convPostDataFromDoc(d: QueryDocumentSnapshot<any>) {
  return {
    date: d.data().date as string,
    name: d.data().name as string,
    content: d.data().content as string,
  }
}

export function settingPostData(
  snapshot: QuerySnapshot<any>,
  setData: Dispatch<SetStateAction<PostData>>,
) {
  let postData: PostData = []
  snapshot.docs.map((d) => {
    postData.push(convPostDataFromDoc(d))
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
