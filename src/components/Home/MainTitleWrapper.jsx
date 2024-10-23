import TypeIt from 'typeit-react';
import * as S from '../../styles/components/Home/MainTitleWrapper.style';
import PropTypes from 'prop-types';
import Circle from '../Common/Circle';
import { useScroll, useTransform } from 'framer-motion';

export default function MainTitleWrapper() {
  const { scrollY } = useScroll();
  const circleScale = useTransform(scrollY, [20, window.innerHeight], [0, 150]);

  return (
    <S.Wrapper>
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
        <Circle size={0.8} />
        <Circle size={0.95} />
        <Circle size={1.3} />
        <Circle size={1.7} />
      </S.CircleWrapper>
    </S.Wrapper>
  );
}

MainTitleWrapper.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
