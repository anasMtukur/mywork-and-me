import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";

interface MetaProps {
  heading: string;
  icon: any;
}

export const UserDetailBox: React.FC<MetaProps> = ({ heading, icon, children }) => {
  return (
    <Box
      w="32%"
      maxH="325px"
      minH="325px"
      boxShadow={'2xl'}
      bg="whiteAlpha.600"
      rounded="lg"
      overflow="hidden"
    >
      <Flex
        w="full"
        h="40px"
        px={4}
        py={2}
        bg="#0795FB"
        direction="row"
        justify="space-between"
      >
        <Heading fontSize="xl" color="whiteAlpha.900">{heading}</Heading>
        <Icon h="27px" as={icon} color="whiteAlpha.900" />
      </Flex>
      <Box
        maxH="285px"
        minH="285px"
        overflowY="auto"
      >
        {children}
      </Box>
    </Box>
  );
};
