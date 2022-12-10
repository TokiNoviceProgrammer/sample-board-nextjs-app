import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import DummyData from './DummyData'
import db from './Firebase'
import { settingPostData } from './Function'
import { PostData } from './Type'

const Board = () => {
  const [postData, setPostData] = useState<PostData>([])
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
  return (
    <div>
      <Link style={{ paddingLeft: '20px' }} href='/'>
        メニューへ
      </Link>
      <div style={{ padding: '20px' }}>
        <div>
          <span>タイトル：</span>
          <input type='text'></input>
          <span style={{ marginLeft: '5px' }}>投稿内容：</span>
          <input type='text'></input>
          <button className='btn btn-primary' style={{ margin: '5px' }}>
            投稿
          </button>
        </div>
        <hr></hr>
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
      </div>
    </div>
  )
}

export default Board
