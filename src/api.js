// Firebase Server codes
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAslE5RemONhcM5oT7AZXYdC3twVVGjCjk",
  authDomain: "vlife-4260c.firebaseapp.com",
  projectId: "vlife-4260c",
  storageBucket: "vlife-4260c.appspot.com",
  messagingSenderId: "634811954667",
  appId: "1:634811954667:web:c68c34509823398a45d5ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Database
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans")

// Creating a new getVans()
export async function getVans(){
    const querySnapshot = await getDocs(vansCollectionRef);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr;
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const docSnapshot = await getDoc(docRef)
    return{
        ...docSnapshot.data(),
        id: docSnapshot.id
    }
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}