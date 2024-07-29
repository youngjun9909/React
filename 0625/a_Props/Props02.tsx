//! UserCard 예제
type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
  return (
    <div>
      <h4>{user.name}</h4>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
};

// 기본 값 설정 (Default Props)
type ButtonProps = {
  label: string;
  color?: string;
}

const Button = ({label, color='gray'}:ButtonProps) => {
  return <button style={{backgroundColor: color}}>{label}</button>
};

const Props02 = () => {
  const user = {
    name: '박영준',
    age: 26,
    email: 'example.naver.com'
  }

  return(
    <div>
      <UserCard user={user}/>
      <Button label='클릭해주세요' />
      <Button label='클릭해주세요' color="green"/>
    </div>
  );
};

export default Props02;