import Image from "next/image";
import Text from "@/components/Text";
import Title from "@/components/Title";


export default function Home() {
  return (
    <div>
      <Title/>
      <Text/>
    </div>
  );
}

// --------------------------브라우저 주소 경로------------------------------
// app 경로 밑에 member 경로 생성
// -> 브라우저에서 localhost://3000/member 로 접근 가능

// ------------------------------차이점----------------------------------
// 리액트에서는 React Router로 라우팅을 직접 설정해야한다는 차이점이 있음