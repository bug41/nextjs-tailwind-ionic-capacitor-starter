import React, { useState, useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
    IonModal,
  } from '@ionic/react';
  import { personOutline,notificationsOutline } from 'ionicons/icons';
import Notifications from '../pages/Notifications';
import Image from 'next/image';

const Navbar = () => {    

    const [isOpen, setIsOpen] = useState(false);    
    const [showNotifications, setShowNotifications] = useState(false);
    
    //const modal = useRef(null);
    //const location = useLocation();    

    //useEffect(() => {        
    //    console.log('URL이 변경되었습니다:', location.pathname);    
    //    console.log(showLoginForm);        
    //}, [location.pathname]);


    return ( 
        <IonHeader>
            <IonToolbar>
            <IonTitle>RepLAB</IonTitle>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonButtons slot="end">
                <IonButton id="open-modal" expand="login-block" onClick={() => setIsOpen(true)}>
                    <IonIcon icon={personOutline} />
                </IonButton>
                <IonButton onClick={() => setShowNotifications(true)}>
                <IonIcon icon={notificationsOutline} />
                </IonButton>
            </IonButtons>
            </IonToolbar>

            <IonModal
                className='ion-modal'
                //ref={modal} 
                isOpen={isOpen}
                onDidDismiss={() => setIsOpen(false)}
                //trigger="open-modal"
                initialBreakpoint={1}
                breakpoints={[0, 1]}
                >
                <div className="login-block">
                    <div className='relative'>
                        <Image 
                            src="/img/kakao_login_medium_narrow.png"
                            width={183}
                            height={45}
                            style={{
                            maxWidth: '100%',
                            height: 'auto',
                            }}
                            alt=""/>
                    </div>                    
                </div>
            </IonModal>
            <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
      </IonHeader>  
    )
};

export default Navbar;
