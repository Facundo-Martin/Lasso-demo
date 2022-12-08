import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
