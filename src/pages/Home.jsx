import HeroWrapper from '../components/Home/HeroWrapper';
import WhyWrapper from '../components/Home/WhyWrapper';

import * as S from '../styles/pages/Home.style';

export default function Home() {
  return (
    <>
      <S.Container>
        <HeroWrapper />
      </S.Container>
      <S.Container2>
        <WhyWrapper />
      </S.Container2>
      <S.Container></S.Container>
    </>
  );
}
