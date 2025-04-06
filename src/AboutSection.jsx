import React from "react";
import { Card } from "./Card";
import profileimg from "./assets/profileimg.jpeg";

export const AboutSection = () => {
  return (
    <Card
      title={"A few words about me"}
      image={profileimg}
      content={
        <>
          <p>
            👋 Hola! I'm Giorgos - 27 years on Earth and counting.
          </p>
          <p>
            I like everything about rhythm and music, cycling, sunny days, and
            boxing. I've always had an eye for cool visuals, which is why I ended up creating all
            the posters for our band's live gigs
          </p>
          <p>
            Now, I'm chanelling that same creative mood into web development and app design - building stuff that looks good <b>and</b> works well.
          </p>
          <p>Let’s see where that takes me!</p>
        </>
      }
    />
  );
};
