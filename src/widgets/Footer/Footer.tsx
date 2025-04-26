import { navFooterMenuSections } from '@/widgets/Footer/Footer.const.tsx';
import { page } from '@/shared/constants/navigation/page.ts';
import Contacts from '@/shared/UiKit/Contacts/Contacts.tsx';
import { FeedBackForm } from '@/features/feedbackForm/ui/FeedBackForm.tsx';
import {
  useGratuitousServicesAgreementQuery,
  usePrivacyPolicyQuery,
} from '@/entities/userAgreements/queries.ts';
import { useScrollToTop } from '@/shared/utils/scrollToTop.ts';

import {
  AgeRestriction,
  ButtonContainer,
  ContentContainer,
  Copyright,
  DevelopmentInfo,
  FooterContainer,
  FooterInfoContainer,
  FooterWrapper,
  InfoGroup,
  Logo,
  LogoLink,
  PrivacyPolicy,
  Sections,
  SectionsAndContacts,
  StyledLink,
  StyledList,
  StyledListItem,
  FooterListTitle,
  Contract,
  InfoGroupWrap,
} from './Footer.styled';

import LogoImage from '@/assets/images/mainPage/Logo.webp';
import ArrowIcon from '@/assets/icons/FooterArrow.svg';
import GodIcon from '@/assets/icons/God.svg';
import { handleFileDownload } from '@/shared/utils/handlAgreementDownload.ts';

export const Footer = () => {
  const { data: PrivacyPolicyData } = usePrivacyPolicyQuery();
  const { data: GratuitousServicesAgreement } = useGratuitousServicesAgreementQuery();
  const handleScroll = useScrollToTop();
  const currentYear = new Date().getFullYear();

  const handlePrivacyPolicyDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const fileName = PrivacyPolicyData?.url?.split('/').pop() || 'privacy-policy.pdf';
    handleFileDownload(PrivacyPolicyData?.url || '', fileName, e);
  };

  const handleContractDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const fileName = GratuitousServicesAgreement?.url?.split('/').pop() || 'contract.pdf';
    handleFileDownload(GratuitousServicesAgreement?.url || '', fileName, e);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoLink to={page.mainPage} aria-label="Главная страница">
          <Logo src={LogoImage} alt="Новости добрых дел" loading="lazy" />
        </LogoLink>
        <ButtonContainer onClick={handleScroll} aria-label="Прокрутка вверх">
          Наверх
          <ArrowIcon />
        </ButtonContainer>
      </FooterWrapper>
      <ContentContainer>
        <SectionsAndContacts>
          <Sections>
            <FooterListTitle>Разделы</FooterListTitle>
            <nav aria-label="Навигация по разделам сайта">
              <StyledList>
                {navFooterMenuSections.map((item) => (
                  <StyledListItem key={item.name}>
                    <StyledLink to={item.url}>{item.name}</StyledLink>
                  </StyledListItem>
                ))}
              </StyledList>
            </nav>
          </Sections>
          <Contacts />
        </SectionsAndContacts>
        <FeedBackForm isFooter />
      </ContentContainer>
      <FooterInfoContainer>
        <InfoGroup>
          <InfoGroupWrap>
            <PrivacyPolicy
              href={PrivacyPolicyData?.url || '#'}
              onClick={handlePrivacyPolicyDownload}
              aria-label="Политика конфиденциальности"
            >
              Политика конфиденциальности
            </PrivacyPolicy>
            <Contract
              href={GratuitousServicesAgreement?.url || '#'}
              onClick={handleContractDownload}
              aria-label="Договор-оферта"
            >
              Договор-оферта
            </Contract>
          </InfoGroupWrap>
          <Copyright>{currentYear} good-deeds.news</Copyright>
        </InfoGroup>
        <InfoGroup>
          <AgeRestriction>Возрастное ограничение 12+</AgeRestriction>
          <DevelopmentInfo href="https://guild-of-developers.ru/" target="_blank">
            Разработка сайта <GodIcon aria-label="Разработчик" />
          </DevelopmentInfo>
        </InfoGroup>
      </FooterInfoContainer>
    </FooterContainer>
  );
};
