import { addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import DummyData from './DummyData'
import db from './Firebase'
import { formatDate, settingPostData } from './Function'
import { PostData } from './Type'

const Board = () => {
  const [postData, setPostData] = useState<PostData>([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  // const dummyPostData = DummyData()
  useEffect(() => {
    const collect = collection(db, 'board')
    getDocs(collect).then((snapshot) => {
      settingPostData(snapshot, setPostData)
    })
    // リアルタイムでデータを取得・設定
    onSnapshot(collect, (snapshot) => {
      settingPostData(snapshot, setPostData)
    })
  }, [])
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (name === '' || content === '') {
      return
    }
    await addDoc(collection(db, 'board'), {
      date: formatDate(new Date()),
      name: name,
      content: content,
    })
    setName('')
    setContent('')
  }
  return (
    <div>
      <Link style={{ paddingLeft: '20px' }} href='/'>
        メニューへ
      </Link>
      <div style={{ padding: '20px' }}>
        <div>
          {postData.map((v, k) => (
            <div key={k} className='card'>
              <div className='card-header'>{v.date}</div>
              <div className='card-body'>
                <h5 className='card-title'>{v.name}</h5>
                <p className='card-text'>{v.content}</p>
                <button className='btn btn-primary'>削除</button>
              </div>
            </div>
          ))}
        </div>
        <hr></hr>
        <div>
          <form onSubmit={handleSubmit}>
            <div>名前</div>
            <input
              name='name'
              type='text'
              placeholder='名前'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            ></input>
            <div>投稿内容</div>
            <textarea
              name='content'
              cols={40}
              rows={5}
              value={content}
              onChange={(e) => {
                setContent(e.target.value)
              }}
            ></textarea>
            <div>
              <button className='btn btn-primary' style={{ margin: '5px' }}>
                投稿
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Board
