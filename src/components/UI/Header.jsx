import * as S from '../../styles/components/UI/Header.style';
import Logo from './Logo';

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <Logo />
        <S.Nav>
          <ul>
            <li>로그인</li>
          </ul>
        </S.Nav>
      </S.Container>
    </S.Header>
  );
}
