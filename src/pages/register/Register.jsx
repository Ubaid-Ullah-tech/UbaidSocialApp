import { Link } from "react-router-dom";
import "../register/register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" id="username" name="username" />
            <input type="email" placeholder="Email" id="email" name="email" />
            <input type="password" placeholder="Password" id="password" name="password" />
            <input type="text" placeholder="Name" id="name" name="name" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

















// import { Link } from "react-router-dom";
// import "../register/register.scss";

// const Register = () => {
//   return (
//     <div className="register">
//       <div className="card">
//         <div className="left">
//           <h1>Lama Social.</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
//             alias totam numquam ipsa exercitationem dignissimos, error nam,
//             consequatur.
//           </p>
//           <span>Do you have an account?</span>
//           <Link to="/login">
//           <button>Login</button>
//           </Link>
//         </div>
//         <div className="right">
//           <h1>Register</h1>
//           <form>
//             <input type="text" placeholder="Username" />
//             <input type="email" placeholder="Email"/>
//             <input type="password" placeholder="Password"/>
//             <input type="text" placeholder="Name"/>
//             <button>Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;











// // import React from 'react'

// import { NavLink } from 'react-router-dom';
// import './register.scss';
// const Register = () => {
//   return (
//     <div className='register'>
//       <div className="card">
//         <div className="left">
//               <h1>Register</h1>
//               <form>
//                 <input type='text' placeholder='Name'/>
//                 <input type='email' placeholder='Email'/>
//                 <input type='password' placeholder='Password'/>
//                 <input type='phone' placeholder='Phone'/>
//               </form>
//               <button>Register</button>
//        </div>
//         <div className="right">
//           <h1>Face-Book</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsam maiores eaque aliquid nam recusandae itaque delectus</p>
//           <span>Do you have an account</span>
// <NavLink to='/login'>
//           <button>Login</button>
// </NavLink>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register
