import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import db from './Firebase'

type Collection = {
  [x: string]: any
}

/**
 * 登録・更新
 * @param document
 * @param key
 */
export async function setQuery(document: string, key: string, collection: Collection) {
  await setDoc(doc(db, document, key), collection)
}
/**
 * 削除
 * @param document
 * @param key
 */
export async function deleteQuery(document: string, key: string) {
  await deleteDoc(doc(db, document, key))
}
