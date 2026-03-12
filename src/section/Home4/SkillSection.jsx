import React from "react";
import SkillImage1 from "../../assets/images/icons/in.png";
import SkillImage2 from "../../assets/images/icons/figma.png";
import SkillImage3 from "../../assets/images/icons/ai.png";
import SkillImage4 from "../../assets/images/icons/ps.png";
import SkillIconImage1 from "../../assets/images/icons/skill-light-4-1.png";
import SkillIconImage2 from "../../assets/images/icons/star.png";

const skills = [
  { title: "Virtual Assistance", percentage: 75 },
  { title: "Project Management", percentage: 95 },
  { title: "Email Marketing", percentage: 60 },
];

const tools = [
  { icon: SkillImage1, title: "UI / UX Design", subtitle: "Invision", style: "style-1" },
  { icon: SkillImage2, title: "Apps Development", subtitle: "Figma", style: "style-2" },
  { icon: SkillImage3, title: "Web Development", subtitle: "Illustrator", style: "style-3" },
  { icon: SkillImage4, title: "Apps Development", subtitle: "Photoshop", style: "style-4" },
];

const SkillSectionFour = () => {
  return (
    <section className="skill-section-4 mb-2 section-padding pb-0">
      <div className="skill-light">
        <img src={SkillIconImage1} alt="light-shape" />
      </div>
      <div className="line-shape"></div>
      <div className="container">
        <div className="row g-4 align-items-end">
          <div className="col-lg-6">
            <div className="skiil-content-4 mb-md-30">
              <div className="sec-title mb-0">
                <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                  <img src={SkillIconImage2} alt="star" /> My Skills
                </span>
                <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                  Professional Skills for High-Quality <span>Outcomes</span>
                </h2>
              </div>
              <div className="text mt-3">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even slightly.
              </div>
              {skills.map((skill, index) => (
                <div className="skill-feature" key={index}>
                  <h5 className="title">{skill.title}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${skill.percentage}%`,
                        animation: "animate-positive 2s ease",
                      }}>
                      <div className="progress-value">
                        {skill.percentage}% <span className="line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills-block-4">
              {tools.map((tool, index) => (
                <div className={`inner-box ${tool.style} wow fadeInUp`} key={index}>
                  <div className="icon">
                    <img src={tool.icon} alt={tool.title} />
                  </div>
                  <div className="content">
                    <h5 className="title">{tool.title}</h5>
                    <div className="text">{tool.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSectionFour;