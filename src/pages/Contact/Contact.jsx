import { Box, Link, Typography } from "@mui/material"
import { pink } from '@mui/material/colors';

import { auth, db } from "../../firebase/config"
import { useAuthState } from "react-firebase-hooks/auth";

import { collection, doc, getDoc, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"

function Contact() {

  const [user, loading] = useAuthState(auth)

  const userId = user ? `${user.uid}` : "anonymous"
  const [data, setData] = useState([])
  const [detailes, setDetailes] = useState([])


  useEffect(() => {
    const userData = async () => {

      const colRef = query(collection(db, "Users"))

        const querySnapshot = await getDocs(colRef)
        const data2 = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        setDetailes(data2)
        
        
        const userRef = doc(db, "Users", userId)
        
        const collectionUser = collection(userRef, detailes[detailes.length - 1])
        
        const getValue = await getDocs(collectionUser)
        setData(getValue.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      }
      userData()
    }, [])
    
    // console.log()
  console.log(data)

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (user) {
    return (
      <ul>
        <Typography >{data[data.length - 1]?.firstName}</Typography>
        <Typography >{data[data.length - 1]?.lastName}</Typography>
      </ul>
    )
  }
  if (!user) {
    return (
      <>
        <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80%" }}>
          <Box>
            <Typography variant="h3" mb={2}>Contact Us</Typography>
            <Typography variant="h4" mb={4}>We’re all ears.</Typography>
            <ul>
              <li>Email enquiries: <Link href="mailto:alnaqi.turki@gmail.com" color={pink[200]}>alnaqi.turki@gmail.com</Link></li>
              <li>Website: <Link target="_blank" href="https://turki-alnaqi.web.app/" color={pink[200]}>https://turki-alnaqi.web.app/</Link></li>
            </ul>
          </Box>
        </Box>
      </>
    )
  }
}

export default Contact