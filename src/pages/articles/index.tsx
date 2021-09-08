import client from "@/utils/client";
import styles from "@/styles/Home.module.css";

export const getServerSideProps = async () => {
  const data = await client.get({
    endpoint: "articles",
  });
  return { props: { data } };
};

export default function Home({ data }: any) {
  const { contents } = data;
  return (
    <div className={styles.container}>
      <ul>
        {contents.map(({ id, title }: any, index: number) => (
          <li key={index}>
            <a href={`/articles/${id}/`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
