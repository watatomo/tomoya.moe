function ExtraInfo({ post }) {
    const {extra} = post;

    return (
        <div className="extra">
            <div className="collapsible-header">
                <span>Extra Information</span>
            </div>
            <div className="collapsible-body">
                {extra.map((v) => (
                    <div className="item" key={v}>
                        <div className="label">
                            {v.label}
                        </div>
                        <div className="value">
                            {v.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExtraInfo;