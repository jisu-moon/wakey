import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

import MainTitleWrapper from '../components/Home/MainTitleWrapper';
import WhyWrapper from '../components/Home/WhyWrapper';

import * as S from '../styles/pages/Home.style';
import useViewport from '../hooks/useViewport';

export default function Home() {
  const { scrollY } = useScroll();
  const textOpacity = useTransform(
    scrollY,
    [window.innerHeight * 2, window.innerHeight * 2 + 200],
    [0, 1],
  );
  const { ref, viewport } = useViewport();
  console.log(viewport);
  return (
    <>
      <S.Container $zIndex={2}>
        <MainTitleWrapper />
        <S.WhyTextWrapper>
          <motion.p
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            style={{
              opacity: textOpacity,
            }}
          >
            깨어나세요!(Wakey) 매출을 높일 수 있는
          </motion.p>
          <motion.p initial={{ y: 100, opacity: 0 }}>
            모든 것들을 쉽게 알려드립니다
          </motion.p>
        </S.WhyTextWrapper>
      </S.Container>
      <S.Container2 $background={'primary'} $zIndex={1}>
        <WhyWrapper />
      </S.Container2>
    </>
  );
}
