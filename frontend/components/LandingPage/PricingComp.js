import { ReactNode } from "react";
import {
	Box,
	Stack,
	HStack,
	Link,
	Heading,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { BRAND_COLOR_RED } from "../../constants";

function PriceWrapper({ children }) {
	return (
		<Box
			mb={4}
			shadow="base"
			borderWidth="1px"
			alignSelf={{ base: "center", lg: "flex-start" }}
			borderColor={useColorModeValue("gray.200", "gray.500")}
			borderRadius={"xl"}
		>
			{children}
		</Box>
	);
}

export const PricingComp = () => {
	return (
		<Box py={12} minHeight="95vh">
			<VStack spacing={2} textAlign="center">
				<Heading as="h1" fontSize="4xl">
					Everything is free.
				</Heading>
				<Text fontSize="lg" color={"gray.500"} p="1rem">
					Start with a unlimited free trial. No credit card needed.
					Cancel at anytime.
				</Text>
			</VStack>
			<Stack
				direction={{ base: "column", md: "row" }}
				textAlign="center"
				justify="center"
				spacing={{ base: 6, lg: 10 }}
				py={10}
			> 
				<PriceWrapper>
					<Box py={4} px={12}>
						<Text fontWeight="500" fontSize="2xl">
							Hobby
						</Text>
						<HStack justifyContent="center">
							<Text fontSize="3xl" fontWeight="600">
								$
							</Text>
							<Text fontSize="5xl" fontWeight="900">
								0
							</Text>
							<Text fontSize="3xl" color="gray.500">
								/month
							</Text>
						</HStack>
					</Box>
					<VStack
						bg={useColorModeValue("gray.50", "gray.700")}
						py={4}
						borderBottomRadius={"xl"}
					>
						<List spacing={3} textAlign="start" px={12}>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Unlimited passwords
							</ListItem>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Browser extension
							</ListItem>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Access on any device
							</ListItem>
						</List>
						<Box w="80%" pt={7}>
							<Link href="/authentication/register">
								<Button
									w="full"
									borderColor={BRAND_COLOR_RED}
									variant="outline"
								>
									Start trial
								</Button>
							</Link>
						</Box>
					</VStack>
				</PriceWrapper>

				<PriceWrapper>
					<Box position="relative">
						<Box
							position="absolute"
							top="-16px"
							left="50%"
							style={{ transform: "translate(-50%)" }}
						>
							<Text
								textTransform="uppercase"
								bg={useColorModeValue("red.300", "red.700")}
								px={3}
								py={1}
								color={useColorModeValue(
									"gray.900",
									"gray.300"
								)}
								fontSize="sm"
								fontWeight="600"
								rounded="xl"
							>
								Most Popular
							</Text>
						</Box>
						<Box py={4} px={12}>
							<Text fontWeight="500" fontSize="2xl">
								Growth
							</Text>
							<HStack justifyContent="center">
								<Text fontSize="3xl" fontWeight="600">
									$
								</Text>
								<Text fontSize="5xl" fontWeight="900">
									0
								</Text>
								<Text fontSize="3xl" color="gray.500">
									/month
								</Text>
							</HStack>
						</Box>
						<VStack
							bg={useColorModeValue("gray.50", "gray.700")}
							py={4}
							borderBottomRadius={"xl"}
						>
							<List spacing={3} textAlign="start" px={12}>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									Unlimited passwords
								</ListItem>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									Browser extension
								</ListItem>
								<ListItem>
									<ListIcon
										as={FaCheckCircle}
										color="green.500"
									/>
									Access on any device
								</ListItem>
							</List>
							<Box w="80%" pt={7}>
								<Link href="/authentication/register">
									<Button
										w="full"
										bgColor={BRAND_COLOR_RED}
										_hover={{
											bg: "#e34d4d",
										}}
									>
										Start trial
									</Button>
								</Link>
							</Box>
						</VStack>
					</Box>
				</PriceWrapper>
				<PriceWrapper>
					<Box py={4} px={12}>
						<Text fontWeight="500" fontSize="2xl">
							Scale
						</Text>
						<HStack justifyContent="center">
							<Text fontSize="3xl" fontWeight="600">
								$
							</Text>
							<Text fontSize="5xl" fontWeight="900">
								0
							</Text>
							<Text fontSize="3xl" color="gray.500">
								/month
							</Text>
						</HStack>
					</Box>
					<VStack
						bg={useColorModeValue("gray.50", "gray.700")}
						py={4}
						borderBottomRadius={"xl"}
					>
						<List spacing={3} textAlign="start" px={12}>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Unlimited passwords
							</ListItem>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Browser extension
							</ListItem>
							<ListItem>
								<ListIcon
									as={FaCheckCircle}
									color="green.500"
								/>
								Access on any device
							</ListItem>
						</List>
						<Box w="80%" pt={7}>
							<Link href="/authentication/register">
								<Button
									w="full"
									borderColor={BRAND_COLOR_RED}
									variant="outline"
								>
									Start trial
								</Button>
							</Link>
						</Box>
					</VStack>
				</PriceWrapper>
			</Stack>
		</Box>
	);
};
