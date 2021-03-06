import * as React from 'react';
import { Button } from 'antd';
import { ComponentExt } from '@utils/reactExt';
@log
class Test extends ComponentExt {
  showMsg = () => {
    this.$message.success('成功的通知')
  }
  render() {
    return (
      <div>
        <Button onClick={this.showMsg} type="primary">通知</Button>
      </div>
    );
  }
}

function log(target: any) {
  console.log(target);
}
export default Test;
