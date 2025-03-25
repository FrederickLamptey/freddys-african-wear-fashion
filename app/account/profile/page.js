import { signOutAction } from '@/app/_lib/actions';
import { auth } from '@/app/_lib/auth';

export const metadata = {
  title: 'Profile',
};

export default async function Page() {
  const session = await auth();
  const { name, email } = session?.user;

  // console.log(session)

  const firstName = name.split(' ').at(0);

  return (
    <>
      <div className="profile-container">
        <div className="profile-header-content-container">
          <h1 className="profile-heading">Welcome, {firstName}</h1>
          <form action={signOutAction}>
            <button className="signout-b">Sign-Out</button>
          </form>
        </div>
      </div>

      <div className="profile-info-container">
        <div className="profile-info">
          <div className="profile-info-heading-container">
            <h2 className="profile-info-h2">ACCOUNT</h2>
            <h3 className="profile-info-h3">PERSONAL INFORMATION</h3>
          </div>
          <div className="profile-info-content-container">
            <p className="profile-name">{name}</p>
            <p className="profile-email">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
