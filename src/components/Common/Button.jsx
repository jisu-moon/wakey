import PropTypes from 'prop-types';

import * as S from '../../styles/components/Common/Button.style';

export default function Button({ children, style }) {
  return <S.Button style={style}>{children}</S.Button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
