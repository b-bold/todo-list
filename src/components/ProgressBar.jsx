import React from 'react'

export const ProgressBar = () => {
    return (
    <div className='container'>
            <div className='progress-bar'>
                <div className='progress-bar-fill'> progress bar
                </div>
                <div className='progress-bar-label'>50%</div>
                <button className='progress-bar-button'> Progress</button>
                <button className='progress-bar-button'> Reset</button>
            </div>
    </div>
    )
}