import React from "react";
import Achivements from "../../components/serviceNew/Achivements/Achivements";
import Control from "../../components/serviceNew/Control/Control";
import EngageProspect from "../../components/serviceNew/EngageProspect/EngageProspect";
import Insights from "../../components/serviceNew/Insights/Insights";
import OnceShare from "../../components/serviceNew/OnceShare/OnceShare";
import ServiceNewBanner from "../../components/serviceNew/ServiceNewBanner";
import ServiceNewTeam from "../../components/serviceNew/ServiceNewTeam/ServiceNewTeam";
import SuperCharge from "../../components/serviceNew/SuperCharge/SuperCharge";
import Trusted from "../../components/serviceNew/Trusted/Trusted";
import ScrollSpy from "../../components/Scrollspy/ScrollSpy";
import Blog from "../../components/blog/Blog";
import { servicefaq } from "../../components/Scrollspy/servicefaq";
const index = () => {
  return (
    <div>
      <ServiceNewBanner />
      <ServiceNewTeam />
      <EngageProspect />
      <OnceShare />
      <SuperCharge />
      <ScrollSpy faq={servicefaq} />
      <Achivements />
      <Trusted
        heading={`Trusted By Product Teams`}
        para={`       It is one of the largest saas service providers, with over 422
              Million Monthly active users`}
      />
      <Blog title={"Blog"} heading={"Read Our Latest Project"} />
    </div>
  );
};

export default index;
