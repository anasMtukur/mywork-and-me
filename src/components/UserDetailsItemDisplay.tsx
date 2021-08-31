import React, { useEffect, useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import { Box, Heading, HStack, VStack, Text, Flex } from "@chakra-ui/react";
import { CompetencyLevelDisplay } from "./CompetencyLevelDisplay";
import { UserSkill } from "@/types";

interface UserDetailsItemDisplayProps {
  type: string;
  item: UserSkill;
  index: number;
}

export const UserDetailsItemDisplay: React.FC<UserDetailsItemDisplayProps> = ({ type, item, index }) => {
  return (
    <Box
      h="60px"
      w="full"
      py={4}
      px={2}
      bg="whiteAlpha.900"
    >
      {type == "checked" && 
        <Box />
      }

      {type == "levelled" && 
        <VStack justify="left" align="left">
          <Flex direction="row" justify="left" align="center">
            <Heading fontSize={'sm'}>
              {item.title}
            </Heading>
            <Text fontSize={10} fontWeight={500} ml={2}>{item.competency}</Text>
          </Flex>
          <CompetencyLevelDisplay competencyLevel={item.level} />
        </VStack>
      }

      {type == "Indexed" && 
        <Box />
      }
    </Box>
  );
};
