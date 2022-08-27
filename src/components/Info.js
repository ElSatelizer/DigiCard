import React from "react";

const Info = () => {
  return (
    <div className="Info">
      <div>
        <img
          className="Info--picture"
          src="../images/profile.jpg"
          alt="profile"
        />
        <h1 className="Info--name">Carlos Corona</h1>
        <h2 className="Info--title">Frontend Developer</h2>
        <h3 className="Info--website">Carlos.Website</h3>
        <div>
          <button class="btn btn--Email">
            <i class="fa-solid fa-envelope"></i>Email
          </button>
          <button class="btn btn--socialMedia">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
