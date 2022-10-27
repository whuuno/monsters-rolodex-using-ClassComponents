import { Component } from "react";

import Card from '../card/card.component';

import './card-list.styles.css';



class CardList extends Component{
    render(){
        const {monsters} = this.props;

        return (
            <div className="card-list"> 
                {monsters.map((monster) => {
                    return (
                        <Card 
                            name={monster.name} 
                            id={monster.id} 
                            email={monster.email}
                        />
                    )})
                }
            </div>
        );
    }
}

export default CardList;