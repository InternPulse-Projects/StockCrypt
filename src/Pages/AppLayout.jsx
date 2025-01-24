import Main from "../Components/Main";
import Body from "../Components/Body";
import Sidebar from "../Components/SideBarSection/Sidebar";

function AppLayout() {
  return (
    <Body>
      <Sidebar />
      <Main />
    </Body>
  );
}

export default AppLayout;
