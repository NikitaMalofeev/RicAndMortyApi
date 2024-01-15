import styled from 'styled-components';

interface CardProps {
    image: string;
    name: string;
    status: string;
    gender: string;
    type: string;
    onClick: () => void;
}

export const Card = ({
    image,
    name,
    status,
    gender,
    type,
    onClick,
}: CardProps) => {
    return (
        <Container onClick={onClick}>
            <Image
                src={image}
                alt={name}
            />
            <Info>
                <Name>{name}</Name>
                <Status>{status}</Status>
                <Gender>{gender}</Gender>
                {type && <Type>{type}</Type>}
            </Info>
        </Container>
    );
};

const Container = styled.div`
    cursor: pointer;
    width: 200px;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    background-color: #d9cafc;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const Info = styled.div`
    padding: 10px;
`;

const Name = styled.h3`
    margin: 0 0 5px;
`;

const Status = styled.p`
    margin: 0 0 5px;
`;

const Gender = styled.p`
    margin: 0 0 5px;
`;

const Type = styled.p`
    margin: 0;
`;
