import React from 'react';

export const ButtonComponent = (props) => {
    const { text, icon } = props;

    return (
        <div>
            <button>
                <i className={`fa fa-${icon}`}/>
                {text}
            </button>
        </div>
    )
};