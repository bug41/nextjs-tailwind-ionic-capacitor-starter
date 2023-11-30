import { Map, MapMarker } from "react-kakao-maps-sdk";
import Card from '../ui/Card';
import { IonPage,IonHeader,IonToolbar,IonTitle,  IonContent,  IonSearchbar,IonItem,IonInput, IonList, IonLabel, IonIcon, IonButton, IonImg, IonThumbnail, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import Navbar from '../ui/Navbar';
import { useEffect, useState } from "react";
import Image from "next/image";

import { locationOutline, callOutline, timeOutline, informationCircleOutline} from 'ionicons/icons';
import Link from "next/link";

const MapCard = ({ title, type, text, author, authorAvatar, image }) => (
  <Card className="my-4 mx-auto">
    <div className="h-32 w-full relative">
      <img className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full" src={image} alt="" />
    </div>
    <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
      <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="sm:text-sm text-s text-gray-500 mr-1 my-3 dark:text-gray-400">{text}</p>
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div>
    </div>
  </Card>
);

const Maps = () => {

  const homeItems = Store.useState(getHomeItems);    
  
  const [shopList, setShopList] = useState([]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  /*
  const generateItems = () => {
    const newShopList = [];
    for (let i = 0; i < 50; i++) {
      newShopList.push(`Item ${1 + shopList.length + i}`);
    }
    setShopList([...shopList, ...newShopList]);
  };
  */        
  const generateItems = async(page, itemsPerPage) => {    

    try{
      await fetch(`/api/maps/list?page=${page}&itemsPerPage=${itemsPerPage}`, {
          method: 'GET'          
      }).then(res => {        
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();        
      }).then(data => {        
        //console.log(JSON.stringify(data));
        //setShopList([...shopList, ...data])
        //const newShopList = [];        
        //for (let i = 0; i < 50; i++) {
        //  newShopList.push(`Item ${1 + shopList.length + i}`);
        //}
        //setShopList([...shopList, ...newShopList]);
        console.log(data);        
        setShopList([...shopList, ...data]);
      })
      .catch(error => {        
        console.error('There was a problem with the fetch operation:', error);
      });      
      
  }catch(error){  
      console.error('리스트 불러오기 실패하였습니다', error);
  }      
  };
   
  useEffect(() => {
    //console.log('page : ' + page)    
    generateItems(page, itemsPerPage);    
  }, [page]);


  const [searchText, setSearchText] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleCommentSubmit = async () => {
        
    console.log('Submit : ' + name, content);
    
    try{       
        const result = await fetch('/api/test/createTest', {
            method: 'POST',
            body: JSON.stringify({
                "name" : name,
                "content" : content,                
            })
        });

        if(result.status === 200){          
          console.log('등록성공');          
        }else{
          console.log('실패');
        }
        
    }catch(error){  
        console.error('등록에 실패하였습니다', error);
    }       
};

  return (
    <IonPage>
      <Navbar/>
      <IonContent className="ion-padding" fullscreen>        
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">샵 목록</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSearchbar 
          placeholder="Custom Placeholder" 
          onIonInput={(e) => {
            setSearchText(e.detail.value || '');
            console.log('검색어 입력 : ' + e.detail.value)            
          }}
          onIonClear={() => setSearchText('')} // X 버튼 클릭 시 검색어 초기화
          //onIonCancel={() => setSearchText('')} // 취소 버튼 클릭 시 검색어 초기화
          //onIonBlur={() => setSearchText('')}   // 검색바에서 포커스가 벗어날 때 검색어 초기화          
          //showCancelButton="focus"
          //cancelButtonText="취소"                  
          >
        </IonSearchbar>        

        <form>
          <IonItem>
            <ion-label label="name">Name</ion-label>
            <IonInput type="text" name="name"  
              value={name}          
              onIonInput={(e) => setName(e.detail.value || '')}                                  
              //onIonChange={(e) => setName(e.target.value)}
            >
            </IonInput>            
          </IonItem>          
          <IonItem>
            <ion-label label="content">Content</ion-label>
            <IonInput type="text" name="content" 
              value={content}
              onIonInput={(e) => setContent(e.detail.value || '')}
              //onIonChange={(e) => setContent(e.target.value)}
              >              
            </IonInput>
          </IonItem>          
          <div className="button-inline">
            <button type="button" onClick={handleCommentSubmit}>Submit</button>
          </div>
        </form>        

        <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: "100%", height: "360px", margin:"auto"}}
            >              
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{color:"#000"}}>Hello World!</div>
            </MapMarker>
        </Map> 
        
        
        <IonList>
          {shopList.map((item, index) => (
            <div className="max-w-3xl pt-10 mx-auto" key={item.idx}>
            <div className="p-5 flex flex-wrap items-center">
                <div className="md:w-1/3 flex justify-center">
                    <Link href="/map/1">
                        <Image src="https://images.pexels.com/photos/17075271/pexels-photo-17075271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="logo"
                            width={120}
                            height={120}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            />
                    </Link>
                </div>
                <div className="md:w-2/3 pt-5 md:pt-0">
                    <div className="text-2xl font-bold">
                        <Link href={`/tabs/maps/${item.idx}`} className="">{item.name}</Link>
                    </div>
                    <div className="mt-5">
                        <div className="flex mb-1 items-center">
                            <IonIcon icon={locationOutline} />
                            <p className="pl-2">서울 강서구 마곡동 757</p>
                            
                        </div>
                        <div className="flex mb-1 items-center">
                            <IonIcon icon={locationOutline} />
                            <p className="pl-2">010-8814-5981</p>
                        </div>
                        <div className="flex mb-1 items-center">
                            <IonIcon icon={locationOutline} />
                            <p className="pl-2">예약방문</p>
                        </div>
                        <div className="flex mb-1 items-center">
                            <IonIcon icon={locationOutline} />
                            <p className="pl-2">평점 ★★★★☆</p>
                            <p className="pl-2">리뷰 31</p>
                        </div>                            
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/img/kakao_logo.png"
                            alt="카카오톡 공유하기"
                            width={32}
                            height={32}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <Image src="/img/naver_map.png"
                            alt="네이버 지도 열기"
                            width={32}
                            height={32}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                        <Image src="/img/kakao_map.png"
                            alt="카카오 지도 열기"
                            width={32}
                            height={32}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>			
          ))}
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
