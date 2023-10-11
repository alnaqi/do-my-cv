import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"

function UploadingData({
    user, db,
    firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists,
          academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists,
          skillLists, setSkillLists, courseLists, setCourseLists,
}) {

    const userId = user ? `${user.uid}` : "anonymous"


    const [detailes, setDetailes] = useState([])

    const userData = async () => {
        const colRef = query(collection(db, userId))

        const querySnapshot = await getDocs(colRef)
        const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        setDetailes(data)
        // console.log(detailes[detailes.length - 1])
    }

    useEffect(() => {
        userData()
    }, [firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists,
        academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists,
        skillLists, setSkillLists, courseLists, setCourseLists])

    





    //             console.log(value.docs[value.docs.length - 1].data().numId)
    //             console.log(value.docs[value.docs.length - 1].data().urlLists)

    // setFirstName(value.docs[value.docs.length - 1].data().firstName)
    // setLastName(value.docs[value.docs.length - 1].data().lastName)
    // setEmail(value.docs[value.docs.length - 1].data().email)
    // setPhone(value.docs[value.docs.length - 1].data().phone)
    // setAboutMe(value.docs[value.docs.length - 1].data().aboutMe)
    // setUrlLists(value.docs[value.docs.length - 1].data().urlLists)
    // setAcademicDegree(value.docs[value.docs.length - 1].data().academicDegree)
    // setCollage(value.docs[value.docs.length - 1].data().collage)
    // setSpecialist(value.docs[value.docs.length - 1].data().specialist)
    // setDegreeNo(value.docs[value.docs.length - 1].data().degreeNo)
    // setDegreeNoSelect(value.docs[value.docs.length - 1].data().degreeNoSelect)
    // setEducationDate(value.docs[value.docs.length - 1].data().educationDate)
    // setExperLists(value.docs[value.docs.length - 1].data().experLists)
    // setSkillLists(value.docs[value.docs.length - 1].data().skillLists)
    // setCourseLists(value.docs[value.docs.length - 1].data().courseLists) 






    return (
        <></>
    )

}

export default UploadingData