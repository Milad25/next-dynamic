import AboutRoot from '../../components/About/AboutRoot';

const AboutPage = ({ users }) => {
 
  return (
    <div>
      <AboutRoot users={users} />
    </div>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data)

  return {
    props: {
      users: data,
    },
  };
}
