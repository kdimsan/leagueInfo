import AllChampionsSection from "@/components/allChampionsSection";
import FreeWeekSection from "@/components/partials/freeWeekSection";
import { getFreeWeek } from "@/services/getFreeWeek";

const FreeWeek = async () => {
  const freeWeek = await getFreeWeek();

  const { allChampionsRes, freeWeekChampionsData } = freeWeek.FreeWeekData;

  return (
    <>
      <FreeWeekSection data={freeWeekChampionsData} />
      <AllChampionsSection data={allChampionsRes} />
    </>
  );
};

const Component = async () => {
  return (
    <main className="flex flex-col justify-center gap-12 mt-8 ">
      <FreeWeek />
    </main>
  );
};

export default function Home() {
  return <Component />;
}
