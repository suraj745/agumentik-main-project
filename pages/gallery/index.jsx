import React, { Component } from "react";
import AboutAds from "../../components/ads/AboutAds";
import GalleryGrid from "../../components/Gallery/GalleryGrid";

export default class index extends Component {
  render() {
    return (
      <div>
        <GalleryGrid />
        <AboutAds />
      </div>
    );
  }
}
