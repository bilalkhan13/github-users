import { Repo } from "../../types/user";
import "./repoCard.css";

interface RepoData {
  repoData: Repo;
}
const RepoCard: React.FC<RepoData> = ({ repoData }) => {
  return (
    <div className="repo-card">
      <h2 className="card-title" >{repoData.name} </h2>
      <p className="repo-field">Repo:<a className="card-link" aria-label="Repo link" href={repoData.html_url} target="new">Repo Link</a></p>
      <p className="repo-field">Created at: <span>{repoData.created_at}</span></p>
      <p className="repo-field">Updated at: <span>{repoData.updated_at}</span></p>
    </div>
  );
};

export default RepoCard;
