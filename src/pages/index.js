import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, List, Image, Hr, Structure } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Awesome Company
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Setting up a workplace in the office and at home
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Structure cells-number-total="3" cells-number-group="3">
			<Override
				slot="Content"
				direction="rtl"
				grid-template-columns="9fr 3fr"
				md-grid-template-columns="repeat(6, 2fr)"
				sm-grid-template-columns="12fr"
			>
				<Override
					slot="Cell 0th"
					grid-column="1 / auto"
					grid-row="auto / span 2"
					md-grid-column="1 / span 6"
					md-grid-row="span"
					sm-grid-column="auto"
					sm-grid-row="span"
				/>
				<Override slot="Cell 1st" md-grid-column="1 / span 3" sm-grid-column="auto" />
				<Override slot="Cell 2nd" md-grid-column="4 / span 3" sm-grid-column="auto" />
				<Override slot="cell-0">
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" list-style-type="disc" as="ul">
						<Text margin="0px 0px 0px 0px">
							First item
						</Text>
						<Text margin="0px 0px 0px 0px">
							Second item
						</Text>
						<Text margin="0px 0px 0px 0px">
							Third item
						</Text>
					</List>
				</Override>
				<Override slot="cell-1">
					<Image src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200" display="flex" flex-direction="column" align-items="center" />
				</Override>
				<Override slot="cell-2">
					<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
				</Override>
				{"        "}{"        "}{"        "}{"    "}
			</Override>
		</Structure>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61fe6215e12bef001f5b5feb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});