import FirstSession from "./first-session/first-session";
import FourthSession from "./fourth-session";
import SecondSession from "./second-session/second-session";
import ThirdSession from "./third-session/third-session";

export default function HomePage() {
  return (
    <>
      <main className="">
        <FirstSession />
        <SecondSession />
        <ThirdSession />
        <FourthSession />
      </main>
    </>
  );
}
