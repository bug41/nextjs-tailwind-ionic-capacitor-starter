import Script from "next/script";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Navbar from '../ui/Navbar';
import Image from "next/image";
import styles from '../../styles/maps.module.css'

import { IonPage,IonHeader,IonToolbar,IonTitle,  IonContent,  IonSearchbar,IonItem,IonList, IonLabel, IonIcon, IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import { locationOutline, callOutline, timeOutline} from 'ionicons/icons';
import { Link } from 'react-router-dom';

import { Browser } from '@capacitor/browser';

const openCapacitorSite = async (name) => {  
  await Browser.open({ url: 'https://map.naver.com/p/search/' + name });
};


const Maps = () => {
  
  const itemsPerPage                = 10;
  const [page, setPage]             = useState(1);
  const [shopList, setShopList]     = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [kakaoKey, setKakaoKey]     = useState(false);

  const kakaoInit = () => {    
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY);
    console.log(window.Kakao.isInitialized());
  }
   
  useEffect(() => {
    console.log('page : ' + page)
    generateItems(page, itemsPerPage, searchText);
  }, [page, searchTerm]);   

    
  const generateItems = async(page, itemsPerPage, searchText) => {
    console.log('generateItems 호출' + page , searchText);
    try{
        await fetch(`/api/maps/list?page=${page}&itemsPerPage=${itemsPerPage}&searchText=${searchText}`, {
            method: 'GET'          
        }).then(res => {        
          if (!res.ok) throw new Error('네트워크 연결이 불안정합니다.');
          return res.json();        
        }).then(data => {        
          //console.log(JSON.stringify(data));
          //setShopList([...shopList, ...data])
          //const newShopList = [];        
          //for (let i = 0; i < 50; i++) {
          //  newShopList.push(`Item ${1 + shopList.length + i}`);
          //}
          setShopList([...shopList, ...data]);
          console.log(data);
          if(shopList.length === 0 && data.length === 0){
            console.log("데이터가 없음")
          }
        })
        .catch(error => {        
          console.error('데이터를 불러오는데 문제가 생겼습니다. ', error);
        });      
        
    }catch(error){  
        console.error('리스트 불러오기를 실패하였습니다', error);
    }      
  };

  //검색
  const handleSearch = (e) => {            
    const value = e.target.value;    
    setSearchText(value);

    setTimeout(() => {
      if(value !== ''){
        setPage(1);
      }      
      setSearchTerm(value);      
      setShopList([]);
    }, 500);
  };

  const kakaoShare = (a,b) => {
    //const urls = 'http://localhost:3000';
    const urls = 'http://192.168.56.1:3000';    

    console.log('kakaoShare click : ' + urls)

    Kakao.Link.sendDefault({
        objectType: 'location',
        address: 'test',
        addressTitle: 'test',
        content: {
            title: a,
            description: '렙랩 에서 공유합니다 ~! ',
            imageUrl: 'img',
            link: {
                mobileWebUrl: urls,
                webUrl: urls
            }
        },
        social: {
            /*  likeCount: 286,
              commentCount: 45,
              sharedCount: 845
              */
        },
        buttons: [{
            title: '웹으로 보기',
            link: {
                mobileWebUrl: urls,
                webUrl: urls
            }
        }]
    });
  }

  // 주소 클릭시 클립보드로 복사
  const clickedCopyToClipBoard = (addr1, addr2, name) => {
    const content = addr1 + ' ' + addr2;
    if(name === ""){
      alert('주소 복사 도중 오류가 발생하였습니다.');
      return false;
    }

    if (window.isSecureContext && navigator.clipboard) {      
      navigator.clipboard.writeText(content);
    } else {      
      unsecuredCopyToClipboard(content);
    }
    alert(name +' 주소 복사 완료');    
    
  } 

  const unsecuredCopyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value=text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try{
      document.execCommand('copy')
    }catch(err){
      console.error('주소 복사하기 에러',err)
    }
    document.body.removeChild(textArea)
  };

  return (
    <IonPage>
       <Script src='https://developers.kakao.com/sdk/js/kakao.js' onLoad={kakaoInit} ></Script>
      <Navbar/>
      <IonContent className="ion-padding" fullscreen>        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">샵 목록</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSearchbar 
          placeholder="샵 검색" 
          onIonInput={handleSearch}
          onIonClear={() => setSearchText('')} // X 버튼 클릭 시 검색어 초기화
          value={searchText}
          //onIonCancel={() => setSearchText('')} // 취소 버튼 클릭 시 검색어 초기화
          //onIonBlur={() => setSearchText('')}   // 검색바에서 포커스가 벗어날 때 검색어 초기화          
          //showCancelButton="focus"
          //cancelButtonText="취소"                  
          >
        </IonSearchbar>

        <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "360px", margin:"auto"}}
            >              
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{color:"#000"}}>Hello World!</div>
            </MapMarker>
        </Map> 
        
        
        <IonList>
          {
          shopList.length > 0 ? (
          shopList.map((item, index) => (
              <IonItem key={item.idx} className={`${styles.ionMapList} ion-no-padding`}>
                <IonThumbnail 
                  className={`${styles.ionMapListImage}`}>
                  <Link to={`/tabs/maps/${item.idx}`}>
                    <Image
                      src={"https://images.pexels.com/photos/17075271/pexels-photo-17075271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                      fill
                      className="mr-2"
                      alt="" 
                    />
                  </Link>
                </IonThumbnail>
                <IonLabel className={`${styles.ionMapListText} ion-padding`}>             
                  <h2>
                    <Link to={`/tabs/maps/${item.idx}`}>
                      {item.name} {item.idx}
                    </Link>
                  </h2>
                  <p>
                      <IonIcon icon={locationOutline} />
                      <span className="pl-1" onClick={() => clickedCopyToClipBoard(`${item.address}`, `${item.detailAddress}`,`${item.name}`)}>{item.address} {item.detailAddress}</span>
                  </p>
                  <p>
                      <IonIcon icon={callOutline} />
                      <span className="pl-1"><a href={`tel:${item.shopTel}`}>{item.shopTel}</a></span>
                  </p>
                  <p>
                      <IonIcon icon={timeOutline} />
                      <span className="pl-1">{item.workingHours}</span>
                  </p>                
                  <p>                    
                      평점 ★★★★☆
                  </p>

                  <div className="flex gap-2 mt-2 justify-end">
                    <Image src="/img/kakao_logo.png"
                        //id="kakaotalk-sharing-btn"
                        alt="카카오톡 공유하기"
                        width={24}
                        height={24}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                        onClick={() => kakaoShare(`${item.idx}`, `${item.name}`)}
                    />
                    <Image src="/img/naver_map.png"
                        alt="네이버 지도 열기"
                        width={24}
                        height={24}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                        onClick={() => openCapacitorSite(`${item.name}`)}
                    />
                    {/*
                    <Image src="/img/kakao_map.png"
                        alt="카카오 지도 열기"
                        width={24}
                        height={24}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                     */}
                </div>             
                </IonLabel>                
              </IonItem>
          ))) : (
              <div className="flex items-center mx-auto justify-center py-8 text-xl text-slate-500 font-bold">
                조건에 맞는 데이터가 없습니다.
              </div>
          )}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            //generateItems();
            setPage(prev => prev + 1);
            setTimeout(() => ev.target.complete(), 500);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>

        {/* 
        {homeItems.map((i, index) => (
          <MapCard {...i} key={index} />
        ))}
         */}
      </IonContent>
    </IonPage>
  );
};

export default Maps;
