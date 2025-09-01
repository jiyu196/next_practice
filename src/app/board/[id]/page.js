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

// ---------------------------------[id]-------------------------------------
// 폴더 경로를 app/board/[id]/page.js 이렇게 만들었을 때
// 브라우저에서 localhost:3000/board/123 혹은 localhost:3000/board/abc 이런식으로 주소의 일부분이 변수처럼 동작함
// id가 123, id가 abc인거

// ---------------------------------params-------------------------------------
// next.js가 자동으로 params로 객체를 전달해준다
// params.id는 URL에서 [id]자리에 들어간 값임
// <p>{id}</p>  이건 주소에 따라 다른 값이 출력된다

// 암튼 bno같은 경우에도
// React Router에서는 /board/:bno 이런식으로 변수 bno를 받았는데
// Next.js에서는 폴더이름을 [bno] (대괄호)로 해서 params.bno로 받음

// --------------------------------페이지이동-------------------------------------
// <Link href="/board">보드로이동하기</Link> 이거
// --> 페이지 이동은 Link 를 사용해서 이동하면됨.