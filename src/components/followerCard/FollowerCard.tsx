import { Follower } from "../../types/user";
import "./followerCard.css";

interface FollowerData {
  followerData: Follower;
}
const FollowerCard: React.FC<FollowerData> = ({ followerData }) => {
  return (
    <div className="card-follower">
      <img className="follower-logo" src={followerData.avatar_url} alt="Organization logo"/>
      <p className="follower-field">Follower ID:<span>{followerData.id}</span></p>
      <p className="follower-field">Username: <span>{followerData.login}</span></p>
      <p className="follower-field">Github ID:<a className="card-link"  aria-label="Github profile link" href={followerData.html_url} target="new">Github Profile Link</a></p>
    </div>
  );
};

export default FollowerCard;
