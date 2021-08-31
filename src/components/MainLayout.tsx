import React from "react";
import dynamic from 'next/dynamic';
import { Box } from "@chakra-ui/react";
import { Navigation } from ".";

interface LayoutProps {
  title: string;
  description: string;
}
export const MainLayout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
}) => {
  const Meta = dynamic<any>(() => import('./Meta').then((mod) => mod.Meta), {
    ssr: true,
  });

  return (
    <>
      <Meta
        title={title}
        description={description}
      />
      <Box
        as="main"
        w="100vw"
        h="100vh"
        backgroundBlendMode="darken"
        backgroundImage={"/bg.svg"}
        backgroundSize="cover"
      >
        <Navigation />
        {children}
      </Box>
    </>
  );
};
