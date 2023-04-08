// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, 
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

// Firestore
import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB03-QbT1k7AcRTQi2SzV3rMfX0AW4UOg",
  authDomain: "simpleecommerce-89aca.firebaseapp.com",
  projectId: "simpleecommerce-89aca",
  storageBucket: "simpleecommerce-89aca.appspot.com",
  messagingSenderId: "483413703222",
  appId: "1:483413703222:web:e63698869ccf45d7f93697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app)

// Get Authentication
const auth = getAuth()

// Initialize Google Login Authentication Provider
const GoogleProvider = new GoogleAuthProvider();

// Custom Functions
export const signIn = async(auth, email, password) => {
    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
}
    // Signout User
export const signOutUser = async () => await signOut(auth);

    // Create user and sign in
export const createUserAndSignIn = async(email, password) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        let data = {
            email: userCredential.user.email,
            name: userCredential.user.displayName,
            createdAt: new Date()
        }
        await addDoc(collection(db, 'users'), data)
        return userCredential
    }catch(err) {
        switch(err.code){
            // If email already exist, trigger sign in
            case 'auth/email-already-in-use':
                return await signIn(auth, email, password)
            default:
                console.log(err)
                break;
        }
    }
}

// Do one time for the import of data
// export const addData = async () => {
//     await setDoc(doc(db, 'items', "womens"), womenData)
// }
// addData()

    // Sign in with Google
export const signInWithGoogle = async() => {
    try {
        let result = await signInWithPopup(auth, GoogleProvider)
        console.log(result)
        return result.user
    }catch(err){
        console.log(err)
    }
}


// Firestore retrieving data
export const getCategoryData = async (category) => {
    try {
        const docRef = doc(db, "items", category)
        const docSnapshot = await getDoc(docRef)
        if(docSnapshot.exists()){
            return docSnapshot.data()

        }else {
            throw new Error("No such document")
        }
    }catch(err) {
        console.log(err)
    }
}