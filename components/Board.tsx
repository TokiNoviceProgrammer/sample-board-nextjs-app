import { collection, deleteDoc, doc, getDocs, onSnapshot, setDoc } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import DummyData from './DummyData'
import db from './Firebase'
import { formatDate, settingPostData } from './Function'
import { deleteQuery, setQuery } from './QueryOfFirestore'
import { PostDataList, UpdatePostDisplayState } from './Type'
import UpdatePost from './UpdatePost'

const Board = (props: { administratorFlg: boolean }) => {
  const [postData, setPostData] = useState<PostDataList>([])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  // 編集中か否かを投稿年月日時間をキーに管理
  const [updatePostDisplayState, setUpdatePostDisplayState] = useState<UpdatePostDisplayState>({})

  useEffect(() => {
    const collect = collection(db, 'board')
    getDocs(collect).then((snapshot) => {
      settingPostData(snapshot, setPostData, updatePostDisplayState, setUpdatePostDisplayState)
    })
    // リアルタイムでデータを取得・設定
    onSnapshot(collect, (snapshot) => {
      settingPostData(snapshot, setPostData, updatePostDisplayState, setUpdatePostDisplayState)
    })
    // 依存関係を指定しないまま関数を記述しているとESLintが警告を出すため
    // 以下の部分のみESLintのルールを無効化
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  async function insertHandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (name === '' || content === '') {
      return
    }
    const yyyymmdd = formatDate(new Date())
    setQuery('board', yyyymmdd, {
      date: yyyymmdd,
      name: name,
      content: content,
    })
    setName('')
    setContent('')
  }
  async function deleteHandleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!('date' in e.target)) {
      return
    }
    deleteQuery('board', (e.target['date'] as HTMLInputElement).value)
  }
  return (
    <div>
      <Link style={{ paddingLeft: '20px' }} href='/'>
        メニューへ
      </Link>
      <div style={{ padding: '20px' }}>
        {postData.map((v, k) => (
          <div key={k} className='card'>
            <div className='card-header'>{v.date}</div>
            <div className='card-body'>
              <h5 className='card-title'>{v.name}</h5>
              <p className='card-text'>{v.content}</p>
              {props.administratorFlg && (
                <div style={{ display: 'flex' }}>
                  <button
                    // 編集中（true）の場合、ボタンを非表示
                    style={{ display: updatePostDisplayState[v.date] ? 'none' : '' }}
                    className='btn btn-primary'
                    onClick={() => {
                      // 投稿年月日時間をキーに編集中（true）へ更新
                      setUpdatePostDisplayState({ ...updatePostDisplayState, [v.date]: true })
                    }}
                  >
                    編集
                  </button>
                  <UpdatePost
                    updatePostDisplayState={updatePostDisplayState}
                    setUpdatePostDisplayState={setUpdatePostDisplayState}
                    date={v.date}
                    name={v.name}
                    content={v.content}
                  />
                  <form
                    key={k + 1}
                    onSubmit={deleteHandleClick}
                    style={{ margin: '0px 0px 0px 60px' }}
                  >
                    <input type='hidden' name='date' value={v.date} />
                    <button
                      className='btn btn-primary'
                      value={v.date}
                      // 編集中（true）の場合、ボタンを非表示
                      style={{ display: updatePostDisplayState[v.date] ? 'none' : '' }}
                    >
                      削除
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        ))}
        <hr></hr>
        <div>
          <form onSubmit={insertHandleSubmit}>
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
