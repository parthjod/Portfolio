import React from "react";

function Resume() {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <p>You can view or download my resume below:</p>
      <iframe src="/Parth_A_Jain_Resume.pdf" title="My Resume" width="100%" height="600px" style={{ border: "4px solid #222", borderRadius: "10px" }}></iframe>
      <div style={{ marginTop: "20px" }}>
        <a href="/resume.pdf" download className="resume-download">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
