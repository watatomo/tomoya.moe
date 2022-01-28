/* eslint-disable @next/next/no-img-element */
function Cover({ post }) {
    return (
        <div className="cover">
            <div>
                <img 
                    src={
                        `/img/tl/${post.actualStory}/assets/${post.cover}`
                    } 
                    alt="Story cover" 
                />
            </div>
        </div>
    );
}

export default Cover;