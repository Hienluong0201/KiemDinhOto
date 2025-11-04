    import ViolationLookup from "@/components/violation-lookup";
    import Features from "@/components/features";
    import HowToUse from "@/components/how-to-use";
    import FAQ from "@/components/faq";
    import Banner from "@/components/banner";

    export default function TraCuuPage() {
    return (
        <main className="max-w-[800px] w-full mx-auto px-4">
        <div className="w-100 d-flex flex-column">
            <Banner />
            <ViolationLookup />
            <HowToUse />
            <Features />
            <FAQ />
        </div>
        </main>
    );
    }
