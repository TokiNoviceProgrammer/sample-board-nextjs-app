import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '20px' }} className='px-3 text-center'>
      <div className='display-4'>メニュー画面</div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <Link href='/board' className='display-6'>
          掲示板へ
        </Link>
      </div>
    </div>
  )
}
