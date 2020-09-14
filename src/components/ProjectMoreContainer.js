import React, { useContext, useState, createRef } from "react";
import { LangContext } from "../containers/Lang";
import styled from "styled-components/macro";
import texts from "../content/texts.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

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

const ProjectMoreContainer = ({ children, className, scrollableNodeRef }) => {
  const [lang] = useContext(LangContext);
  const [moreOpen, setMoreOpen] = useState(false);
  const buttonRef = createRef();

  const handleMoreLessClick = () => {
    setMoreOpen(!moreOpen);
    const simpleBarScrollElement = scrollableNodeRef.current;
    const projectsContainerElement = buttonRef.current.parentNode;

    setTimeout(
      () =>
        simpleBarScrollElement.scrollTo({
          top: projectsContainerElement.offsetTop,
          left: 0,
          behavior: "smooth",
        }),
      50
    );
  };

  // console.log(scrollableNodeRef.current);

  return (
    <>
      <div className={className}>{moreOpen && children}</div>

      <ButtonMoreLess ref={buttonRef} onClick={handleMoreLessClick}>
        <p>
          {moreOpen ? texts.projects.less[lang] : texts.projects.more[lang]}
        </p>
        <FontAwesomeIcon icon={moreOpen ? faMinusCircle : faPlusCircle} />
      </ButtonMoreLess>
    </>
  );
};

export default ProjectMoreContainer;
