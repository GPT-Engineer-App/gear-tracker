import { Box, Heading, Text, Button, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaBicycle } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Bicycle Gear Tracker
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Keep track of all your bicycling gear in one place.
        </Text>
        <HStack justify="center">
          <IconButton
            icon={<FaBicycle />}
            aria-label="Bicycle Icon"
            size="lg"
            isRound
          />
        </HStack>
        <HStack justify="center">
          <Button colorScheme="teal" size="lg" leftIcon={<FaPlus />}>
            Add New Gear
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;