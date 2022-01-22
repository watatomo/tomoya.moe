function Credits({ tl, tlc, qc }) {
    return (
        <div className="credits__wrapper">
            <div className="credits">
                {tl ? (
                    <div className="tl">
                        <b>Translation:</b>{" "}
                        <span dangerouslySetInnerHTML={{ __html: tl }} />
                    </div>
                ) : null}

                {tlc ? (
                    <div className="tlc">
                        <b>Translation Check:</b>{" "}
                        <span dangerouslySetInnerHTML={{ __html: tlc }} />
                    </div>
                ) : null}

                {qc ? (
                    <div className="qc">
                        <b>Quality Check:</b>{" "}
                        <span dangerouslySetInnerHTML={{ __html: qc }} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Credits;
