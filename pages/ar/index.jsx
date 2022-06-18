import React from "react";
import Advanced from "../../tvrComponents/Advanced/Advanced";
import Banner from "../../tvrComponents/Banner";
import Desing from "../../tvrComponents/Design/Desing";
import Form from "../../tvrComponents/Form/Form";
import Work from "../../tvrComponents/WhyWork/Work";

const index = () => {
  return (
    <div>
      <Banner />
      <Work />
      <Advanced />
      <Desing />
      <Form />
    </div>
  );
};

export default index;
