import React from 'react'

const HotMarket = () => {
    return (
        <div className="hot-market">
            <h1 className="hotmarket-title"> Hot Markets </h1>
            <div className="heat-map">
                <div className="heatMap-allIndustries">
                    <h3 className="heatMap-title">Heat Map for All industries</h3>
                    <div className="heatMap-content1">
                        Heat Map here!
                    </div>
                    <div className="heatMap-content2">
                        Card is here!
                        <p>-Company 1</p>
                        <p>-Company 2</p>
                    </div>
                </div>
                <div className="heatMap-allIndustries">
                    <h3 className="heatMap-title">Heat Maps By industries</h3>
                    <div className="heatMap-content1">
                        Heat Map here!
                    </div>
                    <div className="heatMap-content2">
                        Card is here!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotMarket
