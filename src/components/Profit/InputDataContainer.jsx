import * as S from '../../styles/components/Profit/InputDataContainer.style';

export default function InputDataContainer() {
  return (
    <S.Container>
      <p>오른쪽 버튼을 눌러 데이터를 추가 해주세요.</p>
      <label htmlFor='upload'>업로드하기</label>
      <input id='upload' type='file' placeholder='업로드' />
    </S.Container>
  );
}
