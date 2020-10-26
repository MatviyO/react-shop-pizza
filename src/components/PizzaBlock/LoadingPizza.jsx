import React from "react";
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >
            <circle cx="132" cy="142" r="11" />
            <rect x="0" v="273" rx="6" rv="6" width="280" height="26"  />
            <rect x="0" v="310" rx="6" rv="6" width="280" height="84"  />
            <rect x="0" v="418" rx="6" rv="6" width="91" height="31"  />
            <rect x="137" v="408" rx="25" rv="25" width="140" height="46"  />

        </ContentLoader>
    )
}

export default PizzaLoadingBlock;
