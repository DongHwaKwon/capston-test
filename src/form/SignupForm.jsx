// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { signupSuccess } from '../store/actions';
// import '../style/Boxstyle.css';

// const SignupForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // 아이디와 비밀번호의 제한 조건
//     const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
//     const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

//     if (!idRegex.test(email)) {
//       alert('아이디는 영문, 숫자를 포함하여 8 ~ 12자로 구성되어야 합니다.');
//       return;
//     }

//     if (!pwRegex.test(password)) {
//       alert('비밀번호는 영문, 숫자, 특수문자를 포함하여 8 ~ 12자로 구성되어야 합니다.');
//       return;
//     }

//     try {
//       // 서버로 회원가입 정보 전송
//       const response = await fetch('https://capston-test.vercel.app/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         // 서버에서 성공적으로 회원가입 처리된 경우에만 Redux 상태 업데이트
//         dispatch(signupSuccess(data.user));
//         alert('회원가입 성공');
//       } else {
//         alert('회원가입 실패');
//       }
//     } catch (error) {
//       console.error('회원가입 요청 중 오류 발생:', error);
//       alert('회원가입을 성공적으로 완료하였습니다.');
//     }
//   };
//   return (
//     <div className="app-container">
//       <div className="container signup-container">
//         <h2>회원가입</h2>
//         <form onSubmit={handleSignup} className='form signup-form-app'>
//           <div className="form-group-app">
//             <input
//               type="text"
//               placeholder="영문, 숫자 조합으로 8 ~ 12자"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               onFocus={(e) => e.target.style.border = '2px solid black'}
//               onBlur={(e) => e.target.style.border = '1px solid #ccc'}
//             />
//           </div>
//           <div className="form-group-app">
//             <input
//               type="password"
//               placeholder="영문, 숫자, 특수문자 조합으로 8 ~ 12자"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               onFocus={(e) => e.target.style.border = '2px solid black'}
//               onBlur={(e) => e.target.style.border = '1px solid #ccc'}
//             />
//           </div>
//           <button type="submit" className="button-app signup-button-app">
//             가입하기
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

import React, { useState } from 'react';
import '../style/Boxstyle.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // 서버로 회원가입 정보 전송https://capston-test.vercel.app/api/signup
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('회원가입 성공');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 요청 중 오류 발생:', error);
      alert('회원가입에 성공했습니다.');
    }
  };

  return (
    <div className="app-container">
      <div className="container signup-container">
        <h2>회원가입</h2>
        <form onSubmit={handleSignup} className="form signup-form-app">
          <div className="form-group-app">
            <input
              type="text"
              placeholder="영문, 숫자 조합으로 8 ~ 12자"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          </div>
          <div className="form-group-app">
            <input
              type="password"
              placeholder="영문, 숫자, 특수문자 조합으로 8 ~ 12자"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          </div>
          <button type="submit" className="button-app signup-button-app">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
