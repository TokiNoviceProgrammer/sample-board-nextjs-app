import React, { useState } from 'react'
import { UpdatePostData } from './Type'

const UpdatePost = (props: UpdatePostData) => {
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
      <div style={{ margin: '5px 5px 5px 5px' }}>
        <div>名前</div>
        <input
          type='text'
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
      </div>
      <div style={{ margin: '5px 5px 5px 5px' }}>
        <div>投稿内容</div>
        <input
          style={{ display: 'flex' }}
          type='text'
          defaultValue={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
      </div>
      <div>
        <form onSubmit={saveHandleClick} style={{ margin: '5px 5px 5px 5px' }}>
          <input type='hidden' name='updateDate' defaultValue={props.date} />
          <input type='hidden' name='updateName' defaultValue={name} />
          <input type='hidden' name='updateContent' defaultValue={content} />
          <button className='btn btn-primary'>保存</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePost
