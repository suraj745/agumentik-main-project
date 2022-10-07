import React from "react";
import { Container, Row, Col } from "reactstrap";
import SuperCard from "./SuperCard";
import {
  SiSlack,
  SiShopify,
  SiContentful,
  SiDiscord,
  SiTinder,
  SiMailchimp,
} from "react-icons/si";
import { BsSpotify } from "react-icons/bs";

import styles from "./SuperCharge.module.scss";

const website = [
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/website-development`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Spotify`,
    icon: "/New folder/spotify.png",
    link: `/website-development`,
    content: `swedish audio streaming and media services provider`,
  },
  {
    brandname: `Shopify`,
    icon: `/New folder/shopify.png`,
    link: `/website-development`,
    content: `canadian multinationa proprietary E-Commerce platform`,
  },
  {
    brandname: `Contentful`,
    icon: "/New folder/contentful2.png",
    link: `/website-development`,
    content: `Api first content management platform`,
  },

  {
    brandname: `Discord`,
    icon: "/New folder/discord.png",
    link: `/website-development`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Tinder`,
    icon: "/New folder/tinder.png",
    link: `/website-development`,
    content: `online dating and geosoical networking application`,
  },
  {
    brandname: `Mailchimp`,
    icon: "/New folder/mailchimp.png",
    link: `/website-development`,
    content: `streamline your slack messages with the slack integrations`,
  },
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/website-development`,
    content: `streamline your slack messages with the slack integrations`,
  },
];

const application = [
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/application-development`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Spotify`,
    icon: "/New folder/spotify.png",
    link: `/application-development`,
    content: `swedish audio streaming and media services provider`,
  },
  {
    brandname: `Shopify`,
    icon: `/New folder/shopify.png`,
    link: `/application-development`,
    content: `canadian multinationa proprietary E-Commerce platform`,
  },
  {
    brandname: `Contentful`,
    icon: "/New folder/contentful2.png",
    link: `/application-development`,
    content: `Api first content management platform`,
  },

  {
    brandname: `Discord`,
    icon: "/New folder/discord.png",
    link: `/application-development`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Tinder`,
    icon: "/New folder/tinder.png",
    link: `/application-development`,
    content: `online dating and geosoical networking application`,
  },
  {
    brandname: `Mailchimp`,
    icon: "/New folder/mailchimp.png",
    link: `/application-development`,
    content: `streamline your slack messages with the slack integrations`,
  },
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/application-development`,
    content: `streamline your slack messages with the slack integrations`,
  },
];

const software = [
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/software-development`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Spotify`,
    icon: "/New folder/spotify.png",
    link: `/software-development`,
    content: `swedish audio streaming and media services provider`,
  },
  {
    brandname: `Shopify`,
    icon: `/New folder/shopify.png`,
    link: `/software-development`,
    content: `canadian multinationa proprietary E-Commerce platform`,
  },
  {
    brandname: `Contentful`,
    icon: "/New folder/contentful2.png",
    link: `/software-development`,
    content: `Api first content management platform`,
  },

  {
    brandname: `Discord`,
    icon: "/New folder/discord.png",
    link: `/software-development`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Tinder`,
    icon: "/New folder/tinder.png",
    link: `/software-development`,
    content: `online dating and geosoical networking application`,
  },
  {
    brandname: `Mailchimp`,
    icon: "/New folder/mailchimp.png",
    link: `/software-development`,
    content: `streamline your slack messages with the slack integrations`,
  },
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/software-development`,
    content: `streamline your slack messages with the slack integrations`,
  },
];

const digital = [
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/digital-marketing`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Spotify`,
    icon: "/New folder/spotify.png",
    link: `/digital-marketing`,
    content: `swedish audio streaming and media services provider`,
  },
  {
    brandname: `Shopify`,
    icon: `/New folder/shopify.png`,
    link: `/digital-marketing`,
    content: `canadian multinationa proprietary E-Commerce platform`,
  },
  {
    brandname: `Contentful`,
    icon: "/New folder/contentful2.png",
    link: `/digital-marketing`,
    content: `Api first content management platform`,
  },

  {
    brandname: `Discord`,
    icon: "/New folder/discord.png",
    link: `/digital-marketing`,
    content: `streamline your slack messages with the slack integrations`,
  },

  {
    brandname: `Tinder`,
    icon: "/New folder/tinder.png",
    link: `/digital-marketing`,
    content: `online dating and geosoical networking application`,
  },
  {
    brandname: `Mailchimp`,
    icon: "/New folder/mailchimp.png",
    link: `/digital-marketing`,
    content: `streamline your slack messages with the slack integrations`,
  },
  {
    brandname: `Slack`,
    icon: "/New folder/slack.png",
    link: `/digital-marketing`,
    content: `streamline your slack messages with the slack integrations`,
  },
];

const SuperCharge = () => {
  return (
    <>
      <Container
        fluid
        className={styles.supercharge_outer_container}
        id={"website"}
      >
        <Container className={styles.supercharge_inner_container}>
          <Row className="flex-column gap-5 py-5">
            <ul className={`${styles.top} "col"`}>
              <li>
                <h1>Website Development Services</h1>
              </li>
              {/* <li>
              <p>
                Integrates With Your Favourite Workplace Tools - No Need To
                Start From Scratch <br />
                With Intergration. Make Your Company's Tools
              </p>
            </li> */}
            </ul>
            <Col className={styles.card_grid}>
              {website.map(
                ({ icon, brandname, content, link, count }, index) => {
                  return (
                    <SuperCard
                      id={index}
                      key={index}
                      icon={icon}
                      brandname={brandname}
                      content={content}
                      link={link}
                      count={count}
                    />
                  );
                }
              )}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`${styles.supercharge_outer_container} bg-white`}
      >
        <Container
          className={styles.supercharge_inner_container}
          id={"application"}
        >
          <Row className="flex-column gap-5 py-5">
            <ul className={`${styles.top} "col"`}>
              <li>
                <h1>Application Development Services</h1>
              </li>
              {/* <li>
              <p>
                Integrates With Your Favourite Workplace Tools - No Need To
                Start From Scratch <br />
                With Intergration. Make Your Company's Tools
              </p>
            </li> */}
            </ul>
            <Col className={styles.card_grid}>
              {application.map(
                ({ icon, brandname, content, link, count }, index) => {
                  return (
                    <SuperCard
                      id={index}
                      key={index}
                      icon={icon}
                      brandname={brandname}
                      content={content}
                      link={link}
                      count={count}
                      background={`rgb(239, 239, 239)`}
                    />
                  );
                }
              )}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={styles.supercharge_outer_container}
        id={"software"}
      >
        <Container className={styles.supercharge_inner_container}>
          <Row className="flex-column gap-5 py-5">
            <ul className={`${styles.top} "col"`}>
              <li>
                <h1>Software Development Services</h1>
              </li>
              {/* <li>
              <p>
                Integrates With Your Favourite Workplace Tools - No Need To
                Start From Scratch <br />
                With Intergration. Make Your Company's Tools
              </p>
            </li> */}
            </ul>
            <Col className={styles.card_grid}>
              {software.map(
                ({ icon, brandname, content, link, count }, index) => {
                  return (
                    <SuperCard
                      id={index}
                      key={index}
                      icon={icon}
                      brandname={brandname}
                      content={content}
                      link={link}
                      count={count}
                    />
                  );
                }
              )}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        className={`${styles.supercharge_outer_container} bg-white`}
        id={"digital"}
      >
        <Container className={styles.supercharge_inner_container}>
          <Row className="flex-column gap-5 py-5">
            <ul className={`${styles.top} "col"`}>
              <li>
                <h1>Digital Marketing</h1>
              </li>
              {/* <li>
              <p>
                Integrates With Your Favourite Workplace Tools - No Need To
                Start From Scratch <br />
                With Intergration. Make Your Company's Tools
              </p>
            </li> */}
            </ul>
            <Col className={styles.card_grid}>
              {digital.map(
                ({ icon, brandname, content, link, count }, index) => {
                  return (
                    <SuperCard
                      id={index}
                      key={index}
                      icon={icon}
                      brandname={brandname}
                      content={content}
                      link={link}
                      count={count}
                      background={`rgb(239, 239, 239)`}
                    />
                  );
                }
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SuperCharge;
