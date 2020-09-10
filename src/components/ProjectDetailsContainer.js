import React, { useContext, useState, createRef } from "react";
import { LangContext } from "../containers/Lang";
import styled from "styled-components/macro";
import texts from "../content/texts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Div = styled.div``;

const ButtonMoreLess = styled.button`
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1rem;
  margin: auto;

  p,
  svg {
    padding: 0.25rem;
  }
`;

const ProjectDetails = ({ className, details, simpleBarRef }) => {
  const [lang] = useContext(LangContext);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const buttonRef = createRef();

  return (
    <Div className={className}>
      <div className="details-wrapper">{detailsOpen && details}</div>

      <ButtonMoreLess
        ref={buttonRef}
        onClick={() => {
          setDetailsOpen(!detailsOpen);
          const simpleBarScrollElement = simpleBarRef.current.getScrollElement();
          const projectsContainerElement =
            buttonRef.current.parentNode.parentNode;
          setTimeout(
            () =>
              simpleBarScrollElement.scrollTo({
                top: projectsContainerElement.offsetTop,
                left: 0,
                behavior: "smooth",
              }),
            50
          );
        }}
      >
        <p>
          {detailsOpen ? texts.projects.less[lang] : texts.projects.more[lang]}
        </p>
        <FontAwesomeIcon icon={detailsOpen ? faMinusCircle : faPlusCircle} />
      </ButtonMoreLess>
    </Div>
  );
};

export default ProjectDetails;
