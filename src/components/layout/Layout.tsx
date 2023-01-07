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
    <Flex direction="column" height="100vh" width="100%">
      <MenuSuperior />
      <Content title={props.title} subTitle={props.subTitle}>
        {props.children}
      </Content>
      ;
    </Flex>
  );
}
