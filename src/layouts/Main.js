import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../provider/context";

export default function Main({ children }) {
  const context = useContext(GlobalContext);

  return (
    <div
      style={{
        backgroundColor: context.darkTheme ? "#212121" : "#DDD",
        minHeight: "100vh",
        color: context.darkTheme ? "#FFF" : "#3D00EA",
      }}
    >
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
	<title>GitHub Flash</title>
	<meta name="description" content="Search github profiles" />
      </Head>
      {children}
    </div>
  );
}
