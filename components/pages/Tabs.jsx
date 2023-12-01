import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flashOutline, list, mapOutline, homeOutline, searchOutline } from 'ionicons/icons';

import Home from './Home';
import Feed from './Feed';
import Maps from './Maps';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';
import Search from './Search';
import MapsDetail from './MapsDetail';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" render={() => <Home />} exact={true} />
        <Route path="/tabs/feed" render={() => <Feed />} exact={true} />
        <Route path="/tabs/maps" render={() => <Maps />} exact={true} />
        <Route path="/tabs/maps/:listId" render={() => <MapsDetail />} exact={true} />
        <Route path="/tabs/search" render={() => <Search />} exact={true} />
        <Route path="/tabs/lists" render={() => <Lists />} exact={true} />
        <Route path="/tabs/lists/:listId" render={() => <ListDetail />} exact={true} />
        <Route path="/tabs/settings" render={() => <Settings />} exact={true} />
        
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact={true} />
        
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>메인</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/feed">
          <IonIcon icon={flashOutline} />
          <IonLabel>피드</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tabs/search">
          <IonIcon icon={searchOutline} />
          <IonLabel>검색</IonLabel>
        </IonTabButton>
        

        <IonTabButton tab="tab4" href="/tabs/maps">
          <IonIcon icon={mapOutline} />
          <IonLabel>샵목록</IonLabel>
        </IonTabButton>
        {/* <IonTabButton tab="tab4" href="/tabs/lists">
          <IonIcon icon={list} />
          <IonLabel>글목록</IonLabel>
        </IonTabButton> */}
        <IonTabButton tab="tab5" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>설정</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
