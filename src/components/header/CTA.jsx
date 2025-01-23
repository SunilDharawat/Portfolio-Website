import React from "react";
import CV from "../../assets/SunilDharawatResume.pdf";
function CTA() {
  return (
    <div className="cta">
      {/* Download attribute to download the file */}
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Chat
      </a>
    </div>
  );
}

export default CTA;
