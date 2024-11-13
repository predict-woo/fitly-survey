import { ReactNode } from 'react'
import ReactGA from 'react-ga4'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  const handleClose = () => {
    onClose()
    ReactGA.event({
      category: 'close',
      action: 'modal-close',
      label: 'modal-close'
    })
  }

  return (
    <div className="fixed inset-0 z-50 mx-[25px] flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-[25px] ">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          id="close-modal"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
