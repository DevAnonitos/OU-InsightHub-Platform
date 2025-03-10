"use client";

import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';

interface props {
    children: React.ReactNode,
};

const queryClient = new QueryClient();

const QueryProvider = ({ children }: props) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;