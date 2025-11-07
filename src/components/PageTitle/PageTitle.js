import styles from './PageTitle.module.scss';

const PageTitle = ({ children, className = '' }) => {
  const pageTitleClass = className ? `${styles.title} ${className}` : styles.title;

  return <h2 className={pageTitleClass}>{children}</h2>;
};

export default PageTitle;
