import * as S from '../../styles/components/Profit/UserProfile.style';

export default function UserProfile() {
  return (
    <S.Container>
      <img
        className='company-logo'
        src='https://placehold.co/200x200'
        alt='업체명'
      />
      <div className='contents'>
        <p className='company-name'>업체명(개인)</p>
        <p className='company-nc'>N/C 채널명</p>
      </div>
    </S.Container>
  );
}
