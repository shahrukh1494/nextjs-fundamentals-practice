import { GetServerSideProps } from "next";

//called always on every page request. EVEN ON PRODUCTION
//not recommended unless absolutely necessary because of no caching benefits
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      myFavNum: Math.random(),
    },
  };
};

export default function Dynamic(props) {
  return <h1>Dynamic Number - {props.myFavNum}</h1>;
}
