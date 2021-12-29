import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

const Links =[
  {
    "name":"About",
    "link":"#about"
  },
  {
    "name":"Projects",
    "link":"#works"
  },
  {
    "name":"Skills",
    "link":"#skills"
  },
  {
    "name":"Blog",
    "link":"#blog"
  },
  {
    "name":"Contact",
    "link":"mailto:onlygodovbije@gmail.com"
  },
]
const NavLink = ({ title, web }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={web}
  >
    {title}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Logo />
                <Text className='m-2' > ONLYG</Text>
              </Flex>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink web={link.link} key={link.name} title={link.name}/>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink web={link.link} key={link.name} title={link.name}/>
                ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
