import SignupForm from "../form/SignupForm";
import { Link } from "react-router-dom";

const SignupPage = () => {
    return(
    <div>
        <SignupForm />
        <div className="signup-link">
        이미 아이디가 있으신가요?{' '}
        <Link to="/login" className="link">
          로그인
        </Link>
      </div>
    </div>
    )
}

export default SignupPage;