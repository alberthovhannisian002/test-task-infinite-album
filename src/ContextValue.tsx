import useSettingsContext from "./hooks/useSettingsContext";
import Text from "./components/shared/Text";
import styled from "styled-components";

const ContextValue = () => {
    const {volume, name, analytics} = useSettingsContext();

    return (
        <ValuesContainer>
            <Heading>Values from context: </Heading>
            <Text>Name: {name}</Text>
            <Text>Volume: {volume}</Text>
            <Text>Analytics: {analytics?.toString()}</Text>
        </ValuesContainer>
    )
}

const Heading = styled.h1`
  color: #fff;
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  background-color: #6a78de;
  border-radius: 5px;
  margin-top: 10px;
  padding: 20px;
`;

export default ContextValue;