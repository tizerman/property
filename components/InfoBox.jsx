import Link from "next/link";
import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div>
      <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
        <p className={`mt-2 mb-4 ${textColor}`}>{children}</p>
        <Link
          href={buttonInfo.link}
          className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:opacity-80 hover:bg-gray-700 ${buttonInfo.backgroundColor}`}
        >
          {buttonInfo.text}
        </Link>
      </div>
    </div>
  );
};

export default InfoBox;