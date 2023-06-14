<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <div>{{ msg }}</div>
    <br/>
    <div v-for="location in aa0001" :key="location.timestamp.seconds">
      {{ location.timestamp.toDate() }} | {{ location.geopoint }}
    </div>
    <br/>
    <!-- <button @click="drawLine">polyline</button>
    <br/> -->
    <div>
      <div id="map_div"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
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
      aa0001: [],
      map: null
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
        console.log(doc.data().geopoint);
        // console.log(doc.data().timestamp.toDate())
        snapshotArr.push(doc.data())
      })
      this.aa0001 = snapshotArr.sort((a, b) => {
        return a.timestamp.seconds - b.timestamp.seconds
      })
      for (let i = 0; i < this.aa0001.length; i++) {
        this.addMarker(this.aa0001[i].geopoint._lat, this.aa0001[i].geopoint._long)
      }
      this.drawLine()
    })
  },
  mounted() {
    this.initTmap()
  },
  methods: {
    initTmap() {
      let mapOptions = {
        center: new Tmapv2.LatLng(35.1531,126.8896),
        width: "90vw", 
        height: "50vh",
        zoom: 19
      }
      this.map = new Tmapv2.Map("map_div", mapOptions)
    },
    addMarker(lat, lng) {
      // let marker1 = new Tmapv2.Marker({
      //   position: new Tmapv2.LatLng(35.1541,126.8886),
      //   map: this.map
      // })
      // let marker2 = new Tmapv2.Marker({
      //   position: new Tmapv2.LatLng(35.1521,126.8909),
      //   map: this.map
      // })
      let marker = new Tmapv2.Marker({
        position: new Tmapv2.LatLng(lat, lng),
        map: this.map
      })
    },
    drawLine() {
      let polyline = new Tmapv2.Polyline({
        // path: [new Tmapv2.LatLng(37.56480450,126.98512028),	// 선의 꼭짓점 좌표
        //     new Tmapv2.LatLng(37.56565450,126.98512028),	// 선의 꼭짓점 좌표
        //     new Tmapv2.LatLng(37.56480450,126.98582028),	// 선의 꼭짓점 좌표
        //     new Tmapv2.LatLng(37.56565450,126.98652028),	// 선의 꼭짓점 좌표
        //     new Tmapv2.LatLng(37.56480450,126.98652028)],	// 선의 꼭짓점 좌표
        path: this.aa0001.map((item) => {
          return new Tmapv2.LatLng(item.geopoint._lat, item.geopoint._long)
        }),
        strokeColor: "#dd00dd",
        strokeWeight: 4,
        strokeStyle: "solid",
        map: this.map
      });
    }
  }
}

</script>

<style>

</style>