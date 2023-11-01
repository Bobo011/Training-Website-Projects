
import { useState, useContext, createContext } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Counter from "../components/Counter";
import MyComp from "@/components/MyComp";

// const cont = createContext()

function delay(ms: number) {
  console.log("start");
  return new Promise((resolve) =>
    setTimeout(() => {
      // @ts-ignore
      resolve();
      console.log("end");
    }, ms)
  );
}

async function Home() {
  await delay(10000);

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <Counter /> */}
      <MyComp />
      {/* </Provider> */}
    </>
  );
}

export default Home;
