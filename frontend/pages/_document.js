import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="title"
						content="Readable| Your Reading Partner"
					/>
					<meta
						name="description"
						content="You probably have visited sites before containing bad words, which might have caught you off guard. Suddenly stumbling upon these sites aren't exactly a good experience. We've made it easy for you to surf the web safely. Install our extension by visiting our site."
					/>
					<meta property="og:type" content="website" />
					<meta
						property="og:url"
						content="https://safe-readable.vercel.app/"
					/>
					<meta
						property="og:title"
						content="Readable| Your Reading Partner"
					/>
					<meta
						property="og:description"
						content="We offer military grade protection against website containing vulgarity. We are proud to make the internet safer for everyone to use."
					/>
					<meta
						property="og:image"
						content="https://safe-readable.vercel.app/meta-image.webp"
					/>
					<meta
						property="twitter:card"
						content="summary_large_image"
					/>
					<meta
						property="twitter:url"
						content="https://safe-readable.vercel.app/"
					/>
					<meta
						property="twitter:title"
						content="Readable| Your Reading Partner"
					/>
					<meta
						property="twitter:description"
						content="We offer military grade protection against website containing vulgarity. We are proud to make the internet safer for everyone to use."
					/>
					<meta
						property="twitter:image"
						content="https://safe-readable.vercel.app/meta-image.webp"
					></meta>
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
