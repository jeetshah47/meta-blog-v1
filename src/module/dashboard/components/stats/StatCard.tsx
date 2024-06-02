import { Icon } from "@iconify/react";

// type StatProps = {
//   title: string;
//   icon: string;
//   data: string;
//   percentage: number;
// };

const StatsCard = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="rounded-full p-5 bg-blue">
        <Icon
          fontSize={"42px"}
          icon={"hugeicons:user-multiple-02"}
          color="white"
        />
      </div>
      <div>
        <p className="dark:text-dark-primary">
          Total Customers
        </p>
        <p className="text-primary text-3xl font-bold dark:text-head-primary">5432</p>
        <p>
          <span>
            <Icon icon={"solar:arrow-up-linear"} color="green" />
          </span>
          this month
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
