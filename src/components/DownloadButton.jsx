import React from "react";

const DownloadButton = ({ styles }) => (
  <button type="button" className={`hidden md:block rounded-full py-3 px-6 font-Montserrat font-medium text-[12px] text-white bg-button-gradient outline-none ${styles}`}>
    Download Now
  </button>
);

export default DownloadButton;
