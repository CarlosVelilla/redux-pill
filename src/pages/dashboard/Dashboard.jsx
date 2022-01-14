import { useState } from "react"

import Filters from "../../components/Filters/Filters"
import Properties from "../../components/Properties/Properties"

function Dashboard() {
  const [ reloadProperties, setReloadProperties ] = useState(false)

  return (
    <>
    <h1>Estamos en Dashboard</h1>
    <Filters reloadProperties={reloadProperties} setReloadProperties={setReloadProperties} />
    <Properties reloadProperties={reloadProperties} />
    </>
  )
}

export default Dashboard
