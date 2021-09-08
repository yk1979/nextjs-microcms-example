import client from "@/utils/client";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const contentId = query.id;
  if (typeof contentId !== "string") {
    throw new Error("invalid query");
  }

  const data = await client.get({
    endpoint: "articles",
    contentId,
  });
  return { props: { data } };
};

export default function Home({ data }: any) {
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </div>
  );
}
