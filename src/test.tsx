import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Menu, MenuOption } from "./Menu";
import "./test.scss";
import { Bubble } from "./Bubble";
import { InfoModal } from "./InfoModal";
import { UserInfo } from "./InfoModal";

const options: MenuOption[] = [
  { name: "Nationality" },
  { name: "Role" },
  { name: "Birthplace" },
  { name: "Year of birth" },
  { name: "Month of birth" },
  { name: "Project" },
  { name: "Club" },
  { name: "Gender" },
  { name: "Joining year" },
];

const Test = () => {
  const [selectedOption, setSelectedOption] = useState<MenuOption | null>(null);

  return (
    <div>
      <Menu
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
      <Bubble
        workAnniversaryYears={20}
        focused={focused}
        imageUrl="https://images2.thanhnien.vn/528068263637045248/2024/3/12/js1-17102650444101039490703.jpeg"
      />
      <Bubble
        type="workAnniversary"
        workAnniversaryYears={3}
        focused={focused}
        imageUrl="https://www.elle.vn/wp-content/uploads/2022/01/13/464763/ngang-jisoo-blackpink-mocah.jpg"
      />
      <Bubble
        type="birthday"
        focused={focused}
        imageUrl="https://kenh14cdn.com/203336854389633024/2024/7/16/photo-1-17210918125271867201285.jpeg"
      />
      <Bubble
        type="sponsor"
        focused={focused}
        imageUrl="https://vcdn1-giaitri.vnecdn.net/2024/06/26/Jisoo-tuan-thoi-trang-paris_1719370335.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=8EnRTalkmI8fn0vNIL6U5g"
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
  projects: ["ASML"],
  email: "cuong.nguyen@sioux.eu",
  phoneNumber: "0969087853",
  clubs: ["Football", "Badminton"],
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
