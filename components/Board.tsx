import Link from 'next/link'
import React from 'react'
import DummyData from './DummyData'

const Board = () => {
  const postData = DummyData()
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
                <h5 className='card-title'>{v.title}</h5>
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
