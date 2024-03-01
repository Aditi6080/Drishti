// // // import React from 'react'
// // // import { useEffect } from 'react';

// // // function Volunteers() {
// // //     useEffect(() => {
// // //         // Set the URL of the server's HTML page you want to redirect to
// // //         const serverPageURL = 'http://localhost:9999/index.html';
    
        
// // //         window.location.href = serverPageURL;
// // //       }, []); // The empty dependency array ensures the effect runs only once when the component mounts
    
    
// // //       return (
// // //         <div>
// // //           <p>Redirecting...</p>
// // //         </div>
// // //       );
// // // }

// // // export default Volunteers

// // ////$$$$$$$$$$$$$$$$$$$$$$
// // // src/Login.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:9999/api/volunteers/searchByEmail', {
// //         email,
// //         password,
// //       });

// //       // Handle successful login (e.g., store token, redirect to dashboard)
// //       console.log('Login successful', response.data);
// //     } catch (error) {
// //       setError('Invalid email or password');
// //       console.error('Login error', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <div>
// //           <label>Email:</label>
// //           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         </div>
// //          <div>
// //           <label>Password:</label>
// //           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //         </div>
// //         {error && <p style={{ color: 'red' }}>{error}</p>}
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from ''; // Make sure to replace './firebase' with the path to your Firebase configuration file

// const Dashboard = () => {
//   const [user] = useAuthState(auth);

//   const handleLogout = () => {
//     auth.signOut();
//   };

//   return (
//     <div>
//       <h2>Volunteer Dashboard</h2>
//       {user ? (
//         <div>
//           <p>UID: {user.uid}</p>
//           <p>Name: {user.displayName}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


