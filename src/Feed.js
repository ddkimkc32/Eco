import React, { Component } from 'react';
import {Card} from 'antd';
import { Input, List, Avatar } from 'antd';

export default class Feed extends Component{
    constructor(){
        super()
        this.state={
            result: []
        }
    }
    componentDidMount(){
        fetch('/post', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }).then(response => response.json())
        .then(response => {
          const results=[]
          response.forEach(element => {
              results.push(
              <Card
                title = {element.owner}
                extra ={element.timestamp}
                style={{
                  width: 300,
                }}
                >
                  <p>{element.content}</p>
              </Card>);
            });
            this.setState({
                result: results
            })
      } 
      )
    }
    render(){
        let card;
        if(this.state.result.length > 0){
            card = <Card>
            <List itemLayout="horizontal">
            {this.state.result}
            </List>
            </Card>;
        }
        else {
        card = <Card hidden={true}/>;
        }
        return(
            <div>
                {card}
            </div>
        )
    }

}