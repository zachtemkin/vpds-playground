import styled from "styled-components";
import ComponentList from "./components/ComponentList";

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <ComponentList />
    </AppContainer>
  );
}

export default App;
