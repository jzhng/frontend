import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';

import { Tabs, Carousel } from 'antd';

const TabPane = Tabs.TabPane;

export default class MobielIndex extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };

    return (
      <div>
        <MobileHeader />
        <Tabs>
          <TabPane tab="头条" key="1">
            <div className="carousel">
              <Carousel {...settings}>
                <div><img src="./src/images/carousel_1.jpg" /></div>
                <div><img src="./src/images/carousel_2.jpg" /></div>
                <div><img src="./src/images/carousel_3.jpg" /></div>
                <div><img src="./src/images/carousel_4.jpg" /></div>
              </Carousel>
            </div>
            <MobileList count={5} type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={5} type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count={5} type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={5} type="guoji" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={5} type="yule" />
          </TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    );
  }
}