import AccountBoxIcon from '@material-ui/icons/AccountBox';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import styles from "../styles/Header.module.css"
function Header(){
    return (
        <div className={styles.header}>
            <AccountBoxIcon fontSize="large"/>
            <p className={styles.logo}>Get A Date</p>
            <QuestionAnswerIcon fontSize="large"/>
        </div>
    )
}
export default Header;