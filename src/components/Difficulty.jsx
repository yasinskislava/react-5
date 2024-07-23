import styled from "styled-components"
const Card = styled.div`
        background-color: #fff;
        border-radius: 15px;
        margin-top: 20px;
    `;
    const Title = styled.h3`
        text-align: left;
        padding: 2px 2px 2px 10px;
        margin: 0px;
    `;
    const Levels = styled.ul`
        display: flex;
        gap: 15px;
        list-style: none;
        justify-content: center;
        align-items: center;
        height: 40px;
        padding: 0;
    `;
    const Level = styled.li`
        background-color: #1b77e6;
        color: #fff;
        padding: 3px 16px;
        border-radius: 20px;
    `;
export default function Difficulty({level}) {
    
    //#1563c2
    return <Card>
        <Title>Difficulty</Title>
        <Levels>
            <Level style={level === 1 ? {backgroundColor: "#1bc215"} : {backgroundColor: "#1b77e6"}}>Easy</Level>
            <Level style={level === 2 ? {backgroundColor: "#1bc215"} : {backgroundColor: "#1b77e6"}}>Medium</Level>
            <Level style={level === 3 ? {backgroundColor: "#1bc215"} : {backgroundColor: "#1b77e6"}}>Hard</Level>
        </Levels>
    </Card>;
}


