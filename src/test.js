// /* eslint-disable */

// import { initializeApp } from "firebase/app";
// // import { getFirestore, collection, getDocs, onSnapshot, doc } from "firebase/firestore";

// import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyCh_HbRcsix4RyizBDW0kdr6HhF5fZTPTg",
//   authDomain: "my-first-project-80e8b.firebaseapp.com",
//   projectId: "my-first-project-80e8b",
//   storageBucket: "my-first-project-80e8b.appspot.com",
//   messagingSenderId: "111313398525",
//   appId: "1:111313398525:web:3477bae62605d90f156c94",
//   measurementId: "G-M351RFL3EZ"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // const querySnapshot = await getDocs(collection(db, "TestArticles"));
// // querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data()}`);
// //   console.log(doc.data())
// // });

// // // eslint-disable-next-line
// // const unsub = onSnapshot(doc(db, "TestArticles", "ref?"), (doc) => {
// //   const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
// //   console.log(source, " data: ", doc.data());
// // });

// // const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
// //     console.log("Current data: ", doc.data());
// // });


// // const q = query(collection(db, "TestArticles"), where("title", "==", "누구인가"))
// const q = query(collection(db, "TestArticles"))
// const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   const cities = [];
//   querySnapshot.forEach((doc) => {
//       cities.push(doc.data().title);
//   });
//   console.log(cities.join(", "));
// });