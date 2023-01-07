import { Container, Flex } from "@chakra-ui/react";
import Content from "../content/Content";
import MenuSuperior from "../menu/MenuSuperior";

interface LayoutProps {
  title: string;
  subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <Flex direction="column" minHeight="100vh" minWidth="100wh">
      <MenuSuperior />
      <Content title={props.title} subTitle={props.subTitle}>
        {props.children}
      </Content>
    </Flex>
  );
}
