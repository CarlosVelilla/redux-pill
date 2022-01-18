import Filters from "../../components/Filters/Filters"
import Properties from "../../components/Properties/Properties"
import SearchInput from "../../components/SearchInput/SearchInput"
import UserMenu from "../../components/UserMenu/UserMenu"

function Dashboard() {
  return (
    <>
    <h1>Estamos en Dashboard</h1>
    <div>
      <SearchInput/>
      <UserMenu />
    </div>
    <Filters />
    <Properties />
    </>
  )
}

export default Dashboard
