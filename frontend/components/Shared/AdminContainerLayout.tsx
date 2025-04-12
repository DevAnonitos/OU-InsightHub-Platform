"use client";

import React from 'react';

interface Props {
  children: React.ReactNode,
};

const AdminContainerLayout = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AdminContainerLayout;