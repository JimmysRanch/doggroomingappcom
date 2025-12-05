import { createContext, useContext, useState, ReactNode } from 'react'
import { GroomingApp } from '@/lib/types'

interface ComparisonContextType {
  selectedApps: (GroomingApp | null)[]
  addToComparison: (app: GroomingApp) => boolean
  removeFromComparison: (index: number) => void
  setAppAtIndex: (index: number, app: GroomingApp | null) => void
  isInComparison: (appId: string) => boolean
  canAddMore: boolean
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined)

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [selectedApps, setSelectedApps] = useState<(GroomingApp | null)[]>([null, null, null])

  const addToComparison = (app: GroomingApp): boolean => {
    const firstEmptyIndex = selectedApps.findIndex(a => a === null)
    if (firstEmptyIndex === -1) return false
    
    const alreadySelected = selectedApps.some(a => a?.id === app.id)
    if (alreadySelected) return false

    const newSelected = [...selectedApps]
    newSelected[firstEmptyIndex] = app
    setSelectedApps(newSelected)
    return true
  }

  const removeFromComparison = (index: number) => {
    const newSelected = [...selectedApps]
    newSelected[index] = null
    setSelectedApps(newSelected)
  }

  const setAppAtIndex = (index: number, app: GroomingApp | null) => {
    const newSelected = [...selectedApps]
    newSelected[index] = app
    setSelectedApps(newSelected)
  }

  const isInComparison = (appId: string): boolean => {
    return selectedApps.some(app => app?.id === appId)
  }

  const canAddMore = selectedApps.some(app => app === null)

  return (
    <ComparisonContext.Provider
      value={{
        selectedApps,
        addToComparison,
        removeFromComparison,
        setAppAtIndex,
        isInComparison,
        canAddMore,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  )
}

export function useComparison() {
  const context = useContext(ComparisonContext)
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider')
  }
  return context
}
