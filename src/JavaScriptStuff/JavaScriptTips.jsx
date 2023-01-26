import React, { useEffect } from "react";

const JavaScriptTips = () => {


// Optional Chaining Object
  const user = {
    name: "Suraj",
    age: 22,
    address: {
      street: "St.Anthony",
      city: "City Mumbai",
      zip: 400058,
    },
    Bill: {
      company: "Adani",
    },
  };
  // console.log("Optional Chaining Object", user.address.area.road);
  console.log("Optional Chaining Object", user.address.area?.road); //Optional Chaining
  // Suppose hum koi aise value paas kr dete hai jo object me exist na karti hoo, soo uss time pe hum ? use karte hai taki wo erroe ki jagah undefined show kare
  // Optional Chaining Object



  // Optional Chaining Array
  const users = [
    {
      name: "Suraj",
      age: 22,
    },
    {
      name: "Allu",
      age: 18,
    },
    {
      name: "Neeraj",
      age: 20,
    },
  ];
  // users[3] hamare aaray me exist he nhi krta hai toh error throw kr dega uss condition me hum ? use krte hai tai wo error ki jagah undefined show kare
  // console.log("Optional Chaining Object", users[3].name);
  console.log("Optional Chaining Object", users[3]?.name); //Optional Chaining  
  // Optional Chaining Array

  
  
  
  // Nulish
  const myValue = "";
  const myNumber = myValue || 10;
  const myNumber1 = myValue ?? 20; //null coalescing operator

  // if hum ?? ka use krte hai toh suppose agar myValue ka koi value define nhii kiya gaya hai toh wo wahi value ko prinmt karega jo empty bheja gaya hai but || me wo
  // if value empty hai toh dusra wala value print krr deta hai

  console.log("myNumber", myNumber);
  console.log("myNumber1", myNumber1);
  // Nulish



// Window.Open
  
  function windowOpenn() {
    window.open("https://surajyadav.vercel.app/","","widht=500px, height=200px")
  }



  // Location
  console.log("Locationn", window.location)

  

  // History
  console.log("Historyy", window.history.location)


  
  // Convert String to Number and Number to String
  const theString = "12345"
  console.log("theString", +theString)

  

  
  // Get Location
  const getLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        console.log("latitude, longitude",latitude, longitude)
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log("window Location", window.navigator.ge)

  useEffect(() => {
    getLocation()
  })



  // console in better format
  const dataa = [{ "City": "Mumbai"}, {"City":"Banglore"},{"City":"Hyderabad"}]
  console.table(dataa)




  // Faster API Request
  // When we call multiple API at a time -  All 3 API's calling in same time because of Promise.all
  //   const parentFunction = async () => {
  //   const categoriers = await fetch("").then((response) => response.json())
    
  //   const proudct = await fetch("").then((response) => response.json())
    
  //   const users = await fetch("").then((response) => response.json())

  //   return Promise.all([categoriers, proudct, users])
  // }
  // parentFunction.then((data) => console.log(data))



  
  // Object Trick
  const person = { name: "Suraj", age: 22 }
  console.log("ObjectKeys",Object.keys((person)))
  console.log("ObjectKeys",Object.values((person)))
  



  // Sorting
  const arryy = [1, 3, 4, 2, 1]
  arryy.sort((a,b) => {
    return a -b
  })
  console.log("arryy", arryy)
  // Letters
  const stringArr = ["adc", "aaa", "acb"]
  stringArr.sort((a,b) => {
    return (a>b) - (a<b)
  })




  // OTP
  const OTP = Math.random()
  console.log("OTP", OTP)
  const ReaLOTP = Math.round(OTP * 90000 + 1000)
  console.log("ReaLOTP", ReaLOTP)




  // Object Distrucring - Nested
  const personn = { name: "Suraj", age: 22, roll: { ID: 100 } }
  const { name, age, roll: { ID: UniqueID } } = personn
  console.log("Object Distrucring", name, age, UniqueID)
  // But in case of aaray sequence is matter
  


  return (
    <div>
      <h6>JavaScriptTips</h6>
      <button onClick={windowOpenn}>New window Open</button>
      <button onClick={getLocation()}>Location Permission</button>
    </div>
  );
};

export default JavaScriptTips;