import { LineChart } from "../../components/dashboardChart/LineChart"
import DashboardCards from "../../components/dashboardCards/dashboardCards"

export const Dashboard = () => {
  return (
    <div>
      <DashboardCards />
      <LineChart />
    </div>
  )
}
