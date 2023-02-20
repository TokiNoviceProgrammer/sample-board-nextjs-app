import { Dispatch, SetStateAction } from 'react'

export interface PostData {
  date: string
  name: string
  content: string
}
export interface UpdatePostData extends PostData {
  updatePostDisplayFlg: boolean
  setUpdatePostDisplayFlg: Dispatch<SetStateAction<boolean>>
}
export type PostDataList = PostData[]
