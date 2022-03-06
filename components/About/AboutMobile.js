import { useCounter, useCounterActions } from '../../providers/CounterProvider';

const AboutMobile = ({ users }) => {
  const counter = useCounter();
  const counterDispatcher = useCounterActions();

  return (
    <div>
      <h2>AboutMobile</h2>
      <h3>{counter}</h3>
      <button onClick={() => counterDispatcher({ type: 'INC' })}>INC</button>
      <button onClick={() => counterDispatcher({ type: 'DEC' })}>DEC</button>
      {users.map((user) => {
        return <h3 key={user.id}>{user.name}</h3>;
      })}
    </div>
  );
};

export default AboutMobile;
