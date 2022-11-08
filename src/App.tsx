import React from 'react';
import usePersistState from "./hooks/usePersistState";
import {defaultValues, SettingsContext} from "./SettingsContext";
import ContextValue from "./ContextValue";
import Input from "./components/shared/Input";
import Label from "./components/shared/Label";
import {FlexedContainer} from "./components/shared/Container";
import styled from "styled-components";

const App = () => {
  const [state, setState] = usePersistState(defaultValues);
  const {name, volume, analytics} = state;

  return (
    <SettingsContext.Provider value={state}>
        <InputsContainer>
        <Heading>Controllers: </Heading>
        <FlexedContainer>
            <Label>Music name: </Label>
          <Input
              type="text"
              name='name'
              placeholder='Song name'
              onChange={(e) => setState({name: e.target.value})}
              value={name}
          />
        </FlexedContainer>
        <FlexedContainer>
            <Label>Volume: </Label>
            <Input
                type="range"
                name='volume'
                placeholder='volume'
                onChange={(e) => setState({volume: e.target.value})}
                min={0}
                max={100}
                value={+volume}
            />
        </FlexedContainer>
        <FlexedContainer>
            <Label>Analytics: </Label>
            <Input
                type="checkbox"
                name='analytics'
                placeholder='analytics'
                defaultChecked={analytics}
                onChange={(e) => setState({analytics: e.target.checked})}
            />
        </FlexedContainer>
        </InputsContainer>
        <ContextValue/>
    </SettingsContext.Provider>
  );
}

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #6a78de;
  padding: 20px;
  border-radius: 5px;
`;

const Heading = styled.h1`
  color: #fff;
`;

export default App;
