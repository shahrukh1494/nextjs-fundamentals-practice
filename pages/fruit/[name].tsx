import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      revalidate: 10,
      myFavNum: Math.random(),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: "hello" } }, { params: { name: "world" } }],
    fallback: true,
  };
};

export default function MyFruit(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return <h1>Hello {props.myFavNum}</h1>;
}
