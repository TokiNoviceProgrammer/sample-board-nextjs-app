import { UpdatePostData } from './Type'

const UpdatePost = (props: UpdatePostData) => {
  async function saveHandleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 投稿年月日時間をキーに編集中（true）から未編集（false）へ更新
    props.setUpdatePostDisplayState({ ...props.updatePostDisplayState, [props.date]: false })
  }

  function cancelHandleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 投稿年月日時間をキーに編集中（true）から未編集（false）へ更新
    props.setUpdatePostDisplayState({ ...props.updatePostDisplayState, [props.date]: false })
  }

  if (!props.updatePostDisplayState[props.date]) {
    // 未編集（false）の場合、何も表示しない
    return <></>
  }
  return (
    <div className='card'>
      <div style={{ margin: '5px 5px 5px 5px' }}>
        <div>名前</div>
        <input type='text' defaultValue={props.name} />
      </div>
      <div style={{ margin: '5px 5px 5px 5px' }}>
        <div>投稿内容</div>
        <input style={{ display: 'flex' }} type='text' defaultValue={props.content} />
      </div>
      <form onSubmit={saveHandleClick} style={{ margin: '5px 5px 5px 5px' }}>
        <input type='hidden' name='updateDate' defaultValue={props.date} />
        <input type='hidden' name='updateName' defaultValue={props.name} />
        <input type='hidden' name='updateContent' defaultValue={props.content} />
        <button className='btn btn-primary'>保存</button>
      </form>
      <form onSubmit={cancelHandleClick} style={{ margin: '5px 5px 5px 5px' }}>
        <button className='btn btn-primary'>キャンセル</button>
      </form>
    </div>
  )
}

export default UpdatePost
