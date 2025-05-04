"use client";

import React, { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

interface QueryProviderProps {
    children: React.ReactNode,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  }
});

const QueryProvider = ({ children }: QueryProviderProps) => {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const persister = createSyncStoragePersister({
      storage: window.sessionStorage,
    });

    persistQueryClient({
      queryClient,
      persister,
      maxAge: 1000 * 60 * 30,
    });

    setIsReady(true);
  }, []);

  if (!isReady) {
    return null; 
  }

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;