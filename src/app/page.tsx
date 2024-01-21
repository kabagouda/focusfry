import Code3 from "@/components/code3";

const Home = () => {
  if (typeof window !== "undefined") {
    return <></>;
  }
  return <Code3 />;
};
export default Home;
