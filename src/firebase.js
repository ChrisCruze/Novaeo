import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
//Define Firebase Config
// const firebaseConfig = {
// 	apiKey: "AIzaSyB0FkrpI63ziZvPK4ceRkjhgBej6g-sFHs",
// 	authDomain: "bnbdashboard.firebaseapp.com",
// 	projectId: "bnbdashboard",
// 	storageBucket: "bnbdashboard.appspot.com",
// 	messagingSenderId: "947457461897",
// 	appId: "1:947457461897:web:07869750a6a1f11eb8c058",
// 	measurementId: "G-0FK47PLNNB",
// };
const firebaseConfig = {
	apiKey: "AIzaSyB7LrUu_VexmeKVRVgMbYhAlK4I9tdrRX8",
	authDomain: "novaeo-phoenix.firebaseapp.com",
	projectId: "novaeo-phoenix",
	storageBucket: "novaeo-phoenix.appspot.com",
	messagingSenderId: "909519488191",
	appId: "1:909519488191:web:be0eb41dd8e1d98bb2720a",
	measurementId: "G-6FPFQMNKDK",
};

//Initialize App
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

//Initialize Database
export const database = getDatabase(app);
//Initialize Auth
export const auth = getAuth();
//Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("https://www.googleapis.com/auth/spreadsheets");

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		console.log({ res, user });
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

// set(ref(database, "users/"), {
// 	username: "test",
// });

//https://firebase.google.com/docs/database/web/read-and-write
