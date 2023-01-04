import { Box, Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import TransitionHeading from '../components/TransitionHeading';
import TransitionOverlay from '../components/TransitionOverlay';
import Navbar from '../components/Navbar';

const AboutPage: NextPage = () => {
  return (
    <Box pos="fixed" inset={0} overflow="auto">
      <Navbar />
      <TransitionOverlay />
      <Center h="100vh">
        <TransitionHeading>About</TransitionHeading>
      </Center>
      <Box maxW="80ch" py={16} px={8} m="0 auto">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
          ullamcorper sapien ac ornare. Pellentesque sem nibh, dignissim non
          finibus eget, aliquet eu augue. Suspendisse mattis tortor nisl, sed
          consequat est dapibus id. Donec iaculis mauris elit, a volutpat diam
          dapibus vel. Vestibulum nec fermentum mauris. Pellentesque lacus nisl,
          blandit id elit eu, maximus convallis nisi. Mauris laoreet malesuada
          quam in pretium. Aenean vitae leo est. Sed commodo magna arcu, non
          ultricies arcu ullamcorper a. Donec vel risus et augue tincidunt
          ultrices non quis velit. Mauris id est vel massa maximus sodales.
          Nulla lobortis arcu lacus, id iaculis sem pretium id. Suspendisse
          ultrices lorem eu turpis vestibulum, ut consectetur nunc tempor.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutPage;
