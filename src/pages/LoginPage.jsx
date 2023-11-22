import LoginForm from "../form/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
      <div className="signup-link">
        아직 아이디가 없으신가요?{' '}
        <Link to="/signup" className="link">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
