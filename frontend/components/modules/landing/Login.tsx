import { SignInButton } from "@clerk/nextjs";

const Login = () => {
  return (
    <SignInButton mode="modal">
      Login
    </SignInButton>
  );
};

export default Login;
