import { MenuButton, Text } from "@chakra-ui/react";

interface MyMenuButtonProps {
  text: string;
  color?: string;
  hoverColor?: string;
}

export default function MyMenuButton(props: MyMenuButtonProps) {
  return (
    <MenuButton
      color={props.color ?? "#FFF"}
      marginLeft="20px"
      minHeight="100%"
      px={4}
      py={2}
      transition="all 0.2s"
      _hover={{ bg: props.hoverColor ?? "orange.400" }}
    >
      <Text fontSize="xl" as="b">
        {props.text}
      </Text>
    </MenuButton>
  );
}
