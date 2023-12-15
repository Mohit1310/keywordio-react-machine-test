import { Table } from "../components/Table";
import ToggleComponent from "../components/ToggleComponent";

const Dashboard = () => {
  return (
    <div className="md:flex-row flex flex-col justify-center gap-6 m-5 md:mt-10">
      <Table />
      <ToggleComponent />
    </div>
  );
};

export default Dashboard;
