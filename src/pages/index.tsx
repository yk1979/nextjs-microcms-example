import Head from "next/head";
import styles from "@/styles/Home.module.css";

export const getServerSideProps = async () => {
  console.log("Hello Server");
  return { props: { test: "test" } };
};

export default function Home(props: any) {
  console.log(props);
  return <div className={styles.container}>Hello Next.js</div>;
}
