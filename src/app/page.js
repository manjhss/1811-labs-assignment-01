import CompaniesTieUp from "@/components/CompaniesTieUp/CompaniesTieUp";
import FAQ from "@/components/FAQ/FAQ";
import FuturePage from "@/components/FuturePage/FuturePage";
import HeroPage from "@/components/HeroPage/HeroPage";
import Pricing from "@/components/Pricing/Pricing";
import Revolutionalize from "@/components/Revolutionalize/Revolutionalize";
import Revolutionalize2 from "@/components/Revolutionalize2/Revolutionalize2";
import Unleash from "@/components/Unleash/Unleash";

export default function Home() {
	return (
		<main className="space-y-24">
			<HeroPage />

			<section className="bg-[#090725] space-y-24 px-6">
				<CompaniesTieUp />

				<Revolutionalize />

				<Revolutionalize2 />

				<Unleash />

				<Pricing />

				<FAQ />

				<FuturePage />
			</section>
		</main>
	);
}
