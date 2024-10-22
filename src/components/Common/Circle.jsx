import PropTypes from 'prop-types';
import * as S from '../../styles/components/Common/Circle.style';

export default function Circle({ size, motion, ...props }) {
  if (motion) return <S.MotionContent {...props} />;
  return <S.Content size={size} />;
}

Circle.propTypes = {
  size: PropTypes.number,
  motion: PropTypes.bool,
  style: PropTypes.any,
};
