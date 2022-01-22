import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Icon,
	Text,
	Stack,
	HStack,
	VStack,
	Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const features = [
	{
		id: 1,
		title: "Easy to use",
		text: "One click install and we are always available at your service.",
	},
	{
		id: 2,
		title: "Improves reading skills",
		text: "Read freely without any bad words interrupting your throughts.",
	},
	{
		id: 3,
		title: "Clear Metrics",
		text: "See exactly how many good and bad sentences are in a website.",
	},
	{
		id: 4,
		title: "Complete trasnparency",
		text: "Here at Readable, your data are completely encypted. Even we have no access to your data.",
	},
	{
		id: 5,
		title: "Light weight",
		text: "Takes little to neglegibe space on you system.",
	},
	{
		id: 6,
		title: "Everything is free",
		text: "We believe that privacy to be a fundamental right. So, Readable will remain free to use for the forceable future.",
	},
];

export const FeaturesList = () => {
	return (
		<Flex
			p={4}
			direction="column"
			alignItems="center"
			justifyContent="center"
			id="featureList"
			minHeight="95vh"
			pt={{ base: "10vh" }}
		>
			<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
				<Heading fontSize={"3xl"}>Readable</Heading>
				<Text color={"gray.600"} fontSize={"xl"}>
					We offer military grade protection against website
					containing vulgarity. We are proud to make the internet
					safer for everyone to use.
				</Text>
			</Stack>

			<Container maxW={"6xl"} mt={10}>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={20}>
					{features.map((feature) => (
						<HStack key={feature.id} align={"top"}>
							<Box color={"green.400"} px={2}>
								<Icon as={CheckIcon} />
							</Box>
							<VStack align={"start"}>
								<Text fontWeight={600}>{feature.title}</Text>
								<Text color={"gray.600"}>{feature.text}</Text>
							</VStack>
						</HStack>
					))}
				</SimpleGrid>
			</Container>
		</Flex>
	);
};
