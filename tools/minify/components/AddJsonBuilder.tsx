import React, { useEffect, useRef, useState } from 'react'
import Logger from '@vernglobe/logger'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { Textarea } from './TextArea';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { relative } from 'path';
import { VernTButton } from './VernTButton';

const logger = new Logger("JsonTreeBuilder");

export const AddJsonBuilder = (json: any) => {
  const [jsonInput, setJsonInput] = useLocalStorage("json-beautifier-input", "");   
  const [jsonOutput, setJsonOutput] = useState("")   
  const [error, setError] = useState("")

  const validateJson = (jsonContent: any) => {
    let jsonParse = jsonInput;
    if (typeof jsonContent === 'string') {
      jsonParse = jsonContent;
    }
    try {
      if (jsonParse === "") {
        setError("Cannot format empty content. Please enter content...")
        return null;
      }
      if (typeof jsonParse !== 'object') {
        jsonParse = JSON.parse(jsonParse);
      }
      setError("")
    } catch (err) {
      setJsonOutput("");
      setError("Json is not valid!");
      return  null;
    }
    return jsonParse;
  }
  // Beautify the json
  const convertToJsonPrettyFormat = (jsonContent: any) => {
    let finalInput = jsonInput;

    if (typeof jsonContent === 'string') {
      finalInput = jsonContent
    }

    const jsonParse = validateJson(finalInput);
    if (jsonParse === null) {
      return null;
    }
  
    setJsonOutput(JSON.stringify(JSON.parse(finalInput), undefined, 4))
  }

  // Minify the json
  const convertToString = () => {
    const jsonParse = validateJson(jsonInput);
    if (jsonParse === null) {
      return null;
    }
    setJsonOutput(JSON.stringify(JSON.parse(jsonInput)))
  }
  
  return (
    <Row className='pt-2'>
      <Col>
        <Textarea
          name="txtJsonPrettyInput"
          value={jsonInput}
          onValueChange={(jsonInput: string) => setJsonInput(jsonInput)}
          numOfLines={50}
          placeholder="Enter content..."
          onPaste={convertToJsonPrettyFormat}
        />
      </Col>
      <Col className='text-center' xs={2}>
        <Row>
          <VernTButton onClick={validateJson}>Validate JSON</VernTButton>
        </Row><br/>
        <Row>
          <VernTButton onClick={convertToJsonPrettyFormat}>JSON Beautify/format</VernTButton>
        </Row><br/>
        <Row>
          <VernTButton onClick={convertToString}>JSON Minify/compress</VernTButton>
        </Row>
      </Col>
      <Col>
      { error !== "" && <Container><Alert variant='danger' style={{zIndex:"1",position:"absolute",width:"38%", height:"75vh"}}><Alert.Heading>You got an error!</Alert.Heading><p>{error}</p></Alert></Container>}
      { error === "" && <Textarea
          name="txtJsonPrettyOutput"
          value={jsonOutput}
          onValueChange={(jsonOutput: string) => setJsonOutput(jsonOutput)}
          numOfLines={50}
        />
      }
      </Col>
    </Row>
  )
}
