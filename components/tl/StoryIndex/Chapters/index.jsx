import Link from "next/link";

function deriveIndex({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/`;
}

function Chapters({ post }) {
    const { chapterSections } = post;

    return (
        <div className="chapters">
            <ul>
                {chapterSections.map((section) => (
                    <li key={JSON.stringify(section)}>
                        {section.chapters.map((c) =>
                            c.href ? (
                                c.none ? (
                                    <a key={c} className="none">
                                        {c.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={c}
                                        href={`${deriveIndex(post)}${c.href}`}
                                    >
                                        <a>{c.label}</a>
                                    </Link>
                                )
                            ) : (
                                <span key={c}>{c.name}</span>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chapters;
