import { getChampionData } from "@/services/getChampionData";
import ChampionPage from "@/components/partials/championModalComponents/championPage";

interface ChampionDetailsProps {
  params: { slug: string };
}

export default async function ChampionDetailsModal({
  params,
}: ChampionDetailsProps) {
  const championName = params.slug;

  const championData = await getChampionData(championName);

  if (!championData) {
    return (
      <div>
        <h1>Could not get Champion Data</h1>
      </div>
    );
  }

  return <ChampionPage championInfo={championData} />;
}
