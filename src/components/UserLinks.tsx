import React from "react";
import { Flex, HStack, Link, IconButton, Switch } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLink, FaTwitter, FaYoutube } from "react-icons/fa";

export const UserLinks: React.FC<{}> = ({ }) => {
  const links = [
    {
      "target": "Github",
      "targetIcon": "FaGithub",
      "targetLink":"https://github.com/"
    },{
      "target": "Twitter",
      "targetIcon": "FaTwitter",
      "targetLink":"https://github.com/"
    },{
      "target": "Youtube",
      "targetIcon": "FaYoutube",
      "targetLink":"https://github.com/"
    },{
      "target": "Facebook",
      "targetIcon": "FaFacebook",
      "targetLink":"https://github.com/"
    },
  ];
  return (
    <Flex
      w="full"
      overflowX="auto"
      direction="row"
      justify="flex-end"
      py={3}
    >
      <HStack spacing={4} >
        {links.map((link) => {
          return (
            <>
              <Link
                href={link.targetLink}
                isExternal
              >
                <IconButton
                  size={"sm"}
                  variant="outline"
                  colorScheme="telegram"
                  aria-label={`Visit ${link.target}`}
                  icon={getLinkIcon(link.target)}
                  borderRadius="50%"
                />
              </Link>
            </>
          );
        })}
      </HStack>
    </Flex>
  );
};
function getLinkIcon(target: string): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
  switch(target) { 
    case "Github": { 
      return <FaGithub /> 
      break; 
    } 
    case "Twitter": { 
      return <FaTwitter />  
      break; 
    }
    case "Facebook": { 
      return <FaFacebook />   
      break; 
    }
    case "Youtube": { 
      return <FaYoutube />  
      break; 
    }
    case "Linktree": { 
      return <FaLink />  
      break; 
    } 
    default: { 
      return <FaLink />   
      break; 
    } 
  } 
}

