import { NavLink } from "react-router-dom";



import { StyledContainer } from "./style";

const Navbar = ({ children }) => {
  debugger;

  return (
    <StyledContainer>
      <>
        <div className="deskNav ">
          <ul>
            <li>
              <NavLink to="/">
                
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    </StyledContainer>
  );
};

export default Navbar;
