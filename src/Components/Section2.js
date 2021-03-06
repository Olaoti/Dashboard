import React from "react";
import Avatar from "../Assets/Avatar.png";
const Section2 = () => {
  const graph = [
    "h-c16",
    "h-c12",
    "h-c17",
    "h-c23",
    "h-c20",
    "h-c21",
    "h-c17",
    "h-c5",
    "h-c27",
    "h-c29",
    "h-c23",
    "h-c42",
    "h-c36",
    "h-c49",
    "h-c55",
    "h-c44",
    "h-c31",
    "h-c17",
    "h-c22",
  ];
  const number = [
    "9",
    "",
    "11",
    "",
    "13",
    "",
    "15",
    "",
    "17",
    "",
    "19",
    "",
    "21",
    "",
    "23",
    "",
    "27",
    "",
    "29",
  ];
  const box3 = [
    {
      id: 1,
      bg: "one",
      color: "white",
      icon: "M12 22q-3.175 0-5.587-2.212Q4 17.575 4 13.8q0-2.5 1.988-5.437Q7.975 5.425 12 2q4.025 3.425 6.013 6.363Q20 11.3 20 13.8q0 3.775-2.413 5.988Q15.175 22 12 22Zm0-2q2.525 0 4.262-1.725Q18 16.55 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.75 1.737 4.475Q9.475 20 12 20Zm0-6.2Zm.275 5.2q.3-.025.513-.237.212-.213.212-.513 0-.35-.225-.562-.225-.213-.575-.188-1.025.075-2.175-.562-1.15-.638-1.45-2.313-.05-.275-.263-.45Q8.1 14 7.825 14q-.35 0-.575.262-.225.263-.15.613.425 2.275 2 3.25 1.575.975 3.175.875Z",
      word: "Water bill",
      state: "Unsuccessful",
      price: "-$280",
      filt: "today",
    },
    {
      id: 2,
      bg: "two",
      color: "white",
      icon: "M11 19h2v-1h1q.425 0 .713-.288Q15 17.425 15 17v-3q0-.425-.287-.713Q14.425 13 14 13h-3v-1h4v-2h-2V9h-2v1h-1q-.425 0-.712.287Q9 10.575 9 11v3q0 .425.288.712Q9.575 15 10 15h3v1H9v2h2Zm-5 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-14V4H6v16h12V8ZM6 4v4-4 16V4Z",
      word: "Income: Salary Oct",
      price: "+$1200",
      filt: "yesterday",
    },
    {
      id: 3,
      bg: "three",
      icon: "m6.35 15.35-2.1-2.15q1.475-1.475 3.463-2.337Q9.7 10 12 10t4.288.875q1.987.875 3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625-1.45.625-2.55 1.725ZM2.1 11.1 0 9q2.3-2.35 5.375-3.675Q8.45 4 12 4t6.625 1.325Q21.7 6.65 24 9l-2.1 2.1q-1.925-1.925-4.462-3.013Q14.9 7 12 7T6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063Q13.05 16 12 16q-1.05 0-1.95.387-.9.388-1.575 1.063Z",
      color: "white",
      word: "Electric Bill",
      state: "Succesful",
      price: "-$480",
    },
    {
      id: 4,
      bg: "four",
      icon: "M22 6v12q0 .825-.587 1.413Q20.825 20 20 20H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6ZM4 8h16V6H4Zm0 4v6h16v-6Zm0 6V6v12Z",
      color: "white",
      word: "Income: James transfers",
      price: "$500",
    },
    {
      id: 5,
      bg: "five",
      color: "white",
      icon: "M10 23v-9H7V2h10l-4 9h4Z",
      word: "Internet Bill",
      state: "Succesful",
      price: "-$100",
    },
  ];
  return (
    <div className="section2">
      <div className="top">
        <div className="left">
          <img src={Avatar} alt="" />
        </div>
        <div className="right">
          <div className="name fw500">AR Shakir</div>
          <div className="date fw400">Joined 6 months ago</div>
        </div>
      </div>
      <div className="box1">
        <div className="flex">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9 21V18H8Q7.175 18 6.588 17.413Q6 16.825 6 16V14H5Q4.4 14 4.138 13.5Q3.875 13 4.15 12.5L6.125 9Q6.325 6.5 8.325 4.75Q10.325 3 13 3Q15.9 3 17.95 5.05Q20 7.1 20 10Q20 12.125 18.888 13.8Q17.775 15.475 16 16.35V21ZM11 19H14V15.05L14.9 14.65Q16.25 14.05 17.125 12.812Q18 11.575 18 10Q18 7.925 16.538 6.463Q15.075 5 13 5Q11 5 9.562 6.338Q8.125 7.675 8 9.775L6.725 12H8V16H11ZM12 14H14L14.15 12.75Q14.35 12.675 14.5 12.587Q14.65 12.5 14.8 12.35L15.95 12.85L16.95 11.15L15.95 10.4Q16 10.2 16 10Q16 9.8 15.95 9.6L16.95 8.85L15.95 7.15L14.8 7.65Q14.65 7.5 14.5 7.412Q14.35 7.325 14.15 7.25L14 6H12L11.85 7.25Q11.65 7.325 11.5 7.412Q11.35 7.5 11.2 7.65L10.05 7.15L9.05 8.85L10.05 9.6Q10 9.8 10 10Q10 10.2 10.05 10.4L9.05 11.15L10.05 12.85L11.2 12.35Q11.35 12.5 11.5 12.587Q11.65 12.675 11.85 12.75ZM13 11.5Q12.35 11.5 11.925 11.075Q11.5 10.65 11.5 10Q11.5 9.35 11.925 8.925Q12.35 8.5 13 8.5Q13.65 8.5 14.075 8.925Q14.5 9.35 14.5 10Q14.5 10.65 14.075 11.075Q13.65 11.5 13 11.5ZM12.375 12Q12.375 12 12.375 12Q12.375 12 12.375 12Q12.375 12 12.375 12Q12.375 12 12.375 12Q12.375 12 12.375 12Q12.375 12 12.375 12Z" />
            </svg>
          </div>
          <div>Goals</div>
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4ZM4 19H20Q20 19 20 19Q20 19 20 19V8Q20 8 20 8Q20 8 20 8H4Q4 8 4 8Q4 8 4 8V19Q4 19 4 19Q4 19 4 19ZM4 19Q4 19 4 19Q4 19 4 19V8Q4 8 4 8Q4 8 4 8Q4 8 4 8Q4 8 4 8V19Q4 19 4 19Q4 19 4 19Z" />
            </svg>
          </div>
          <div>Monthly plan</div>
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M9.25 22 8.85 18.8Q8.525 18.675 8.238 18.5Q7.95 18.325 7.675 18.125L4.7 19.375L1.95 14.625L4.525 12.675Q4.5 12.5 4.5 12.337Q4.5 12.175 4.5 12Q4.5 11.825 4.5 11.662Q4.5 11.5 4.525 11.325L1.95 9.375L4.7 4.625L7.675 5.875Q7.95 5.675 8.25 5.5Q8.55 5.325 8.85 5.2L9.25 2H14.75L15.15 5.2Q15.475 5.325 15.763 5.5Q16.05 5.675 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325Q19.5 11.5 19.5 11.662Q19.5 11.825 19.5 12Q19.5 12.175 19.5 12.337Q19.5 12.5 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125Q16.05 18.325 15.75 18.5Q15.45 18.675 15.15 18.8L14.75 22ZM12.05 15.5Q13.5 15.5 14.525 14.475Q15.55 13.45 15.55 12Q15.55 10.55 14.525 9.525Q13.5 8.5 12.05 8.5Q10.575 8.5 9.562 9.525Q8.55 10.55 8.55 12Q8.55 13.45 9.562 14.475Q10.575 15.5 12.05 15.5ZM12.05 13.5Q11.425 13.5 10.988 13.062Q10.55 12.625 10.55 12Q10.55 11.375 10.988 10.938Q11.425 10.5 12.05 10.5Q12.675 10.5 13.113 10.938Q13.55 11.375 13.55 12Q13.55 12.625 13.113 13.062Q12.675 13.5 12.05 13.5ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM11 20H12.975L13.325 17.35Q14.1 17.15 14.763 16.762Q15.425 16.375 15.975 15.825L18.45 16.85L19.425 15.15L17.275 13.525Q17.4 13.175 17.45 12.787Q17.5 12.4 17.5 12Q17.5 11.6 17.45 11.212Q17.4 10.825 17.275 10.475L19.425 8.85L18.45 7.15L15.975 8.2Q15.425 7.625 14.763 7.237Q14.1 6.85 13.325 6.65L13 4H11.025L10.675 6.65Q9.9 6.85 9.238 7.237Q8.575 7.625 8.025 8.175L5.55 7.15L4.575 8.85L6.725 10.45Q6.6 10.825 6.55 11.2Q6.5 11.575 6.5 12Q6.5 12.4 6.55 12.775Q6.6 13.15 6.725 13.525L4.575 15.15L5.55 16.85L8.025 15.8Q8.575 16.375 9.238 16.762Q9.9 17.15 10.675 17.35Z" />
            </svg>
          </div>
          <div>Settings</div>
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="box2">
        <div className="topFlex">
          <div>Activity Graph</div>
          <div className="price">$186k</div>
        </div>
        <div className="period">Between Sep 9 ~ 27</div>
        <div className="graphit">
          <div className="left">
            <div>15k</div>
            <div>10k</div>
            <div>5k</div>
            <div>0</div>
          </div>
          <div className="right">
            <div className="graphbox">
              <div className="graph">
                {graph.map((grapho, index) => (
                  <div className={grapho} key={index}></div>
                ))}
              </div>
              <div className="number">
                {number.map((num, index) => (
                  <div className="num" key={index}>
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box3">
        <div className="flex2">
          {box3.map((box) => (
            <div className="flex" key={box.id}>
              <div>
                <div className="head">{box.filt}</div>
              </div>
              <div className="innerFlex">
                <div className={box.bg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    fill={box.color}
                  >
                    <path d={box.icon} />
                  </svg>
                </div>
                <div className="mid">
                  <div>{box.word}</div>
                  <div>{box.state}</div>
                </div>
                <div className={box.state ? "red" : "blue"}>{box.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
