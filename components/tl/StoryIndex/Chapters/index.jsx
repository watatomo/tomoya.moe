function Chapters({ post }) {
    const {chapters} = post;
    console.log(chapters);
    return (
        <div className="chapters">
            <ul>
                {chapters.map((section) => (
                    
                    <li key={JSON.stringify(section)}>
                        {section.chapters.map((c) =>
                            c.href ? (
                                <a
                                    key={c}
                                    href={c.href}
                                >
                                    {c.label}
                                </a>
                            ) : (
                                <span key={c}>
                                    {c.label}
                                </span>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chapters;