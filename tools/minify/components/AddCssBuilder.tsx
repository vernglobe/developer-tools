import React, { useEffect, useRef, useState } from 'react'
import Logger from '@vernglobe/logger'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { Textarea } from './TextArea';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { unminify } from '../lib/css-minify';
import { VernTButton } from './VernTButton';

const logger = new Logger("JsonTreeBuilder");

export const AddCssBuilder = (json: any) => {
  const [cssInput, setCssInput] = useLocalStorage("css-beautifier-input", "");   
  const [cssOutput, setCssOutput] = useState("")   
  const [error, setError] = useState("")

  const validateMinify = (jsonContent: any) => {
    let cssUnminify = cssInput;
    if (typeof jsonContent === 'string') {
      cssUnminify = jsonContent;
    }
    try {
      if (cssUnminify === "") {
        setError("Cannot format empty content. Please enter content...")
        return null;
      }
      cssUnminify = unminify(cssUnminify, "4");
      setError("")
    } catch (err) {
      setCssOutput("");
      setError("Css is not valid!");
      return  null;
    }
    return cssUnminify;
  }
  // Beautify the json
  const convertToCssPrettyFormat = (cssContent: any) => {
    let finalInput = cssInput;

    if (typeof cssContent === 'string') {
      finalInput = cssContent
    }

    const cssMinify = validateMinify(finalInput);
    if (cssMinify === null) {
      return null;
    }
  
    setCssOutput(cssMinify)
  }
  

  // Minify the json
  const convertToString = () => {
    const cssMinify = validateMinify(cssInput);
    if (cssMinify === null) {
      return null;
    }
    let minify = cssMinify.replace(/\s/g, ' ');
    minify =  minify.replace(/  +/g, ' ');
    setCssOutput(minify)
  }
  
  return (
    <Row className='pt-2'>
      <Col>
        <Textarea
          name="txtCssInput"
          value={cssInput}
          onValueChange={(jsonInput: string) => setCssInput(jsonInput)}
          numOfLines={50}
          placeholder="Enter content..."
          onPaste={convertToCssPrettyFormat}
        />
      </Col>
      <Col className='text-center' xs={2}>
        <Row>
          <VernTButton onClick={convertToCssPrettyFormat}>CSS Beautify/format</VernTButton>
        </Row><br/>
        <Row>
          <VernTButton onClick={convertToString}>CSS Minify/compress</VernTButton>
        </Row>
      </Col>
      <Col>
      { error !== "" && <Container><Alert variant='danger' style={{zIndex:"1",position:"absolute",width:"38%", height:"75vh"}}><Alert.Heading>You got an error!</Alert.Heading><p>{error}</p></Alert></Container>}
      { error === "" && <Textarea
          name="txtPrettyOutput"
          value={cssOutput}
          onValueChange={(jsonOutput: string) => setCssOutput(jsonOutput)}
          numOfLines={50}
        />
      }
      </Col>
    </Row>
  )
}
