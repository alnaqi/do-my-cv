import { useEffect } from "react";
import { addDoc, collection, doc, setDoc, } from "firebase/firestore"

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

    const userId = user ? `${user.uid}` : "anonymous"
    const gather2 = async () => {
        const numId = new Date().getTime();
        const userRef = doc(db, "Users", userId);
        await setDoc(userRef, {
            Name: user.displayName,
            Email: user.email,
            CreateDate: new Date(user.metadata.creationTime)
        })
        const collectionUser = collection(userRef, `${numId}`)
        await addDoc(collectionUser, {numId, ...docData})
    }
    useEffect(() => {
        gather2()
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