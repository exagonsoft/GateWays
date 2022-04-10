import React, {useEffect, useState} from 'react'
import { GatewayItemDelButton } from '../../Components/Gateway/GatewayComponents/GatewayItemDelButoon';
import { GatewayItemEditButton } from '../../Components/Gateway/GatewayComponents/GatewayItemEditButton';
import { GatewayHeadButtonsWrapper } from '../../Components/Gateway/GatewayComponents/GatewayItemHeadButtonsWrapper';
import { GatewayItemHeadIcon } from '../../Components/Gateway/GatewayComponents/GatewayItemHeadIcon';
import { GatewayItemHeadText } from '../../Components/Gateway/GatewayComponents/GatewayItemHeadText';
import { GatewayList } from '../../Components/Gateway/GatewayComponents/GatewayList';
import { GatewayItem } from '../../Components/Gateway/GatewayComponents/GtewayItem';
import { GatewayItemHead } from '../../Components/Gateway/GatewayComponents/GtewayItemHead';
import { GatewayItemHeadWrapper } from '../../Components/Gateway/GatewayComponents/GtewayItemHeadWrapper';
import { HomeContainer } from './HomeComponents/HomeContainer'
import { HomeWrapper } from './HomeComponents/HomeWrapper'
import gatewayIcon from '../../Pictures/GateWay.svg'

const Home = () => {
  const [gatewayList, setgatewayList] = useState([]);

  async function GetGateways(){
     
  };

  useEffect(() => {
    GetGateways();
  }, gatewayList);

  return (
    <>
      <HomeContainer>
        <HomeWrapper>
          <GatewayList>
            {gatewayList && gatewayList.map((gateway, index) => (
              <GatewayItem>
                <GatewayItemHead>
                  <GatewayItemHeadWrapper>
                    <GatewayItemHeadIcon src={gatewayIcon}/>
                    <GatewayItemHeadText></GatewayItemHeadText>
                  </GatewayItemHeadWrapper>
                  <GatewayHeadButtonsWrapper>
                    <GatewayItemEditButton>Edit</GatewayItemEditButton>
                    <GatewayItemDelButton>Delete</GatewayItemDelButton>
                  </GatewayHeadButtonsWrapper>
                </GatewayItemHead>
              </GatewayItem>
            ))}
          </GatewayList>
        </HomeWrapper>
      </HomeContainer>
    </>
  )
}

export default Home