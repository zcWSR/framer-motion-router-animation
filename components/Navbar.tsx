import Link from 'next/link';
import { HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <HStack
      pos="fixed"
      h="70"
      w="100%"
      alignItems="center"
      spacing={6}
      px={6}
      zIndex={1}
      bg="whiteAlpha.800"
      backdropFilter="blur(6px)"
      boxShadow="sm"
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </HStack>
  );
};

export default Navbar;
