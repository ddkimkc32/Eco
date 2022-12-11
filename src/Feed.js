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
                <div className='profile_info'>
                    <div className='picture'>
                        <img className='profile_picture' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/profile-design-template-4c23db68ba79c4186fbd258aa06f48b3_screen.jpg?ts=1581063859' alt='Profile Picture'/>
                    </div>
                    <div className='user_info'>
                        <h3 className='user_name'>ECO</h3>
                        <div className="user_details">
                            <h5>Score:</h5>
                            <p  className='score'>500</p>
                            <h5>Friends:</h5>
                            <p className='friends'>10</p>
                        </div>
                        <div className='bio'>
                            <p>This is Eco</p>
                        </div>
                    </div>
                </div>
                <div>
                    {card}
                </div>
            </div>
        )
    }

}