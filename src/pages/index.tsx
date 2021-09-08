import client from "@/utils/client";
import styles from "@/styles/Home.module.css";

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: "articles" });
  return { props: { data } };
};

export default function Home(props: any) {
  console.log(props.data);
  const { contents } = props.data;
  return (
    <div className={styles.container}>
      <ul>
        {contents.map(({ title }: any) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
}
