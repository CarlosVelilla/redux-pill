import Filters from "../../components/Filters/Filters"
import Properties from "../../components/Properties/Properties"
import SearchInput from "../../components/SearchInput/SearchInput"

function Dashboard() {
  return (
    <>
    <h1>Estamos en Dashboard</h1>
    <SearchInput />
    <Filters />
    <Properties />
    </>
  )
}

export default Dashboard
