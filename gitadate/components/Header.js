import AccountBoxIcon from '@material-ui/icons/AccountBox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import styles from "../styles/Header.module.css"

function Header(){
    return (
        <div className={styles.header}>
            <IconButton>
            <a href="/"><HomeIcon className={styles.headerIcon} fontSize="large"/></a>
            </IconButton>
            <a href="/tinder"><p className={styles.logo}>Git A Date</p></a>
            <IconButton>
            <QuestionAnswerIcon className={styles.headerIcon} fontSize="large"/>
            </IconButton>
        </div>
    )
}
export default Header;