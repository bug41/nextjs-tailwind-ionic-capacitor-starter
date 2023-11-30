import { NextResponse } from "next/server";
import { db } from "/lib/db";

export default async function handler(req, res) {

    if (req.method === 'POST') {

      req.body = JSON.parse(req.body);

      //console.log(req.body);

      let name = req.body.name;
      let content = req.body.content;
      
      //if(!name || !content){
      //    return new NextResponse('데이터 없음', {status : 400});
      //}

      try {
          
          console.log('오는지 안오는지')
          const result = await db.test.create({
              data: {
                  name,
                  content
              }
          });

          console.log(result)

          res.status(200).json({ message: 'OKK' })
          //res.redirect(302, '/tabs/home')          
          //return NextResponse.redirect(new URL('/new', request.url));
          //return NextResponse.json(result);
          //return new NextResponse('SUCCESS', {status:200});
        
      } catch (error) {
          //console.log(error, 'REGISTRATION_ERROR');
          return new NextResponse('Internal Error', {status:500});          
      }
      
      
    } else {
      //res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    //return NextResponse.redirect('/tabs/maps');          

}