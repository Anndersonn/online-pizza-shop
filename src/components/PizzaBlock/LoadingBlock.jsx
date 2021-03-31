import React from 'react';
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="133" cy="166" r="119" />
        <rect x="0" y="294" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="329" rx="6" ry="6" width="280" height="80" />
        <rect x="2" y="416" rx="0" ry="0" width="112" height="38" />
        <rect x="136" y="416" rx="21" ry="21" width="144" height="36" />
    </ContentLoader>
}

export default LoadingBlock;