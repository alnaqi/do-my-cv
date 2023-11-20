import { collection, getDocs, query } from "firebase/firestore"
import { useEffect } from "react"

function UploadingData({
    user, db,
    firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists,
          academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists,
          skillLists, setSkillLists, courseLists, setCourseLists,
}) {

    const userId = user ? `${user.uid}` : "anonymous"

    const userData = async () => {
        const colRef = query(collection(db, userId))

        const querySnapshot = await getDocs(colRef)
        const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
    }

    useEffect(() => {
        userData()
    }, [firstName, lastName, email, phone, aboutMe, urlLists, setFirstName, setLastName, setEmail, setPhone, setAboutMe, setUrlLists,
        academicDegree, setAcademicDegree, collage, setCollage, specialist, setSpecialist, degreeNo, setDegreeNo, degreeNoSelect, setDegreeNoSelect, educationDate, setEducationDate, experLists, setExperLists,
        skillLists, setSkillLists, courseLists, setCourseLists])

    return (
        <></>
    )

}

export default UploadingData