import { Box, Button, Flex, NumberInputFieldProps } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

export interface CompetencyLevelProps {
  competencyLevel: number;
}

export const CompetencyLevelDisplay: React.FC<CompetencyLevelProps> = ({competencyLevel}) => {
  const levels = [1, 2, 3];
  const competencyColors = ["blackAlpha.300", "red.600", "yellow.400", "green.600"];
  return (
    <>
      <Flex direction="row" justify="space-between" align="center">
        {levels.map((i) => {
          return (
            <>
              <Box
                w="30%"
                h={2}
                bg={competencyLevel >= i ? competencyColors[competencyLevel] : competencyColors[0]}
                borderColor="blackAlpha.500"
                rounded={12}
              />
            </>
          )
        })}
      </Flex>
    </>
  );
};
