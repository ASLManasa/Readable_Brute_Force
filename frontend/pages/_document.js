import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>
					{/* 👇 Here's the script */}
					<ColorModeScript initialColorMode="light" />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
