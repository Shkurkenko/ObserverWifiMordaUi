import { useContext } from 'preact/hooks'
import { ScanViewContext } from '../Context/reo-scan-view-context'

export const useScanView = () => {
  const { scanViews, setScanViews, addView, deleteView, toggleView, showView, hideView } =
    useContext(ScanViewContext)

  return { scanViews, setScanViews, addView, deleteView, toggleView, showView, hideView }
}
