import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '20px' }} className='px-3 text-center'>
      <div className='display-4'>メニュー画面</div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>
                <Link href='/board' className='display-6'>
                  一般ユーザ用
                </Link>
              </th>
              <th>
                <Link href='/boardAdministrator' className='display-6'>
                  管理ユーザ用
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>閲覧と投稿のみが可能</td>
              <td>左記に加えて編集と削除が可能</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
