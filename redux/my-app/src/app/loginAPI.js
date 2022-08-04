import axios from 'axios'
const URL = "http://127.0.0.1:8000/api/token/"
 
// async(2)

export function signin(userName,passWord) {
   
    return new Promise((resolve) =>
    
        axios.post(URL, userName,  passWord ).then((res) => resolve({ data: res.data }))

    );
}


// // another option with one parameter

// export function doLogin(credentials) {
//     return new Promise((resolve) =>
//       axios
//         .post(MY_SERVER, credentials)
//         .then((res) => resolve({ data: res.data }))
//     );
//   }
