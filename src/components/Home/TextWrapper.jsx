import { useRef } from 'react';
import * as S from '../../styles/components/Home/TextWrapper.style';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function TextWrapper() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const neonOpacity = useTransform(scrollYProgress, [0.25, 0.32], [0, 1]);
  return (
    <S.Container ref={ref}>
      <p>
        대표님의 성공이 저희의 성공입니다.
        <br />
        우리가 여러분의 개발, 마케팅의 WAKE와 KEY가 되어드리겠습니다.
      </p>
      <motion.p
        className='neon'
        style={{
          opacity: neonOpacity,
        }}
      >
        대표님의 성공이 저희의 성공입니다.
        <br />
        우리가 여러분의 개발, 마케팅의 WAKE와 KEY가 되어드리겠습니다.
      </motion.p>
    </S.Container>
  );
}
