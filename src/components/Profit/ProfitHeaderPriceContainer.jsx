import PropTypes from 'prop-types';

export default function ProfitHeaderPriceContainer({ price, children }) {
  return <div>{children}</div>;
}

ProfitHeaderPriceContainer.propTypes = {
  price: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
