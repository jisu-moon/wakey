import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';

import * as S from '../../styles/components/Home/WhyWrapper.style';
import { useRef } from 'react';

export default function WhyWrapper() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    console.log(latest);
  });

  const topScale = useTransform(scrollYProgress, [0, 0.1], [1, 2]);
  // const topScale = useTransform(
  //   adjustedScrollY,
  //   [0, getPercentageValue(viewport.height, 5)],
  //   [1, 2],
  // );
  // const topOpacity = useTransform(
  //   scrollY,
  //   [viewport.y - 200, viewport.y],
  //   [1, 0],
  // );

  // const textOpacity = useTransform(
  //   scrollY,
  //   [viewport.y, viewport.y + 150, viewport.y + 300, viewport.y + 500],
  //   [0, 1, 1, 0],
  // );
  // const textY = useTransform(
  //   scrollY,
  //   [viewport.y, viewport.y + 150, viewport.y + 300, viewport.y + 500],
  //   [50, 0, 0, -50],
  // );

  return (
    <S.WhyTextWrapper ref={ref}>
      <motion.p className='top' style={{ scale: topScale }}>
        우리가 왜 웨이키냐구요?
      </motion.p>
      {/* <motion.p
        className='positionCenter'
        style={{
          opacity: textOpacity,
          y: textY,
          x: '-50%',
        }}
      >
        깨어나세요!(Wakey) 매출을 높일 수 있는
      </motion.p>
      <motion.p initial={{ y: 100, opacity: 0 }}>
        모든 것들을 쉽게 알려드립니다
      </motion.p> */}
    </S.WhyTextWrapper>
  );
}
