import React, {useEffect, useState} from 'react'
import { GatewayList } from '../../Components/Gateway/GatewayComponents/GatewayList';
import { HomeContainer } from './HomeComponents/HomeContainer'
import { HomeWrapper } from './HomeComponents/HomeWrapper'
import Gateway from '../../Components/Gateway/Gateway';
import DeleteDialog from '../../Components/DeleteDialog/DeleteDialog';

function CollapseClick(sender) {
  var gateWayHeader = sender.target.closest(".collapsible-header");
  var gateWayBody = gateWayHeader.childNodes[1];
  var classList = gateWayBody.classList;
  var hasClass = false;

  if(!sender.target.classList.contains('Button')){
    classList.forEach((element) => {
      if (element === "Hidden") {
        hasClass = true;
      }
    });
    if (hasClass) {
      gateWayBody.classList.remove("Hidden");
    } else {
      gateWayBody.classList.add("Hidden");
    }
  }
}
const Home = React.forwardRef((props, ref) => {
  const [gatewayList, setgatewayList] = useState([]);
  const [editGateway, seteditGateway] = useState({});
  const [showdelDialog, setshowdelDialog] = useState(false);

  async function GetGateways(gatewayID){
    try {
      let jsonRes = await (await fetch("http://localhost:8085/gateways/getAll")).json();
      setgatewayList(jsonRes);
    } catch (error) {
      console.log(error);
    }
  };

  function ShowDeleteDialog(gateway){
    setshowdelDialog(!showdelDialog);
    seteditGateway(gateway);
  }

  function CloseDialog(resoult){
    if(resoult){
      setshowdelDialog(!showdelDialog);
      GetGateways();
    }else{
      setshowdelDialog(!showdelDialog);
    }
  }

  useEffect(() => {
    GetGateways();
  }, [gatewayList]);

  return (
    <>
      <button ref={ref} id="dummyButton" className="Hidden" onClick={GetGateways}></button>
      <HomeContainer>
        <HomeWrapper>
          <GatewayList className="collapsible" >
            {gatewayList && gatewayList.map((gateway, index) => (
              <Gateway key={index++} OnEditGatewayClick={props.OnEditGatewayClick}  Gateway={gateway} itemClick={CollapseClick} ShowDeleteDialog={ShowDeleteDialog}></Gateway>
            ))}
          </GatewayList>
        </HomeWrapper>
      </HomeContainer>
      <DeleteDialog showDeleteDialog={showdelDialog} editGatewayID={editGateway.id} CloseDialog={CloseDialog}/>
    </>
  )
})

export default Home