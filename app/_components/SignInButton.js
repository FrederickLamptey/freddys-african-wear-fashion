import "./signInButton.css"

function SignInButton() {
  return (
    <form action=''>
      <button className="signInButton">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Sign In With Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
