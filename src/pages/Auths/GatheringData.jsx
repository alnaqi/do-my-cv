import { useEffect } from "react";
import { doc, setDoc, } from "firebase/firestore"

function GatheringData({
    user, db,
    firstName, lastName, email, phone, aboutMe, urlLists,
    academicDegree, collage, specialist, degreeNo, degreeNoSelect, educationDate, experLists,
    skillLists, courseLists,
}) {

    const docData = {
        firstName, lastName, email, phone, aboutMe, urlLists,
        academicDegree, collage, specialist, degreeNo, degreeNoSelect, educationDate, experLists,
        skillLists, courseLists
    };

    const sendData = async () => {
        const userId = user ? `${user.uid}` : "anonymous"
        const numId = new Date().getTime();
        const userRef = doc(db, `Users/${userId}/Resume info/${numId}`);
        await setDoc(userRef, {numId, ...docData})
    }
    useEffect(() => {
        sendData()
    }, [
        firstName, lastName, email, phone, aboutMe, urlLists,
        academicDegree, collage, specialist, degreeNo, degreeNoSelect, educationDate, experLists,
        skillLists, courseLists
    ])


    return (
        <></>
    )
}

export default GatheringData