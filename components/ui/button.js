import Link from 'next/link';
import Styles from './button.module.css'
const Button = (props) => {
    if (props.link) {
        return (<Link href={props.link}  className={Styles.btn}>
        {props.children}
        
    </Link>)
    }
    return <button onClick={props.onClick} className={Styles.btn}> {props.children }</button>
}

export default Button