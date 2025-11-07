import PageTitle from '../PageTitle/PageTitle.js';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.wrapper}>
      <PageTitle>About</PageTitle>
      <p className={styles.text}>
        This simple planner helps you organize work into lists, columns, and cards. Use it to keep
        track of what needs doing, experiment with new workflows, or just play with React, Redux,
        and routing in a single place.
      </p>
    </div>
  );
};

export default About;
