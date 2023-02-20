import React, { useState } from 'react'
import { UpdatePostData } from './Type'

const UpdatePost = (props: UpdatePostData) => {
  const [date, setDate] = useState(props.date)
  const [name, setName] = useState(props.name)
  const [content, setContent] = useState(props.content)

  async function saveHandleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    props.setUpdatePostDisplayFlg(false)
  }

  if (!props.updatePostDisplayFlg) {
    return <></>
  }
  return (
    <div className='card'>
      <input
        type='text'
        className='card-header'
        defaultValue={date}
        onChange={(e) => {
          setDate(e.target.value)
        }}
      />
      <div className='card-body'>
        <input
          type='text'
          className='card-title'
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type='text'
          className='card-text'
          defaultValue={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
        <div style={{ display: 'flex' }}>
          <form onSubmit={saveHandleClick}>
            <input type='hidden' name='updateDate' defaultValue={date} />
            <input type='hidden' name='updateName' defaultValue={name} />
            <input type='hidden' name='updateContent' defaultValue={content} />
            <button className='btn btn-primary'>保存</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost
