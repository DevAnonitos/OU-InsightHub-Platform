"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionStatusModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  variant?: "default" | "destructive";
  iconType?: "warning" | "info" | "none";
}

export const ActionStatusModal = ({
  isOpen,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  variant = "default",
  iconType = "warning",
}: ActionStatusModalProps) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") onCancel();
    if (e.key === "Enter") onConfirm();
  };

  const renderIcon = () => {
    if (iconType === "warning") {
      return (
        <div className="p-3 bg-red-100 rounded-full">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
      );
    }
    if (iconType === "info") {
      return (
        <div className="p-3 bg-blue-100 rounded-full">
          <Info className="h-8 w-8 text-blue-500" />
        </div>
      );
    }
    return null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onCancel() }}>
      <DialogContent 
        className={cn(
          "sm:max-w-md animate-in fade-in-90 zoom-in-90 slide-in-from-top-8",
          "backdrop-blur-md",
          "data-[state=open]:duration-300 data-[state=closed]:duration-200",
          "rounded-2xl shadow-2xl p-6"
        )}
        onKeyDown={handleKeyDown}
      >
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-muted-foreground mt-2">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <DialogFooter className="flex justify-center gap-3 mt-6">
          <Button 
            variant="outline"
            onClick={onCancel}
            disabled={isLoading}
            className="w-24"
          >
            {cancelText}
          </Button>
          <Button 
            variant={variant}
            onClick={onConfirm}
            disabled={isLoading}
            className="w-24"
          >
            {isLoading ? "Loading..." : confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
