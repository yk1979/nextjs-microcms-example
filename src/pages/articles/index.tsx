import client from "@/utils/client";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";

// export const getServerSideProps = async () => {
//   const data = await client.get({
//     endpoint: "articles",
//   });
//   return { props: { data } };
// };

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "articles",
  });
  // ビルド時に実行されるので、リクエストするたびに console.log が実行されるわけではない
  console.log("hello");
  // revalidate をつけておくと、指定の秒数が経過した後にリクエストがあるともう一度ページを作り直してくれる
  // これが incremental regeneration
  return { props: { data }, revalidate: 10 };
};

export default function Articles({ data }: any) {
  const { contents } = data;
  return (
    <div className={styles.container}>
      <ul>
        {contents.map(({ id, title }: any, index: number) => (
          <li key={index}>
            <Link href={`/articles/${id}/`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
