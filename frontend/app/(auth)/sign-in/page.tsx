"use client";

import React from 'react';
import SignInForm from '@/components/Form/SignInForm';

const SignInPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-muted/50 px-4 py-12 border-slate-500'>
      <SignInForm />
    </div>
  );
};

export default SignInPage;