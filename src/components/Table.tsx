import classNames from "classnames";
import { t, Translations } from "translations";

type Header = {
  justify?: "start" | "end" | "center";
} & (
  | {
      translation?: never;
      label: string;
    }
  | {
      translation: Translations;
      label?: never;
    }
);

type TableProps = {
  headers: Header[];
  rows: JSX.Element[][];
};

export const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto w-full">
    <table className="table w-full">
      <thead>
        <tr>
          {headers.map(({ label, translation, justify }) => (
            <th
              key={label ?? translation}
              className={classNames({
                [`flex justify-${justify}`]: justify !== undefined,
              })}
            >
              {translation ? t(translation) : label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td
                key={header.label ?? header.translation}
                className={classNames({
                  [`flex justify-${header.justify}`]:
                    header.justify !== undefined,
                })}
              >
                {row[index]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
