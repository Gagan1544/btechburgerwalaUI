import { motion } from "framer-motion";
import React from "react";
import me from "../../assets/founder.jpg";

export default function Founder() {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Gagan Gupta</h3>
        <p>
          Hey, Everyone I am Gagan Gupta, Founder of Btech Burgir Wala. <br />
          Our aim is to create the most tasty burger..
        </p>
      </motion.div>
    </section>
  );
}
