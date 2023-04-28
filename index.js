var firebaseConfig = {
    apiKey: "AIzaSyAAlbrnIbUObHZk6SyjlNXjTtyDAtILsHs",
    authDomain: "automated-traffic-light.firebaseapp.com",
    databaseURL: "https://automated-traffic-light-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "automated-traffic-light",
    storageBucket: "automated-traffic-light.appspot.com",
    messagingSenderId: "526694496342",
    appId: "1:526694496342:web:3fdbda790649cba72163f7"
};

firebase.initializeApp(firebaseConfig);

var databaseRef = firebase.database().ref("sensor_data");
var databaseReflamp = firebase.database().ref("lamp_data");

var jalur1 = document.getElementById("kondisijalur1");
var jalur2 = document.getElementById("kondisijalur2");
var jalur3 = document.getElementById("kondisijalur3");
var kondisi = document.getElementById("status");

let timeout = null;

databaseReflamp.on("value", function(snapshot) {
  const data = snapshot.val();
  
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    console.log("Timeout reached - no data changed");
    kondisi.innerHTML = "OFFLINE";
  }, 10000);
});

databaseRef.on("value", function(snapshot) {
    var data = snapshot.val();

    kondisi.innerHTML = "ONLINE";
  
    for(let i in data){
      console.log(data[i]);
    }
  
    // Update the text of each element based on the data from Firebase
    if (data.kondisijalur1 === true) {
      jalur1.innerText = "PADAT";
    } else {
      jalur1.innerText = "TIDAK PADAT";
    }
    if (data.kondisijalur2 === true) {
      jalur2.innerText = "PADAT";
    } else {
      jalur2.innerText = "TIDAK PADAT";
    }
    if (data.kondisijalur3 === true) {
      jalur3.innerText = "PADAT";
    } else {
      jalur3.innerText = "TIDAK PADAT";
    }
  
  });
  
var merah1 = document.querySelector(".merah1");
var kuning1 = document.querySelector(".kuning1");
var hijau1 = document.querySelector(".hijau1");
var merah2 = document.querySelector(".merah2");
var kuning2 = document.querySelector(".kuning2");
var hijau2 = document.querySelector(".hijau2");
var merah3 = document.querySelector(".merah3");
var kuning3 = document.querySelector(".kuning3");
var hijau3 = document.querySelector(".hijau3");

databaseReflamp.on("value", function(snapshot) {
    var data = snapshot.val();

    for(let i in data){
        console.log(data[i]);
    }

    // Reset the classes on all traffic lights
    [merah1, kuning1, hijau1, merah2, kuning2, hijau2, merah3, kuning3, hijau3].forEach(function(light) {
        light.classList.remove("on");
    });

    // Add the appropriate class to the traffic lights
    if (data.lampuhijau1 === true) {
        hijau1.classList.add("on");
    } else if (data.lampumerah1 === true) {
        merah1.classList.add("on");
    } else if (data.lampukuning1 === true) {
        kuning1.classList.add("on");
    }

    if (data.lampuhijau2 === true) {
        hijau2.classList.add("on");
    } else if (data.lampumerah2 === true) {
        merah2.classList.add("on");
    } else if (data.lampukuning2 === true) {
        kuning2.classList.add("on");
    }

    if (data.lampuhijau3 === true) {
        hijau3.classList.add("on");
    } else if (data.lampumerah3 === true) {
        merah3.classList.add("on");
    }
    else if (data.lampukuning3 === true) {
        kuning3.classList.add("on");
    }
});


// databaseReflamp.on("value", function(snapshot) {
//     var data = snapshot.val();

//     // for(let i in data){
//     // console.log(data[i]);
//     // }

//     var hijau2 = document.querySelector(".traffic-light2");
//     var hijau2 = document.querySelector(".green");
//     var red2 = document.querySelector(".traffic-light2");
//     var red2 = document.querySelector(".red");
//     switch (true) {
//         case data.lampuhijau2 === true:
//         hijau2.classList.add("on");
//         break;
//         case data.lampumerah2 === true:
//         red2.classList.add("on");
//         break;
//         default:
//         hijau2.classList.remove("on");
//         red2.classList.remove("on");
//     }
// });


// async function getData() {
//   return new Promise((resolve, reject) => {
//     databaseRef.on("value", function(snapshot) {
//       var data = snapshot.val();
//       console.log(data);

//       jalur1.innerText = data.kondisijalur1 ? "PADAT" : "TIDAK PADAT";
//       jalur2.innerText = data.kondisijalur2 ? "PADAT" : "TIDAK PADAT";
//       jalur3.innerText = data.kondisijalur3 ? "PADAT" : "TIDAK PADAT";
      
//       resolve();
//     });
//   });
// }



// async function main() {
//   await getData();
//   await getTrafficLightData();
// }

// main();

// databaseReflamp.on("value", function(snapshot) {
//     var data = snapshot.val();

//     for(let i in data){
//     console.log(data[i]);
//     }

//     var hijau1 = document.querySelector(".traffic-light1");
//     var hijau1 = document.querySelector(".green");
//     var red1 = document.querySelector(".traffic-light1");
//     var red1 = document.querySelector(".red");
//     var hijau2 = document.querySelector(".traffic-light2");
//     var hijau2 = document.querySelector(".green");
//     var red2 = document.querySelector(".traffic-light2");
//     var red2 = document.querySelector(".red");
//     var hijau3 = document.querySelector(".traffic-light3");
//     var hijau3 = document.querySelector(".green");
//     var red3 = document.querySelector(".traffic-light3");
//     var red3 = document.querySelector(".red");
//     switch (true) {
//         case data.lampuhijau1 === true:
//           hijau1.classList.add("on");
//           break;
//         case data.lampuhijau2 === true:
//           hijau2.classList.add("on");
//           break;
//         case data.lampuhijau3 === true:
//           hijau3.classList.add("on");
//           break;
//         case data.lampumerah1 === true:
//           red1.classList.add("on");
//           break;
//         case data.lampumerah2 === true:
//           red2.classList.add("on");
//           break;
//         case data.lampumerah3 === true:
//           red3.classList.add("on");
//           break;
//         default:
//           hijau1.classList.remove("on");
//           hijau2.classList.remove("on");
//           hijau3.classList.remove("on");
//           red1.classList.remove("on");
//           red2.classList.remove("on");
//           red3.classList.remove("on");
//     }
// });

// databaseReflamp.child("traffic-light2").on("value", function(snapshot) {
//     var data = snapshot.val();

//     for(let i in data){
//     console.log(data[i]);
//     }

//     var hijau2 = document.querySelector(".traffic-light2");
//     var hijau2 = document.querySelector(".green");
//     var red2 = document.querySelector(".traffic-light2");
//     var red2 = document.querySelector(".red");
//     switch (true) {
//         case data.lampuhijau2 === true:
//         hijau2.classList.add("on");
//         break;
//         case data.lampumerah2 === true:
//         red2.classList.add("on");
//         break;
//         default:
//         hijau2.classList.remove("on");
//         red2.classList.remove("on");
//     }
// });

// databaseReflamp.child("traffic-light3").on("value", function(snapshot) {
//     var data = snapshot.val();

//     for(let i in data){
//     console.log(data[i]);
//     }

//     var hijau3 = document.querySelector(".traffic-light3");
//     var hijau3 = document.querySelector(".green");
//     var red3 = document.querySelector(".traffic-light3");
//     var red3 = document.querySelector(".red");
//     switch (true) {
//         case data.lampuhijau3 === true:
//         hijau3.classList.add("on");
//         break;
//         case data.lampumerah3 === true:
//         red3.classList.add("on");
//         break;
//         default:
//         hijau3.classList.remove("on");
//         red3.classList.remove("on");
//     }
// });