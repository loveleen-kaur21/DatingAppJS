import AccountBoxIcon from '@material-ui/icons/AccountBox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';

import styles from "../styles/Header.module.css"

function Header(){
    return (
        <div className={styles.header}>
            <IconButton>
            <a href="/account"><AccountBoxIcon className={styles.headerIcon} fontSize="large"/></a>
            </IconButton>
            <a href="/tinder"><p className={styles.logo}>Git A Date</p></a>
            <IconButton>
            <QuestionAnswerIcon className={styles.headerIcon} fontSize="large"/>
            </IconButton>
        </div>
    )
}
export default Header;