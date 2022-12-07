import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>メニュー画面</div>
      <Link href='/board'>掲示板へ</Link>
    </div>
  )
}
