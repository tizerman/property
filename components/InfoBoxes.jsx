import Link from "next/link";
import React from "react";
import InfoBox from "./InfoBox.jsx";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="for Renter"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Property",
              link: "/properties",
              backgroundColor: "bg-black",
            }}
          >
            Find Your Dream rental property. Bookmark properties and contact
            owner.
          </InfoBox>
          {/* 2nd infobox */}
          <InfoBox
            heading="for Property owner"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            List your properties and reach potential tenants . Rent as an Airbnb
            or long term .
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;