import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-great-framework">
            NextJS is A Great Framework
          </Link>
        </li>
        <li>Still Laravel better WKWKWKW</li>
      </ul>
    </>
  );
}

export default NewsPage;
