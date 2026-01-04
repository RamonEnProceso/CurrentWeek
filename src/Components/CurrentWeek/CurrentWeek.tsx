import getDates from "../../logic/getDates";
import style from "./CurrentWeek.module.css"

const CurrentWeekCard = () =>{
    const data = getDates();
    return <>
        <div className={style.current_week_card}>
            <div className={style.current_week_card_left_part}>
                <p >Semana </p>
                <p className={style.full_date}>{data.day} de {data.month}</p>
            </div>
            <div className={style.current_week_card_right_part}>
                <p className={style.week}>{data.week}</p>
                <p className={style.year}>{data.year}</p>
            </div>
        </div>
        <div className={style.separator}></div>
    </>
}

export default CurrentWeekCard