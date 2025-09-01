import Link from "next/link";

export default function Page({params}){
  const {id} = params;
"board/:bno"
  return (
    <div>
      <p>{id}</p>
      <Link href="/board">보드로이동하기</Link>
    </div>
  )
}