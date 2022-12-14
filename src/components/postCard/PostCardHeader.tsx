import styled from '@emotion/styled';
import MoreCircleIcon from 'assets/icons/MoreCircleIcon';
import Profile from 'components/layouts/Profile';
import { useDarkMode } from 'hooks/useDarkMode';

interface PostCardHeaderProps {
  author: string;
  createdAt: string;
  profile: string;
}

const PostCardHeader = ({ author, createdAt, profile }: PostCardHeaderProps) => {
  const { theme } = useDarkMode();

  return (
    <Wrap>
      <ProfileWrap>
        <li>
          <Profile info="profile" url={`https://github.com/${profile}.png`} />
        </li>
        <ProfileTextWrap>
          <Nickname>{author}</Nickname>
          <TimeLog>{createdAt}</TimeLog>
        </ProfileTextWrap>
      </ProfileWrap>
      <li>
        <MoreCircleIcon width={24} height={24} color={theme.colors.GRAY_2} />
      </li>
    </Wrap>
  );
};

const Wrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
`;

const ProfileWrap = styled.ul`
  display: flex;
  align-items: center;
`;

const ProfileTextWrap = styled.ul`
  margin-left: 8px;
`;

const Nickname = styled.li`
  margin-bottom: 6px;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const TimeLog = styled.li`
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default PostCardHeader;
