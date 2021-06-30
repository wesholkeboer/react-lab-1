import "./Ad.css";

interface Props {
  flavor: string;
  fontSize: number;
  darkMode: boolean;
}

const Ad = ({ flavor, fontSize, darkMode }: Props) => {
  return (
    <div className="Ad">
      <div className={"ad " + (darkMode ? "dark" : "light")}>
        <p>Vote For</p>
        <p className="flavor" style={{ fontSize: `${fontSize}px` }}>
          {flavor}
        </p>
      </div>
    </div>
  );
};

export default Ad;
