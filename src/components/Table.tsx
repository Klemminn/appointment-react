import { t } from "translations";
import { PencilIcon } from "@heroicons/react/solid";
import * as Panels from "./Panels";

const Table: React.FC = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>{t("users.name")}</th>
            <th>{t("users.role")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Panels.AvatarTitlePanel
                avatarSrc="https://www.signaturestyle.com/content/dam/magicuts/models/3x4/signature-style-model-angel-5038-3x4.png"
                label="Jói Klipp"
                sublabel="Eigandi og stórfiskur"
              />
            </td>
            <td>Stjórnandi</td>
            <th>
              <button className="btn btn-ghost btn-xs">
                <PencilIcon className="h-5 w-5" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
