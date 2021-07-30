import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";

import Header from "../src/components/Header";

export default function IndexPage() {
  return (
    <div>
      <Header />
      Ola Mundo.{" "}
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
    </div>
  );
}
