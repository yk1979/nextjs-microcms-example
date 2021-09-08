import { useRouter } from "next/dist/client/router";
import styles from "../../styles/Home.module.css";

export default function News() {
  const router = useRouter();
  const { id } = router.query;
  return <div className={styles.container}>{`News${id}`}</div>;
}
