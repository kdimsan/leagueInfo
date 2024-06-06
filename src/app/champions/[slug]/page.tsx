import { getChampionData } from "@/services/getChampionData";
import ChampionPage from "@/components/partials/championPageComponents/championPage";

interface ChampionDetailsProps {
  params: { slug: string };
}

const ChampionDetailsModal = async ({ params }: ChampionDetailsProps) => {
  const { slug: championName } = params;

  try {
    const championData = await getChampionData(championName);

    if (!championData) {
      return (
        <div>
          <h1>Could not get Champion Data</h1>
        </div>
      );
    }

    return (
      <main className="flex items-center justify-center py-5">
        <ChampionPage championInfo={championData} />
      </main>
    );
  } catch (error) {
    console.error("Error fetching champion data:", error);
    return (
      <div>
        <h1>Error fetching champion data</h1>
      </div>
    );
  }
};

export default ChampionDetailsModal;
