import React from 'react';
import { useModals } from '../../context/ModalContext';

export const Toast = () => {
  const { toast } = useModals();

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm bg-primary text-on-primary rounded-2xl p-4 shadow-xl border border-primary-container flex items-start gap-3 transition-all duration-300 pointer-events-none ${
        toast.show ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-xl">{toast.icon || 'eco'}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-title-md text-[14px] font-bold text-primary-fixed leading-tight">
          {toast.title}
        </h4>
        <p className="font-body-sm text-[12px] text-on-primary/80 mt-0.5 leading-snug">
          {toast.message}
        </p>
      </div>
    </div>
  );
};
