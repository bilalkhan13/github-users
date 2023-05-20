import { useState, useEffect } from 'react';
import { User } from '../types/user';
import UserCard from '../components/userCard/UserCard';
import { getUsers } from '../services/githubApi';
import "../assets/styles/homePage.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage: React.FC = () => {
  const [accounts, setAccounts] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await getUsers();
       
        const sortedusers = response.data.sort((a: User, b: User) => {
          a.login.localeCompare(b.login)
        });
        setAccounts(sortedusers);
        setLoading(false)
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    }

    fetchUsers();
  }, [])

  return (
    <>
      <ToastContainer />
      <h1>List of Users</h1>
      <div className='cards-container'>
        {loading ? <p className='invalid'>Loading...</p> :
          (
            accounts?.length > 0 ? (accounts?.map((account) => (
              <UserCard key={account.login} userData={account} />
            ))) : <p className='invalid'>'No user available!</p>
          )
        }
      </div>
    </>
  )
}

export default HomePage;