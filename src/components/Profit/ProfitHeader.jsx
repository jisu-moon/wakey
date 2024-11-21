import CalendarContainer from './CalendarContainer';
import InputDataContainer from './InputDataContainer';
import PriceItemContainer from './PriceItemContainer';

import * as S from '../../styles/components/Profit/ProfitHeader.style';

export default function ProfitHeader() {
  return (
    <S.Container>
      <InputDataContainer />
      <CalendarContainer />
      <PriceItemContainer />
    </S.Container>
  );
}
