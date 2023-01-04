import { Box, Center, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import TransitionHeading from '../components/TransitionHeading';
import TransitionOverlay from '../components/TransitionOverlay';
import Navbar from '../components/Navbar';

const HomePage: NextPage = () => {
  return (
    <Box pos="fixed" inset={0} overflow="auto">
      <Navbar />
      <TransitionOverlay />
      <Center h="100vh">
        <TransitionHeading>Home</TransitionHeading>
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
          Pellentesque non lorem sit amet nisl dapibus pharetra sit amet in
          dolor. Donec eu mi sed turpis suscipit cursus in id ante. Sed maximus
          a massa quis venenatis. Phasellus facilisis turpis viverra placerat
          ullamcorper. Nullam interdum sapien sit amet diam sagittis, non
          posuere massa varius. Duis eros nunc, molestie auctor ligula a,
          bibendum laoreet neque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin quis tortor eget tortor posuere lobortis a eu
          lorem. Nullam vel turpis eu libero lacinia vulputate. Quisque ac
          tellus magna. Integer facilisis facilisis lectus, suscipit volutpat
          enim varius eu. Donec venenatis malesuada elit sollicitudin mollis.
          Proin sapien massa, vestibulum ut libero a, convallis imperdiet enim.
          Maecenas aliquet a nisi ut rhoncus. Suspendisse congue nisl neque, ac
          consequat felis tempus vitae. Donec sed elit vitae nisl auctor
          fermentum. Suspendisse aliquam nisl eu diam pretium tincidunt. Ut et
          nisl neque. Duis tempor dui non nulla volutpat vestibulum. Vestibulum
          nec aliquet quam, sit amet egestas turpis. Nunc augue augue, tempor at
          tincidunt sit amet, commodo nec mi. Curabitur volutpat quis magna id
          interdum. Praesent ex lacus, scelerisque lobortis varius ut, porta vel
          dolor.
        </Text>
      </Box>
    </Box>
  );
};

export default HomePage;
