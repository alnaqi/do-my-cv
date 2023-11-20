import "./Profile.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase/config"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import ProfileComp from "./ProfileComp"
import Loading from '../../components/Loading/Loading'
import { deleteUser, signOut } from "firebase/auth";
import { Typography } from "@mui/material";

function Profile() {
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);

  // For Old User
  const dateOldAccount = new Date(user?.metadata.creationTime)
  const isOldAccount = user && (dateOldAccount.getDate() <= 16 && dateOldAccount.getMonth() <= 1 && dateOldAccount.getMonth() <= 2023)
  
  // not logged In
  useEffect(() => {
    if (!user && !loading) {
      navigate("/")
    }
  }, [navigate, user, loading])

  // || Logged In:
  // Loading
  if (loading) {
    return <div className="profile-container">
      <Loading width={50} height={50} />
    </div>;
  }

  // Error
  if (error) {
    return <Typography variant="h4">{error.message}</Typography>;
  }

  // Verified or old User
  if ((user && user) || (user && isOldAccount)) {
    return (
      <ProfileComp user={user} deleteUser={deleteUser} signOut={signOut} auth={auth} />
    )
  }
}

export default Profile