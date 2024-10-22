import MainTitleWrapper from '../components/Home/MainTitleWrapper';
import WhyWrapper from '../components/Home/WhyWrapper';
import * as S from '../styles/pages/Home.style';

export default function Home() {
  return (
    <>
      <S.Container height={'200vh'}>
        <MainTitleWrapper />
      </S.Container>
      <S.Container>
        <WhyWrapper />
      </S.Container>
    </>
  );
}
