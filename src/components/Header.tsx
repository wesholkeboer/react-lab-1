import "./Header.css";

interface Props {
  user: string;
}

const Header = ({ user }: Props) => {
  return (
    <div className="Header">
      <header>
        <h1>Ice Cream Wars</h1>
        <p>{user}</p>
      </header>
    </div>
  );
};

export default Header;
