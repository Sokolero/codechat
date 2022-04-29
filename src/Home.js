import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavLink to="/auth">Войти</NavLink>
    </div>
  );
}
