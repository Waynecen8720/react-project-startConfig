import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { Button } from 'antd';
import styles from './index.less';

const cx = classNames.bind(styles);


const App = () => {
  return (
    <Button className={cx('test')} type="primary">
      test
    </Button>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'));