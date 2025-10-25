import React, { useEffect, useState } from "react";
import usersFeedBackData from "../seeds/usersFeedback.js";
import ClientFeedbackCard from "../components/ClientFeedbackCard.jsx";
import Marquee from "react-fast-marquee";
import Aos from "aos";
import "aos/dist/aos.css";

function ClientFeedback() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    Aos.init();

    // Detect window size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="flex w-full justify-center gap-20 flex-wrap mt-20 px-5"
      data-aos="fade-down"
    >
      <section className="text-center text-4xl md:text-5xl font-bold">
        Our Client Feedback
      </section>
      <Marquee
        pauseOnHover={false}
        gradient={!isMobile} // ✅ disables gradient on mobile
        gradientWidth={300}
        gradientColor={"rgb(255, 255, 255)"}
      >
        {usersFeedBackData.map(({ user_img, rating, feedback }, index) => (
          <ClientFeedbackCard
            key={index}
            user_img={user_img}
            rating={rating}
            feedback={feedback}
          />
        ))}
      </Marquee>
    </section>
  );
}

export default ClientFeedback;
