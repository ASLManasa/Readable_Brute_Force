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
import {
	RiNumber1,
	RiNumber2,
	RiNumber3,
	RiNumber4,
	RiNumber5,
	RiNumber6,
} from "react-icons/ri";
import { FiDownload, FiArchive } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillFileZip } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";

const features = [
	{
		id: 1,
		title: "Download the extension.",
		text: "Download the extension and save the zip file where you want.",
		icon: RiNumber1,
		labelIcon: FiDownload,
	},
	{
		id: 2,
		title: "Enable Developer Mode",
		text: "Go to <browser>://extensions/ and check the box for Developer mode.",
		icon: RiNumber2,
		labelIcon: BsCodeSlash,
	},
	{
		id: 3,
		title: "Unzip the file",
		text: "Extract the content of the file.",
		icon: RiNumber3,
		labelIcon: AiFillFileZip,
	},
	{
		id: 4,
		title: "Loading the Extension",
		text: "Go back to <browser>://extensions/ page and click the Load unpacked extension button.",
		icon: RiNumber4,
		labelIcon: FiArchive,
	},
	{
		id: 5,
		title: "Selecting the Extension Folder",
		text: "Select the unzipped folder where the extension is located.",
		icon: RiNumber5,
		labelIcon: BiSelectMultiple,
	},
	{
		id: 6,
		title: "Restart the browser",
		text: "This step is optional, if the extension is not loaded correctly, you can restart the browser.",
		icon: RiNumber6,
		labelIcon: VscDebugRestart,
	},
];

export const Instruction = () => {
	return (
		<Flex
			p={4}
			direction="column"
			alignItems="center"
			justifyContent="center"
			id="instructions"
			minHeight="102vh"
			pt={{ base: "10vh" }}
		>
			<Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
				<Heading fontSize={"3xl"}>Instructions</Heading>
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
								<Icon as={feature.icon} />
							</Box>
							<VStack align={"start"}>
								<Icon as={feature.labelIcon} w={20} h={20} />
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
