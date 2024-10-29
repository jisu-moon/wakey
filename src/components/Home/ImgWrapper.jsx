import { useRef } from 'react';
import * as S from '../../styles/components/Home/ImgWrapper.style';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function ImgWrapper() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const backdropOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0.5, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.35], ['-50%', '-200%']);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0.45, 1], [1, 0.7]);
  return (
    <>
      <S.StickyContainer ref={ref}>
        <S.ImgWrapper>
          <picture>
            <source
              srcSet='https://placehold.co/767x2000'
              media='(max-width: 767px)'
            />
            <source
              srcSet='https://placehold.co/1200x800'
              media='(max-width: 1199px)'
            />
            <motion.img
              src='https://placehold.co/1920x1080'
              alt='대체 텍스트'
              style={{
                x: '-50%',
                y: '0',
                scale: imgScale,
              }}
            />
            <motion.div
              className='text-backdrop'
              style={{
                opacity: backdropOpacity,
              }}
            ></motion.div>
            <motion.strong
              style={{ y: textY, x: '-50%', opacity: textOpacity }}
            >
              깨어나세요, 매출을 높일 수 있는 <br />
              모든 것들을 쉽게&nbsp;알려드립니다.
            </motion.strong>
          </picture>
        </S.ImgWrapper>
      </S.StickyContainer>
    </>
  );
}
