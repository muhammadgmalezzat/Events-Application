import Styles from './events-search.module.css'
import Button from '../ui/button';
import { useRef } from 'react';

const EventsSearch = (props) => {

    const yearInputRef = useRef()
    const monthInputRef = useRef()
    
    function submitHandler(event) { 
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        props.onSearch(selectedYear, selectedMonth)
    }
    return (
        <form className={Styles.form}>
            <div className={Styles.controls}>
                <div className={Styles.control}>
                    <label htmlFor ="year">Year</label>
                    <select name="year" id="year" ref={yearInputRef}>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                    </select>
                </div>
                <div className={Styles.control}>
                    <label htmlFor ="month">month</label>
                    <select name="month" id="month" ref={monthInputRef}>
                        <option value='1'>jan</option>
                        <option value='2'>feb</option>
                        <option value='3'>mar</option>
                        <option value='4'>april</option>
                        <option value='5'>may</option>
                        <option value='6'>jun</option>
                        <option value='7'>jul</option>
                        <option value='8'>aug</option>
                        <option value='9'>sep</option>
                        <option value='10'>oct</option>
                        <option value='11'>mov</option>
                        <option value='12'>dec</option>
                    </select>
                </div>
            </div>
            <Button onClick={submitHandler}>Find Event</Button>
        </form>
    )
};

export default EventsSearch