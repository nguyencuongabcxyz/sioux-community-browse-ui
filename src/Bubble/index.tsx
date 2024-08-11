import { BirthdayIcon } from "./BirthdayIcon";
import "./index.scss";
import { SponsorIcon } from "./SponsorIcon";
import { WorkAnniIcon } from "./WorkAnniIcon";

export interface BubbleProps {
  imageUrl: string;
  type?: "normal" | "birthday" | "workAnniversary" | "sponsor";
  workAnniversaryYears?: number;
  focused?: boolean;
}

const backgroundColorPerType: Record<
  "normal" | "birthday" | "workAnniversary" | "sponsor",
  string
> = {
  normal: "white",
  birthday: "#FB7474",
  workAnniversary: "#63CC61",
  sponsor: "#FBFE66",
};

export const Bubble = ({
  imageUrl,
  type = "normal",
  workAnniversaryYears,
  focused = false,
}: BubbleProps) => {
  const renderOverlayPerType = () => {
    switch (type) {
      case "birthday":
        return (
          <div className="sioux-cb-ui-birthday">
            <BirthdayIcon />
          </div>
        );
      case "workAnniversary":
        return (
          <div className="sioux-cb-ui-workAnniversaryYears">
            <WorkAnniIcon />
            <div className="sioux-cb-ui-yearText">{workAnniversaryYears}</div>
          </div>
        );
      case "sponsor":
        return (
          <div className="sioux-cb-ui-sponsor">
            <SponsorIcon />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`sioux-cb-ui-bubble-outerContainer${
        focused ? " focused" : ""
      }`}
    >
      <div
        style={{ backgroundColor: backgroundColorPerType[type] }}
        className={"sioux-cb-ui-bubble-container"}
      >
        <img src={imageUrl} alt="placeholder" />
        {renderOverlayPerType()}
        <div
          className={`sioux-cb-ui-focusedBackground${
            focused ? " focused" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};
