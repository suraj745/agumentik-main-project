import React, { Component } from "react";
import AboutUs from "../../components/About_Page/AboutUs";
import BusinessInterst from "../../dribbleComponents/BusinessInterst";
import Works from "../../dribbleComponents/Works";
import WhyOpentag from "../../opentagComponents/WhyOpentag/WhyOpentag";
export default class index extends Component {
  render() {
    return (
      <div>
        <AboutUs />
        <Works />
        <BusinessInterst />
      </div>
    );
  }
}
