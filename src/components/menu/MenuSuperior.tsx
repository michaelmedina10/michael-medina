import { MenuButton, Menu, Flex } from "@chakra-ui/react";
import MyMenuButton from "./MyMenuButton";

interface MenuSuperiorProps {
  bgColor?: string;
  color?: string;
}

export default function MenuSuperior(props: MenuSuperiorProps) {
  return (
    <Flex
      minHeight="8vh"
      minWidth="100%"
      bgColor={props.bgColor ?? "#1C1C1C"}
      borderBottom="1px"
      borderColor="blackAlpha.300"
    >
      <Menu size={"100%"}>
        <MyMenuButton text={"About Me"} />
        <MyMenuButton text={"Projects"} />
        <MyMenuButton text={"Experience"} />
      </Menu>
    </Flex>
  );
}
