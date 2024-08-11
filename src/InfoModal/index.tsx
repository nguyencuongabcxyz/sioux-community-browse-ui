import { Modal } from "antd";
import { CrossIcon } from "../Menu/CrossIcon";
import "./index.scss";

export interface InfoModalProps {
  userInfo: UserInfo;
  open: boolean;
  onClose: () => void;
}

export interface UserInfo {
  imageUrl: string;
  name: string;
  role: string;
  dateOfBirth: string;
  nationality: string;
  birthplace: string;
  projects: string[];
  email: string;
  phoneNumber: string;
  clubs: string[];
  introduction: string;
}

export const InfoModal = ({
  open,
  onClose,
  userInfo: {
    name,
    imageUrl,
    role,
    dateOfBirth,
    nationality,
    birthplace,
    projects,
    email,
    phoneNumber,
    clubs,
    introduction,
  },
}: InfoModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        closeIcon={<CrossIcon />}
      >
        <div className="sioux-cb-ui-modalContentInner">
          <div className="sioux-cb-ui-avatarContainer">
            <img src={imageUrl} alt="avatar" />
          </div>
          <h1 className="sioux-cb-ui-nameText">{name}</h1>
          <div className="sioux-cb-ui-infoContainer">
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Role</p>
              <p className="sioux-cb-ui-infoText">{role}</p>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Date of birth</p>
              <p className="sioux-cb-ui-infoText">{dateOfBirth}</p>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Nationality</p>
              <p className="sioux-cb-ui-infoText">{nationality}</p>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Birthplace</p>
              <p className="sioux-cb-ui-infoText">{birthplace}</p>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Projects</p>
              <div className="sioux-cb-ui-infoArray">{projects}</div>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Email</p>
              <div className="sioux-cb-ui-infoText">{email}</div>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Phone number</p>
              <div className="sioux-cb-ui-infoText">{phoneNumber}</div>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Clubs</p>
              <div className="sioux-cb-ui-infoArray">{clubs}</div>
            </div>
            <div className="sioux-cb-ui-infoItem">
              <p className="sioux-cb-ui-infoLabel">Introduction</p>
              <div className="sioux-cb-ui-infoText">{introduction}</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
