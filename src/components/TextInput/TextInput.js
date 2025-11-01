import styles from './TextInput.module.scss';

const TextInput = ({ placeholder, className = '', ...rest }) => {
  const inputClassName = [styles.input, className].filter(Boolean).join(' ');

  return <input className={inputClassName} type="text" placeholder={placeholder} {...rest} />;
};

export default TextInput;
