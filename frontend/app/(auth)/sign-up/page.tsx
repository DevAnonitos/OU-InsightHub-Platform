"use client";

import React from 'react';
import SignUpForm from '@/components/Form/SignUpForm';

const SignUpPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-muted/50 px-4 py-12 border-slate-500'>
      <SignUpForm />  
    </div>
  );
};

export default SignUpPage;