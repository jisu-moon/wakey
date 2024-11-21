import * as S from '../../styles/components/Profit/PriceItem.style';
import PriceItem from './PriceItem';

const DUMMYDATAS = [
  { title: '매출', price: 500000000, prevPrice: 400000000 },
  { title: '광고비', price: 5000, prevPrice: 50000 },
  { title: '이익금', price: 450000000, prevPrice: 400000000 },
  {
    title: '수익금',
    price: 550000000,
    prevPrice: 500000000,
  },
];

export default function PriceItemContainer() {
  return (
    <S.ItemsContainer>
      {DUMMYDATAS.map(data => (
        <PriceItem key={data.title} {...data} />
      ))}
    </S.ItemsContainer>
  );
}
