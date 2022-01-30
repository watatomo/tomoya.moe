/* eslint-disable no-nested-ternary */
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
                                    <a 
                                        key={c}
                                        id="none"
                                        href={`${deriveIndex(post)}${c.href}`}
                                    >
                                        {c.label}
                                    </a> 
                                ) : (
                                    <a
                                        key={c}
                                        href={`${deriveIndex(post)}${c.href}`}
                                    >
                                        {c.label}
                                    </a>
                                )
                            ) : (
                                <span key={c}>{c.label}</span>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chapters;
