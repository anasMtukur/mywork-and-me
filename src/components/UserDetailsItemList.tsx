import { UserSkill } from "@/types";
import { Box, Divider, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { UserDetailsItemDisplay } from "./UserDetailsItemDisplay";

interface UserDetailsItemListProps {
  type: string;
  dataList: Array<UserSkill>;
}

export const UserDetailItemList: React.FC<UserDetailsItemListProps> = ({ type, dataList }) => {
  console.log("UserDetailItemList", dataList);
  return (
    <>
      <VStack spacing={0} divider={<Divider color="blackAlpha.500" />} minH="285px">
        { dataList && 
          dataList.length > 0 ? (
            dataList.map((item, index) => {
              return (
                <>
                  <UserDetailsItemDisplay type={type} item={item} index={index} />
                </>
              )
            })
          ): (
            <Box >
              <Heading>No Items</Heading>
            </Box>
          )
        }
      </VStack>
    </>
  );
};
