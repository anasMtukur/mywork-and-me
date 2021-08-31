import { EmailIcon } from "@chakra-ui/icons";
import { Box, Divider, Heading, HStack, useColorModeValue, VStack, Text, Flex, Link, IconButton } from "@chakra-ui/react";
import React from "react";
import { ContentBox, MainLayout, UserDetailBox, UserDetailItemList, UserLinks, UserTitleBox } from "../components";
import {
  FaCamera,
  FaCheckDouble,
  FaCode,
  FaGithub,
  FaPenAlt,
  FaPlus,
  FaTrashAlt,
  FaWrench,
} from 'react-icons/fa';
import { USER_SKILLS } from "@/components/dataOptions/_userSkillsData";
import { USER_LANGUAGES } from "@/components/dataOptions/_userLanguageData";
import { USER_TOOLS } from "@/components/dataOptions/_userToolsData";

export default function Home() {
  return (
    <MainLayout
      title="Welcome"
      description=""
    >
      <ContentBox padded={true}>
        <HStack
          p={1}
          w="full"
        >
          <UserTitleBox />
          <Box
            p="4"
            h="360px"
            w={'full'}
            rounded={'md'}
            boxShadow={'2xl'}
            overflow={'hidden'}
            maxW={'calc(100% - 32px)'}
            bg={useColorModeValue('white', 'gray.800')}
          >
            <VStack spacing={1} align="left">
              <HStack spacing={4} justify="bottom">
                <Heading>Anas Muhammad Tukur</Heading>
                <Text>Senior Software Engineer</Text>
              </HStack>
              <Divider color="#D9E0E2" />
              <Box
                maxH="220px"
                minH="220px"
                overflow="hidden"
              >
                <Text>
                  Self-directed, motivated and enthusiastic Software Engineer experienced working effectively in dynamic environments. Proficient in Java, PHP, JavaScript and Python programming languages.
                  <br /><br />
                  Offering more than 5 years hands-on experience in competitive environments focused on producing cutting-edge, reliable and highly scalable systems and architectures. Skilled in directing development with creative and performance-oriented approach. Well-organized and customer-focused with proven skills in project management and team leadership.
                  <br /><br />
                  Hardworking software product development professional driven to increase team effectiveness. Focused on usability and performance improvements. Proven history of developing useful, high quality, efficient and cost-effective projects and strong desire for innovation, research and learning new technologies.
                </Text>
              </Box>
              <Divider color="#D9E0E2" />
              <UserLinks />
            </VStack>
            
          </Box>
        </HStack>
        <HStack spacing={8} p={1}>
          <UserDetailBox heading="My Skills" icon={FaPenAlt}>
            <UserDetailItemList type="levelled" dataList={USER_SKILLS} />
          </UserDetailBox>

          <UserDetailBox heading="Languages" icon={FaCode} >
            <UserDetailItemList type="levelled" dataList={USER_LANGUAGES} />
          </UserDetailBox>

          <UserDetailBox heading="Tools" icon={FaWrench}>
            <UserDetailItemList type="levelled" dataList={USER_TOOLS} />
          </UserDetailBox>
        </HStack>
      </ContentBox>
    </MainLayout>
  )
}
