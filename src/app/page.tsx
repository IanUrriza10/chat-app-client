import InitialBox from "@/components/landing_page/InitialBox";
import LoginBox from "@/components/landing_page/LoginBox";
import RegisterBox from "@/components/landing_page/RegisterBox";
export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-black">
      <InitialBox />
      <LoginBox />
      <RegisterBox />
    </main>
  );
}
