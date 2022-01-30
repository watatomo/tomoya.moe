/* eslint-disable no-nested-ternary */
function deriveIndex({ slug }) {
    const slugSegments = slug.split("/");
    slugSegments.pop();
    return `/tl/${slugSegments.join("/")}/mini_talk/`;
}

function MiniTalks({ post }) {
    const { miniTalkSections } = post;
    return (
        <div className="mini-talks">
            <span>Mini Talks</span>
            <ul>
                {miniTalkSections.map((section) => (
                    <li key={JSON.stringify(section)}>
                        {section.miniTalks.map((c) =>
                            c.href ? (
                                c.none ? ( 
                                    <a 
                                        key={c}
                                        id="none"
                                        href={`${deriveIndex(post)}${section.name}/${c.href}`}
                                    >
                                        {c.label}
                                    </a> 
                                ) : (
                                    <a
                                        key={c}
                                        href={`${deriveIndex(post)}${section.name}/${c.href}`}
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

export default MiniTalks;
