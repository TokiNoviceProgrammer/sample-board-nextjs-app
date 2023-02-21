import { setQuery } from './QueryOfFirestore'
import { UpdatePostData } from './Type'

const UpdatePost = (props: UpdatePostData) => {
  async function saveHandleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // 編集内容が空の場合は更新処理を行わない
    if (!('date' in e.target) || !('name' in e.target) || !('content' in e.target)) {
      return
    }
    if (
      (e.target['name'] as HTMLInputElement).value === '' ||
      (e.target['content'] as HTMLInputElement).value === ''
    ) {
      return
    }
    // 更新処理
    setQuery('board', (e.target['date'] as HTMLInputElement).value, {
      date: (e.target['date'] as HTMLInputElement).value,
      name: (e.target['name'] as HTMLInputElement).value,
      content: (e.target['content'] as HTMLInputElement).value,
    })
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
      <form onSubmit={saveHandleClick} style={{ margin: '5px 5px 5px 5px' }}>
        <input type='hidden' name='date' defaultValue={props.date} />
        <div>
          <div>名前</div>
          <input type='text' name='name' defaultValue={props.name} />
        </div>
        <div>
          <div>投稿内容</div>
          <input
            name='content'
            style={{ display: 'flex' }}
            type='text'
            defaultValue={props.content}
          />
        </div>
        <button className='btn btn-primary' style={{ margin: '10px 0px 0px 0px' }}>
          保存
        </button>
      </form>
      <form onSubmit={cancelHandleClick} style={{ margin: '5px 5px 5px 5px' }}>
        <button className='btn btn-primary'>キャンセル</button>
      </form>
    </div>
  )
}

export default UpdatePost
