import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Menu, MenuOption } from "./Menu";
import "./test.scss";
import { Bubble } from "./Bubble";
import { InfoModal } from "./InfoModal";
import { UserInfo } from "./InfoModal";

const options: MenuOption[] = [
  { key: "nationality", name: "Nationality" },
  { key: "role", name: "Role" },
  { key: "birthplace", name: "Birthplace" },
  { key: "yearOfBirth", name: "Year of birth" },
  { key: "monthOfBirth", name: "Month of birth" },
  { key: "project", name: "Project" },
  { key: "club", name: "Club" },
  { key: "gender", name: "Gender" },
  { key: "joiningYear", name: "Joining year" },
];

const Test = () => {
  const [selectedOption, setSelectedOption] = useState<MenuOption | null>(null);

  return (
    <div>
      <Menu
        number={options.length}
        options={options}
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
      />
    </div>
  );
};

const BubbleTest = () => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="bubblesContainerTest">
      <button onClick={() => setFocused(!focused)}>Focus</button>
      <Bubble workAnniversaryYears={20} focused={focused} imageUrl={""} />
      <Bubble
        workAnniversaryYears={20}
        focused={focused}
        imageUrl="https://www.shutterstock.com/image-vector/internship-rubber-grunge-stamp-seal-260nw-2435966171.jpg"
      />
      <Bubble
        type="workAnniversary"
        workAnniversaryYears={3}
        focused={focused}
        imageUrl="https://play-lh.googleusercontent.com/vQfWclzVWBS9KSyvUIuHlAbngsHh5avAHMH45vkTz5_0WNstm0UzFuTRnw40mrm6-bAI=w600-h300-pc0xffffff-pd"
      />
      <Bubble
        type="birthday"
        focused={focused}
        imageUrl="https://media.licdn.com/dms/image/v2/C560BAQGngyTu4N2xAQ/company-logo_200_200/company-logo_200_200/0/1631424867397/nearfield_instruments_bv_logo?e=2147483647&v=beta&t=gBypdjPqtUh1bmQ7xZOqd3EUp8jtGubHZ2aNZQfZxGg"
      />
      <Bubble
        type="sponsor"
        focused={focused}
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/20/SUSS_logo.jpg"
      />
    </div>
  );
};

const userInfo: UserInfo = {
  imageUrl:
    "https://www.elle.vn/wp-content/uploads/2022/01/13/464763/ngang-jisoo-blackpink-mocah.jpg",
  name: "Kim Chi Chu",
  role: "Senior Software Engineer",
  dateOfBirth: "1995-01-03",
  nationality: "Vietnamese",
  birthplace: "Quang Nam",
  projects: ["ASML", "Philips", "Sioux"],
  email: "cuong.nguyen@sioux.eu",
  phoneNumber: "0969087853",
  clubs: ["Football", "Badminton", "Swimming", "Gym"],
  introduction: "Muốn đi nhanh thì đi một mình, muốn đi chậm thì đi cùng nhau.",
};

const ModalTest = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <InfoModal
        userInfo={userInfo}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default ModalTest;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      <div className="menuContainerMain">
        <Test />
      </div>
      <div className="bubblesContainer">
        <BubbleTest />
      </div>
      <div className="modalContainerTest">
        <ModalTest />
      </div>
    </div>
  </StrictMode>
);
