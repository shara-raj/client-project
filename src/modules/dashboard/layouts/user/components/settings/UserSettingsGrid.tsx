import UserHeader from "../UserHeader";
import ProfileSettingsBlock from "./ProfileSettingsBlock";
import EmailSettingsBlock from "./EmailSettingsBlock";
import PasswordSettingsBlock from "./PasswordSettingsBlock";
import DeleteAccountBlock from "./DeleteAccountBlock";

function UserSettingsGrid() {
  return (
    <div className="space-y-10">
      <UserHeader />
      <ProfileSettingsBlock />
      <EmailSettingsBlock />
      <PasswordSettingsBlock />
      <DeleteAccountBlock />
    </div>
  );
}

export default UserSettingsGrid;
