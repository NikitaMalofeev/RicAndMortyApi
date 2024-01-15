import styled from 'styled-components';

export const Header = () => {
    return (
        <Container>
            <Title>Rick and Morty API</Title>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 40px;
    background-clip: text;
    color: transparent;
    background: linear-gradient(
        45deg,
        #f17c58,
        #e94584,
        #24aadb,
        #27dbb1,
        #ffdc18,
        #ff3706
    );

    -webkit-background-clip: text; /* Для поддержки в браузерах, использующих WebKit, таких как Chrome и Safari */
`;
