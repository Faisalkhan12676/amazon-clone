import react from "react";

const Banner = () => {
    const banner = "http://www.aalogics.com/sites/default/files/amazon-web-services-banner.png";
  return (
    <>
    <div className="banner">
        <img src={banner} alt="" />
    </div>
    </>
  );
};

export default Banner;
