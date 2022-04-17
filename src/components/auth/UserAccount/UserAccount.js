import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const UserAccount = () => {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // const {displayName, email, photoURL, emailVerified } = user;

  function handelSignOut () {
    signOut(auth)
      .then (() => {});
    
    navigate('/');
  }

  return (
    <div className='w-full h-[69vh] flex flex-col items-center mt-40'>
      <h1 className='text-xl font-bold'>Name: {user?.displayName || 'Not Available'}</h1>
      <h3 className='font-medium'>Email: {user?.email|| 'Not Available'}</h3>
      <div className='mt-4 flex gap-4'>
      <button onClick={handelSignOut} className='bg-[coral] px-5 py-1 rounded-lg '>Logout</button>
      <button className='bg-green-400 px-5 py-1 rounded-lg'>
        <Link to='/checkout'>Checkout</Link></button>
      </div>
    </div>
  );
};

export default UserAccount;