import React from "react";
import TeamCard from "./About_comp/TeamCard";
import styles from "../../styles/AboutUs/team.module.scss";
const Team = () => {
  const teamDetail = [
    {
      name: "Krishna Kumar Mishra",
      image: "https://agumentik-software.vercel.app/images/team/1.jpg",
      post: "CEO & Founder",
    },
    {
      name: "Calvin Kelin",
      image: "https://agumentik-software.vercel.app/images/team/2.jpg",
      post: "Marketting Support",
    },
  ];
  return (
    <section className="team_container">
      <section className="container">
        <section className="content_pad gx-5 row flex-column">
          <section className="col d-flex justify-content-center ">
            <ul className={styles.team_top_content}>
              <li className={styles.title}>
                <h5>Team</h5>
              </li>
              <li className={styles.heading}>
                <h1>Meet Our Team</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
            </ul>
          </section>
          <section className="col py-5">
            <section className="row">
              {teamDetail.map((value) => {
                return (
                  <section className="col-md-6" key={teamDetail.length}>
                    <TeamCard
                      image={value.image}
                      name={value.name}
                      post={value.post}
                    />
                  </section>
                );
              })}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Team;
