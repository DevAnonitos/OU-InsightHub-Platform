import React from 'react';
import Navbar from '@/components/Custombar/Navbar';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';


describe('NavBar component', () => {
    beforeEach(() => {
      render(<Navbar />);
    });
});