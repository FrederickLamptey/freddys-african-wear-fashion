import { signInAction } from "../_lib/actions";
import "./signInButton.css"

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="signInButton">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span className="goog-signIn">Sign In With Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
