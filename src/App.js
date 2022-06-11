import './App.css';
import Router from "./routers";
import styled from "styled-components";
<link rel='stylesheet' href='//cdn.jsdelivr.net/npm/font-kopub@1.0/kopubdotum.min.css'></link>

function App() {
  return (
    <Font>
    <Router/>
    </Font>
  );
}

export default App;

const Font = styled.div`
font-family: 'KoPub Dotum';
font-weight: 500;
`;