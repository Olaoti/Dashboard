import React from "react";

const Section3 = () => {
  const activity = [
    {
      id: 1,
      icon: "m7 21-5-5 5-5 1.425 1.4-2.6 2.6H21v2H5.825l2.6 2.6Zm10-8-1.425-1.4 2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5Z",
      head: "Amazon Support",
      date: "13 Sep, 2020 at 3:30 PM",
      color: "red",
      Info: "Supplies",
      price: "-$10,00",
      filter: "13 Sep 2020",
    },
    {
      id: 2,
      icon: "M5 17v-7h2v7Zm6 0v-7h2v7Zm-9 4v-2h20v2Zm15-4v-7h2v7ZM2 8V6l10-5 10 5v2Zm4.45-2h11.1Zm0 0h11.1L12 3.25Z",
      head: "Roland GmbH",
      date: "10 Sep, 2020 at 3:30 PM",
      color: "purple",
      Info: "Marketing",
      price: "+$40,500",
      filter: "10 Sep 2020",
    },
    {
      id: 3,
      icon: "m7 21-5-5 5-5 1.425 1.4-2.6 2.6H21v2H5.825l2.6 2.6Zm10-8-1.425-1.4 2.6-2.6H3V7h15.175l-2.6-2.6L17 3l5 5Z",
      head: "Bank Of America",
      date: "10 Sep, 2020 at 3:30 PM",
      color: "pink",
      Info: "Office supplies",
      price: "-$10,000",
    },
    {
      id: 4,
      icon: "M5 17v-7h2v7Zm6 0v-7h2v7Zm-9 4v-2h20v2Zm15-4v-7h2v7ZM2 8V6l10-5 10 5v2Zm4.45-2h11.1Zm0 0h11.1L12 3.25Z",
      head: "Cash withdrawal",
      date: "10 Sep, 2020 at 3:30 PM",
      color: "green",
      Info: "General banking",
      price: "-$2,000",
    },
  ];
  return (
    <div className="section3">
      <div>
        <div className="up">Welcome back Shakir</div>
        <div className="topFlex">
          <div className="innerFlex">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M3 21V7h4V3h10v8h4v10h-8v-4h-2v4Zm2-2h2v-2H5Zm0-4h2v-2H5Zm0-4h2V9H5Zm4 4h2v-2H9Zm0-4h2V9H9Zm0-4h2V5H9Zm4 8h2v-2h-2Zm0-4h2V9h-2Zm0-4h2V5h-2Zm4 12h2v-2h-2Zm0-4h2v-2h-2Z" />
              </svg>
            </div>
            <div className="word"> Home Loan</div>
          </div>
          <div className="innerFlex">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M6 19v1q0 .425-.287.712Q5.425 21 5 21H4q-.425 0-.712-.288Q3 20.425 3 20v-8l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5H9V3h6v2h2.5q.475 0 .863.275.387.275.537.725l2.1 6v8q0 .425-.288.712Q20.425 21 20 21h-1q-.425 0-.712-.288Q18 20.425 18 20v-1Zm-.2-9h12.4l-1.05-3H6.85ZM5 12v5Zm2.5 4q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16ZM5 17h14v-5H5Z" />
              </svg>
            </div>
            <div className="word"> Car Loan</div>
          </div>
          <div className="innerFlex">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m9.25 22-.4-3.2q-.325-.125-.612-.3-.288-.175-.563-.375L4.7 19.375l-2.75-4.75 2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75 2.975 1.25q.275-.2.575-.375.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3.287.175.562.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95-2.75 4.75-2.95-1.25q-.275.2-.575.375-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588.662-.387 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.125-.35.175-.738.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625-.975-1.7-2.475 1.05q-.55-.575-1.212-.963-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587-.663.388-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6q-.125.375-.175.75-.05.375-.05.8 0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.388 1.437.588Z" />
              </svg>
            </div>
            <div className="word"> Maintainance</div>
          </div>
          <div className="innerFlex">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V2h4v2h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm3-2 4-7.5h-2V7l-4 7.5h2Z" />
              </svg>
            </div>
            <div className="word"> Boosters</div>
          </div>
        </div>
        <div className="buttFlex">
          <div className="each">
            <div className="left one">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M12 23q-2.8 0-5.15-1.275Q4.5 20.45 3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9Q9.65 21 12 21q1.875 0 3.513-.712 1.637-.713 2.85-1.926 1.212-1.212 1.925-2.85Q21 13.875 21 12h2q0 2.275-.862 4.275-.863 2-2.363 3.5t-3.5 2.362Q14.275 23 12 23Zm-.9-4v-1.3q-1.175-.275-1.912-1.012Q8.45 15.95 8.1 14.75l1.65-.65q.3 1.025.938 1.537.637.513 1.462.513t1.412-.388q.588-.387.588-1.212 0-.725-.612-1.175-.613-.45-2.188-1.025-1.475-.525-2.162-1.25-.688-.725-.688-1.9 0-1.025.713-1.863.712-.837 1.937-1.087V5h1.75v1.25q.9.075 1.638.725.737.65 1.012 1.525l-1.6.65q-.2-.575-.65-.962-.45-.388-1.25-.388-.875 0-1.337.375-.463.375-.463 1.025 0 .65.575 1.025.575.375 2.075.875 1.8.65 2.4 1.525.6.875.6 1.925 0 .725-.25 1.275-.25.55-.662.937-.413.388-.963.625-.55.238-1.175.363V19ZM1 12q0-2.275.863-4.275.862-2 2.362-3.5t3.5-2.363Q9.725 1 12 1q2.8 0 5.15 1.275Q19.5 3.55 21 5.675V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9Q14.35 3 12 3q-1.875 0-3.512.712-1.638.713-2.85 1.925-1.213 1.213-1.926 2.85Q3 10.125 3 12Z" />
              </svg>
            </div>
            <div className="right">
              <div>Harvested Losses</div>
              <div>$0.00</div>
            </div>
          </div>
          <div className="each">
            <div className="left two">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M6.5 14.975v-1H4v-2h5v-2H5q-.425 0-.713-.287Q4 9.4 4 8.975v-4q0-.425.287-.713.288-.287.713-.287h1.5v-1h2v1H11v2H6v2h4q.425 0 .713.287.287.288.287.713v4q0 .425-.287.713-.288.287-.713.287H8.5v1Zm7.45 6-4.25-4.25 1.4-1.4 2.85 2.85 5.65-5.65 1.4 1.4Z" />
              </svg>
            </div>
            <div className="right">
              <div>Total earnings</div>
              <div>$10,596.80</div>
            </div>
          </div>
          <div className="each">
            <div className="left three">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M5 20v-6h3v6Zm6 0V9h3v11Zm6 0V4h3v16Z" />
              </svg>
            </div>
            <div className="right">
              <div>Total net worth</div>
              <div>$5,250.90</div>
            </div>
          </div>
          <div className="each">
            <div className="left four">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M7 2h10v7.85q0 .575-.25 1.025-.25.45-.7.725l-3.55 2.1.7 2.3H17l-3.1 2.2 1.2 3.8-3.1-2.35L8.9 22l1.2-3.8L7 16h3.8l.7-2.3-3.55-2.1q-.45-.275-.7-.725Q7 10.425 7 9.85Zm2 2v5.85l2 1.2V4Zm6 0h-2v7.05l2-1.2Zm-3 3.825Zm-1-.3Zm2 0Z" />
              </svg>
            </div>
            <div className="right">
              <div>Total for all goals</div>
              <div>$5,596.80</div>
            </div>
          </div>
        </div>
      </div>
      <div className="activity">
        <div className="head">Recent Activity </div>
        <div className="flex">
          <div className="grp">History</div>
          <div className="upc">Upcoming</div>
          <div className="date">6sep - 30sep </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m9.25 22-.4-3.2q-.325-.125-.612-.3-.288-.175-.563-.375L4.7 19.375l-2.75-4.75 2.575-1.95Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L1.95 9.375l2.75-4.75 2.975 1.25q.275-.2.575-.375.3-.175.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3.287.175.562.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.175.025.337v.675q0 .163-.05.338l2.575 1.95-2.75 4.75-2.95-1.25q-.275.2-.575.375-.3.175-.6.3l-.4 3.2Zm2.8-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588.662-.387 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.125-.35.175-.738.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625-.975-1.7-2.475 1.05q-.55-.575-1.212-.963-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587-.663.388-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6q-.125.375-.175.75-.05.375-.05.8 0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.388 1.437.588Z" />
            </svg>
          </div>
          <div className="plus">+</div>
        </div>
        <div className="today"></div>
      </div>
      <div className="bottom">
        {activity.map((act) => (
          <div key={act.id} className="act">
            <div className="filter">{act.filter}</div>
            <div className="actFlex">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="#313131"
                >
                  <path d={act.icon} />
                </svg>
              </div>
              <div className="mid">
                <div className="actHead">{act.head}</div>
                <div className="actDate">{act.date}</div>
              </div>
              <div className="infos">
                <div className="circ">
                  <div className={act.color}></div>
                </div>
                <div className="actinfo">{act.Info}</div>
              </div>
              <div className="svg">
                <svg
                  width="8"
                  height="15"
                  viewBox="0 0 8 15"
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6082 4.66173V10.4175C7.6082 10.6829 7.39396 10.8971 7.12856 10.8971C6.86316 10.8971 6.64892 10.6829 6.64892 10.4175V4.66173C6.64892 3.16204 5.43062 1.94374 3.93093 1.94374C2.43125 1.94374 1.21295 3.16204 1.21295 4.66173V12.0163C1.21295 12.9852 2.00276 13.775 2.97165 13.775C3.94053 13.775 4.73034 12.9852 4.73034 12.0163V5.14137C4.73034 4.7001 4.37221 4.34196 3.93093 4.34196C3.48966 4.34196 3.13153 4.7001 3.13153 5.14137V11.3767C3.13153 11.6421 2.91729 11.8564 2.65188 11.8564C2.38648 11.8564 2.17224 11.6421 2.17224 11.3767V5.14137C2.17224 4.17249 2.96205 3.38268 3.93093 3.38268C4.89981 3.38268 5.68963 4.17249 5.68963 5.14137V12.0163C5.68963 13.516 4.47133 14.7343 2.97165 14.7343C1.47196 14.7343 0.253662 13.516 0.253662 12.0163V4.66173C0.253662 2.63443 1.90364 0.984455 3.93093 0.984455C5.95823 0.984455 7.6082 2.63443 7.6082 4.66173Z"
                    fill="#A1A4AC"
                  />
                </svg>
              </div>
              <div className="actprice">{act.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
