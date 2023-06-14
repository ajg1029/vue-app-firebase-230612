<template>
  <div>
    <div>{{ msg }}</div>
    <div v-for="location in aa0001" :key="location.timestamp.seconds">{{ location.id }} | {{ location.geopoint }}</div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

export default {
  name: 'TestFirebase',
  props: {
    msg: String
  },
  components: {
  },
  data () {
    return {
      aa0001: []
    }
  },
  created () {
    const firebaseConfig = {
      apiKey: "AIzaSyC7WdGK7sqf-XPbuLUU--60zwGXQpdNTL8",
      authDomain: "wi-chi-jeong-bo.firebaseapp.com",
      projectId: "wi-chi-jeong-bo",
      storageBucket: "wi-chi-jeong-bo.appspot.com",
      messagingSenderId: "1023687374783",
      appId: "1:1023687374783:web:3ab21190a7605d2ebf530a"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const q = query(collection(db, "location"), where("id", "==", "aa0001"))
    
    onSnapshot(q, (querySnapshot) => {
      console.log('querySnapshot')
      let snapshotArr = []
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc.data());
        // console.log(doc.data().timestamp.toDate())
        snapshotArr.push(doc.data())
      })
      this.aa0001 = snapshotArr.sort((a, b) => {
        return a.timestamp.seconds - b.timestamp.seconds
      })
    })
  },
}

</script>

<style>

</style>