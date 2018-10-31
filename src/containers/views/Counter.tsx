import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';
import { ComponentExt } from '@utils/reactExt';

interface IProps {
  globalStore?: IGlobalStore.GlobalStore;
}
@inject('globalStore')
@observer
export default class Counter extends ComponentExt<IProps> {
  increase = () => {
    this.props.globalStore.increase();
  };
  decrease = () => {
    this.props.globalStore.decrease();
  };

  render() {
    console.log(this.props);
    const { num, increase } = this.props.globalStore;
    return (
      <div>
        <div>{num}</div>
        <Button onClick={this.increase}>增加</Button>
        <Button onClick={this.decrease}>减少</Button>
      </div>
    );
  }
}