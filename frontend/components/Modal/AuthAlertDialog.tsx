"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/ui/alert-dialog';

interface AuthAlertDialogProps {
  condition: boolean;
  title: string;
  description: string;
  cancelText?: string;
  actionText?: string;
  redirectTo?: string;
  onConfirm?: () => void;
}

const AuthAlertDialog = ({ 
  condition,
  title,
  description,
  cancelText = 'Cancel',
  actionText = 'Confirm',
  redirectTo,
  onConfirm,
}: AuthAlertDialogProps) => {

  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (condition) {
      setOpen(true);
    }
  }, [condition]);

  const handleAction = () => {
    if (onConfirm) {
      onConfirm();
    } else if (redirectTo) {
      router.push(redirectTo);
    }
    setOpen(false);
  };

  if (!condition) return null;

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={handleAction}>
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AuthAlertDialog