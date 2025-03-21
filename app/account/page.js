import Link from "next/link";
import "./account.css";
import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: 'Account',
};

export default function Page() {
  return (
    <>
      <div className="account-container">
        <h3 className="account-heading">Welcome Back, We are Happy to See You Again!</h3>
        <p className="account-instruction">Sign in below to access your profile</p>
        <SignInButton />
      </div>
    </>
  );
}
