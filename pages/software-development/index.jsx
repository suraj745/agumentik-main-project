import React from "react";
import EngageProspect from "../../components/serviceNew/EngageProspect/EngageProspect";
import OnceShare from "../../components/serviceNew/OnceShare/OnceShare";
import ServiceNewTeam from "../../components/serviceNew/ServiceNewTeam/ServiceNewTeam";
import ScrollSpy from "../../components/Scrollspy/ScrollSpy";
import { servicefaq } from "../../components/Scrollspy/servicefaq";
import Blog from "../../components/blog/Blog";
import Control from "../../components/serviceNew/Control/Control";
import Insights from "../../components/serviceNew/Insights/Insights";
import Consultation from "../../components/Consultation/Consultation";
import Inquiry from "../../components/inquiry/Inquiry";
import Achivements from "../../components/serviceNew/Achivements/Achivements";
import Trusted from "../../components/serviceNew/Trusted/Trusted";

const index = () => {
  return (
    <div>
      <EngageProspect />
      <ServiceNewTeam />
      <OnceShare />
      <ScrollSpy faq={servicefaq} />
      <Inquiry />
      <Consultation />
      <Achivements />
      <Trusted heading={`Trusted By Clients`} />
      <Blog title={"Blog"} heading={"Read Our Latest Project"} />
    </div>
  );
};

export default index;
