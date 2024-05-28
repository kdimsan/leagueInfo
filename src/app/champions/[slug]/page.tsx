import { getChampionData } from "@/services/getChampionData";
import ChampionPage from "@/components/partials/championModalComponents/championPage";

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

    return <ChampionPage championInfo={championData} />;
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
