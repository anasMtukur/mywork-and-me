import { Stack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MobileNavItem, NAV_ITEMS } from '@/components/index';;

export const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};