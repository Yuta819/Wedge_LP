import Header from "./components/Header";
import Hero from "./components/Hero";
import Available from "./components/Available";
import Solution from "./components/Solution";
import UserStories from "./components/UserStories";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Challenges from "./components/Challenges";
import SectionCTA from "./components/SectionCTA";
import PricingCards from "./components/PricingCards";
import Footer from "./components/Footer";
import Information from "./components/Information";
import ContactModalWrapper from "./components/ContactModalWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <Information show={false} />
      <Hero />
      <Available />
      <SectionCTA title="新たな無線機の可能性を体験してみませんか？" />
      <Solution />
      <SectionCTA title="業務効率化への第一歩はここにあります" />
      <Challenges />
      <SectionCTA title="あなたの課題、新しい無線機で解決できます" />
      <UserStories />
      <SectionCTA title="成功事例をもっと詳しく知りたいですか？" />
      <Steps />
      <PricingCards />
      <FAQ />
      <CTA />
      <Footer />
      <ContactModalWrapper />
    </main>
  );
}
