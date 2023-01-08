import Layout from "../components/layout/Layout";
import { titulo, corpo } from "../texts/indexText";

export default function Portfolio() {
  return <Layout title={titulo} children={corpo} />;
}
