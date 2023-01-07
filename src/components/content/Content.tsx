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
      width="100%"
      bgColor={props.bgColor ?? "#1C1C1C"}
      padding="4"
    >
      <Heading as="h1" size="xl" color={props.color ?? "#FFF"}>
        {props.title}
      </Heading>
      <Heading as="h2" size="md" color={props.color ?? "#FFF"}>
        {props.subTitle}
      </Heading>
      <Text color={props.color ?? "#FFF"}>{props.children}</Text>
    </Box>
  );
}
