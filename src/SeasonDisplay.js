import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    };
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    const text = season === 'winter' ? 'Yoo, itz cold out here' : 'surfs up bruh';
    return (
        <div>
            <div>{text}</div>
        </div>
    );
};

export default SeasonDisplay; 