import './App.css'

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

import TabsLayout from './components/tabsLayout'
import TabLoader from './components/tabLoader'
import useDataLoader from './castomHooks/useDataLoader'
import { useMemo } from 'react'

function App() {
  const { data, error, isLoading } = useDataLoader(
    '/backendless-test/tabs.json',
  )

  const sortedTabs = useMemo(
    () => data.toSorted((a, b) => a.order - b.order),
    [data],
  )

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/:tabId"
          element={
            <TabsLayout tabs={sortedTabs}>
              <TabLoader tabs={sortedTabs} />
            </TabsLayout>
          }
        />
        <Route index element={<Navigate to={`/${sortedTabs[0].id}`} />} />
      </Routes>
    </HashRouter>
  )
}

export default App
