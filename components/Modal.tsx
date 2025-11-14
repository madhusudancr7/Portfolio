import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from './icons/CloseIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => modalRef.current?.focus(), 0); // Focus the modal for screen readers
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-background dark:bg-dark-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative animate-fade-in-up border border-border-color dark:border-dark-border-color"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1} // Make it focusable
      >
        <button
          onClick={onClose}
          data-interactive="true"
          className="absolute top-4 right-4 text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-8 h-8" />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;