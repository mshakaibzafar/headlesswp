import React from 'react';
import styles from './Section.module.css'; // Import CSS module for styling

const Section = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backgroundColor}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h3 className={styles.subtitle}>I'm</h3>
          <h2 className={styles.title}>M Shakaib Zafar</h2>
          <p className={styles.description}>Website Development &amp; Maintenance, Speed Optimization, SEO and Graphics Design Services Tailored to your need.</p>
          <div className={styles.buttons}>
            <a href="https://www.upwork.com/services/product/development-it-m-shakaib-1485608116394450944?ref=project_share" target="_blank" rel="nofollow" className={styles.button}>Book Consultation</a>
            <a href="https://www.upwork.com/freelancers/mshakaibzafar" target="_blank" className={styles.button}>View Profile</a>
          </div>
        </div>
        <div className={styles.right}>
          <img src="https://mshakaibzafar.com/wp-content/uploads/2023/02/m_shakaib_zafar-12012023-0001-1-min-2-1-1-1536x1536-_1_-768x768.webp" alt="Profile" className={styles.profile} />
        </div>
      </div>
      </div>
      <div className={styles.nobackgroundColor}>
      <div className={styles.content}>
          <div className={styles.tab}>
            <h2 className={styles.tabTitle}>About Me</h2>
            <p className={styles.tabSubtitle}>I’m a Web Engineer, Over the past 7+ years I’ve created well-crafted web solutions by connecting business goals with user needs.</p>
            <div className={styles.tabsStyles}>
            <div className={styles.tabDetails} style={{ backgroundColor: '#EDEFF9' }}>
              <div>7+ Years Experience</div>
            </div>
            <div className={styles.tabDetails} style={{ backgroundColor: '#FFEEF1' }}>
              <div>140 + Projects Completed</div>
            </div>
            <div className={styles.tabDetails} style={{ backgroundColor: '#F5E8F2' }}>
              <div>98% Success Rate</div>
            </div>
            </div>
            <p className={styles.description}>Experienced grounded and solution oriented web engineer with variety of professional experience. Having excellent designing & coding skills, as well as ability convert client requirements into existing. I am Top Rated Plus on Upwork, I specialize in variety of services including Web Design & Development, CMS (WordPress | Webflow | WIX), SEO, Speed optimization, Graphics design, Figma design, API integration, Content Writing, SEO Audit tools (Semrush, Ahref), Google Analytics, Conversion tracking, and Facebook Pixel.</p>
            <div className={styles.buttons}>
            <a href="https://www.upwork.com/freelancers/mshakaibzafar" target="_blank" className={styles.button}>View Profile</a>
          </div>          </div>
        </div>
        </div>
      </section>
  );
}

export default Section;
