# Installation

```
npm install sioux-community-browse-ui-v1

```

# Usage

You need to integrate the css file of this library to your project before using any components. Import the style file into your root component. For example in NextJS:

```js
/// Other imports
// sioux-community-browse-ui-v1 style import
import "sioux-community-browse-ui-v1/dist/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

## Menu component

```js
import { Menu, MenuOption } from "sioux-community-browse-ui-v1";

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

```

## Bubble component

```js
import { Bubble } from "sioux-community-browse-ui-v1";

const Test = () => {
  return (
    <div>
      <Bubble
        type="workAnniversary"
        workAnniversaryYears={10}
        focused={focused}
        imageUrl="https://kenh14cdn.com/203336854389633024/2024/7/16/photo-1-17210918125271867201285.jpeg"
      />
    </div>
  );
};

```

## InfoModal component

```js
import { InfoModal, UserInfo } from "sioux-community-browse-ui-v1";

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

const Test = () => {
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

```
