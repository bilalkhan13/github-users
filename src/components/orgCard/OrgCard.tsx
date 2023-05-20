import { Organization } from "../../types/user";
import "./orgCard.css";

interface OrgData {
  orgData: Organization;
}
const OrgCard: React.FC<OrgData> = ({ orgData }) => {
  return (
    <div className="card-org">
      <img className="org-logo" src={orgData.avatar_url} alt="Organization logo" />
      <h2 className="card-title" >{orgData.login} </h2>
    </div>
  );
};

export default OrgCard;
