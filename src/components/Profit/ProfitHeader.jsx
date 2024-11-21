import * as S from '../../styles/components/Profit/ProfitHeader.style';
import CalendarContainer from './CalendarContainer';
import InputDataContainer from './InputDataContainer';

export default function ProfitHeader() {
  return (
    <S.Container>
      <InputDataContainer />
      <CalendarContainer />
    </S.Container>
  );
}
