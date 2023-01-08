import { Box, Heading, Text } from "@chakra-ui/react";

interface ContentProps {
  title: string;
  subTitle: string;
  bgColor?: string;
  color?: string;
  children?: any;
}

export default function Content(props: ContentProps) {
  return (
    <Box
      minHeight="92vh"
      minWidth="100%"
      bgColor={props.bgColor ?? "#1C1C1C"}
      bgImage="/fotoPretoBrancoTransparente.png"
      backgroundPosition="right"
      backgroundRepeat="no-repeat"
      backgroundSize={900}
      padding="4"
    >
      <Heading as="h1" size="4xl" color={props.color ?? "#FFF"} px="10" py="5">
        {props.title}
      </Heading>
      <Heading as="h2" size="md" color={props.color ?? "#FFF"}>
        {props.subTitle}
      </Heading>
      <Text fontSize="lg" color={props.color ?? "#FFF"} px="10" width="50%">
        {props.children}
      </Text>
    </Box>
  );
}
