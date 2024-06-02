import Card from "../../../common/components/card/card";
import StatsCard from "./StatCard";

const Stats = () => {
  return (
      <Card
        width="py-4 px-10 border w-full"
        border="border border-secondary dark:border-dark-primary bg-white dark:bg-dark-secondary"
      >
        <div className="flex flex-1  h-full items-center justify-between">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </Card>
  );
};

export default Stats;
