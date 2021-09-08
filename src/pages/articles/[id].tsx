import client from "@/utils/client";
import styles from "@/styles/Home.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const contentId = params?.id;
  if (typeof contentId !== "string") {
    throw new Error("invalid query");
  }

  const data = await client.get({
    endpoint: "articles",
    contentId,
  });
  return { props: { data } };
};

export default function ArticleDetail({ data }: any) {
  const router = useRouter();
  // getStaticPaths で paths の初期値をを空配列にしたのでこれが必要になる
  // 初回のリクエストでは fallback でこれが表示される（裏で getStaticProps が実行されている）
  // 2回目以降のリクエストでは、初回りクエストの裏で生成されたHTMLがレンダリングされる
  if (router.isFallback) return <div>loading</div>;

  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </div>
  );
}
