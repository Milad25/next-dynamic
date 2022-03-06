import { useCounter } from '../../providers/CounterProvider';

const AboutDesktop = ({ users }) => {
  const counter = useCounter();

  return (
    <div>
      <h2>AboutDesktop</h2>
      counter: {counter}
      {users.map((user) => {
        return <h3 key={user.id}>{user.id}</h3>;
      })}
    </div>
  );
};

export default AboutDesktop;
