import styles from "./page.module.scss";
import { Button, Cross } from "./components";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.container}>
        <div className={styles.heroTextWrap}>
          <h1 className={styles.title}>
            Diagnose & Improve
            <br></br>
            <span className={styles.underlineItem}>Problem Solving</span>{" "}
            <br></br>
            Capabilities
          </h1>
          <p className={styles.subText}>Individualised Learning Platform</p>
          <Button text={"get started"} />
        </div>
        <div>
          <Cross className={styles.cross} />
        </div>
      </section>
    </main>
  );
}
