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
  let post: PostData = []
  snapshot.docs.map((d) => {
    post.push(convPostDataFromDoc(d))
  })
  setData(post)
}
