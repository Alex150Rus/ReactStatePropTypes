import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/header';
import Container from 'components/Container';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    }
  }

  handleClick = (e) => {
    this.setState ((prevState) => {
      isShown: !prevState.isShown
    })
  };

  render() {
    const{isShown} = this.state;
    return (
      <div>
        <Container>
          <Header size="small" color="red"/>
          <div>Hello everybody</div>
          <Counter/>
          <button onClick={this.handleClick}>Toggle</button>
          {isShown && <div>Кукушка))</div>}
          <CommentsList/>
        </Container>
      </div>
  );
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('root')
);