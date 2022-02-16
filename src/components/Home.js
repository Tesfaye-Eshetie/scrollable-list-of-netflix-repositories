import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './styles/Button.styled';
import { Card } from './styles/Card.styled';
import { StyledItem } from './styles/Item.styled';

export default function Home({name}) {
  return (
    <Card>
        <StyledItem >
            <h4>Frontend - Software Engineer</h4>
            <p><span>Task:</span>  Create a user interface to navigate the repositories and commits in Netflix’s Github. As a User, I would like to be able to see a list of Netflix’s repositories, and when I click on a repository, I want to be able to see the list of commits. 
            </p>
            <h4>My name is: Tesfaye Eshetie</h4>
            <NavLink to={`/items`}>
                <Button bg='#ff0099' color='#fff'>Go to List</Button>
            </NavLink>
        </StyledItem>
    </Card>
  )
}
