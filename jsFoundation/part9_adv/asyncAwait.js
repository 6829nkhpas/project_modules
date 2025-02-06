function fetchUserData() {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if(Math.random() >=0.9){
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }
    else {
      reject("Failed to fetch user data");
    }
    }, 3000); 
  
    
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
 