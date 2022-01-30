function Chapters({ post }) {
    const { chapterSections } = post;
    console.log(chapterSections);
    return (
        <div className="chapters">
            <ul>
                {chapterSections.map((section) => (
                    <li key={JSON.stringify(section)}>
                        {section.chapters.map((c) =>
                            c.href ? (
                                <a key={c} href={c.href}>
                                    {c.label}
                                </a>
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
