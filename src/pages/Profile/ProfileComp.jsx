import { Typography } from "@mui/material";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import ConfirmMsg from "../../components/Alert/ConfirmMsg/ConfirmMsg"

function ProfileComp({ user, deleteUser, signOut, auth }) {
    const navigate = useNavigate()

    const deleteUserFromDB = () => {
        deleteUser(user).then(() => {
            signOut(auth).then(() => {
                navigate("/")
            }).catch((error) => {
                // An error happened.
            });
        }).catch((error) => {
            // An error ocurred
            // ...
        });
    }
    return (
        <section className="profile-container">
            <div className="profile">
                <Typography variant="h6">Email: <span>{user?.email}</span></Typography>
                {/* <h2>verification: <span>{user?.emailVerified ? "Email verified" : "Email not verified"}</span></h2> */}
                <Typography variant="h6">Username: <span>{user?.displayName}</span></Typography>
                <Typography variant="h6">Last logged in: <span><Moment fromNow date={user?.metadata.lastSignInTime} locale="en" /></span></Typography>
                <Typography variant="h6">Created account at: <span><Moment fromNow date={user?.metadata.creationTime} locale="en" /></span></Typography>
                <ConfirmMsg
                    color="error"
                    onClick={deleteUserFromDB}
                    buttonMsg="Delete Account"
                    titleMsg="Delete Account"
                    bodyMsg="Are you sure you want to delete your account? This action cannot be undone."
                />
            </div>
        </section>
    )
}

export default ProfileComp