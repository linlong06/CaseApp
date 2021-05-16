import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const HomeDiv = styled.div``;
function Home() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('/data')
            .then((res) => res.json())
            .then((users) => {
                setUser(users);
            });
    }, []);
    return (
        <HomeDiv>
            <p>this is home</p>
            <ul>
                {user.map((item) => {
                    return <li key={item}>{item.username}</li>;
                })}
            </ul>
        </HomeDiv>
    );
}

export default Home;
