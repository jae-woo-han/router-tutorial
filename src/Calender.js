/* eslint-disable no-array-constructor */
import React from "react";
import moment from "moment";
import "./Calender.css";

const Calender = () => {
  //특정 월에 해당하는 달력 생성
  const createCalender = () => {
    const date = moment(new Date());
    const month = date.format("M");
    const nowDay = date.date();

    const dayArr = new Array(); //일 객체가 들어가는 배열
    const startDayOfWeekNum = date.startOf("month").format("d"); //해당 월 1일의 요일 번호 일요일 부터 0~6
    //첫 요일에 맞춰서 전 달 일요일 부터 넣기
    //전 월
    for (let i = 0; i < startDayOfWeekNum; i++) {
        const preDate = moment().month(month-2);
        let dayObject = {
            className : "day other",
            month: preDate.format("M"),
            day: preDate.endOf("month").format("D")-(startDayOfWeekNum-i-1),
            week: preDate.date(i).format("dd"),
            today: false,
          };
          dayArr.push(dayObject);
    }
    //해당 월의 일자들 넣기
    for (let i = 1; i <= date.endOf("month").format("D"); i++) {
      let dayObject = {
        className : "day",
        month: month,
        day: i,
        week: date.date(i).format("dd"),
        today: i === nowDay ? true : false,
      };
      dayArr.push(dayObject);
    }

    //마지막 요일에 맞춰서 다음 달 토요일 까지 넣기
    //다음 달
    for (let i = 1; i <= date.endOf("month").format("d"); i++) {
        const nextDate = moment().month(month);
        let dayObject = {
            className : "day other",
            month: nextDate.format("M"),
            day: i,
            week: nextDate.date(i).format("dd"),
            today: false,
          };
          dayArr.push(dayObject);
    }
    return dayArr;
  };
  const calenderData = createCalender();
  console.log(calenderData);

  return (
    <div className="calender">
      <div className="calender-title">
        <div className="month">6월</div>
      </div>
      <div className="calender-content">
        <div className="week">
          <div>일</div>
        </div>
        <div className="week">
          <div>월</div>
        </div>
        <div className="week">
          <div>화</div>
        </div>
        <div className="week">
          <div>수</div>
        </div>
        <div className="week">
          <div>목</div>
        </div>
        <div className="week">
          <div>금</div>
        </div>
        <div className="week">
          <div>토</div>
        </div>
        {calenderData.map((dayObject) => (
          <div className={dayObject.className}>
            <div>{dayObject.day}</div>
            <div>내용</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calender;
