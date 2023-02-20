import { Dispatch, SetStateAction } from 'react'

export interface PostData {
  date: string
  name: string
  content: string
}
export interface UpdatePostData extends PostData {
  updatePostDisplayState: UpdatePostDisplayState
  setUpdatePostDisplayState: Dispatch<SetStateAction<UpdatePostDisplayState>>
}
export type PostDataList = PostData[]
export type UpdatePostDisplayState = {
  [date: string]: boolean
}
