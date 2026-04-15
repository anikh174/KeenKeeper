import Banner from "@/components/homepage/Banner";
import StaticCards from "@/components/homepage/StaticCards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <StaticCards></StaticCards>
    </div>
  );
}
