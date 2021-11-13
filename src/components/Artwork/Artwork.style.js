import styled from "styled-components";
import artwork from "../../misc/artwork/artwork.jpg";

export const Content = styled.div`
    flex: 0.8;
    background: url(${artwork});
    margin-right: 8rem;
    background-position: right top;
    background-size: cover;
    background-repeat: no-repeat;
    border: solid 3px var(--darkGray);
    border-radius: 2px;
`;
