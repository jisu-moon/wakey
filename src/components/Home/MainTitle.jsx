import TypeIt from 'typeit-react';
import * as S from '../../styles/components/Home/MainTitle.style';
import PropTypes from 'prop-types';

export default function MainTitle() {
  return (
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
  );
}

MainTitle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
