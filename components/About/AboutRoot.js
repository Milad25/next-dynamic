import dynamic from 'next/dynamic';
import useResize from '../../utils/useResize';

const AboutMobile = dynamic(() => import('./AboutMobile'))
const AboutDesktop = dynamic(() => import('./AboutDesktop'))

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
