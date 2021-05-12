import { fchmod } from "fs/promises";
import { useRouter } from "next/router";

export default function FruitName() {
  const router = useRouter();

  console.log(router);

  function takeMeHome() {
    router.replace("/");
  }

  return (
    <h1>
      Hello! {router.query.name} {router.query.subname}
      <button onClick={takeMeHome}>Home</button>
    </h1>
  );
}
