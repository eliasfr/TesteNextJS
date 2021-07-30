import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Ola Mundo.{" "}
      <Link href="/sobre">
        <a>Sobre</a>
      </Link>
    </div>
  );
}
