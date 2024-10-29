import TypeIt from 'typeit-react';
import * as S from '../../styles/components/Home/HeroWrapper.style';
import PropTypes from 'prop-types';
import Circle from '../Common/Circle';
import { useScroll, useTransform } from 'framer-motion';

export default function HeroWrapper() {
  const { scrollY } = useScroll();
  const windowHeight = window.innerHeight;

  const circleScale = useTransform(scrollY, [20, windowHeight], [0, 145]);
  return (
    <S.StickyContainer>
      <S.StickyWrapper>
        <S.Title>
          <TypeIt
            getBeforeInit={instance => {
              instance
                .type('매출 올리기는 어렵다?')
                .pause(500)
                .delete(4)
                .pause(500)
                .type('쉽다!')
                .pause(500)
                .move(-3)
                .type('정말 ', { delay: 300 })
                .pause(500)
                .move(null, { to: 'END', delay: 300 })
                .break()
                .pause(500)
                .type('<strong class="logo">WAKEY</strong>와 함께라면!')
                .go();
              return instance;
            }}
          ></TypeIt>
        </S.Title>
        <S.CircleWrapper>
          <Circle
            motion={true}
            style={{ scale: circleScale, x: '-50%', y: '-50%' }}
          />
          <Circle size={1.2} />
          <Circle size={1.4} />
          <Circle size={1.9} />
          <Circle size={2.4} />
        </S.CircleWrapper>
      </S.StickyWrapper>
    </S.StickyContainer>
  );
}

HeroWrapper.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
