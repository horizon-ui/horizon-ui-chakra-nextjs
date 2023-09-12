'use client';
import React, { ReactNode } from 'react';
import 'styles/App.css';
import 'styles/Contact.css';
import 'styles/Plugins.css';
import 'styles/MiniCalendar.css';
import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme/theme';

export default function AppWrappers({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
