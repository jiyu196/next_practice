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

// ---------------------------경로 밑에 경로--------------------------------
// localhost:3030/board 밑에  /rental 경로도 붙일 수 있는지 실습해봄
// app 경로 밑에 board 경로 만들었던 것처럼 board밑에 rental경로를 생성하니 가능함