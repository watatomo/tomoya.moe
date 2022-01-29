function MiniTalks({ post }) {
    const {minitalks} = post;

    return (
        <div className="mini-talks">
            Mini Talks
            {minitalks.map((character) => (
                <ul key={character}>
                    <li>
                        {character.chapters.map((c) =>
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
                </ul>
            ))}
        </div>
    );
}

export default MiniTalks;