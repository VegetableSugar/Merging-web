import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { AppleIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'assets/icons';
import { authState } from 'atoms/auth';
import { Navbar } from 'components/common';
import Container from 'components/layouts/Container';
import { useDarkMode } from 'hooks/useDarkMode';

const LandingPage = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <>
      <Navbar />

      <Container>
        <FlexBox>
          <MainImage src="/assets/landing/merging-main-text.png" />
        </FlexBox>
        <ButtonWrap>
          <Button
            theme={theme}
            onClick={() =>
              (window.location.href = 'https://apps.apple.com/kr/app/merging/id6444030377')
            }
          >
            <AppleIcon color={theme.colors.GRAY_5} width={40} height={40} />
            App Store
          </Button>
          <Button
            theme={theme}
            onClick={() => (window.location.href = 'https://www.instagram.com/merging_official/')}
          >
            <InstagramIcon color={theme.colors.GRAY_5} width={40} height={40} />
            Instagram
          </Button>
        </ButtonWrap>
        <VisionWrap>
          <TreeImage src="/assets/landing/landing-bamboo.png" />
          <SubTitle style={{ textAlign: 'center' }}>
            개발자의 일상을 한층 더 즐겁게
            <br />
            성장 또한 즐겁게
          </SubTitle>
          <TreeImage src="/assets/landing/landing-pine.png" />
        </VisionWrap>
      </Container>
      <LandingSection theme={theme}>
        <Container>
          <Title style={{ textAlign: 'left' }}>
            더욱 즐거워진
            <br />
            커밋 일상
          </Title>
          <TreeCommitWrap>
            <ScreenWrap>
              <SubTitle style={{ textAlign: 'left' }}>
                하루하루 커밋하며 <br /> 나무를 키워보세요
              </SubTitle>
              <MockupImage src="/assets/landing/growth-mockup.png" />
            </ScreenWrap>
            <ScreenWrap>
              <MockupImage src="/assets/landing/main-mockup.png" />
              <SubTitle style={{ textAlign: 'right' }}>
                즐겁게 키우다 보면 <br /> 당신도 성장할거에요
              </SubTitle>
            </ScreenWrap>
          </TreeCommitWrap>
          <TreeCardWrap>
            <SubTitle style={{ textAlign: 'center' }}>
              나무를 키우고 <br /> 카드를 모아보세요
            </SubTitle>
            <CardSetWrap>
              <CardImage src="/assets/landing/seed-card.png" />
              <CardImage src="/assets/landing/sprout-card.png" />
              <CardImage src="/assets/landing/baby-pine-card.png" />
              <CardImage src="/assets/landing/adult-pine-card.png" />
            </CardSetWrap>
          </TreeCardWrap>
        </Container>
      </LandingSection>
      <Container>
        <Title style={{ textAlign: 'left', marginTop: '200px' }}>
          함께라서 더 즐거운
          <br />
          개발자 일상
        </Title>
        <TogetherWrap>
          <SubTitle style={{ textAlign: 'center' }}>
            친구들과 경쟁하고 응원하며 <br /> 나무를 키워보세요
          </SubTitle>
          <MockupWrap>
            <MockupImage src="/assets/landing/ranking-mockup.png" />
            <MockupImage src="/assets/landing/interaction-mockup.png" />
          </MockupWrap>
        </TogetherWrap>

        <CommunityWrap>
          <SubTitle style={{ textAlign: 'center' }}>
            커뮤니티에서 뛰놀며 <br /> 즐겁게 코딩하세요
          </SubTitle>
          <ContentsImage src="/assets/landing/contents.png" />
        </CommunityWrap>
      </Container>
      <LandingSection theme={theme}>
        <Container>
          <Title style={{ textAlign: 'left' }}>
            플랫폼 상관 없이
            <br />
            마음껏 즐기세요{' '}
          </Title>
          <CommunityMacImage src="/assets/landing/community-mac-mockup.png" />
        </Container>
      </LandingSection>

      <CaptionWrap>
        <SmallButtonWrap>
          <SmallButton
            onClick={() =>
              (window.location.href = 'https://www.facebook.com/profile.php?id=100086227825927')
            }
          >
            <FacebookIcon color={theme.colors.GRAY_5} width={32} height={32} />
          </SmallButton>
          <SmallButton onClick={() => (window.location.href = 'https://twitter.com/MergingKR')}>
            <TwitterIcon color={theme.colors.GRAY_5} width={32} height={32} />
          </SmallButton>
          <SmallButton
            onClick={() => (window.location.href = 'https://www.instagram.com/merging_official/')}
          >
            <InstagramIcon color={theme.colors.GRAY_5} width={32} height={32} />
          </SmallButton>
        </SmallButtonWrap>
        <TermsWrap>
          <LogoImage src="/assets/logo-dark.svg" />
          <TermsLink href="https://api.merging.world/terms">이용약관 및 개인정보처리방침</TermsLink>
        </TermsWrap>
        <Caption style={{ textAlign: 'center' }}>
          (주)포애퍼 | 대표자: 박원빈 | 사업자번호: 404-81-46643
          <br />
          문의: support@poapper.com I 주소: 경상북도 포항시 남구 청암로 87, 508호 (지곡동, 체인지업
          그라운드)
          <br />© merging, All Rights Reserved. Powered by{' '}
          <TermsLink href="https://poapper.com">PoApper, Inc.</TermsLink>
        </Caption>
      </CaptionWrap>
    </>
  );
};

export default LandingPage;

const LandingSection = styled.section`
  background: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  padding: 80px 20px;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: Bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
  line-height: 70px;
`;

const SubTitle = styled.h2`
  font-size: 40px;
  font-weight: Bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
  line-height: 50px;
`;

const Caption = styled.p`
  font-size: 14px;
  font-weight: Medium;
  color: ${props => props.theme.colors.TEXT_HIGH};
  line-height: 24px;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 140px;
  margin-bottom: 80px;
`;

const MainImage = styled.img`
  width: 864px;
  margin: 0 auto;
`;

const TreeImage = styled.img`
  width: 250px;
  height: 250px;
`;

const MockupImage = styled.img`
  width: 415px;
  height: 852px;
`;

const CardImage = styled.img`
  width: 248px;
  height: 372px;
`;

const ContentsImage = styled.img`
  width: 1092px;
  height: 536px;
`;

const CommunityMacImage = styled.img`
  width: 1040px;
  height: 870px;
`;

const LogoImage = styled.img`
  height: 16px;
`;

const Button = styled.button`
  width: 220px;
  height: 64px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_H2};
  background: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  &:hover {
    cursor: pointer;
  }
  gap: 16px;
`;

const SmallButton = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 32px;
`;

const VisionWrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const ScreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const TreeCommitWrap = styled.div`
  gap: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 400px;
`;

const CardSetWrap = styled.div`
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TreeCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

const TogetherWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 400px;
`;

const MockupWrap = styled.div`
  display: flex;
  gap: 60px;
`;

const CommunityWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 400px;
`;

const SmallButtonWrap = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: left;
`;

const TermsLink = styled.a`
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
`;

const TermsWrap = styled.div`
  display: flex;
  gap: 24px;
`;

const CaptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;