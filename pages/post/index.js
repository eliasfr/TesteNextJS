import Link from "next/link";

export default function PostPage() {
  return (
    <div>
      Ola Mundo.{" "}
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
