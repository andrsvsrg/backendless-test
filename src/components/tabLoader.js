import { lazy, Suspense, useMemo } from 'react'
import { useParams } from 'react-router-dom'

const TabLoader = ({ tabs }) => {
  const { tabId } = useParams()

  const selectedTab = useMemo(
    () => tabs.find((tab) => tab.id === tabId),
    [tabId, tabs],
  )

  const LazyComponent = lazy(() => import(`./../${selectedTab.path}`))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}

export default TabLoader
