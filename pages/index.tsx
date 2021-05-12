import styles from "./index.module.scss";

function Heading(props) {
  return (
    <div>
      <h1 className={styles.red}>
        <span>I'm red </span>
        {props.heading}
      </h1>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Heading heading="Heading" />
      <h1>Here</h1>
    </div>
  );
}
