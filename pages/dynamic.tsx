import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      revalidate: 10,
      myFavNum: 4,
    },
  };
};

export default function Dynamic(props) {
  return <h1>Dynamic Number - {props.myFavNum}</h1>;
}
