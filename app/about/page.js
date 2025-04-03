// import Image from "next/image";

export const metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <>
      <div className="about-page-container">
        <p className="about-heading">About Wear Africa</p>
        {/* <Image src="/ransford-quaye.jpg" height="600" width="900" alt="" /> */}
        <img src="/ransford-quaye.jpg" className="about-img" alt="" />
        <div className="about-content-1">
          <p className="about-para-1">
            Wear Africa is one of the world&apos;s leading luxury brands which
            was founded in Accra, Ghana. Its goal is to promote African culture
            and heritage through fashion. The brand has been featured in several
            fashion shows and magazines around the world. Wear Africa has also
            been worn by several celebrities and public figures.
          </p>
        </div>
      </div>
    </>
  );
}
