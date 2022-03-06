import dynamic from 'next/dynamic';
import useResize from '../../utils/useResize';
import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';

const AboutRoot = ({ users }) => {
  const { isMobile } = useResize();
  return (
    <div>
      {isMobile ? (
        <AboutMobile users={users} />
      ) : (
        <AboutDesktop users={users} />
      )}
    </div>
  );
};

export default AboutRoot;
