import React from "react";

interface AboutProps {
  image?: string;
  about: string;
}

function About({ image, about }: AboutProps) {
  const defaultImage = "https://via.placeholder.com/215";
  const imageSrc = image || defaultImage;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
