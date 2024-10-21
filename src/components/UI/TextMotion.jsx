import * as S from '../../styles/components/UI/TextMotion.style';
import PropTypes from 'prop-types';

export default function TextMotion({ children, tag }) {
  return <S.Wrapper as={tag}>{children}</S.Wrapper>;
}

TextMotion.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
};
