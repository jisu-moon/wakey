import HeroWrapper from '../../components/Home/HeroWrapper';
import WhyWrapper from '../../components/Home/WhyWrapper';
import ImgWrapper from '../../components/Home/ImgWrapper';

import * as S from '../../styles/pages/Home.style';
import TextWrapper from '../../components/Home/TextWrapper';

export default function Home() {
  return (
    <main>
      <HeroWrapper />
      <WhyWrapper />
      <ImgWrapper />
      <TextWrapper />
      <S.Container />
    </main>
  );
}
