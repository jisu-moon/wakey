import PropTypes from 'prop-types';
import { addComma } from '../../utils/formatUtils';

import * as S from '../../styles/components/Profit/PriceItem.style';
import { getPercentageDifference } from '../../utils/calculateUtils';

import { BsArrowUpShort } from 'react-icons/bs';

export default function PriceItem({ price, title, prevPrice }) {
  const rateOfChange = getPercentageDifference(prevPrice, price);
  return (
    <S.Item $rateOfChange={rateOfChange > 0}>
      <h3>{title}</h3>
      <p>{addComma(price)}</p>
      <div className='prev-price-wrapper'>
        <span>
          <BsArrowUpShort />
          {rateOfChange}%
        </span>
        <strong>{addComma(price - prevPrice)}</strong>
      </div>
    </S.Item>
  );
}

PriceItem.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  prevPrice: PropTypes.number.isRequired,
};
