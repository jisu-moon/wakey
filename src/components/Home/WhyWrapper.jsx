import { motion, useScroll, useTransform } from 'framer-motion';

import * as S from '../../styles/components/Home/WhyWrapper.style';
import { useRef } from 'react';
import { useTheme } from 'styled-components';

const textMotionRatios = {
  first: [
    [0.34, 0.38, 0.43, 0.47],
    [0.345, 0.385, 0.435, 0.475],
    [0.35, 0.39, 0.44, 0.48],
  ],
  second: [
    [0.48, 0.52, 0.57, 0.61],
    [0.485, 0.525, 0.575, 0.615],
  ],
  thrid: [
    [0.615, 0.655, 0.705, 0.745],
    [0.62, 0.66, 0.71, 0.75],
    [0.625, 0.665, 0.715, 0.755],
  ],
  fourth: [
    [0.755, 0.795, 0.845, 0.885],
    [0.76, 0.8, 0.85, 0.89],
    [0.765, 0.805, 0.855, 0.895],
  ],
  fifth: [
    [0.895, 0.945],
    [0.9, 0.95],
    [0.905, 0.955],
  ],
};

const textMotionOpacity = [0, 1, 1, 0];
const textMotionY = ['150%', '0%', '0%', '-75%'];

export default function WhyWrapper() {
  const theme = useTheme();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const bgMotion = useTransform(
    scrollYProgress,
    [0.955, 1],
    [theme.colors.primary, '#000'],
  );
  const topX = useTransform(
    scrollYProgress,
    [0.05, 0.18, 0.23, 0.35],
    ['100%', '0%', '0%', '-100%'],
  );
  const topOpacity = useTransform(scrollYProgress, [0.349, 0.35], [1, 0]);
  const textOpacity = useTransform(
    scrollYProgress,
    textMotionRatios.first[0],
    textMotionOpacity,
  );
  const textY = useTransform(
    scrollYProgress,
    textMotionRatios.first[0],
    textMotionY,
  );
  const textOpacity2 = useTransform(
    scrollYProgress,
    textMotionRatios.first[1],
    textMotionOpacity,
  );
  const textY2 = useTransform(
    scrollYProgress,
    textMotionRatios.first[1],
    textMotionY,
  );
  const textOpacity3 = useTransform(
    scrollYProgress,
    textMotionRatios.first[2],
    textMotionOpacity,
  );
  const textY3 = useTransform(
    scrollYProgress,
    textMotionRatios.first[2],
    textMotionY,
  );
  const textOpacity4 = useTransform(
    scrollYProgress,
    textMotionRatios.second[0],
    textMotionOpacity,
  );
  const textY4 = useTransform(
    scrollYProgress,
    textMotionRatios.second[0],
    textMotionY,
  );
  const textOpacity5 = useTransform(
    scrollYProgress,
    textMotionRatios.second[1],
    textMotionOpacity,
  );
  const textY5 = useTransform(
    scrollYProgress,
    textMotionRatios.second[1],
    textMotionY,
  );
  const textOpacity6 = useTransform(
    scrollYProgress,
    textMotionRatios.thrid[0],
    textMotionOpacity,
  );
  const textY6 = useTransform(
    scrollYProgress,
    textMotionRatios.thrid[0],
    textMotionY,
  );
  const textOpacity7 = useTransform(
    scrollYProgress,
    textMotionRatios.thrid[1],
    textMotionOpacity,
  );
  const textY7 = useTransform(
    scrollYProgress,
    textMotionRatios.thrid[1],
    textMotionY,
  );
  const textOpacity8 = useTransform(
    scrollYProgress,
    textMotionRatios.thrid[2],
    textMotionOpacity,
  );
  const textY8 = useTransform(
    scrollYProgress,
    textMotionRatios.thrid[2],
    textMotionY,
  );
  const textOpacity9 = useTransform(
    scrollYProgress,
    textMotionRatios.fourth[0],
    textMotionOpacity,
  );
  const textY9 = useTransform(
    scrollYProgress,
    textMotionRatios.fourth[0],
    textMotionY,
  );
  const textOpacity10 = useTransform(
    scrollYProgress,
    textMotionRatios.fourth[1],
    textMotionOpacity,
  );
  const textY10 = useTransform(
    scrollYProgress,
    textMotionRatios.fourth[1],
    textMotionY,
  );
  const textOpacity11 = useTransform(
    scrollYProgress,
    textMotionRatios.fourth[2],
    textMotionOpacity,
  );
  const textY11 = useTransform(
    scrollYProgress,
    textMotionRatios.fourth[2],
    textMotionY,
  );
  const textOpacity12 = useTransform(
    scrollYProgress,
    textMotionRatios.fifth[0],
    [0, 1],
  );
  const textY12 = useTransform(scrollYProgress, textMotionRatios.fifth[0], [
    '150%',
    '0%',
  ]);
  const textOpacity13 = useTransform(
    scrollYProgress,
    textMotionRatios.fifth[1],
    [0, 1],
  );
  const textY13 = useTransform(scrollYProgress, textMotionRatios.fifth[1], [
    '150%',
    '0%',
  ]);
  const textOpacity14 = useTransform(
    scrollYProgress,
    textMotionRatios.fifth[2],
    [0, 1],
  );
  const textY14 = useTransform(scrollYProgress, textMotionRatios.fifth[2], [
    '150%',
    '0%',
  ]);

  return (
    <S.Container
      ref={ref}
      style={{
        background: bgMotion,
      }}
    >
      <div className='sticky-wrapper'>
        <motion.div
          className='sticky side-gradient'
          style={{
            opacity: topOpacity,
          }}
        >
          <motion.p className='top' style={{ x: topX }}>
            우리가 왜 웨이키냐구요?
          </motion.p>
        </motion.div>
        <div className='position-center'>
          <motion.p
            style={{
              opacity: textOpacity,
              y: textY,
            }}
          >
            쿠팡, 스마트스토어
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity2,
              y: textY2,
            }}
          >
            대부분 잘 팔리니깐, 대부분 쉬우니깐
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity3,
              y: textY3,
            }}
          >
            시작하셨을꺼예요
          </motion.p>
        </div>
        <div className='position-center'>
          <motion.p
            style={{
              opacity: textOpacity4,
              y: textY4,
            }}
          >
            자사몰 / 본인 사이트 운영
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity5,
              y: textY5,
            }}
          >
            하시는분들도 계실거에요!
          </motion.p>
        </div>
        <div className='position-center'>
          <motion.p
            className='sub'
            style={{
              opacity: textOpacity6,
              y: textY6,
            }}
          >
            이런 생각해 보신 적 없으신가요?
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity7,
              y: textY7,
            }}
          >
            자사몰에 이 기능이 필요한데,
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity8,
              y: textY8,
            }}
          >
            매출은 잘나오는데 왜 수익은 적지?
          </motion.p>
        </div>
        <div className='position-center'>
          <motion.p
            style={{
              opacity: textOpacity9,
              y: textY9,
            }}
          >
            근데 개발은 단순히 어렵다,
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity10,
              y: textY10,
            }}
          >
            수익이 적은 이유를 모르겠다.
          </motion.p>
          <motion.p
            className='sub m-t'
            style={{
              opacity: textOpacity11,
              y: textY11,
            }}
          >
            이렇게 생각하셨죠?
          </motion.p>
        </div>
        <div className='position-center'>
          <motion.p
            style={{
              opacity: textOpacity12,
              y: textY12,
            }}
          >
            웨이키가 그 부분을 쉽게 해결해 드리겠습니다.
          </motion.p>
          <motion.p
            style={{
              opacity: textOpacity13,
              y: textY13,
            }}
          >
            저희는 개발에 마케팅을 녹였습니다.
          </motion.p>
          <motion.p
            className='sub m-t'
            style={{
              opacity: textOpacity14,
              y: textY14,
            }}
          >
            1대1 맞춤형으로 진단하고 맞추형 솔루션을 제공합니다.
          </motion.p>
        </div>
      </div>
    </S.Container>
  );
}
