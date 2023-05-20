import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getUserDetails,
  getUserRepos,
  getUserOrgs,
  getUserFollowers,
} from '../services/githubApi';
import { UserDetails, Repo, Organization, Follower } from '../types/user';
import "../assets/styles/userDetails.css"
import RepoCard from '../components/repoCard/RepoCard';
import OrgCard from '../components/orgCard/OrgCard';
import FollowerCard from '../components/followerCard/FollowerCard';

const UserDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{ username: string }>();
  const [userData, setUserData] = useState<UserDetails>();
  const [userRepos, setUserRepos] = useState<Repo[]>([]);
  const [userOrgs, setUserOrgs] = useState<Organization[]>([]);
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true)
      if (username) {
        const userResponse = await getUserDetails(username);
        setUserData(userResponse?.data)
        setLoading(false)

        const reposResponse = await getUserRepos(username);
        const sortedRepos = reposResponse?.data?.sort((a: Repo, b: Repo) => {
          a.name.localeCompare(b.name)
        });
        setUserRepos(sortedRepos);


        const orgsResponse = await getUserOrgs(username);
        const sortedOrgs = orgsResponse?.data?.sort((a: Organization, b: Organization) => {
          a.login.localeCompare(b.login)
        });
        setUserOrgs(sortedOrgs);

        const followersResponse = await getUserFollowers(username);
        const sortedfollowers = followersResponse?.data?.sort((a: Follower, b: Follower) => {
          a.login.localeCompare(b.login)
        });        
        setFollowers(sortedfollowers);
      }
    }
    fetchUserDetails();
  }, [username]);

  return (
    <>
      <button onClick={() => { navigate('/') }}>Back</button>
      {!loading ? (
        userData?.id ? (<>
          <h2 className='sub-title'>User Details:</h2>
          <div className="col">
            <img src={userData?.avatar_url || 'N/A'} alt="User Avatar" />
            <p className='repo-row'>ID: <span>{userData?.id || 'N/A'}</span></p>
            <p className='repo-row'>Name: <span>{userData?.name || 'N/A'}</span></p>
            <p className='repo-row'>Username: <span>{userData?.login || 'N/A'}</span></p>
            <p className='repo-row'>Created at: <span>{userData?.created_at || 'N/A'}</span></p>
            <p className='repo-row'>Updated at: <span>{userData?.updated_at || 'N/A'}</span></p>
            <p className='repo-row'>Total Followers: <span>{userData?.followers || 'N/A'}</span></p>
          </div>

          <h2 className='sub-title'>Repos:</h2>
          <div className='cards-container'>
            {userRepos.length > 0 ? (userRepos?.map((repo, index) => (
              <RepoCard key={index} repoData={repo} />
            ))) : <p className='invalid'>No repo available!</p>}
          </div>

          <h2 className='sub-title'>Organizations:</h2>
          <div className='cards-container'>
            {userOrgs?.length > 0 ? (
              userOrgs?.map((org, index) => (
                <OrgCard key={index} orgData={org} />
              ))) : <p className='invalid'>No organization available!</p>
            }
          </div>

          <h2 className='sub-title'>Followers ({followers?.length}):</h2>
          <div className='cards-container'>
            {followers.length > 0 ? (followers?.slice(0, 5).map((follower, index) => (
              <FollowerCard key={index} followerData={follower} />
            ))) : <p className='invalid'>No follower available!</p>}
          </div>
        </>
        ) : <p className='invalid'>Invalid User!</p>

      ) : (
        <p className='invalid'>Loading...</p>
      )

      }
    </>
  )
}

export default UserDetailPage;
