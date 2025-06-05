"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Toaster } from "./Toaster";

interface Toast {
  id: string;
  variant: "success" | "danger";
  message: string;
  action?: ReactNode;
}

interface ToastContextProps {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const ToastProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const addToast = (toast: Omit<Toast, "id">) => {
    const newToast: Toast = {
      id: `toast-${idCounter}`,
      ...toast,
    };
    setIdCounter(prev => prev + 1);
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
      <Toaster toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = "ToastProvider";
export { ToastProvider };
