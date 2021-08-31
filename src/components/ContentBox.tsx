import React from "react";
import Head from 'next/head';
import { Box } from "@chakra-ui/react";

interface ContentBoxProps {
  padded: boolean;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ padded, children }) => {
  return (
    <Box
      m={4}
      p={0.2}
      maxH={`calc(100vh - 100px)`}
      minH={`calc(100vh - 100px)`}
      overflowY="auto"
      //border="1px outset #D9E0E2"
      rounded={"lg"}
      //bg="transparent"
      bg="rgba(66, 66, 66, 0.2)"
      boxShadow={'2xl'}
    >
      {children}
    </Box>
  );
};
