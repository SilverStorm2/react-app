import PageTitle from '../PageTitle/PageTitle.js';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>About</PageTitle>
      <p className={styles.text}>
        This is the About page.
      </p>
    </div>
  );
};

export default About;
