import { User } from "../../types/user";
import { Link } from 'react-router-dom';
import "./userCard.css";

interface UserCardProps {
  userData: User;
}
const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  return (
    <Link to={`/users/${userData.login}` }>
      <div className="card-user" key={userData.id}>
        <img className="card-img" src={userData.avatar_url} alt={userData.login} />
        <h2 className="card-title">{userData.login}</h2>
      </div>
    </Link>
  )
}

export default UserCard;
