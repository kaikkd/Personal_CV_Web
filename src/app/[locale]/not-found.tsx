import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found section-shell">
      <p className="eyebrow">404 / SIGNAL LOST</p>
      <h1>Nothing here.<br />这里没有内容。</h1>
      <p>The page may have moved, or the link is incomplete.</p>
      <Link className="button button--primary" href="/en">
        Return home / 返回首页
        <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
