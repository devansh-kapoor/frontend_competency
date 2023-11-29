import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiAngularSimple,
  DiIonic,
  DiBootstrap,
  DiOpensource,
  DiMysql,
  DiNginx,
  DiNpm
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiAzurefunctions,
  SiSvelte,
  SiCypress,
  SiJasmine,
  SiJest,
  SiMaterialdesign,
  SiNestjs,
  SiSonar,
  SiWebcomponentsdotorg
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSvelte />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIonic />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurefunctions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiOpensource />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJasmine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebcomponentsdotorg />
      </Col>
    </Row>
  );
}

export default Techstack;
