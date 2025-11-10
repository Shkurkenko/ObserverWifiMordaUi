import { useContext } from 'preact/hooks'
import { ScanViewContext } from '../Context/ReoScanViewContext'

export const useScanView = () => {
  const { scanViews, setScanViews, addView, deleteView, toggleView, showView, hideView } =
    useContext(ScanViewContext)

  return { scanViews, setScanViews, addView, deleteView, toggleView, showView, hideView }
}
