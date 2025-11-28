import getDates from "../logic/getDates";
import "./CurrentWeek.css"

const CurrentWeekCard = () =>{
    const data = getDates();
    return <>
        <div className="current_week_card">
            <div className="current_week_card_left_part">
                <p >Semana </p>
                <p className="full_date">{data.day} de {data.month}</p>
            </div>
            <div className="current_week_card_right_part">
                <p className="week">{data.week}</p>
                <p className="year">{data.year}</p>
            </div>
        </div>
        <div className="separator"></div>
    </>
}

export default CurrentWeekCard