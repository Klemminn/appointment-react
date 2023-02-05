import classNames from "classnames";

type Header = {
  justify?: "start" | "end" | "center";
  label: string;
};

type TableProps = {
  headers: Header[];
  rows: JSX.Element[][];
};

export const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto w-full">
    <table className="table w-full">
      <thead>
        <tr>
          {headers.map(({ label, justify }) => (
            <th
              key={label}
              className={classNames({
                [`flex justify-${justify}`]: justify !== undefined,
              })}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {headers.map((header, index) => (
              <td
                key={header.label}
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
