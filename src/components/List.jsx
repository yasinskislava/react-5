import info from "../data/list.json";
import styled from "styled-components";
import Difficulty from "./Difficulty.jsx";

const safeArr = [];
function createUniqueId() {
    const id = "id" + Math.random().toString(16).slice(2);
    if (safeArr.includes(id)) {
        createUniqueId();
    }
    // Не знаю навіщо, але можливо якимось чудом згенеруються однакові айді
    else {
        safeArr.push(id);
        return id;
    }
}
const Image = styled.img`
        width: 100%;
        height: auto;
        border-radius: 15px;
    `;
    const Information = styled.ul`
        list-style: none;
        display:flex;
        gap: 8px;
        background-color: #fff;
        padding: 3px;
        justify-content: center;
        border-radius: 10px;
    `;
    const Card = styled.li`
        padding: 20px;
        width: 300px;
        border-radius: 15px;
        background-color: #c4c1e0;
    `;
    const Products = styled.ul`
        list-style: none;
        display: flex;
        text-align: center;
        gap: 20px;
        justify-content: center;
    `;
export default function List() {
    
    const res = info.map(obj => {
        return <Card key={createUniqueId()}>
           <Image src={obj.path}></Image>
            <h3>{obj.name}</h3>
                <Information>
                    <li key={createUniqueId()}>{obj.duration} min |</li>
                    <li key={createUniqueId()}>{obj.servings} servings |</li>
                    <li key={createUniqueId()}>{obj.info} calories</li>
                </Information>
                <Difficulty level={obj.difficulty}></Difficulty>
        </Card>;
    });
    return <Products>{res}</Products>;
}