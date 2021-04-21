import React from 'react'
import Sbstyle from "../styles/SwipeButtons.module.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
export default function SwipeButtons() {
    return (
        <div className={Sbstyle.swipeButtons}>
            <IconButton className={Sbstyle.swipeButtons__repeat}>
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className={Sbstyle.swipeButtons__left}>
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className={Sbstyle.swipeButtons__right}>
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}
