import type {
  GoodDirectoryLinkDto,
  GoodDirectoryMemberDto,
  GoodDirectoryServiceDto,
} from '@/shared/api/hooks/goodDirectory/types';
import {
  Address,
  Description,
  DirectoryInfoCard,
  Tag,
  TagsWrapper,
  Title,
} from './directoryInfoCardComponent.styled';
import { SocialMediaLinks } from '@/shared/UiKit/SocialMediaLinks/SocialMediaLinks';

interface DirectoryInfoCardComponentProps extends GoodDirectoryMemberDto {
  servicesList: GoodDirectoryServiceDto[];
}

const getServiceTags = (services: GoodDirectoryServiceDto[], online: boolean): string[] => {
  const serviceTags = services.map((service) => service.name);

  if (online) {
    serviceTags.push('Онлайн');
  }

  return serviceTags;
};

const mapLinksToSocialLinks = (links: GoodDirectoryLinkDto[]) => {
  const result: Record<'website' | 'vkontakte' | 'telegram' | 'odnoklasniki', string | null> = {
    website: null,
    vkontakte: null,
    telegram: null,
    odnoklasniki: null,
  };

  links.forEach((link) => {
    if (Object.prototype.hasOwnProperty.call(result, link.type)) {
      result[link.type] = link.url;
    }
  });

  return result;
};

export const DirectoryInfoCardComponent = ({
  first_name,
  last_name,
  patronymic_name,
  services,
  title,
  description,
  online,
  links,
  addresses,
}: DirectoryInfoCardComponentProps) => {
  const tags = getServiceTags(services, online);
  const socialLinks = mapLinksToSocialLinks(links);
  return (
    <DirectoryInfoCard>
      <Title>
        {title || `${last_name} ${first_name}${patronymic_name ? ` ${patronymic_name}` : ''}`}
      </Title>
      <Description>{description}</Description>
      {addresses.map((address, index) => (
        <Address key={index}>
          {address.address ? `${address.address}, ` : ''}с {address.start_time} по{' '}
          {address.end_time}
        </Address>
      ))}
      <SocialMediaLinks socialLinks={socialLinks} />
      <TagsWrapper>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsWrapper>
    </DirectoryInfoCard>
  );
};
