import React, { Component } from 'react';


class FunnelPanel extends Component {
  state = {
    itemArr: [1]
  };

  addItem = () => {
    const { itemArr } = this.state;
    itemArr.push(itemArr[itemArr.length - 1] + 1);
    this.setState({ itemArr });
  }

  render () {
    const { panelId, addPanel, deletePanel } = this.props;
    const { itemArr } = this.state;

    return (
      <div className="panel">
        <div className="panel-head">
          <span>Funnel Panel {panelId}</span>
          <span className="item-add delete" onClick={() => deletePanel(panelId)}> - </span>
          <span className="item-add" onClick={() => addPanel()}>+</span>
        </div>
        <div className="panel-body">
          <div>Panel Body  <span className="item-add" onClick={this.addItem}> +Add Panel</span></div>
          <br />
          {
              itemArr.map((item) => <div className="inner-item">Item {item}</div>)
          }
        </div>
      </div>
    );
  }
}

class FunnelPanelWrapper extends Component {
  state = {
    panelArr: [1]
  };

  addPanel = () => {
    const { panelArr } = this.state;
    panelArr.push(panelArr[panelArr.length - 1] + 1);
    this.setState({ panelArr });
  }

  deletePanel = (num) => {
    const { panelArr } = this.state;
    console.log(num);
    this.setState({
      panelArr: panelArr.filter((item) => item !== num)
    });
  }

  render() {
    const {panelArr} = this.state;
    return (
      <div>
      {
          panelArr.map(
            panel =>
              <FunnelPanel
                key={panel}
                panelId={panel}
                addPanel={this.addPanel}
                deletePanel={this.deletePanel}/>
          )
      }
      </div>
    );
  }
}

export default FunnelPanelWrapper;
